import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import Style from '../config/Style';
import { Container, Header, Left, Body, Right, Button,  Title} from 'native-base';
import Utils from '../utils/Utilities';
import Icon from 'react-native-vector-icons/FontAwesome'

export default class ListEventos extends React.Component {
  
  static navigationOptions = ({ navigation, screenProps }) => ({
  title: "My Profile!",
  headerTintColor: Style.color_icon,
            headerRight: <Button transparent onPress={() => Utils.alert('Demo','¡En desarrollo!', function(){ console.log('OK Pressed')})}>
              <Icon name='gear' style={{ justifyContent: 'center',
      alignItems: 'center',}} size={22} />
            </Button>,
});
  
  renderItem(text, date) {
    return <TouchableOpacity >
            <View style={styles.tab} >
              <View style={styles.inner_tab}>
                <Text>{text}</Text>
                <Text>{date}</Text>
              </View>
            </View>
          </TouchableOpacity>;
  }
  
  render() {
    
    let items = [
      {text: 'AGENDA', date: '11/09/2018 10:00 am'},
      {text: 'EXPOSITORES', date: '11/09/2018 11:00 am'},
      {text: 'PREGUNTAS', date: '11/09/2018 12:00 pm'},
      {text: 'ENCUESTAS', date: '11/09/2018 1:00 pm'},
      {text: 'FOTOS', date: '11/09/2018 2:00 pm'},
      {text: 'REGALOS', date: '11/09/2018 3:00 pm'},
    ]
    
    return (
      <View style={{height:'100%'}}>
        <FlatList
          data={items}
          renderItem={({item}) => this.renderItem(item.text, item.date)}
        />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  tab: {
    borderWidth: 1,
    borderColor: '#d6d7da',
    backgroundColor: 'white',
    height:70,
  },
  inner_tab: {
    flex: 1,
    padding: 5,
    minHeight: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  }
});

