import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './app/Splash.Screen';
import Introduction from './app/Introduction.Screen';
import Relax from './app/Relax.Screen';

const Stack = createStackNavigator();


function Navigation() {
    return <NavigationContainer >
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="splash" component={Splash} />
            <Stack.Screen name="introduction" component={Introduction} />
            <Stack.Screen name="relax" component={Relax} />
        </Stack.Navigator>
    </NavigationContainer >
}

export default Navigation;