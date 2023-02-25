import { StyleSheet, Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { ProgressBar, TextInput } from "react-native-paper";
import UserList from "../../components/common/User/UserList";
import { UserListType } from "../../utilities/types";
import { theme } from "../../assets/styles/theme";

const data: UserListType[] = [
    {
        id: '1',
        name: 'Vladmir Lenin',
        profileImageUrl: "https://www.onthisday.com/images/people/vladimir-lenin-medium.jpg"
    },
    {
        id: '2',
        name: 'John Adams',
        profileImageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/John_Adams_A18236.jpg/800px-John_Adams_A18236.jpg"
    },
    {
        id: '3',
        name: 'Thomas Jefferson',
        profileImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/James_Madison.jpg/800px-James_Madison.jpg'
    }
]


const SelectMember = () => {
    return (
        <View style={{
            flex: 1
        }}>
            <View>
                <TextInput placeholder="Search" />
            </View>
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return <UserList
                            user={{
                                id: item.id,
                                name: item.name,
                                profileImageUrl: item.profileImageUrl
                            }}
                        />
                    }}
                />

            </View>
            {/* <View style={{
                paddingHorizontal: 10,
                position: 'absolute',
                bottom: 10,
                width: '100%'
            }}>
                <TouchableOpacity onPress={() => console.log("Salam")}>
                    <View style={{
                        width: '100%',
                        backgroundColor: theme.colors.blue[900],
                        borderRadius: 20,
                        padding: 20,

                    }}>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 16,
                            color: 'white'
                        }}>
                            Submit
                        </Text>
                    </View>
                </TouchableOpacity>
            </View> */}
        </View>
    );
};

export default SelectMember;

const styles = StyleSheet.create({});
