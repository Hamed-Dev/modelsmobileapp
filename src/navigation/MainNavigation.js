// package import
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModelsList from '../screens/ModelsList';
import ModelDetails from '../screens/ModelDetails';

import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, drawerType: 'front' }}>
            <Stack.Screen name={'Home'} component={Home} />
            <Stack.Screen name={'ModelsList'} component={ModelsList} />
            <Stack.Screen name={'ModelDetails'} component={ModelDetails} />
        </Stack.Navigator>
    )
}

const MainNavigation = () => {
    useEffect(() => {
    }, [])

    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}

export default MainNavigation
