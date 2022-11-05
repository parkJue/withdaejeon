import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Detail, Exam } from "../screens";

const Stack = createStackNavigator();

const AuthStack = () => {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="Detail"
      screenOptions={{
        headerTitleAlign: "center",
        cardStyle: { backgroundColor: theme.background },
      }}
    >
      <Stack.Screen
        name="Exam"
        component={Exam}
        options={{
          headerTitle: "Exam",
          headerBackTitleVisible: true,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTitle: "Detail",
          headerBackTitleVisible: true,
          headerBackTitle: "prev",
          headerTintColor: "#000000",
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
