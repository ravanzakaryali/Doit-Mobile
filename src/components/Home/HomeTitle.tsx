import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import { theme } from "../../assets/styles/theme";

const HomeTitle = () => {
    return (
        <View style={{
            marginVertical: theme.spacing.xl,
            paddingHorizontal: theme.spacing.m,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image
                    style={{
                        width: 45,
                        height: 45,
                    }}
                    source={{
                        uri: 'https://cdn1.meistertask.com/assets/meisterlabs/products/meistertask/icon-a180b0f392b059b046e36e08d9276da6d3fcdf864351ac1b4e296ffb48178bb2.png'
                    }}
                />
                <Text style={{
                    fontSize: theme.fontSize.l,
                    fontWeight: '800',
                    color: theme.colors.black[900],
                    paddingLeft: theme.spacing.s
                }}>
                    Do it
                </Text>
            </View>
            <View style={{
                width: 45,
                height: 45,
                borderColor: theme.colors.black[100],
                borderWidth: 1,
                borderRadius: 22.5,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <FontAwesomeIcon size={theme.fontSize.m} icon={faMagnifyingGlass} />
            </View>
        </View>
    );
};

export default HomeTitle;

const styles = StyleSheet.create({
});
