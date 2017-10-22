import React, { Component } from 'react';
import { withLang } from 'olymp-utils';
import { Link, createReplaceQuery } from 'olymp-router';
import { createLogout } from 'olymp-auth';
import { Menu, Icon } from 'antd';
import { createComponent, border, Avatar } from 'olymp-fela';
import { compose, withState, withHandlers } from 'recompose';
import { get } from 'lodash';
import { connect } from 'react-redux';
import Logo from './logo';

export const UserPic = createComponent(
  ({ theme }) => ({
    position: 'absolute',
    centerY: true,
    left: 0,
    marginX: theme.space3,
  }),
  p => <Avatar {...p} />,
  p => Object.keys(p),
);

const VerticalMenu = createComponent(
  ({ theme }) => ({
    zIndex: 11,
    width: 64,
    // boxShadow: 'inset -6px 0 5px -5px rgb(0, 0, 0)',
    hasFlex: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    '> ul.ant-menu-inline-collapsed > li.ant-menu-item.logo': {
      padding: '0 10px',
      marginX: -15,
      '> a': {
        '> svg': {
          width: 45,
        },
      },
    },
    '> ul': {
      backgroundColor: '#404040',
      position: 'fixed',
      top: 0,
      bottom: 0,
      maxWidth: 200,
      zIndex: 11,
      overflow: 'hidden',
      '> .ant-menu-item': {
        textAlign: 'left !important',
        '&.logo': {
          height: 102,
          backgroundColor: theme.dark4,
          borderBottom: border(theme, theme.dark4),
          '> a': {
            display: 'flex',
            height: '100%',
            '> svg': {
              width: 75,
              margin: 'auto',
            },
          },
        },
        '& .anticon': {
          fontSize: 16,
          marginRight: 8,
          '& + span': {
            paddingLeft: theme.space2,
            paddingRight: theme.space3,
          },
        },
      },
      '> .ant-menu-submenu': {
        '> .ant-menu-submenu-title': {
          paddingRight: theme.space4,
          textAlign: 'left !important',
          '& .anticon': {
            fontSize: 16,
            marginRight: 8,
            '& + span': {
              paddingLeft: theme.space2,
              paddingRight: theme.space3,
            },
          },
        },
      },
      '> .slim': {
        height: 38,
        '> img': {
          display: 24,
          height: 24,
        },
      },
    },
    ifSmallDown: {
      display: 'none',
    },
  }),
  ({ children, className, ...rest }) => (
    <div className={className} {...rest}>
      {children}
    </div>
  ),
  p => Object.keys(p),
);

@withLang
@connect(
  ({ location, auth }) => ({
    pathname: location.pathname,
    query: location.query,
    user: auth.user,
    isAdmin: auth.user && auth.user.isAdmin,
  }),
  dispatch => ({
    setQuery: createReplaceQuery(dispatch),
    logout: createLogout(dispatch),
  }),
)
@compose(
  withState('collapsed', 'setCollapsed', true),
  withHandlers({
    expand: ({ setCollapsed }) => () => setCollapsed(false),
    collapse: ({ setCollapsed }) => () => setCollapsed(true),
  }),
)
class Navigation extends Component {
  handleClick = e => {
    const { setQuery, logout } = this.props;
    if (e.key === 'logout') {
      logout();
    }

    if (e.key && e.key[0] === '@') {
      const v = e.key.split(',').reduce((state, next) => {
        const key = next.indexOf('=') !== -1 ? next.split('=')[0] : next;
        const value = next.indexOf('=') !== -1 ? next.split('=')[1] : null;
        return {
          ...state,
          [key]: value,
        };
      }, {});
      this.leave(); // close Menu

      setQuery(v);
    }
  };

  enter = () => {
    const { setCollapsed } = this.props;
    setCollapsed(false);
  };

  leave = () => {
    const { setCollapsed } = this.props;
    setCollapsed(true);
  };

  render() {
    const {
      logout,
      setDeviceWidth,
      query,
      collectionList,
      isAdmin,
      user = {},
      collapsed,
    } = this.props;
    const keys = Object.keys(query);

    if (!keys.filter(x => x[0] === '@').length) {
      keys.push('@home');
    }

    return (
      <div onMouseEnter={this.enter} onMouseLeave={this.leave}>
        {children}
      </div>
    );
  }
}
export default Navigation;
