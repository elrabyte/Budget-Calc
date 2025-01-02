import React from "react";
import { AppContextProvider, useAppContext } from "../app-context";
import { ThemedTabs } from "@/components/ThemedTabs";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout() {
  const { theme } = useAppContext();
  return (
    <AppContextProvider>
      <ThemedTabs>
        <Tabs.Screen
          name={"index"}
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name={"settings"}
          options={{
            title: "Settings",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                color={color}
              />
            ),
          }}
        />
      </ThemedTabs>
    </AppContextProvider>
  );
}
