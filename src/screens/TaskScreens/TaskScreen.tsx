import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React from "react";
import SectionHeader from "../../components/common/SectionHeader";
import AssignedToComponent from "../../components/common/AssignedToComponent";
import { theme } from "../../assets/styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { TextInput } from "react-native-paper";

const TaskScreen = () => {
    const formatDate = moment(new Date()).format('MMM DD');

    return (
        <View>
            <SectionHeader
                data={{
                    title: 'App Design',
                    buttonText: 'List Here'
                }}
                options={{
                    titleStyle: {
                        fontSize: 18,
                        fontWeight: '900',
                    },
                    isTextButtonVisible: true,
                    textButtonStyle: {
                        fontSize: 14,
                        color: 'blue',
                    }
                }}
            />
            <Text>Task manager UI kit</Text>
            <View style={{
                flexDirection: 'row',
            }}>
                <AssignedToComponent
                    image={{
                        uri: 'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk1MTQzMjg1OTYwODc3MjU1/adolf-hitler-gettyimages-119505258.jpg'
                    }}
                    name="Admon Shafi"
                />
                <View style={{
                    width: '50%',
                    flexDirection: 'row'
                }}>
                    <View style={{
                        width: 40,
                        height: 40,
                        backgroundColor: theme.colors.blue[900],
                        borderRadius: 25,
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <FontAwesomeIcon color="white" size={20} icon={faCalendarDays} />
                    </View>
                    <View style={{
                        marginLeft: 10
                    }}>
                        <Text>Due Date</Text>
                        <Text style={{
                            fontWeight: '900'
                        }}>
                            {
                                formatDate
                            }
                        </Text>
                    </View>
                </View>
            </View>
            <SectionHeader
                data={{
                    title: 'Add Task Topic',
                }}
                options={{
                    titleStyle: {
                        fontSize: 18,
                        fontWeight: '800'
                    }
                }}
            />
            <TextInput
                style={{
                    backgroundColor: '#0000005',
                    borderColor: 'gray',
                    borderWidth: 0.2,
                    borderRadius: 10,
                }}
                numberOfLines={4}

            />
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
                    }}>Create Now</Text>
                </Pressable>
            </View>

        </View>
    );
};

export default TaskScreen;

const styles = StyleSheet.create({});
