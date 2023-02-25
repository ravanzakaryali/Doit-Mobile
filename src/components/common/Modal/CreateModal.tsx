import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import CreateButton from '../CreateButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faClose, faPlus } from '@fortawesome/free-solid-svg-icons';
import ModalItem from './ModalItem';


const CreateModal = ({ navigation }: any) => {
    const [state, setstate] = useState(false);
    return (
        <>
            {
                state ?
                    <Pressable
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#00000080',
                            zIndex: 1000,
                        }}
                        onPress={() => setstate(!state)}>
                        <View style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#00000080',
                            zIndex: 1000,
                        }}>
                            <View style={{
                                position: 'absolute',
                                bottom: 40,
                                paddingHorizontal: 20,
                                width: '100%'
                            }}>
                                <View style={{
                                    width: '100%',
                                    backgroundColor: 'white',
                                    borderRadius: 30,
                                    paddingHorizontal: 20,
                                    paddingVertical: 10
                                }}>
                                    <View style={{
                                        position: 'absolute',
                                        right: 17,
                                        top: 17,
                                    }}>
                                        <FontAwesomeIcon icon={faClose} color='black' size={16} />
                                    </View>

                                    <ModalItem
                                        navigation={navigation}
                                        item={{
                                            icon: faPlus,
                                            navigateTo: 'ProjectStack',
                                            title: 'Create Project'
                                        }}
                                    />
                                    <ModalItem
                                        navigation={navigation}
                                        item={{
                                            icon: faPlus,
                                            navigateTo: 'TaskStack',
                                            title: 'Create Task'
                                        }}
                                    />
                                    <ModalItem
                                        navigation={navigation}
                                        item={{
                                            icon: faPlus,
                                            navigateTo: '',
                                            title: 'Create Team'
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    : null
            }


            <CreateButton onPress={() => setstate(!state)} />
        </>
    );
};

export default CreateModal;
