import React, {Component} from 'react';

import { 
    StyleSheet,
  StatusBar,
  View } from 'react-native';

import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Navigator from './src/Routes/LoginStack';

export default class App extends Component<{}>{

  render (){
    return (
    <View style={styles.container}>
      <StatusBar
      backgroundColor="#263238"
      barStyle="light-content"/>
      <Login/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: "#455A64",
     alignItems: "center",
     justifyContent: "center",
  },
});
