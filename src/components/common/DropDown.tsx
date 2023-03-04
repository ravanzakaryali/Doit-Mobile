import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch } from "react-redux";
import { addSort } from "../../store/redux/projectSlice";

const DropDown = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('updatedDate');
    const [items, setItems] = useState([
        { label: 'Recent Projects', value: 'dueDate' },
        { label: 'Latest Projects', value: 'createdDate' },
    ]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addSort(value))
    }, [value])

    return (
        <View style={{
            zIndex: 1,
        }}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
        </View>

    );
};

export default DropDown;

const styles = StyleSheet.create({});
