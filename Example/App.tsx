/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Dialog from './components/Dialog';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  handleClick = () =>{
    Dialog.showDialog(
      {
        header: "Hello",
        info: "Wow its working",
        primaryButtonTextStyle: styles._buttonTextStyle,
        secondaryButtonTextStyle: styles.secondaryButtonText,
        secondaryButtonPress:()=>{
          alert('Hello');
        }
      }
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={this.handleClick}  
        >
          <Text style={styles.buttonText}>Show Dialog</Text>
        </TouchableOpacity>
        <Dialog />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button:{
    padding:10,
    backgroundColor:'#23a1d7'
  },
  buttonText:{
    color:"#F5FCFF"
  },
  buttonStyle: {
    backgroundColor: "white"
  },
  _buttonTextStyle: {
    color: "#23a1d7"
  },
  secondaryButtonText:{
    color: "#23a1d7"
  }
});
