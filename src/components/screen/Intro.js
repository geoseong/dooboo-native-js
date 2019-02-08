// @flow
import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Image,
  ScrollView,
  Text,
  View,
  FlatList,
  InteractionManager,
} from 'react-native';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { inject } from 'mobx-react/native';
import { NavigationScreenProp, NavigationStateRoute } from 'react-navigation';
import styled from 'styled-components';

import type {
  ____ViewStyleProp_Internal as ViewStyle,
  ____TextStyleProp_Internal as TextStyle,
  ____ImageStyleProp_Internal as ImageStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import Store from '../../stores/appStore';
import { ratio, colors } from '../../utils/Styles';
import { IC_MASK } from '../../utils/Icons';
import User from '../../models/User';
import { getString } from '../../../STRINGS';
import Button from '../shared/Button';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const UserView = styled.View`
  margin-top: 60;
  align-items: center;
`;

const UserText = styled.Text`
  font-size: 16;
  color: ${(props) => props.theme.dusk};
  line-height: 48;
`;

const TitleText = styled.Text`
  margin-top: 100;
  color: ${(props) => props.theme.dusk};
  font-size: 24;
`;

const LoginText = styled.Text`
  font-size: 14;
  color: white;
`;

const LoginButton = styled(Button)`
  background-color: ${(props) => props.theme.dodgerBlue};
  align-self: center;
  border-radius: 4;
  width: 320;
  height: 52;

  align-items: center;
  justify-content: center;
`;

const NavigateButton = styled(Button)`
  background-color: white;
  align-self: center;
  border-radius: 4;
  width: 320;
  height: 52;

  align-items: center;
  justify-content: center;
`;

const BottomView = styled.View`
  position: absolute;
  bottom: 40;
`;

type Styles = {
  imgBtn: ImageStyle,
};

const styles: Styles = StyleSheet.create({
  imgBtn: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
  },
});

type Props = {
  store: Store;
  navigation: NavigationScreenProp<NavigationStateRoute>;
};
type State = {
  isLoggingIn: boolean;
}

// @inject('store') @observer
class Page extends Component<Props, State> {
  timer: any;

  constructor(props: Props) {
    super(props);
    this.state = {
      isLoggingIn: false,
    };
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return (
      <Container>
        <TitleText>DOOBOO NATIVE</TitleText>
        <UserView>
          {/* <UserText>{this.props.store.user.displayName}</UserText>
          <UserText>{this.props.store.user.age}</UserText>
          <UserText>{this.props.store.user.job}</UserText> */}
        </UserView>
        <BottomView>
          <LoginButton
            isLoading={this.state.isLoggingIn}
            onPress={this.onLogin}
            imgLeftSrc={IC_MASK}
            imgLeftStyle={styles.imgBtn}
          >{getString('LOGIN')}</LoginButton>
          <NavigateButton
            onPress={() => this.props.navigation.navigate('Temp') }
            style={{ marginTop: 15 }}
            textStyle={{
              color: colors.dodgerBlue,
            }}
          >Navigate</NavigateButton>
        </BottomView>
      </Container>
    );
  }

  // onLogin = () => {
  //   this.props.store.user = new User();
  //   this.setState({ isLoggingIn: true }, () => {
  //     this.timer = setTimeout(() => {
  //       this.props.store.user.displayName = 'dooboolab';
  //       this.props.store.user.age = 30;
  //       this.props.store.user.job = 'developer';
  //       this.setState({ isLoggingIn: false });
  //     }, 1000);
  //   });
  // }
}

export default Page;
