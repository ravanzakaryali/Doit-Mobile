import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";

interface AssignedToComponentType {
    name: string,
    image: ImageSourcePropType
}

const AssignedToComponent = ({ image, name }: AssignedToComponentType) => {
    return (
        <View style={{
            flexDirection: 'row',
            width: '50%'
        }}>
            <View>
                <Avatar.Image
                    size={38}
                    source={image} />
            </View>
            <View style={{
                marginLeft: 10
            }}>
                <Text>Assigned to</Text>
                <Text style={{
                    fontWeight: '900'
                }}>{name}</Text>
            </View>
        </View>
    );
};

export default AssignedToComponent;

const styles = StyleSheet.create({});
