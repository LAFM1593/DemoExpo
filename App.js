import * as React from 'react';
import { View, Text } from 'react-native';
import Default from './screens/Default';
import BarMenu from './screens/BarMenu';
import Home from './screens/Home';
import Eventos from './screens/ListEventos';
import Intinerario from './screens/ListIntinerario';
import Style from './config/Style';
import Utils from './utils/Utilities';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Home,
    Eventos,
    Intinerario
  },
  {
    initialRouteName: 'Home'
  }
);


export default class App extends React.Component {

  render() {
    return <RootStack />;
  }
}

