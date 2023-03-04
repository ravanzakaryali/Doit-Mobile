import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import SectionHeader from "../../components/common/SectionHeader";
import { theme } from "../../assets/styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreType } from "../../store/store";
import { confirmEmail } from "../../store/redux/authSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Confirm = ({ navigation }: any) => {
    const dispatch = useDispatch<AppDispatch>();
    const authState = useSelector((state: StoreType) => state.auth);
    const [code, setCode] = useState<number>(0)

    const submit = async () => {
        await dispatch(confirmEmail({
            email: authState.response.email,
            confirmCode: code
        }));
        if (authState.response.statusCode == 200 && authState.token != "") {
            console.log("Confirm Success", authState);
            await AsyncStorage.setItem("@token", authState.token);
            navigation.navigate("Main");
        }

    }
    useEffect(() => {

    }, [authState.response.statusCode])
    return (
        <View>
            <SectionHeader
                data={{
                    title: "cONFIM",
                }}
                options={{
                    titleStyle: {
                        fontSize: 18,
                        fontWeight: '900'
                    }
                }}
            />
            <TextInput
                placeholder="Confirm Code"
                onChangeText={(value: string) => setCode(parseInt(value))}
            />
            <View style={{
                width: '100%',
                padding: 20
            }}>
                <Pressable
                    onPress={submit}
                    style={{
                        backgroundColor: theme.colors.blue[900],
                        padding: 20,
                        borderRadius: 20
                    }}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 18
                    }}>Confirm</Text>
                </Pressable>
            </View>
            <Text style={{
                color: 'red'
            }}>{authState.response.error}</Text>
        </View>
    );
};
export default Confirm;

const styles = StyleSheet.create({});
