import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

const UseAuthetication = () => {
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
            AsyncStorage.getItem("@token").then(data=>{
                setStatus(true);
                setLoading(false);
            }).catch(()=>{
                setStatus(false);
            })
    
    }, [])
    return [status, loading];
};

export default UseAuthetication;

