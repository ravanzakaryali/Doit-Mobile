import { View, Text, Pressable } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { theme } from "../../assets/styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = () => {
    return (
        <View style={{
            marginVertical: theme.spacing.xl,
            flexDirection: 'row',
            justifyContent: "space-between",
            padding: theme.spacing.xl,
            backgroundColor: theme.colors.blue[900],
            borderRadius: 20
        }}>
            <View style={{
                justifyContent: 'space-between',
            }}>
                <View>
                    <Text style={{
                        fontSize: theme.fontSize.l,
                        color: theme.colors.white[500]
                    }}>
                        App Design
                    </Text>
                    <Text style={{
                        fontSize: theme.fontSize.s,
                        color: theme.colors.white[900]
                    }}>
                        Task manager ui kit
                    </Text>
                </View>
                <View>
                    <Pressable>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: theme.colors.white[100],
                            borderRadius: theme.borderRadius.s,
                            alignSelf: 'flex-start'
                        }}>
                            <View style={{
                                width: 40,
                                height: 40,
                                backgroundColor: theme.colors.white[900],
                                borderRadius: 20,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </View>
                            <View style={{
                                justifyContent: 'center',
                                paddingHorizontal: theme.spacing.xs
                            }}>
                                <Text style={{
                                    color: theme.colors.white[500]
                                }}>
                                    Details
                                </Text>
                            </View>
                        </View>
                    </Pressable>
                </View>
            </View>
            <View style={{
                backgroundColor: theme.colors.white[500],
                padding: theme.spacing.xs,
                borderRadius: 15
            }}>
                <Avatar.Text style={{
                    backgroundColor: theme.colors.blue[500],
                    marginBottom: -5
                }} size={24} label="MA" />
                <Avatar.Text style={{
                    backgroundColor: theme.colors.gray,
                    marginBottom: -5
                }} size={24} label="MA" />
                <Avatar.Text style={{
                    backgroundColor: theme.colors.black[900],
                    marginBottom: -5
                }} size={24} label="MA" />
                <Avatar.Text style={{
                    backgroundColor: theme.colors.blue[500],
                    marginBottom: -5
                }} size={24} label="MA" />
                <Avatar.Text style={{
                    backgroundColor: theme.colors.blue[500],
                    marginBottom: -5
                }} size={24} label="MA" />
            </View>
        </View>
    );
};

export default ProjectCard;
