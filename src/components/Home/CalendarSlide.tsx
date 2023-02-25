import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../../assets/styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const CalendarSlide = () => {
    return (
        <View style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center'
        }}>
            <View style={{
                 width: 30,
                 height: 30,
                 borderColor: theme.colors.black[100],
                 borderWidth: 1,
                 borderRadius: 15,
                 justifyContent: 'center',
                 alignItems: 'center'
            }}>
                <FontAwesomeIcon size={theme.fontSize.m} icon={faAngleLeft} />
            </View>
            <View style={{
                paddingHorizontal: theme.spacing.l
            }}>
                <Text style={{
                    fontSize: theme.fontSize.s,
                    color: theme.colors.black[300]
                }}>
                    Monday, April 26
                </Text>
                <Text style={{
                    fontSize: theme.fontSize.l,
                    color: theme.colors.black[900]
                }}>
                    This week
                </Text>
            </View>
            <View style={{
                 width: 30,
                 height: 30,
                 borderColor: theme.colors.black[100],
                 borderWidth: 1,
                 borderRadius: 15,
                 justifyContent: 'center',
                 alignItems: 'center'
            }}>
                <FontAwesomeIcon size={theme.fontSize.m} icon={faAngleRight} />
            </View>
        </View>
    );
};

export default CalendarSlide;

