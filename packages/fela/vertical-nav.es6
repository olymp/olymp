import React, { Component, Children, cloneElement } from 'react';
import { createComponent } from 'olymp-fela';
import { compose, withState } from 'recompose';
import { FaEnvelope, FaFilm, FaMagic, FaPlus } from 'olymp-icons';
import List from './list';

const VerticalNav = createComponent(
  ({ right = true }) => ({
    position: 'fixed',
    top: 0,
    left: !right && 0,
    right: right && 0,
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 64,
    height: '100%',
    zIndex: 300,
  }),
  'div',
);

const Nav = createComponent(
  ({ theme, collapsed, secondary }) => ({
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: 'column',
    width: collapsed ? 64 : 240,
    backgroundColor: secondary ? theme.colorSecondary : theme.color,
    color: theme.light,
    paddingY: theme.space3,
    paddingX: collapsed ? 5 : theme.space3,
    overflowY: 'auto',
    transition: 'all 200ms ease-out',
    justifyContent: 'space-between',
  }),
  ({ className, children, collapsed, ...p }) => (
    <div className={className} {...p}>
      {Children.map(
        children,
        child => (child ? cloneElement(child, { collapsed }) : child),
      )}
    </div>
  ),
  ({ secondary, ...p }) => Object.keys(p),
);
VerticalNav.Nav = Nav;

export default VerticalNav;

const enhance = compose(withState('collapsed', 'setCollapsed', true));

@enhance
export class VerticalNavDemo extends Component {
  render() {
    const { collapsed, setCollapsed } = this.props;

    return (
      <VerticalNav>
        <VerticalNav.Nav
          secondary
          collapsed={collapsed}
          onClick={() => setCollapsed(false)}
          onMouseLeave={() => setCollapsed(true)}
        >
          <List>
            <List.Item
              large
              logo={
                <img
                  alt="nucleus"
                  src="https://s.gravatar.com/avatar/a33459a3f1db9b21a3dabebacdaa93b1"
                />
              }
              subtitle="test"
            >
              Dashboard
            </List.Item>
            <List.Item logo={<FaEnvelope />} extra={<FaPlus />} subtitle="test">
              Mail
            </List.Item>
            <List.Title>test</List.Title>
            <List.Item logo={<FaFilm />}>Film</List.Item>
            <List.Divider />
            <List.Item logo={<FaMagic />} extra={<FaPlus />}>
              Mail
            </List.Item>
          </List>
          <List>
            <List.Item logo={<FaEnvelope />}>Mail</List.Item>
          </List>
        </VerticalNav.Nav>

        <VerticalNav.Nav collapsed>
          <List>
            <List.Item logo={<FaEnvelope />} />
          </List>
          <List>
            <List.Item logo={<FaFilm />} />
            <List.Item logo={<FaMagic />} />
          </List>
        </VerticalNav.Nav>
      </VerticalNav>
    );
  }
}
