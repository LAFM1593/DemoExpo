import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button,  Title} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import Style from '../config/Style';
import Utils from '../utils/Utilities';

export default class BarMenu extends Component {
  render() {
    return (
        <Header>
          <Left>
            <Button transparent onPress={() => Utils.alert('Demo','¡En desarrollo!', function(){ console.log('OK Pressed')})}>
              <Icon name='bell' style={Style.color_icon} size={22} />
            </Button>
          </Left>
          
          <Body>
            <Title>Demo</Title>
          </Body>
          
          <Right>
            <Button transparent onPress={() => Utils.alert('Demo','¡En desarrollo!', function(){ console.log('OK Pressed')})}>
              <Icon name='gear' style={Style.color_icon} size={24} />
            </Button>
          </Right>
        </Header>
    );
  }
}