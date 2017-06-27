import React, { Children } from 'react';
import { createComponent } from 'react-fela';
import Container from '../container';
import Grid from '../grid';

// const loaderSchema2 = `450f,[c[m5[100,200,400]]g]`
const Panel = createComponent(
  ({ height, width, pad, theme }) => ({
    height,
    width,
    paddingRight: pad ? theme.space3 : 0,
    marginBottom: theme.space3,
  }),
  'div',
  []
);

export const ContentLoaderStyles = {
  animationDuration: '1s',
  animationFillMode: 'forwards',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  // background: '#f6f7f8',
  background: 'linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%)',
  backgroundSize: '200% 100%',
  animationName: {
    '0%': {
      backgroundPosition: '100% 0',
    },
    '100%': {
      backgroundPosition: '-100% 0',
    },
  },
};

const ContentLoader = createComponent(
  ({ height, width }) => ({
    height: height || '100%',
    // minHeight: 96,
    width: width || '100%',
    ...ContentLoaderStyles,
  }),
  ({ className, isLoading, children }) => {
    if (isLoading) {
      return <div className={className} />;
    }
    if (children) {
      return Children.only(children);
    }
    return null;
  },
  props => Object.keys(props)
);

export const SchemaLoader = ({ schema, isLoading, children }) => {
  if (isLoading) {
    const components = schema.map((item, i) =>
      <SchemaLoaderItem key={i} {...item} />
    );
    return <div>{components}</div>;
  }
  if (children) {
    return Children.only(children);
  }
  return null;
};

const SchemaLoaderItem = ({ height, width, grid }) => {
  let inner;
  if (grid) {
    inner = (
      <Grid height="100%">
        {grid.map(({ children, ...item }, i) =>
          (<Grid.Item key={i} height="100%" {...item}>
            <Panel height="100%" width="100%" pad>
              {children
                ? children.map((child, i) =>
                  (<Panel key={i}>
                    <ContentLoader isLoading {...child} />
                  </Panel>)
                  )
                : <ContentLoader isLoading />}
            </Panel>
          </Grid.Item>)
        )}
      </Grid>
    );
  } else {
    inner = <ContentLoader isLoading />;
  }

  if (width === 'container') {
    return (
      <Container height={height}>
        <Panel height="100%" width="100%">
          {inner}
        </Panel>
      </Container>
    );
  }
  return (
    <Panel height={height} width={width}>
      {inner}
    </Panel>
  );
};

export default ContentLoader;
