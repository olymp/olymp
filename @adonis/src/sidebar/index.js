import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './sidebar.less';

export const SidebarItem = ({ icon, href, children, text, link, active, onClick }) => {
  if (onClick || href) {
    return (
      <li className={active ? 'active' : ''}>
        <a href={href || 'javascript:'} onClick={onClick} rel="noopener noreferrer" target="_blank">
          <i className={`fa fa-${icon} nav-icon nav-icon-2x`} />
          <span className="nav-text">
            {text}
            {children}
          </span>
        </a>
      </li>
    );
  }
  return (
    <li className={active ? 'active' : ''}>
      <Link to={link}>
        <i className={`fa fa-${icon} nav-icon nav-icon-2x`} />
        <span className="nav-text">
          {text}
          {children}
        </span>
      </Link>
    </li>
  );
};
SidebarItem.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
  isBottom: PropTypes.bool,
  text: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
export const SidebarAvatar = ({ image, name, active }) => {
  const defaultImage = 'https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg';
  return (
    <li className={active ? 'active' : ''}>
      <div className="nav-avatar">
        <Link to="/c/user">
          <img src={image || defaultImage} className="nav-img" alt={name} />
        </Link>
        <span className="nav-text">
          {name}
          <br />
          <Link to="/c/user">
            <small>Profil bearbeiten</small>
          </Link>
        </span>
      </div>
    </li>
  );
};
SidebarAvatar.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  active: PropTypes.bool,
};
export class Sidebar extends Component {
  static propTypes = {
    children: PropTypes.node,
  }
  state = {
    expanded: typeof localStorage !== 'undefined' && !!localStorage.getItem('sidebar_expanded'), // eslint-disable-line no-undef
  }
  componentDidMount() {
    const { expanded } = this.state;
    document.body.classList.toggle('with-nav-l', true); // eslint-disable-line no-undef
    document.body.classList.toggle('expanded', expanded); // eslint-disable-line no-undef
  }
  componentWillUnmount() {
    document.body.classList.toggle('with-nav-l', false); // eslint-disable-line no-undef
    document.body.classList.toggle('expanded', false); // eslint-disable-line no-undef
  }
  click = () => {
    const expanded = !this.state.expanded;
    document.body.classList.toggle('expanded', expanded); // eslint-disable-line no-undef
    localStorage.setItem('sidebar_expanded', expanded); // eslint-disable-line no-undef
    this.setState({ expanded });
  }
  render() {
    const { expanded } = this.state;
    const { children } = this.props;
    const topChildren = children.filter(x => !x.props || !x.props.isBottom);
    const bottomChildren = children.filter(x => x.props && x.props.isBottom);
    return (
      <nav className={`main-menu ${expanded ? 'expanded' : ''}`}>
        <a className="expander" onClick={this.click} href="javascript:;">
          <i className={`fa fa-${expanded ? 'unlock' : 'lock'}`} />
        </a>
        <ul>
          {topChildren}
        </ul>
        <ul className="logout">
          {bottomChildren}
        </ul>
      </nav>
    );
  }
}

Sidebar.SidebarItem = SidebarItem;
Sidebar.SidebarAvatar = SidebarAvatar;
export default Sidebar;
