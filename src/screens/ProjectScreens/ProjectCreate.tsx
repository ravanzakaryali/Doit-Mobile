import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from "react-native";
import React from "react";
import { theme } from "../../assets/styles/theme";
import { Avatar } from "react-native-paper";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCalendar, faCalendarDays, faTimes } from "@fortawesome/free-solid-svg-icons";
import DueDateComponent from "../../components/Project/DueDateComponent";
import SectionHeader from "../../components/common/SectionHeader";
import PlusButton from "../../components/common/PlusButton";
import { useForm, Controller } from "react-hook-form";
import { StoreType } from "../../store/store";

import { useSelector } from "react-redux";
import { UserListType } from "../../utilities/types";
import AssignedToComponent from "../../components/common/AssignedToComponent";

interface FormType {
  projectName: string,
  dueDate: Date,
  users: Array<{
    id: string
  }>,
  description: string
}
const ProjectCreate = ({ navigation }: any) => {

  const members = useSelector((state: StoreType) => state.members.data);


  const { control, handleSubmit, formState: { errors } } = useForm<FormType>();
  const onSubmit = (data: FormType) => {
    data.users = members.map(m => {
      return {
        id: m.id
      }
    });
    console.log(data);
  }

  return (
    <View style={{
      padding: theme.spacing.m,
    }}>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <View style={{
          width: 35,
          height: 35,
          backgroundColor: 'green',
          borderRadius: 25
        }}></View>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => {
            return <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              style={{
                fontSize: 18,
                marginLeft: 10
              }} placeholder="Project name" />
          }}
          name="projectName"
        />

      </View>
      <View style={{
        flexDirection: 'row',
      }}>
        <AssignedToComponent
          name="Adam Safi"
          image={{
            uri: 'https://www.history.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_768/MTk1MTQzMjg1OTYwODc3MjU1/adolf-hitler-gettyimages-119505258.jpg'
          }}
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return <DueDateComponent onConfirm={onChange} />
          }}
          name="dueDate"
        />
        <View>
        </View>
      </View>
      <SectionHeader
        options={{
          titleStyle: {
            fontSize: 18,
            fontWeight: '900'
          }
        }}
        data={{
          title: 'Add team members',
        }}
      />
      <View style={{
        flexDirection: 'row'
      }}>
        <PlusButton onPress={() => navigation.navigate('SelectMember')} />
        <FlatList
          data={members}
          horizontal

          renderItem={({ item }) => {
            return <Avatar.Image
              size={40}
              style={{
                marginStart: -7
              }}
              source={{
                uri: item.profileImageUrl
              }} />
          }}
        />
      </View>
      <SectionHeader
        options={{
          titleStyle: {
            fontSize: 18,
            fontWeight: '900'
          }
        }}
        data={{
          title: 'Add description',
        }}
      />
      <Controller
        name='description'
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return <TextInput style={{
            height: 100,
            borderRadius: 10,
            padding: theme.spacing.s,
            fontSize: 16,
          }}
            onChangeText={onChange}
            value={value}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            placeholder="Type here"
          />
        }}
      />
      <Pressable
        onPress={handleSubmit(onSubmit)}
        style={{
          width: "100%",
          padding: theme.spacing.m,
          borderRadius: theme.borderRadius.m,
          backgroundColor: theme.colors.blue[900],
        }}>
        <Text style={{
          fontSize: 18,
          color: 'white',
          textAlign: 'center'
        }}>Create Now</Text>
      </Pressable>
    </View>
  );
};

export default ProjectCreate;

const styles = StyleSheet.create({});
