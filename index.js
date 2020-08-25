/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import StorybookUI from './storybook';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => (__DEV__ ? StorybookUI : App));
