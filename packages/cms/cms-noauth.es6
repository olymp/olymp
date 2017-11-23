import React from 'react';
import { AuthModals } from 'olymp-auth';
import PageRoute from 'olymp-pages/route';
import { Lightbox } from 'olymp-cloudinary';
import { lifecycle, compose } from 'recompose';
import { TopLoader } from 'olymp-fela';
import { createReplaceQuery } from 'olymp-router';
import { connect } from 'react-redux';
import PrefetchRoutes from './prefetch-routes';

const enhance = compose(
  connect(null, dispatch => ({
    setQuery: createReplaceQuery(dispatch),
  })),
  lifecycle({
    componentDidMount() {
      const { setQuery } = this.props;
      const keyDown = e => {
        if (e.altKey) {
          const timer = setTimeout(() => {
            setQuery({ login: null });
            document.onkeyup = () => null;
          }, 1000);
          document.onkeyup = () => {
            clearTimeout(timer);
          };
        }
      };
      document.addEventListener('keydown', keyDown, false);
      this.unload = () =>
        document.removeEventListener('keydown', keyDown, false);
    },
    componentWillUnmount() {
      this.unload();
    },
  }),
  connect(({ app, location }) => ({
    _isLoading: app.loading,
    showLightbox: !!location.query.lightbox,
    showAuth:
      location.query.login !== undefined ||
      location.query.register !== undefined ||
      location.query.confirm !== undefined ||
      location.query.forgot !== undefined ||
      location.query.reset !== undefined ||
      location.query.login !== undefined,
  })),
);
const component = enhance(
  ({ _isLoading, flatNavigation, showLightbox, showAuth, ...rest }) => [
    <TopLoader loading={_isLoading} key={1} />,
    showLightbox && <Lightbox key={2} />,
    showAuth && <AuthModals key={3} />,
    <PageRoute flatNavigation={flatNavigation} {...rest} key={4} />,
    <PrefetchRoutes flatNavigation={flatNavigation} key={5} />,
  ],
);

component.displayName = 'CmsNoAuth';
export default component;
