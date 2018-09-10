import {StyleSheet, View, Text, Image} from 'react-native';
import React, {Component} from 'react';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';

export default class PagerImage extends Component {
    render() {
      let imagenes = [];
      
      imagenes.push(<Image source={{uri: 'http://placeimg.com/620/480/any'}}/>);
      imagenes.push(<Image source={{uri: 'http://placeimg.com/620/481/any'}}/>);
      imagenes.push(<Image source={{uri: 'http://placeimg.com/640/482/any'}}/>);
      
      return (
          <View>
              <IndicatorViewPager
                  style={{height:'100%'}}
                  indicator={this._renderDotIndicator()}>
                  {imagenes}
              </IndicatorViewPager>
          </View>
      );
  }

    _renderTitleIndicator() {
        return <PagerTitleIndicator titles={['one', 'two', 'three']} />;
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} />;
    }
    
    _renderTabIndicator() {
        let tabs = [{
                text: 'Home',
            },{
                text: 'Message',
            },{
                text: 'Profile',
        }];
        return <PagerTabIndicator tabs={tabs} />;
    }

}