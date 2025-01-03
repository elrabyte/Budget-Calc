import { Tabs } from "expo-router";
import { BottomTabNavigatorProps } from "@react-navigation/bottom-tabs";
import { useAppContext } from "@/app/context/app-context";

export function ThemedTabs({ children }: BottomTabNavigatorProps) {
  const { theme } = useAppContext();
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: theme.colors.background },
        tabBarActiveTintColor: theme.colors.primary,
        // tabBarInactiveTintColor: theme.colors.,
      }}
    >
      {children}
    </Tabs>
  );
}
