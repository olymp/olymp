import React, { Component } from 'react';
import { createComponent } from 'react-fela';
import { Link } from 'olymp-router';
import ReactDOM from 'react-dom';
import { compose, withPropsOnChange, withState } from 'recompose';
import { withAmp } from 'olymp-utils';
import Grid from './grid';
import Container from './container';

export const cloudinaryUrl = (value, options, responsiveSize) => {
  const newOptions = {
    c: 'fill',
    f: 'auto',
    q: 'auto:eco',
    fl: 'lossy',
    dpr: 2,
    ...options,
  };

  if (!value || !value.url) {
    return '';
  }

  const newUrl =
    value.url.indexOf('http://res.cloudinary.com/') === 0
      ? `https${value.url.substr(4)}`
      : value.url;

  const crop =
    value.crop && value.crop.length
      ? `w_${value.crop[0]},h_${value.crop[1]},x_${value.crop[2]},y_${value
          .crop[3]},c_crop/`
      : '';

  if (responsiveSize) {
    newOptions.w = responsiveSize.width;
    newOptions.h = responsiveSize.height;
  }

  const query = Object.keys(newOptions)
    .map(key => `${key}_${newOptions[key]}`)
    .join(',');

  if (newUrl.indexOf('/upload/') !== -1) {
    return newUrl.replace('/upload/', `/upload/${crop}${query}/`);
  } else if (newUrl.indexOf('/fetch/') !== -1) {
    return newUrl.replace('/fetch/', `/fetch/${crop}${query}/`);
  }
};


const enhance = compose(
  withAmp,
  withState('cWidth', 'setCWidth', undefined),
  withState('isLoaded', 'setIsLoaded', false),
  withState('responsiveSize', 'setResponsiveSize', {}),
  withPropsOnChange(['value', 'options', 'responsiveSize'], ({ value, options, responsiveSize }) => ({
    url: cloudinaryUrl(value, options, responsiveSize),
  })),
);

@enhance
class Image extends Component {
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    if (this.node) {
      this.onResize(this.node.getBoundingClientRect());
    }
  }

  onResize = ({ width, height }) => {
    const { setResponsiveSize } = this.props;
    setResponsiveSize({ width: Math.floor(width), height: Math.floor(height) });
  };

  render() {
    const {
      url,
      width,
      height,
      className,
    } = this.props;

    return (
      <div className={className} style={{ width, height }}>
        <img src={url} width="100%" height="auto" />
      </div>
    );
  }
}

const Item = createComponent(({ image, theme, index, deg }) => ({
  animationName: {
    from: {
      opacity: 0,
      transform: 'translateX(-60px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0px)',
    },
  },
  animationDelay: `${index * 50 * 2}ms`,
  animationIterationCount: 1,
  animationDuration: '1.5s',
  animationTimingFunction: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
  animationFillMode: 'both',
  position: 'relative',
  // overflow: 'hidden',
  height: 260,
  '> a': {
    onHover: {
      transform: 'scale(1.03, 1.03)',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
    },
    transition: 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)',
    color: theme.dark1,
    height: '100%',
    width: '100%',
    boxShadow: 'rgba(0, 0, 0, 0.005) 1px 1px 4px, rgba(0, 0, 0, 0.05) 0px 1px 3px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 5,
    borderBottomRightRadius: 30,
    position: 'relative',
    // backgroundColor: '#8080800f',
    '> .image': {
      '> img': {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
      },
      flex: 1,
      width: '100%',
    },
    '> .inner': {
      '> .tags': {
        position: 'absolute',
        top: -12,
        '> span': {
          padding: 3,
          paddingLeft: 7,
          paddingRight: 7,
          color: theme.color,
          fontSize: 10,
          borderRadius: 2,
          backgroundColor: 'white',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          boxShadow: 'rgba(0, 0, 0, 0.03) 1px 1px 4px, rgba(0, 0, 0, 0.03) 0px 1px 1px',
          display: 'inline-block',
          marginRight: 4,
        }
      },
      '> h3': {
        color: theme.colorSecondary,
        marginTop: '0.3em',
        marginBottom: '0em',
      },
      position: 'relative',
      // backgroundColor: theme.color,
      padding: 10,
      // borderBottom: '2px solid #706269',
      width: '100%',
    },
  },
  extends: image.height > image.width ? {
    display: 'flex',
    flexDirection: 'row',
    '> .image': {
      height: '100%',
      width: 220,
    },
    '> .inner': {
      width: '100%',
      flex: 1,
    }
  } : {
    display: 'flex',
    flexDirection: 'column',
    '> .image': {
      height: 200,
      width: '100%',
    },
    '> .inner': {
      flex: 1,
      width: '100%',
    }
  },
}), ({ image, name, className, id, size }) => (
  <Grid.Item className={className} medium={size} padding={10}>
    <Link to={`/${id}`}>
      <Image className="image" value={image} />
      <div className="inner">
        <div className="tags">
          <span>
            {/*<Logo icon={10} />&nbsp; Ortho */}
          </span>
          <span>Team2</span>
        </div>
        <h3>{name}</h3>
      </div>
    </Link>
  </Grid.Item>
), p => Object.keys(p))

export default ({ items, attributes = {}, className, children }) => {
  const childs = [];
  items.filter(x => x.image).reduce((count, item, index) => {
    if (count >= 24) {
      return count;
    }
    const size = item.image.height > item.image.width ? 2 : 4;
    childs.push(<Item {...item} index={index} image={item.image} key={item.id} size={size} />);
    return count + size;
  }, 0);
  return (
    <Container>
      <Grid {...attributes} className={className} size={12}>
        {children}
        {childs}
      </Grid>
    </Container>
  )
};
