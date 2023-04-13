import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TrendingScreen from "../screens/TrendingScreen";
import { Routes } from "./Routes";
import MusicScreen from "../screens/MusicScreen";
import AppTabs from "./AppTabs";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Navigator initialRouteName={Routes.TABS.ROOT}>
      <Stack.Screen
        name={Routes.TABS.ROOT}
        component={AppTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.SETTINGS.ROOT}
        component={SettingsScreen}
        options={{ presentation: "modal", title: "Einstellungen", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
