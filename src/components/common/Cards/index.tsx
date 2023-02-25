import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../../assets/styles/theme";

interface CardType{
    children : React.ReactNode
}
const Index = ({ children }: CardType) => {
    return (
        <View style={{
            backgroundColor: '#ddd',
            padding: theme.spacing.l,
            borderRadius: theme.borderRadius.m,
            marginBottom: theme.spacing.m
        }}>
            {children}
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({});
