import { StyleSheet, Platform } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create( {
    container: {
      backgroundColor: '#fff',
      flex: 1,
      sizeMode: 'cover',
      paddingTop: Constants.statusBarHeight
    },
    container_element: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      flexDirection: 'column',
    },
    container_header: {
      flex: 1,
    },
    container_body: {
      flex: 10,
    },
    container_footer: {
      flex: .5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image_default: {
      alignSelf: 'center',
      height: '30%',
      width: '50%',
    },
    text_link: {
      textAlign: 'center', // <-- the magic
      fontSize: 10,
      color: 'blue',
    },
    color_icon:{
      color: Platform.OS === 'ios' ? '#000' : '#fff'
    },
    container_pager: {
      backgroundColor: '#fff452'
    },
    container_bottons: {
      backgroundColor: '#fff365'
    }
});