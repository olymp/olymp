import PropTypes from 'prop-types';
import PropVal from '@storybook/addon-info/dist/components/PropVal';
import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);
configure(() => require('../src/navbar/.stories'), module);
configure(() => require('../src/.stories'), module);
