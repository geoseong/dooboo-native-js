import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Dimensions, AsyncStorage, Alert } from 'react-native';
import SwitchNavigator from './components/navigation/SwitchNavigator';
import { Provider } from 'mobx-react';
import { observer } from 'mobx-react/native';
import appStore from './stores/appStore';
import { ThemeProvider } from 'styled-components/native';
import theme from './theme';

class App extends React.Component {
  render() {
    return (
      <Provider store={ appStore }>
        <ThemeProvider theme={theme}>
          <View style={styles.container}>
            <SwitchNavigator />
          </View>
        </ThemeProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'transparent',
  },
});

export default App;
