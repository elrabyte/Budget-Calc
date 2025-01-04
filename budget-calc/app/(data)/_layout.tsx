import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useAppContext } from "../context/app-context";
import { ThemedTabs } from "@/components/ThemedTabs";

export default function Layout() {
  const { theme } = useAppContext();
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
    </ThemedTabs>
  );
}
