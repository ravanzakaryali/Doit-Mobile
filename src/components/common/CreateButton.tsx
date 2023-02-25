import { View, Text, Pressable, GestureResponderEvent } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface CreateButtonType {
    onPress: null | ((event: GestureResponderEvent) => void) | undefined;
}

const CreateButton = ({ onPress }: CreateButtonType) => {
    return (
        <View style={{
            position: 'absolute',
            bottom: 60,
            right: 20,
            borderRadius: 35,
            backgroundColor: 'white',
            width: 70,
            height: 70,
            zIndex: 100,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#00000070',
            shadowOffset: {
                width: 10,
                height: 10
            },
            shadowRadius: 1,
            elevation: 3
        }}>
            <Pressable onPress={onPress}>
                <FontAwesomeIcon size={30} icon={faPlus} />
            </Pressable>
        </View>
    );
};

export default CreateButton;
