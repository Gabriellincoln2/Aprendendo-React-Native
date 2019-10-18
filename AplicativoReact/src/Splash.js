import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default class Splash extends React.Component {
  render() {
    const {replace} = this.props.navigation;
    new Promise((resolve) => setTimeout(resolve, 3000)).then(() => {
      replace('login');
  })

    return (
        <LinearGradient colors={['#060a0e', '#082735', '#060a0e']}
        style={styles.stretch}>
          <Image source={require('../assets/batman.png')} style={styles.stretch} style={{width: 150,
    height: 150}} />   
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
