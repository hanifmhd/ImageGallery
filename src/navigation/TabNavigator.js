import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {FavoriteStackNavigator, HomeStackNavigator} from './StackNavigator';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={'Home'}>
      <Tab.Screen
        name={'Home'}
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name={'home-outline'} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={'Favorite'}
        component={FavoriteStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name={'heart-half-outline'} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
