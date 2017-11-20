import React, { Component, Children, cloneElement } from 'react';
import { createComponent } from 'olymp-fela';
import { compose, withState } from 'recompose';
import { FaEnvelope, FaFilm, FaMagic } from 'olymp-icons';
import List from './list';

const { Item, Title, Group } = List;

const Container = createComponent(
  ({ theme, right = true }) => ({
    position: 'fixed',
    top: 0,
    left: !right && 0,
    right: right && 0,
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    minWidth: 64,
    height: '100%',
    transition: 'height 0.25s ease-in-out',
    zIndex: 300,
  }),
  'div',
);

const Secondary = createComponent(
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

const enhance = compose(withState('collapsed', 'setCollapsed', true));

@enhance
export default class VerticalNav extends Component {
  render() {
    const { collapsed, setCollapsed } = this.props;

    return (
      <Container>
        <Secondary
          secondary
          collapsed={collapsed}
          onClick={() => setCollapsed(false)}
          onMouseLeave={() => setCollapsed(true)}
        >
          <Group>
            <Item
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
            </Item>
            <Item logo={<FaEnvelope />} subtitle="test">
              Mail
            </Item>
            <Title>test</Title>
            <Item logo={<FaFilm />}>Film</Item>
            <Item logo={<FaMagic />}>Mail</Item>
          </Group>
          <Group>
            <Item logo={<FaEnvelope />}>Mail</Item>
          </Group>
        </Secondary>

        <Secondary collapsed>
          <Group>
            <Item logo={<FaEnvelope />} />
          </Group>
          <Group>
            <Item logo={<FaFilm />} />
            <Item logo={<FaMagic />} />
          </Group>
        </Secondary>
      </Container>
    );
  }
}
