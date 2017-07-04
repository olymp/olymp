import PropTypes from 'prop-types';
import PropVal from '@storybook/addon-info/dist/components/PropVal';
import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

// temp fix PropVal.propTypes
// https://github.com/storybooks/storybook/issues/1305
PropVal.propTypes = {
  ...PropVal.propTypes,
  maxPropObjectKeys: PropTypes.number,
  maxPropArrayLength: PropTypes.number,
  maxPropStringLength: PropTypes.number,
};

setAddon(infoAddon);
configure(() => require('./fa5'), module);
