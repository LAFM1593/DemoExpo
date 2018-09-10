import {StyleSheet, View, Text, Image, TouchableOpacity, Button, HeaderButton } from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import PagerImage from '../screens/PagerImage';
import Style from '../config/Style';
import { Col, Row, Grid } from "react-native-easy-grid";
import GridView from 'react-native-super-grid';
import Icon from 'react-native-vector-icons/FontAwesome';
import Utils from '../utils/Utilities';

export default class Home extends React.Component {
  
  static navigationOptions = {
    title: 'Bienvenido',
  };

  renderButon(text, icon, color) {
    return <TouchableOpacity>
            <View style={styles.card} >
              <View style={styles.inner}>
                <Icon
                   style={{color:'#000'}}
                   size={30}
                   name={icon}
                   color={color}/>
                <Text style={styles.title}>{text}</Text>
              </View>
            </View>
          </TouchableOpacity>;
  }
  
  renderTab(text, icon, color, menu) { 
    return <TouchableOpacity  onPress={() => this.props.navigation.navigate(menu)}>
            <View style={styles.tab} >
              <View style={styles.inner_tab}>
                <Text>{text}</Text>
              </View>
            </View>
          </TouchableOpacity>;
  }
  
  render() {
    
    let botones = [
      {text: 'AGENDA', icon: 'book', color: '#00aced'},
      {text: 'EXPOSITORES', icon: 'users', color: '#00aced'},  
      {text: 'PREGUNTAS', icon: 'list-ol', color: '#00aced'},
      {text: 'ENCUESTAS', icon: 'pencil-square-o', color: '#00aced'},
      {text: 'FOTOS', icon: 'camera', color: '#00aced'},
      {text: 'REGALOS', icon: 'gift', color: '#00aced'},

    ];
    
    let tabs = [
      {text: 'EVENTOS', icon: 'book', color: '#00aced', menu: 'Eventos'},
      {text: 'INTINERARIO', icon: 'users', color: '#00aced', menu: 'Intinerario'}
    ];
    
    return (
      <View style={{height:'100%'}}>
        <View style={{height:'40%'}}>
          <PagerImage/>
        </View>
        <View style={{height:'10%'}}>
          <Grid>
              <Col>
                {this.renderTab(tabs[0].text, tabs[0].icon, tabs[0].color, tabs[0].menu)}
              </Col>
              <Col>
                {this.renderTab(tabs[1].text, tabs[1].icon, tabs[1].color, tabs[1].menu)}
              </Col>
          </Grid>
        
        </View>
        <View style={{height:'50%'}}>
          <GridView
            itemWidth={130}
            items={botones}
            renderItem={item => (this.renderButon(item.text, item.icon, item.color))}
          />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#d6d7da',
    margin:2,
    backgroundColor: 'white',
    borderRadius: 4,
  },
  tab: {
    borderWidth: 1,
    borderColor: '#d6d7da',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height:'100%',
  },
  inner_tab: {
    flex: 1,
    padding: 5,
    minHeight: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  inner: {
    padding: 30,
    minHeight: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  title: {
    marginTop: 15
  },
});

