import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from "./screens/Search";
import Transaction from "./screens/Transaction"
import { createAppContainer } from "react-navigation"
import { createBottomTabNavigator } from "react-navigation-tabs"

export default function App() {
  return (
    <AppContainer />
  );
}
const tabNavigator = createBottomTabNavigator({
  Transaction : { screen: Transaction },
  Search : { screen: Search },
})
const AppContainer = createAppContainer(tabNavigator)