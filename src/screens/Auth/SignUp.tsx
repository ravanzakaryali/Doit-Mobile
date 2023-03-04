import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import SectionHeader from "../../components/common/SectionHeader";
import { theme } from "../../assets/styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreType } from "../../store/store";
import { register } from "../../store/redux/authSlice";

const SignUp = ({ navigation }: any) => {

    const dispatch = useDispatch<AppDispatch>();
    const authState = useSelector((state: StoreType) => state.auth);
    const [email, setEmail] = useState<string>("")
    const [fullName, setFullName] = useState<string>("")

    const onSubmit = async () => {
        await dispatch(register({
            email: email,
            fullName: fullName
        }))
    }
    useEffect(() => {
        authState.response.statusCode == 200 ? navigation.navigate("confirm") : null
    }, [authState.response.statusCode])

    return (
        <View>
            <SectionHeader
                data={{
                    title: "SignUp",
                }}
                options={{
                    titleStyle: {
                        fontSize: 18,
                        fontWeight: '900'
                    }
                }}
            />
            <TextInput
                placeholder="Email"
                onChangeText={setEmail}
            />
            <TextInput
                placeholder="Full name"
                onChangeText={setFullName}
            />
            <View style={{
                width: '100%',
                padding: 20
            }}>
                <Pressable
                    onPress={onSubmit}
                    style={{
                        backgroundColor: theme.colors.blue[900],
                        padding: 20,
                        borderRadius: 20
                    }}>
                    <Text style={{
                        textAlign: 'center',
                        color: 'white',
                        fontSize: 18
                    }}>Submit</Text>
                </Pressable>
            </View>
            <Text style={{
                color: 'red'
            }}>{authState.response.error}</Text>
            <Pressable
                onPress={() => navigation.navigate("login")}
            ><Text style={{
                color: 'blue'
            }}>Login Screen</Text></Pressable>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({});
