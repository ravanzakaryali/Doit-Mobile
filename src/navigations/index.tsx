import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeTabs from "./HomeTabs";
import Profile from "../screens/Profile";
import { NativeScreenNavigationContainer } from "react-native-screens";
import ProjectCreate from "../screens/ProjectScreens/ProjectCreate";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../assets/styles/theme";
import ProjectStack from "./stacks/ProjectStack";
import TaskScreen from "../screens/TaskScreens/TaskScreen";
import TaskStack from "./stacks/TaskStack";
import AuthStack from "./stacks/AuthStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useAuthetication from "../utilities/hooks/UseAuthetication";
import { ActivityIndicator } from "react-native-paper";

const Stack = createNativeStackNavigator();

const index = () => {
    const [status, loading] = useAuthetication();

    return (
        !loading ? (
            <Stack.Navigator>
                {
                    !status ? <Stack.Screen
                        options={{
                            headerShown: false
                        }}
                        name="Auth"
                        component={AuthStack}
                    />
                        : (
                            <>
                                <Stack.Screen options={{
                                    headerShown: false
                                }} name="Main" component={HomeTabs} />
                                <Stack.Screen
                                    options={{
                                        headerShown: false
                                    }}
                                    name="ProjectStack"
                                    component={ProjectStack} />
                                <Stack.Screen
                                    options={{
                                        headerShown: false
                                    }}
                                    name="TaskStack"
                                    component={TaskStack}
                                />
                            </>
                        )

                }



            </Stack.Navigator>
        )
            : <ActivityIndicator/>
    );
};

export default index;

const styles = StyleSheet.create({});
