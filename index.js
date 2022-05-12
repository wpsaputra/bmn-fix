/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import { Navigation } from '@react-navigation/bottom-tabs';
// import { gestureHandlerRootHOC } from 'react-native-gesture-handler';


AppRegistry.registerComponent(appName, () => App);

// Navigation.registerComponent(appName, () => gestureHandlerRootHOC(App));
