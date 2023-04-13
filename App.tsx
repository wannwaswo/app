import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
// import AppStack from "./src/components/stack/AppStack";
import AppTabs from "./src/components/stack/AppTabs";
import AppStack from "./src/components/stack/AppStack";

export default function App() {
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}
