import * as React from 'react';
import bookingScreen from '../containers/bookingScreen';
import homeScreen from '../containers/homeScreen';
import profileScreen from '../containers/profileScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={homeScreen} />
            <Drawer.Screen name="Perfil" component={profileScreen} />
            <Drawer.Screen name="Reservas" component={bookingScreen} />
          </Drawer.Navigator>

      );
  }
  
    
