import { setAddon, configure } from '@kadira/storybook';
import infoAddon from '@storybook/addon-info';

setAddon(infoAddon);
configure(() => require('./stories'), module);
