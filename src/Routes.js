import React, {Component} from 'react';


import { createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Login from './pages/Login'
import Signup from './pages/Signup' 





const LoginStackNavigator = createStackNavigator({
   
   Login: {

   	screen: Login,
   	navigationOptions:{
   		title: 'Connexion'
   	}
   },

   Signup:{
   	screen: Signup
   }
})

export default createAppContainer(LoginStackNavigator)
