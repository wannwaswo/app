import * as React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { Routes } from "../stack/Routes";
import { useNavigation } from "@react-navigation/native";
import CalendarView from "../ui/CalendarView";

export default function TrendingScreen() {

  return (
    <View style={{ marginTop: 12 }}>
     
      <CalendarView />
      <View>
        <Text style={{ paddingLeft: 12, paddingTop: 24,  fontSize: 18 }}>Top ranked</Text>
        <View style={{ marginLeft: 12, width: 38, backgroundColor: "#000000", height: 2, marginTop: 5 }} />
      </View>
      <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 12, marginTop: 12 }}>
        <View style={{ backgroundColor: "#000000", width: "95%" , height: 112, borderRadius: 12  }}></View>
        <View style={{ backgroundColor: "#000000", width: "95%" , height: 112, borderRadius: 12  }}></View>
        <View style={{ backgroundColor: "#000000", width: "95%" , height: 112, borderRadius: 12  }}></View>
        <View style={{ display: "flex", flexDirection: "row", gap: 12 }}>
          <View style={{ backgroundColor: "#000000", width: 115, height: 124, borderRadius: 12 }} />
          <View style={{ backgroundColor: "#000000", width: 115, height: 124, borderRadius: 12 }} />
          <View style={{ backgroundColor: "#000000", width: 115, height: 124, borderRadius: 12 }} />
        </View>
      </View>
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
