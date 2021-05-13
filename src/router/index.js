import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, SplashScreen, Component, FixBrake } from '../pages';
import Repair from '../pages/Repair';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}} />
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <Stack.Screen name="Component" component={Component} options={{headerShown: false}} />
            <Stack.Screen name="Repair" component={Repair} options={{headerShown: false}} />
            <Stack.Screen name="FixBrake" component={FixBrake} options={{headerShown: false}} />
        </Stack.Navigator>
    );
};

export default Router;