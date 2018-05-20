import React, { Component } from 'react';
import { Affix, Button, Dropdown, Alert } from 'antd';

export default () =>
  !!document && document.cookie.indexOf('hideCookieHint=1') !== -1 ? null : (
    <Affix offsetBottom={0}>
      <Alert
        message="Datenschutz-Informationen"
        description={
          <span>
            Um unsere Webseite für Sie optimal zu gestalten und fortlaufend
            verbessern zu können, verwenden wir Cookies. Durch die weitere
            Nutzung der Webseite stimmen Sie der Verwendung von Cookies zu.
            Nähere Informationen finden Sie in unserer{' '}
            <a href={`https://${window.location.host}/datenschutz`}>
              Datenschutzerklärung!
            </a>
          </span>
        }
        banner
        closeText="Akzeptieren und schließen"
        onClose={() => {
          if (!!document && !!document.cookie)
            document.cookie = 'hideCookieHint=1;path=/';
        }}
      />
    </Affix>
  );
