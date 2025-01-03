import React from "react";
import { ThemedTabs } from "@/components/ThemedTabs";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { AppContextProvider, useAppContext } from "../context/app-context";

export default function Layout() {
  // const { theme } = useAppContext();
  return (
    <ThemedTabs>
      <Tabs.Screen
        name={"index"}
        options={{
          title: "Overview",
          headerShown: false,
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
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              color={color}
            />
          ),
        }}
      />
    </ThemedTabs>
  );
}
