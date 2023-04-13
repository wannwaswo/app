import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function SettingsScreen() {
  return (
    <>
    
      <View style={styles.centeredContainer}>
        <View style={{ backgroundColor: "#f00000", height: 5, width: 50, marginTop: 12, borderRadius: 20 }} />
      </View>
      <View style={{ ...styles.container, marginTop: 42 }}>
        <Text style={styles.title}>Account Informaion</Text>
        <View style={styles.separator} />
        <Text style={styles.title}>Giveaways</Text>
        <View style={styles.separator} />
        <Text style={styles.title}>Saved</Text>
        <View style={styles.separator} />
        <Text style={styles.title}>Terms & Conditions</Text>
        <View style={styles.separator} />
        <Text style={styles.title}>Privacy Policy</Text>
        <View style={styles.separator} />
        <Text style={styles.title}>Share App</Text>
        <View style={styles.separator} />
        <Text style={styles.title}>Logout</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    alignItems: "center",
    maxHeight: 5,
  },
  container: {
    flex: 1,
    padding: 12,
    //alignItems: "center",
    //justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 8,
    height: 1,
    backgroundColor: "#d4d0cf",
  },
});
