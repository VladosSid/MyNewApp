import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button } from "react-native";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

import { SingIn, LogIn, Home } from "./src/Screens";
import { ButtonHeaderAuth } from "./src/Components/Button";
import { getHeaderTitle } from "./src/helpers";

const MinePages = createStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Regulat": require("./img/Fonts/Robot/Roboto-Regular.ttf"),
          "Roboto-Medium": require("./img/Fonts/Robot/Roboto-Medium.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer style={styles.container}>
      <MinePages.Navigator
        initialRouteName="Login"
        screenOptions={styles.headerStyle}
      >
        <MinePages.Screen
          name="Registration"
          component={SingIn}
          options={{ headerShown: false }}
        />
        <MinePages.Screen
          name="Login"
          component={LogIn}
          options={{ headerShown: false }}
        />
        <MinePages.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </MinePages.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
  headerStyle: {
    headerStyle: {
      backgroundColor: "#fff",
      borderBottomWidth: 1,
    },
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontSize: 17,
      lineHeight: 22,
    },
  },
});
