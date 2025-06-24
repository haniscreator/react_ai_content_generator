import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContentGeneratorScreen from "./screens/ContentGeneratorScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AI Generator" component={ContentGeneratorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
