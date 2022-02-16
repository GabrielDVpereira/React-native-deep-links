import React, { useEffect, useState } from 'react'; 
import { Text } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import {FeedScreen, HomeScreen, SettingsScreen} from '../screens'

import * as Linking from 'expo-linking';
import { useDeepLink } from '../hooks';

const prefix = Linking.createURL('/');

const Tab = createBottomTabNavigator(); 


export function Routes() {
  useDeepLink();
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        Home: 'home', 
        Settings: 'settings',
        Feed: 'feed'
      }
    }
  };


    return(
        <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Feed" component={FeedScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}