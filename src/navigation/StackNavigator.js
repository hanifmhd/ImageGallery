import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import R from '../configs';
import {MainFavorite} from '../screens/Favorite';
import {DetailHome, DiscoverHome} from '../screens/Home';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={R.pages.DiscoverHome} component={DiscoverHome} />
      <Stack.Screen name={R.pages.DetailHome} component={DetailHome} />
    </Stack.Navigator>
  );
};

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={R.pages.MainFavorite} component={MainFavorite} />
    </Stack.Navigator>
  );
};

export {HomeStackNavigator, FavoriteStackNavigator};
