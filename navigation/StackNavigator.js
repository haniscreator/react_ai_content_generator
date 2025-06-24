import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ContentGeneratorScreen from "../screens/ContentGeneratorScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = ({ user }) => {
  return (
    <Stack.Navigator>
      {user ? (
        // User is logged in
        <Stack.Screen name="Generator" component={ContentGeneratorScreen} />
      ) : (
        // No user, show login/signup
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
