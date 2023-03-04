import { Pressable, StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import { theme } from "../../assets/styles/theme";

interface SectionHeaderOptions {
    titleStyle: TextStyle,
    textButtonStyle?: TextStyle,
    isTextButtonVisible?: boolean 
}
interface SectionHeaderData {
    buttonText?: String,
    title: String
}

interface SectionHeaderType {
    options: SectionHeaderOptions,
    data: SectionHeaderData
}

const SectionHeader = ({ options, data }: SectionHeaderType) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <Text style={options.titleStyle}>{data.title}</Text>
            {
                options.isTextButtonVisible ?
                    <Pressable>
                        <Text style={options.textButtonStyle}>{data.buttonText}</Text>
                    </Pressable> : null
            }

        </View>
    );
};

export default SectionHeader;

const styles = StyleSheet.create({});
