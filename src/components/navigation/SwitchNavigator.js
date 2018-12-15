import { Platform } from 'react-native';
import { createSwitchNavigator, createAppContainer } from '@react-navigation/core';
import RootNavigator from './RootStackNavigator';
import { createBrowserApp } from '@react-navigation/web';

const SwitchNavigator = createSwitchNavigator(
  {
    RootNavigator,
  },
  {
    initialRouteName: 'RootNavigator',
    headerMode: 'none',
  },
);

console.log(Platform.OS);
const AppContainer = Platform.OS !== 'web' ? createAppContainer(SwitchNavigator) : createBrowserApp(SwitchNavigator);
export default AppContainer;
