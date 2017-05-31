import React from 'react';
import PropTypes from 'prop-types';
import { styled, NavLink } from 'olymp';
import { Grid } from '../index';
import { Link, Placeholder } from './link';

const SuperNav = styled(() => ({
  width: 700,
  left: '50% !important',
  transform: 'translateX(-50%)',
}), ({ className, pages, inverse, ...rest }) => (
  <div className={className} ref={e => console.log(e, e && e.getBoundingClientRect())}>
    <Grid size={pages.length}>
      {pages.map(({ id, name, children }, i) => (
        <Grid.Item mini={1} key={id || i}>
          <Column>
            <Title pathname="/" inverse={inverse}>{name}</Title>
            {children.map((child, cI) => (
              <Item key={child.id || cI}>
                <Link2 to={child.pathname} inverse={inverse}>{child.name}</Link2>
                {child.children && child.children.length ? (
                  <SubMenu>
                    {child.children.map((c, ccI) => (
                      <Link2 to={c.pathname} inverse={inverse} key={c.id || ccI}>{c.name}</Link2>
                    ))}
                  </SubMenu>
                ) : null}
              </Item>
            ))}
          </Column>
        </Grid.Item>
      ))}
    </Grid>
  </div>
), p => p);
SuperNav.propTypes = {
  /** Array of page-objects */
  pages: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    pathname: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object)
  })),
};
SuperNav.defaultProps = {
  pages: [],
};
export default SuperNav;

const Column = styled(({ theme }) => ({
  padding: theme.space3,
  fontFamily: theme.fontFamily,
}), 'div', p => p);

const Title = styled(
  ({ theme, inverse }) => ({
    display: 'block',
    fontWeight: 'bold',
    marginBottom: theme.space3,
    padding: `${theme.space0} !important`,
    color: `${inverse ? theme.light : theme.dark} !important`,
  }),
  ({ pathname, ...p }) => (pathname ? <Link to={pathname} {...p} /> : <span {...p} />),
  p => p
);

const Link2 = styled(({ theme }) => ({
  padding: `${theme.space1} ${theme.space0} !important`,
}), p => <Link {...p} />, p => p);

const Item = styled(({ theme }) => ({
  onHover: {
    '> div': {
      display: 'block',
    }
  }
}), 'div', p => p);

const SubMenu = styled(({ theme }) => ({
  display: 'none',
  paddingLeft: theme.space3,
  paddingY: theme.space1,
  fontSize: theme.fontSizeSmall,
}), 'div', p => p);
