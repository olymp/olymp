import React from 'react';
import PropTypes from 'prop-types';
import { createComponent } from 'react-fela';
import { Grid } from '../index';
import Link from './link';

const Column = createComponent(
  ({ theme }) => ({
    padding: theme.space3,
    fontFamily: theme.fontFamily,
  }),
  'div',
  p => Object.keys(p)
);

const Title = createComponent(
  ({ theme, inverse }) => ({
    display: 'block',
    fontWeight: 'bold',
    marginBottom: theme.space3,
    padding: theme.space0,
    color: inverse ? theme.light : theme.dark,
  }),
  p =>
    (<h4>
      <Link {...p} />
    </h4>),
  p => Object.keys(p)
);

const PaddingLink = createComponent(
  ({ theme }) => ({
    padding: `${theme.space1} ${theme.space0}`,
  }),
  p => <Link {...p} />,
  p => Object.keys(p)
);

const Item = createComponent(
  ({ theme }) => ({
    onHover: {
      '> div': {
        display: 'block',
      },
    },
  }),
  'div',
  p => Object.keys(p)
);

const SubMenu = createComponent(
  ({ theme }) => ({
    display: 'none',
    paddingLeft: theme.space3,
    paddingY: theme.space1,
    fontSize: theme.fontSizeSmall,
  }),
  'div',
  p => Object.keys(p)
);

const MegaNav = createComponent(
  ({ theme }) => ({
    width: 700,
    paddingX: theme.space3,
    paddingY: theme.space1,
    ifMini: {
      padding: 0,
    },
  }),
  ({ className, pages, inverse, renderItemLink }) =>
    (<div className={className}>
      <Grid size={pages.length}>
        {pages.map(({ id, name, children, pathname, onClick }, i) =>
          (<Grid.Item small={1} key={id || i}>
            <Column>
              <Title to={pathname} inverse={inverse}>
                {name}
              </Title>
              {children.map((child, cI) =>
                (<Item key={child.id || cI}>
                  <PaddingLink to={child.pathname} inverse={inverse} renderItemLink={renderItemLink}>
                    {child.name}
                  </PaddingLink>
                  {child.children &&
                    !!child.children.length &&
                    <SubMenu>
                      {child.children.map((c, ccI) =>
                        (<PaddingLink
                          to={c.pathname}
                          inverse={inverse}
                          key={c.id || ccI}
                          renderItemLink={renderItemLink}
                        >
                          {c.name}
                        </PaddingLink>)
                      )}
                    </SubMenu>}
                </Item>)
              )}
            </Column>
          </Grid.Item>)
        )}
      </Grid>
    </div>),
  p => Object.keys(p)
);
MegaNav.displayName = 'Navbar.Mega';
MegaNav.propTypes = {
  /** Array of page-objects */
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      pathname: PropTypes.string,
      children: PropTypes.arrayOf(PropTypes.object),
    })
  ),
  /** aligns mega-submenu right */
  right: PropTypes.bool,
};
MegaNav.defaultProps = {
  pages: [],
  right: false,
};
export default MegaNav;
