import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import {FeedScreen, HomeScreen, SettingsScreen} from '../screens'

const Tab = createBottomTabNavigator(); 

export function Routes() {
    return(
        <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Feed" component={FeedScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
}