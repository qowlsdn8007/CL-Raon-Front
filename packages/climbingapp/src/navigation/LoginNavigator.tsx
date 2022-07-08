import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import AgreeInfoScreen from './screens/auth/AgreeInfoScreen';
import EssentialInfoScreen from './screens/auth/EssentialInfoScreen';
import OptionalInfoScreen from './screens/auth/OptionalInfoScreen';
import ConnectWithInstagramScreen from './screens/auth/ConnectWithInstagramScreen';
import WelcomeScreen from './screens/auth/WelcomeScreen';

const Stack = createNativeStackNavigator();

const LoginNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="register" component={RegisterScreen} />
            <Stack.Screen name="agreeInfo" component={AgreeInfoScreen} />
            <Stack.Screen name="essentialInfo" component={EssentialInfoScreen} />
            <Stack.Screen name="optionalInfo" component={OptionalInfoScreen} />
            <Stack.Screen name='connectInsta' component={ConnectWithInstagramScreen} />
            <Stack.Screen name="welcome" component={WelcomeScreen} />
        </Stack.Navigator>
    );
};

export default LoginNavigator;