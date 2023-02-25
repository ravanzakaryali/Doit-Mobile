import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { theme } from "../../assets/styles/theme";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import TaskScreen from "../../screens/TaskScreens/TaskScreen";
const Stack = createNativeStackNavigator();

const TaskStack = ({ navigation }: any) => {
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
                name="TaskScreen"
                component={TaskScreen}
            />
        </Stack.Navigator>
    );
};

export default TaskStack;

const styles = StyleSheet.create({});
