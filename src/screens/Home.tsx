import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CalendarSlide from "../components/Home/CalendarSlide";
import ProjectCard from "../components/Home/ProjectCard";
import { theme } from "../assets/styles/theme";
import SectionHeader from "../components/common/SectionHeader"
import TaskCard from "../components/common/Cards/TaskCard";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import CreateModal from "../components/common/Modal/CreateModal";

const Home = () => {
  return (
    <View style={{
      paddingHorizontal: theme.spacing.m,
      paddingVertical: theme.spacing.l,
      flex: 1
    }}>
      {/* <CreateModal /> */}
      <CalendarSlide />
      <ProjectCard />
      <SectionHeader
        data={{
          buttonText: "See All",
          title: 'All Tasks'
        }}
        options={{
          isTextButtonVisible: true,
          textButtonStyle: {
            fontSize: 12,
            color: theme.colors.blue[500]
          },
          titleStyle: {
            fontWeight: '500',
            color: theme.colors.black[900],
            fontSize: theme.fontSize.m
          },

        }} />
      <View style={{
        paddingVertical: theme.spacing.m,
      }}>
        <TaskCard />
        <TaskCard />
      </View>

    </View>
  );
};

export default Home;

