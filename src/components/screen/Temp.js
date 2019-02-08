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
import { inject } from 'mobx-react/native';
import styled from 'styled-components/native';

import { ratio } from '../../utils/Styles';
import {
  IC_MASK,
} from '../../utils/Icons';

import type {
  ____ViewStyleProp_Internal as ViewStyle,
  ____TextStyleProp_Internal as TextStyle,
  ____ImageStyleProp_Internal as ImageStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

type Props = {
}

type State = {
}

class Page extends Component<Props, State> {
  static navigationOptions = {
    headerTitle: <Text style={{
      fontSize: 18,
    }}>Temp</Text>,
  };

  render() {
    return (
      <Container>
        <Text>Temporary Page</Text>
      </Container>
    );
  }
}

export default Page;
