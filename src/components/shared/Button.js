// @flow
import React, { Component } from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
} from 'react-native';
import type {
  ____ViewStyleProp_Internal as ViewStyle,
  ____TextStyleProp_Internal as TextStyle,
  ____ImageStyleProp_Internal as ImageStyle,
} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

import styled from 'styled-components/native';

const ButtonEnabled = styled.View`
  background-color: transparent;
  align-self: center;
  border-radius: 4;
  border-width: 2;
  width: 320;
  height: 52;
  border-color: white;

  align-items: center;
  justify-content: center;
`;

const ButtonDisabled = styled.View`
  background-color: rgb(243,243,243);
  align-self: center;
  border-radius: 4;
  border-width: 2;
  width: 320;
  height: 52;
  border-color: #333;

  align-items: center;
  justify-content: center;
`;

type Styles = {
  txt: TextStyle,
  imgLeft: ImageStyle,
};

const styles: Styles = StyleSheet.create({
  txt: {
    fontSize: 14,
    color: 'white',
  },
  imgLeft: {
    width: 24,
    height: 24,
    position: 'absolute',
    left: 16,
  },
});

type Props = {
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  disabledStyle?: ViewStyle;
  textStyle?: TextStyle;
  imgLeftSrc?: any;
  imgLeftStyle?: ImageStyle;
  indicatorColor?: string;
  activeOpacity?: number;
  children?: any;
}

type State = {

}

class Button extends Component<Props, State> {
  static defaultProps: Props = {
    isLoading: false,
    isDisabled: false,
    textStyle: styles.txt,
    imgLeftStyle: styles.imgLeft,
    indicatorColor: 'white',
    activeOpacity: 0.5,
  };

  render() {
    if (this.props.isDisabled) {
      return (
        <ButtonDisabled style={this.props.style}>
          <Text style={this.props.textStyle}>{this.props.children}</Text>
        </ButtonDisabled>
      );
    }
    if (this.props.isLoading) {
      return (
        <ButtonEnabled style={this.props.style}>
          <ActivityIndicator size='small' color={this.props.indicatorColor} />
        </ButtonEnabled>
      );
    }
    return (
      <TouchableOpacity
        activeOpacity={this.props.activeOpacity}
        onPress={this.props.onPress}
      >
        <ButtonEnabled style={this.props.style}>
          {
            this.props.imgLeftSrc
              ? <Image
                style={this.props.imgLeftStyle}
                source={this.props.imgLeftSrc}
              />
              : null
          }
          <Text style={this.props.textStyle}>{this.props.children}</Text>
        </ButtonEnabled>
      </TouchableOpacity>
    );
  }
}

export default Button;
