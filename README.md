# simple-react-native-dialog
A simple react native customisable dialog component

## Code style
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Screenshots

1.Dialog with 2 buttons and callback

![](https://media.giphy.com/media/pcJpZFvCiodUtrirlr/giphy.gif)

## Tech/framework used
React-native

<b>Built with</b>
- [react-native](https://facebook.github.io/react-native/)

## Configuration
simple-react-native-dialog takes a configuration object as a param on showDialog() method.

| Property                 | Type          | Required | Example                   | Default     |
| ------------------------ | ------------- | -------- | ------------------------- | ----------- |
| header                   | String        | false    |                           | null        |
| info                     | String        | true     |                           |             |
| primaryButtonText        | String        | false    |                           | NO          |
| secondaryButtonText      | String        | false    |                           | YES         |
| primaryButtonStyle       | Object        | false    | {backgroundColor: String} | transparent |
| primaryButtonTextStyle   | Object        | false    | {color: String}           | black       |
| secondaryButtonStyle     | Object        | false    | {backgroundColor: String} | transparent |
| secondaryButtonTextStyle | Object        | false    | {color: String}           | black       |   
| buttonAlignment          | String        | false    | "center", "left"          | right       |   
| primaryButtonPress       | Function      | false    | ()=>{alert('hi')}         | void        |  
| secondaryButtonPress     | Function      | false    | ()=>{alert('hi')}         | void        |

-To enable the secondary button just pass the secondaryButtonPress property.

## Code Example
```javascript
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Dialog from 'simple-react-native-dialog';

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
        primaryButtonText:"CANCEL",
        secondaryButtonText:"CONFIRM",
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
    color: "black"
  },
  secondaryButtonText:{
    color: "#23a1d7"
  }
});

```

## Installation
yarn: yarn add simple-react-native-dialog

npm: npm install --save simple-react-native-dialog

## How to use?

1. import it in your project 
```javascript
import Dialog from 'simple-react-native-dialog';
```
2. Declare it in your component
```javascript
<View>
    <OtherComponents />
    <Dialog />
</View>
```
3. Trigger it in a function call
```javascript
 handleClick = () =>{
    Dialog.showDialog(
      {
        header: "Hello",
        info: "Wow its working",
        primaryButtonText:"NO",
        secondaryButtonText:"YES",
        primaryButtonTextStyle: styles._buttonTextStyle,
        secondaryButtonTextStyle: styles.secondaryButtonText,
        secondaryButtonPress:()=>{
          alert('Hello');
        }
      }
    )
  }
```

