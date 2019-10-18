import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default class Login extends React.Component {
  render() {
    return (
        <LinearGradient colors={['#060a0e', '#082735', '#060a0e']}
        style={styles.stretch}>
          <Image source={require('../assets/batman.png')} style={styles.stretch} style={{width: 200,
    height: 200}} />   
        </LinearGradient>  
    );
  }
}
const styles = StyleSheet.create({
  stretch: {
    alignItems: 'center',
    justifyContent : 'center',
    flex: 1,
  }
});
