import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Auth/Login";
import SignUp from "../../screens/Auth/SignUp";
import Confirm from "../../screens/Auth/Confim";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="singup" component={SignUp} />
            <Stack.Screen name="confirm" component={Confirm} />
        </Stack.Navigator>
    );
};

export default AuthStack;

const styles = StyleSheet.create({});
