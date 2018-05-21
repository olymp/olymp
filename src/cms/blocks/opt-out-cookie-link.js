import React, { Component } from 'react';
import { useGenericBlock, GenericBlock } from 'olymp/slate';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

const gaTrackingId = process.env.GA_TRACKING_ID;

@useGenericBlock({
  label: 'OptOutCookie-Link',
  category: 'Media',
  editable: true,
})
@withCookies
export default class OptOutCookieLink extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  componentWillMount() {
    const { cookies } = this.props;
    const disableState = cookies.get(`ga-disable-${gaTrackingId}`) || false;

    this.state = {
      disableState,
    };
  }

  gaOptout(disableState = true) {
    const { cookies } = this.props;

    cookies.set(`ga-disable-${gaTrackingId}`, disableState, {
      path: '/',
      expires: new Date('Thu, 31 Dec 2099 23:59:59 UTC'),
    });
    this.setState({ disableState });
    gaOptout();
    alert('Google Analytics deaktiviert!');
  }

  render() {
    const { disableState = false } = this.state;
    const { children, ...rest } = this.props;

    return (
      <GenericBlock {...rest}>
        <a href="javascript:;" onClick={() => this.gaOptout(!disableState)}>
          Datenerfassung durch Google Analytics{' '}
          {disableState ? 'aktivieren' : 'deaktivieren'}
        </a>
      </GenericBlock>
    );
  }
}
