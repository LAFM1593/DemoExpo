import React, { Component } from 'react';
import { Alert } from 'react-native';

const Alerts = {
    alert: function(title, message, onPress){
      
      if (typeof onPress === 'undefined')
        onPress = function(){};

     Alert.alert(
        title,
        message,
        [
          {text: 'OK', onPress: () =>  onPress() },
        ],
        { cancelable: false }
      );

    },
    /*confirm: function(title, message, options){
      Alert.alert(
        {title},
        {message},
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      );
    }*/
    
}

export default Alerts;