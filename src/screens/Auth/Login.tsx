import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-paper";
import SectionHeader from "../../components/common/SectionHeader";
import { theme } from "../../assets/styles/theme";
import { login } from "../../store/redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreType } from "../../store/store";

const Login = ({ navigation }: any) => {
    const dispatch = useDispatch<AppDispatch>();
    const authState = useSelector((state: StoreType) => state.auth);
    const [email, setEmail] = useState<string>("")
    const submit = async () => {
        await dispatch(login(email));
        authState.response.statusCode == 200
            ? navigation.navigate("confirm")
            : null

    }
    useEffect(() => {
        
    }, [authState.response.statusCode])
    return (
        <View>
            <SectionHeader
                data={{
                    title: "Login",
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
            >
            </TextInput>
            {authState.response.statusCode == 404 ? <Text style={{
                color: 'red'
            }}>Something is wrong</Text> : null}
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
                    }}>Submit</Text>
                </Pressable>
            </View>
            <Text style={{
                color: 'red'
            }}>{authState.response.error}</Text>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({});
