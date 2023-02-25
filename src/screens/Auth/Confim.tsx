import { StyleSheet, Text, View,Pressable } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import SectionHeader from "../../components/common/SectionHeader";
import { theme } from "../../assets/styles/theme";

const Confirm = () => {
    return (
        <View>
            <SectionHeader
                data={{
                    title: "cONFIM",
                }}
                options={{
                    titleStyle: {
                        fontSize: 18,
                        fontWeight: '900'
                    }
                }}
            />
            <TextInput
            >
            </TextInput>
            <View style={{
                width: '100%',
                padding: 20
            }}>
                <Pressable style={{
                    backgroundColor: theme.colors.blue[900],
                    padding: 20,
                    borderRadius: 20
                }}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 18
                    }}>Confirm</Text>
                </Pressable>
            </View>
        </View>
    );
};
export default Confirm;

const styles = StyleSheet.create({});
