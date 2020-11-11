import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home/index';
import Jogar from '../Components/Jogar';
import Eng_Por from '../Components/Cards/Eng_Por';

const Stack = createStackNavigator();

function MyStack() {
    return (

        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                headerTransparent: true,
            }}
        >
            <Stack.Screen name="Home" component={Home} />

            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitleAlign: 'center',
                    headerTitle: false,
                }}
                name="Jogar"
                component={Jogar}
            />

            <Stack.Screen
                options={{
                    headerShown: true,
                    title: 'Inglês e Português',
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        color: '#000',
                    }
                }}
                name="Eng_Por"
                component={Eng_Por}
            />

        </Stack.Navigator>
    );
}
export default MyStack;