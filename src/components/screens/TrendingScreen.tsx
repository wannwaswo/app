import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Routes } from "../stack/Routes";
import { useNavigation } from "@react-navigation/native";
import CalendarView from "../ui/CalendarView";

export default function TrendingScreen() {

  return (
    <View style={{ marginTop: 12 }}>
     
      <CalendarView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
