import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import Navigator from './src/navigations';
import CreateModal from "./src/components/common/Modal/CreateModal";
import CreateButton from "./src/components/common/CreateButton";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import useAuthetication from "./src/utilities/hooks/UseAuthetication";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={{
          flex: 1
        }}>
          <Navigator />
        </View>
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
