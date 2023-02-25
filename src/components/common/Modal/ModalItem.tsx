import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const data = [
  {
    title: 'Create Project',
    navigateTo: 'CreateProject'
  },
  {
    title: 'Create Task',
    navigateTo: 'CreateTask'
  },
]

interface ModalItemType {
  title: string,
  navigateTo: string,
  icon: IconDefinition
}

interface ModelItemComponent {
  item: ModalItemType,
  navigation: any
}
const ModalItem = ({ item, navigation }: ModelItemComponent) => {
  return (
    <Pressable onPress={() => {
      navigation.navigate(item.navigateTo);
      // setstate(!state);
    }}>
      <View style={{
        flexDirection: 'row',
        padding: 15,
        borderBottomColor: '#00000050',
        borderBottomWidth: 1,
        alignItems: 'center'
      }}>
        <View style={{
          width: 35,
          height: 35,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
          borderRadius: 100
        }}>
          <FontAwesomeIcon color='white' size={14} icon={item.icon} />
        </View>
        <Text style={{
          marginLeft: 20,
          fontSize: 18,
          fontWeight: "600",
        }}>{item.title}</Text>
      </View>
    </Pressable>
  );
};

export default ModalItem;

const styles = StyleSheet.create({});
