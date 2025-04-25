import "react-native-reanimated";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState, useCallback } from "react";
import {
  configureReanimatedLogger,
} from 'react-native-reanimated';

import "./global.css";
import { AnimatedSplash } from "@/components/AnimatedSplash";
import { View } from "react-native";

configureReanimatedLogger({
  strict: false,
});
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Set to true while developing to always show the splash screen
  const DEV_ALWAYS_SHOW_SPLASH = true;

  const [appReady, setAppReady] = useState(false);
  const [splashAnimationComplete, setSplashAnimationComplete] = useState(false);

  // Hide the splash screen after resources are loaded
  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while resources load
        await SplashScreen.preventAutoHideAsync();
        
        // Any other initializations can go here
        // await loadDataFromStorage();
        // await setupAnalytics();
        
        // Pre-load any data you need before app becomes visible
      } catch (e) {
        console.warn(e);
      } finally {
        // Once everything is set up
        setAppReady(true);
      }
    }

    prepare();
  }, []);

  // This callback is called after our splash animation completes
  const onAnimationComplete = useCallback(async () => {
    if (fontsLoaded) {
      setSplashAnimationComplete(true);
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (fontError) throw fontError;
  }, [fontError]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
      {!splashAnimationComplete && DEV_ALWAYS_SHOW_SPLASH && (
        <AnimatedSplash 
          isAppReady={appReady} 
          onAnimationComplete={onAnimationComplete} 
        />
      )}
      <RootLayoutNav />
    </View>
  );
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(tabs)"
      />
    </Stack>
  );
}

