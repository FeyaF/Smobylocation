import React, {Component} from 'react';

import { 
  Platform,
  StyleSheet, 
  Text, 
  View } from 'react-native';

  import Logo from '../components/Logo';
  import Form from '../components/Form';
export default class Signup extends Component<{}>{
	render(){
		return(
       <View styles={styles.container}>
        
             <Logo/>
              <Form type="Signup"/>
             <View style={styles.signupTextCont}>
       <Text style={styles.signupText}>Already have an account?</Text>
       <Text style={styles.signupButton}>Sign in</Text>
       </View>
       </View>

			)

	}
}

	const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: "#E0F2F1",
    alignItems: "center",
    justifyContent: "center",
  }, 

  signupTextCont:{
  	flexGrow: 1,
  	alignItems: 'flex-end',
  	justifyContent: 'center',
  	paddingVertical: 16,
  	flexDirection:'row'

  },

  signupText:{
  	color: 'rgba(255, 255, 255, 0.6)',
  	fontSize: 16


  },
  signupButton:{
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  }
	});
