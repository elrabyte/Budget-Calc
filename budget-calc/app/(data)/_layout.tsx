import React from "react";
import { ThemedTabs } from "@/components/ThemedTabs";
import { Stack, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { AppContextProvider, useAppContext } from "../context/app-context";

export default function Layout() {
  const { theme } = useAppContext();
  return (
    <Stack>
      <Stack.Screen
        name={"index"}
        options={{
          title: "Overview",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
