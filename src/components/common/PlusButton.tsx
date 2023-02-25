import { GestureResponderEvent, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../assets/styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface CreateButtonType {
    onPress: null | ((event: GestureResponderEvent) => void) | undefined;
}
const PlusButton = ({ onPress }: CreateButtonType) => {
    return (
        <Pressable
            style={{
                borderRadius: 20
            }}
            onPress={onPress}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: theme.colors.blue[900],
            }}>
                <FontAwesomeIcon color="white" icon={faPlus} size={20} />
            </View>
        </Pressable>
    );
};

export default PlusButton;

const styles = StyleSheet.create({});
