import * as React from "react";
import { View, Text } from "react-native";

export default function CalendarView() {

  return (
    <View style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "row", width: "100%" }}>
      <View style={{ display: "flex", alignItems: "center", gap: 16}}>
        <Text>{new Date().toLocaleString("en-us", { weekday: "short" }).split(",")[0]}</Text>
        <Text>27</Text>
      </View>
      
      <View style={{ display: "flex", alignItems: "center", gap: 16, backgroundColor: "#000000", padding: 5, borderRadius: 8 }}>
        <Text style={{ color: "#ffffff"}}>Tues</Text>
        <Text style={{ color: "#ffffff"}}>28</Text>
      </View>

      <View style={{ display: "flex", alignItems: "center", gap: 16, padding: 5}}>
        <Text>Wed</Text>
        <Text>29</Text>
      </View>

      <View style={{ display: "flex", alignItems: "center", gap: 16, padding: 5}}>
        <Text>Thurs</Text>
        <Text>30</Text>
      </View>

      <View style={{ display: "flex", alignItems: "center", gap: 16, padding: 5}}>
        <Text>Fri</Text>
        <Text>31</Text>
      </View>

      <View style={{ display: "flex", alignItems: "center", gap: 16, padding: 5}}>
        <Text>Sat</Text>
        <Text>01</Text>
      </View>

      <View style={{ display: "flex", alignItems: "center", gap: 16, padding: 5}}>
        <Text>Sun</Text>
        <Text>02</Text>
      </View>

    </View>
  );
}
