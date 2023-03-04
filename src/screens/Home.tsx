import { View, FlatList, Text, StyleSheet } from "react-native";
import React from "react";
import ProjectCard from "../components/Home/ProjectCard";
import { theme } from "../assets/styles/theme";
import SectionHeader from "../components/common/SectionHeader"
import TaskCard from "../components/common/Cards/TaskCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreType } from "../store/store";
import { projectGetAllAction } from "../store/redux/projectSlice";
import DropDown from "../components/common/DropDown";

const Home = () => {

  const [page, setPage] = React.useState<number>(1)
  const dispatch = useDispatch<AppDispatch>();
  const projectState = useSelector((state: StoreType) => state.project);
  React.useEffect(() => {
    if (projectState.sort == 'createdDate') {
      setPage(1);
    }
    if (projectState.sort == 'dueDate') {
      setPage(1);
    }
  }, [projectState.sort])
  React.useEffect(() => {
    dispatch(projectGetAllAction({
      page: page,
      limit: 2,
      sort: projectState.sort
    }));
  }, [page, projectState.sort])
  console.log("Loading ......", projectState.loading);
  return (
    <View style={{
      paddingHorizontal: theme.spacing.m,
      paddingVertical: theme.spacing.l,
      flex: 1
    }}>
      {/* <CreateModal /> */}
      {/* <CalendarSlide /> */}
      <ProjectCard />

      <SectionHeader
        data={{
          buttonText: "See All",
          title: 'All Projects'
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
      <DropDown />
      <View style={{
        paddingVertical: theme.spacing.m,
      }}>
        <FlatList
          style={{
            height: 350
          }}
          ListFooterComponent={() => {
            return projectState.loading ? <Text>Loading..</Text> : null
          }}
          ListFooterComponentStyle={styles.footerStyle}
          refreshing={false}
          data={projectState.projects}
          renderItem={({ item }) => {
            return <TaskCard title={item.title} description={item.description} />
          }}
          onEndReached={() => {
            if(page <= 5){
              setPage(page + 1)
            }
          }}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  footerStyle: {
    backgroundColor: 'red'
  }
})
export default Home;

