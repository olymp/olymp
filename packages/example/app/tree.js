import React, { Component } from 'react';
import { cn, graphql, gql, withApollo } from 'olymp-utils';
import { Link } from 'olymp-router';
import { createComponent } from 'olymp-fela';

const query = gql`
  query code($id: String) {
    item: code(id: $id) {
      id
      children {
        id
        name
        longName
        terminal
        path
        code
        isCurrent
        isNew
      }
    }
  }
`;

const StyledCode = createComponent(
  ({ code }) => (code
    ? {
      minWidth: '40px',
      paddingRight: '5px',
    }
    : {}),
  'span',
  []
);
const StyledTree = createComponent(
  ({ isDeep, theme }) => ({
    paddingLeft: '10px',
    listStyle: 'none',
    position: 'relative',
    ...(isDeep
      ? {
        padding: 0,
        marginLeft: 0,
        '> li:before': {
          content: '""',
          display: 'block',
          width: '10px' /* same with indentation */,
          height: 0,
          borderTop: '1px solid #dfdfdf',
          marginTop: '-1px' /* border top width */,
          position: 'absolute',
          top: '1em' /* (line-height/2) */,
          left: 0,
        },
        ':before': {
          content: '""',
          display: 'block',
          width: 0,
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          borderLeft: '1px solid #dfdfdf',
        },
      }
      : {}),
    /* '> .di-tree-active > a': {
    display: 'block',
    background: theme.color,
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,.2)',
    textShadow: '0 -1px 0 rgba(0,0,0,.2)',
    color: '#fff',
  },*/
    '> .di-tree-active': {
      // fontWeight: 'bold',
      backgroundColor: 'rgba(156, 39, 176, 0.1)',
      ' > a': {
        color: theme.color,
      },
    },
    '> li': {
      margin: 0,
      padding: '3px 0 0 12px' /* indentation + .5em */,
      position: 'relative',
      ':last-child:before': {
        height: 'auto',
        top: '1em' /* (line-height/2) */,
        bottom: 0,
      },
    },
    '> li > a': {
      color: '#444',
      '&:hover': {
        textDecoration: 'none',
      },
      '> *': {
        display: 'table-cell',
        '&:first-child': {
          whiteSpace: 'nowrap',
        },
        '&:last-child': {
          width: '100%',
        },
      },
      '> div > .di-tree-toggle': {
        display: 'inline-block',
        background: theme.color,
        fontSize: '10px',
        fontWeight: 700,
        color: '#fff',
        verticalAlign: 'middle',
        textTransform: 'none',
        padding: 0,
        position: 'absolute',
        left: '-8px',
        width: '14px',
        height: '14px',
        top: '7px',
        lineHeight: '13px',
        textAlign: 'center',
      },
    },
  }),
  props => <ul {...props} />,
  ['children']
);

@withApollo
export class TreeCore extends Component {
  static defaultProps = {
    data: null,
    toggled: {},
    level: 0,
  };
  state = { toggled: {}, loaded: {} };
  componentDidMount() {
    if (this.props.data.item && this.props.hasLoaded) { this.props.hasLoaded(); }
    if (!this.activeRef) { return; }
    this.activeRef.scrollIntoView();
    const scrollElmVert = (el, num) => {
      // to scroll up use a negative number
      const re = /html$/i;
      while (!re.test(el.tagName) && el.scrollTop < 1) { el = el.parentNode; }
      if (el.scrollTop > 0) { el.scrollTop += num; }
    };
    scrollElmVert(this.activeRef, -200);
    this.activeRef = null;
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.data.item && this.props.data.item) { this.componentDidMount(); }
  }

  renderNode = (node, i) => {
    const {
      type,
      data,
      activePath,
      activeId,
      location,
      level,
      client,
    } = this.props;
    const { code, terminal, name, longName, id, path, isNew, isCurrent } = node;

    const toggled =
      this.state.toggled[id] ||
      (this.state.toggled[id] !== false && this.props.toggled[id]);
    const loading = false; // toggled && toggled === 'loading';
    const active = activeId === id;

    const click = (e) => {
      if (terminal) { return; }
      // onToggle(node, !toggled);
      if (!toggled) {
        this.setState({
          toggled: { ...this.state.toggled, [node.id]: 'loading' },
        });
      } else { this.setState({ toggled: { ...this.state.toggled, [node.id]: false } }); }
      e.preventDefault();
      e.stopPropagation();
    };

    const dragStart = (e) => {
      const div =
        document.getElementById('treeDragPlaceholder') ||
        document.createElement('h1');
      div.id = 'treeDragPlaceholder';
      div.textContent = name || id;
      div.style.position = 'absolute';
      div.style.top = '-100px';
      div.style.right = '-100px';
      document.body.appendChild(div);
      e.dataTransfer.setDragImage(
        div,
        div.getBoundingClientRect().width / 2,
        div.getBoundingClientRect().height
      );
      e.dataTransfer.setData('text', `code:${id}`);
    };

    let isIn = false;
    const preLoad = () => {
      if (terminal || toggled) { return; }
      isIn = true;
      setTimeout(() => isIn && client.query({ query, variables: { id } }), 150);
    };

    const dragEnd = () => {
      const item = document.getElementById('treeDragPlaceholder');
      document.body.removeChild(item);
    };

    const hasLoaded = () =>
      setTimeout(() => {
        // this.setState({ toggled: { ...this.state.toggled, [node.id]: true } });
      }, 1);

    const toggle = !terminal
      ? (<span className="di-tree-toggle" onClick={click}>
        {loading ? <Spin /> : toggled ? '-' : '+'}
      </span>)
      : null;

    const search = location && location.query && location.query.term;
    return (
      <li
        className={cn({ 'di-tree-active': active })}
        key={id}
        onMouseEnter={preLoad}
        onMouseLeave={() => (isIn = false)}
        ref={active ? ref => (this.activeRef = ref) : null}
      >
        <Link
          to={{ pathname: `/${id}`, search: location.search }}
          onDoubleClick={click}
          draggable
          onDragStart={dragStart}
          onDragEnd={dragEnd}
        >
          <StyledCode code={code}>
            {toggle}
            <strong>
              {code}
            </strong>
          </StyledCode>
          {search &&
            <Highlighter
              highlightClassName="Highlight"
              searchWords={search.split(' ')}
              textToHighlight={level ? name : longName || name}
            />}
          {!search &&
            <div>
              {level ? name : longName || name}
            </div>}
        </Link>
        {!terminal && toggled
          ? <TreeItem
            toggled={this.props.toggled}
            hasLoaded={hasLoaded}
            location={location}
            activePath={activePath}
            activeId={activeId}
            id={node.id}
            level={level + 1}
          />
          : null}
      </li>
    );
  };

  render() {
    const { data, items, level, visible, activePath, parentId } = this.props;
    if (visible === false) { return null; }
    if (data && data.item) {
      return (
        <StyledTree isDeep={!!level}>
          {data &&
            data.item &&
            data.item.children &&
            data.item.children.map(this.renderNode)}
        </StyledTree>
      );
    }
    return null;
  }
}

export const TreeItem = graphql(query, {
  options: ({ id }) => ({
    variables: { id },
  }),
})(TreeCore);

const Tree = graphql(query, {
  options: ({ type }) => ({
    variables: {
      id: type,
    },
  }),
})(TreeCore);

export default Tree;
