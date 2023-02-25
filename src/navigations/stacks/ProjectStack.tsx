import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProjectCreate from "../../screens/ProjectScreens/ProjectCreate";
import SelectMember from "../../screens/ProjectScreens/SelectMember";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { theme } from "../../assets/styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const Stack = createNativeStackNavigator();

const ProjectStack = ({ navigation }: any) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerTitleAlign: 'center',
                    headerTitle: 'Project Create',
                    headerLeft: (props: HeaderBackButtonProps) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Main')}>
                                <View style={{
                                    backgroundColor: theme.colors.blue[900],
                                    width: 30,
                                    height: 30,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <FontAwesomeIcon color="white" icon={faCaretLeft} size={20} />
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }}
                name="ProjectCreate"
                component={ProjectCreate}
            />
            <Stack.Screen
                name="SelectMember"
                component={SelectMember}
            />
        </Stack.Navigator>
    );
};

export default ProjectStack;

const styles = StyleSheet.create({});
