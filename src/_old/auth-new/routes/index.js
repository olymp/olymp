import React from 'react';
import * as Modal from './modal';
import * as SplitView from './splitview';
import { SimpleRoute } from 'olymp';

// MODAL
const Modal2 = ({ prefix, exclude = [], ...rest }) =>
  (<div>
    {Object.keys(Modal)
      .filter(key => exclude.findIndex(x => x === key) === -1)
      .map((key) => {
        const Komp = Modal[key];

        return <Komp prefix={prefix} key={key} {...rest} />;
      })}
  </div>);
Object.keys(Modal).forEach(key => (Modal2[key] = Modal[key]));

// SPLITVIEW
// KEINE AHNUNG WIE MAN DAS AM SINNVOLLSTEN EXPORTIERT!
const SplitView2 = {};
/* const SplitView2 = ({ prefix, exclude = [], ...rest }) =>
  Object.keys(SplitView).filter(key => !exclude.find(x => x === key)).map((key) => {
    const Komp = SplitView[key];

    return <SimpleRoute match={key === 'Profile'} key={key} render={() => <Komp prefix={prefix} {...rest} />} />;
  });
*/
Object.keys(SplitView).forEach(key => (SplitView2[key] = SplitView[key]));

export default {
  Modal: Modal2,
  SplitView: SplitView2,
};
