import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Pokedex from "./src/screens/Pokedex";
import HomeScreen from "./src/screens/HomeScreen";

const Stack = createStackNavigator();
export default Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Poke"
          component={Pokedex}
          options={({ route }) => ({ title: route.params.item.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
