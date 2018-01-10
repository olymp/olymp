import React from 'react';
import PageRoute from 'olymp-pages/route';
import { getAuth } from 'olymp-auth';
import { Lightbox } from 'olymp-cloudinary';
import { lifecycle, compose } from 'recompose';
import { TopLoader } from 'olymp-fela';
import { connect } from 'react-redux';
import { message } from 'antd';
import PrefetchRoutes from './prefetch-routes';

const enhance = compose(
  getAuth,
  lifecycle({
    componentDidMount() {
      const { push, login } = this.props;
      const keyDown = e => {
        if (e.altKey) {
          const closeMessage = message.loading(
            'Gedrückt halten zum Anmelden',
            99999
          );
          const timer = setTimeout(() => {
            // setQuery({ login: null });
            keyUp();
            login();
          }, 1500);
          const keyUp = () => {
            clearTimeout(timer);
            closeMessage();
            document.removeEventListener('keyup', keyUp, false);
          };
          document.addEventListener('keyup', keyUp, false);
        }
      };
      document.addEventListener('keydown', keyDown, false);
      this.unload = () =>
        document.removeEventListener('keydown', keyDown, false);
    },
    componentWillUnmount() {
      this.unload();
    }
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
      location.query.login !== undefined
  }))
);
const component = enhance(
  ({ _isLoading, flatNavigation, showLightbox, showAuth, ...rest }) => [
    <TopLoader loading={_isLoading} key={1} />,
    showLightbox && <Lightbox key={2} />,
    <PageRoute flatNavigation={flatNavigation} {...rest} key={4} />,
    <PrefetchRoutes flatNavigation={flatNavigation} key={5} />
  ]
);

component.displayName = 'CmsNoAuth';
export default component;
