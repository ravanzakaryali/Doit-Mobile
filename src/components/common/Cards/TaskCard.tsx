import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from './';
import { Avatar } from "react-native-paper";
import { theme } from "../../../assets/styles/theme";

const TaskCard = () => {
    return (
        <Card>
            <View>
                <Text style={{
                    fontSize: theme.fontSize.m,
                    fontWeight: '500'
                }}>3d Making Project</Text>
                <Text style={{
                    fontWeight: '400'
                }}>Team project working on Figma</Text>
            </View>
            <View style={{
                flexDirection: 'row',
                paddingVertical: theme.spacing.s
            }}>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <Avatar.Text label="XD" size={22} style={{
                        backgroundColor: 'blue',
                        marginRight: -5
                    }} />
                    <Avatar.Text label="RZ" size={22} style={{
                        backgroundColor: 'red',
                        marginRight: -5
                    }} />
                    <Avatar.Text label="MB" size={22} style={{
                        backgroundColor: 'green',
                        marginRight: -5
                    }} />
                    <Avatar.Text label="RZ" size={22} style={{
                        backgroundColor: 'red',
                        marginRight: -5
                    }} />
                    <Avatar.Text label="MB" size={22} style={{
                        backgroundColor: 'green',
                        marginRight: -5
                    }} />
                </View>
                <View>
                    <Text style={{
                        fontSize: theme.fontSize.xs,
                        paddingLeft: theme.spacing.m,
                        fontWeight: '300'
                    }}>
                        10 participants
                    </Text>
                </View>
            </View>
        </Card>
    );
};

export default TaskCard;

const styles = StyleSheet.create({});
