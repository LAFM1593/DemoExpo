import React, {Component} from "react";
import {Image, View} from "react-native";
import Style from '../config/Style';

export default class Default extends Component {
  render() {
    return (
      <View style={Style.container_element}>
      <Image
          style={Style.image_default}
          resizeMode="stretch"
          source={require('../images/default.png')}
        />
      </View>
    );
  }
}