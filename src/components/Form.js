import React, {Component} from 'react';

import { 
	
  Platform,
  StyleSheet, 
  TextInput,
  Text, 
  TouchableOpacity,
  View } from 'react-native';

  export default class Form extends Component<{}> {

  	
  	render(){
  		return(

  		<View style={styles.container}>
            <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)'
             placeholder="Email"
             placeholderTextColor= "#ffffff"
             />
             <TextInput style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)'
             placeholder="Password"
             secureTextEntry={true}
             placeholderTextColor= "#ffffff"
             />

        <TouchableOpacity style={styles.button}>
<Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>             
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

  inputBox:{
  	width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize:16,
    color:"#ffffff",
    marginVertical: 10
  },

  button:{
  	width:300,
  	backgroundColor:'#263238',
  	borderRadius: 25,
  	marginVertical: 10,
  	paddingVertical: 16

  },

  buttonText:{
  	fontSize: 16,
  	fontWeight:'500',
  	color: '#ffffff',
  	textAlign: 'center'
  }


  })