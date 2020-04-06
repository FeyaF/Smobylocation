import React, {Component} from 'react';

import { 
	Image,
  Platform,
  StyleSheet, 
  Text, 
  View } from 'react-native';

  export default class Logo extends Component<{}> {
  	render(){
  		return(

  		<View style={styles.container}>
     <Image style={{width:350, height:70}}
        source={require('../images/Logo.png')}
      />
      <Text style={styles.logoText}>Agent Tracker SmobilMap</Text>
      </View>
  			)
  	}
  }

  const styles = StyleSheet.create({

  	container: {
    flexGrow: 1,
  
    alignItems: "center",
    justifyContent: "center",
  },

  logoText:{
  	fontSize:18, 
  	color: 'rgba(255, 255, 255, 0.7)'
  }
  })