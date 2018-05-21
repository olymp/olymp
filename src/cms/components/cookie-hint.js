import React, { Component } from 'react';
import { Affix, Button, Dropdown, Alert } from 'antd';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

@withCookies
export default class CookieHint extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  componentWillMount() {
    const { cookies } = this.props;

    this.state = {
      hideCookieHint: cookies.get('hideCookieHint') || false,
    };
  }

  handleAccept(hideCookieHint = true) {
    const { cookies } = this.props;

    cookies.set('hideCookieHint', hideCookieHint, {
      path: '/',
      expires: new Date('Thu, 31 Dec 2099 23:59:59 UTC'),
    });
    this.setState({ hideCookieHint });
  }

  render() {
    const { hideCookieHint } = this.state;

    return !hideCookieHint ? (
      <Affix offsetBottom={0}>
        <Alert
          message="Datenschutz-Informationen"
          description={
            <span>
              Um unsere Webseite für Sie optimal zu gestalten und fortlaufend
              verbessern zu können, verwenden wir Cookies. Durch die weitere
              Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu.
              Nähere Informationen finden Sie in unserer{' '}
              <a href="/datenschutz">Datenschutzerklärung!</a>
            </span>
          }
          banner
          closeText="Akzeptieren und schließen"
          onClose={() => this.handleAccept(true)}
        />
      </Affix>
    ) : null;
  }
}
