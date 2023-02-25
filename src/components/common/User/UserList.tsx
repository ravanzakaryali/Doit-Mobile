import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Avatar } from "react-native-paper";
import { UserListType } from "../../../utilities/types";
import { theme } from "../../../assets/styles/theme";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from "../../../store/redux/memberSlice";
import { AppDispatch, StoreType } from "../../../store/store";


interface UserComponentType {
    user: UserListType,
}

const UserList = ({ user }: UserComponentType) => {
    const [select, setSelect] = useState(false);
    const members = useSelector((state: StoreType) => state.members.data);
    useEffect(() => {
        if (members.find(m => m.id === user.id)) {
            setSelect(true);
        }
    }, [])

    const dispatch = useDispatch<AppDispatch>();

    return (
        <Pressable onPress={() => {
            dispatch(!select ? add(user) : remove(user));
            setSelect(!select)
        }
        }>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: theme.spacing.m,
                paddingVertical: theme.spacing.xs
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Avatar.Image
                        source={{
                            uri: user.profileImageUrl
                        }}
                    />
                    <Text style={{
                        fontSize: 16,
                        marginLeft: 10
                    }}>
                        {user.name}
                    </Text>
                </View>
                <View style={{
                    backgroundColor: select ? theme.colors.blue[900] : '#aaaaaa',
                    width: 30,
                    height: 30,
                    borderRadius: 15
                }}>
                </View>
            </View>
        </Pressable >
    );
};

export default UserList;

const styles = StyleSheet.create({});
