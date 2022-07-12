/*
 * Sample React Native App
 * https://github.com/facebook/react-native

 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Navigation from "./src/navigation/Navigation";
const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "dark-white",
  },
});

export default App;
