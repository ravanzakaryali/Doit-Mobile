import { StyleSheet, Text, View, Pressable, GestureResponderEvent } from "react-native";
import React, { useState } from "react";
import { theme } from "../../assets/styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-native-date-picker";
import moment from "moment";
interface DueDateType {
    onConfirm: (value: Date) => void
}

const DueDateComponent = ({ onConfirm }: DueDateType) => {
    const [date, setDate] = useState<Date | undefined>(undefined)
    const [open, setOpen] = useState(false)
    const formatDate = moment(date).format('MMM DD');
    return (
        <>
            <Pressable style={{
                width: '50%',
                flexDirection: 'row',
            }} onPress={() => setOpen(true)}>
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
                            date ? formatDate : 'Date'
                        }
                    </Text>
                </View>
            </Pressable>
            <DatePicker
                modal
                open={open}
                date={new Date()}
                onConfirm={(date: Date) => {
                    setOpen(false)
                    setDate(date)
                    onConfirm(date);
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </>
    );
};

export default DueDateComponent;

const styles = StyleSheet.create({});
