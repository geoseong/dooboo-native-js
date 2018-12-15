import React from 'react';
import { AppRegistry, Button } from 'react-native';

import { createSwitchNavigator } from '@react-navigation/core';
import { createBrowserApp, Link } from '@react-navigation/web';

import { Provider } from 'mobx-react';
import appStore from './src/stores/appStore';

class Home extends React.Component {
  static path = '';
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <div>
        <h2>Home Screen</h2>
        <Button title='navigate' onPress={() => this.props.navigation.navigate('Profile')}/>
      </div>
    );
  }
}
class Profile extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h2>Profile Screen</h2>
        <Button title='go back' onPress={() => this.props.navigation.goBack()}/>
      </div>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  Home,
  Profile,
});

const App = createBrowserApp(AppNavigator);

class Root extends React.Component {
  render() {
    return (
      <Provider store={ appStore }>
        {/* <View style={styles.container}> */}
        <SwitchNavigator />
        {/* </View> */}
      </Provider>
    );
  }
};

// export default App;

// register the app
AppRegistry.registerComponent('dooboo', () => Root);

AppRegistry.runApplication('dooboo', {
  initialProps: {},
  rootTag: document.getElementById('dooboo'),
});

// import React from 'react';
// import { AppRegistry } from 'react-native';
// import SwitchNavigator from './src/components/navigation/SwitchNavigator';

// // register the app
// AppRegistry.registerComponent('dooboo', () => SwitchNavigator);

// AppRegistry.runApplication('dooboo', {
//   initialProps: {},
//   rootTag: document.getElementById('dooboo')
// });
