import React from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import RootNavigation from "./src/navigation";

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <RootNavigation />
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
