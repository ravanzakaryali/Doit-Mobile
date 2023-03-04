import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Chat from "../screens/Chat";
import Profile from "../screens/Profile";
import HomeTitle from "../components/Home/HomeTitle";
import { faHouse, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { theme } from "../assets/styles/theme";
import { FAB } from "react-native-paper";
import CreateModal from "../components/common/Modal/CreateModal";


const Tab = createBottomTabNavigator();

export default function HomeTabs({ navigation }: any) {

    return (
        <>
            <CreateModal navigation={navigation} />
            <Tab.Navigator  initialRouteName="Home">
                <Tab.Screen
                    options={{
                        tabBarIcon: ({ color, size, focused }) => <FontAwesomeIcon size={size} color={color} icon={faHouse} />,
                        header: () => <HomeTitle />,
                        tabBarShowLabel: false
                    }}
                    name="Home"
                    component={Home} />
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => <FontAwesomeIcon size={size} color={color} icon={faUser} />,
                        header: () => <HomeTitle />,
                        tabBarShowLabel: false,
                    }} />

                {/* <Tab.Screen name="Create" component={Chat}
                    options={{
                        tabBarIcon: ({ color, size, focused }) => {
                            return <View style={{
                                position: 'absolute',
                                backgroundColor: 'white',
                                shadowColor: theme.colors.black[500],
                                shadowOffset: {
                                    width: 10,
                                    height: 10,
                                },
                                shadowOpacity: 1,
                                elevation: 5,
                                padding: 20,
                                bottom: 10,
                                borderRadius: 100,
                            }}>
                               
                            </View>
                        },
                        header: () => <HomeTitle />,
                        tabBarShowLabel: false,
                    }} /> */}

            </Tab.Navigator>
        </>
    );
}

const styles = StyleSheet.create({});
