import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { StyleSheet } from "react-native";
import { AppContextProvider, useAppContext } from "./context/app-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as data from "./(data)";
import * as tabs from "./(tabs)";

export default function RootLayout() {
  const Drawer = createDrawerNavigator();
  const { theme } = useAppContext();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 20,
    },
    link: {
      marginTop: 15,
      paddingVertical: 15,
    },
    screen: {
      backgroundColor: "red",
    },
    header: {
      backgroundColor: theme.colors.background,
    },
  });

  return (
    <AppContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.colors.background, // Header background
            },
            headerTintColor: theme.colors.onBackground, // Header text color
            drawerStyle: {
              backgroundColor: theme.colors.background, // Drawer background
            },
            drawerActiveTintColor: theme.colors.primary, // Active item text color
            drawerInactiveTintColor: theme.colors.onSurface, // Inactive item text color
            drawerActiveBackgroundColor: theme.colors.secondaryContainer, // Active item background
          }}
        >
          <Drawer.Screen
            name="(tabs)"
            component={tabs.Home}
            options={{
              title: "Overview",
            }}
          />
          <Drawer.Screen
            name="(data)"
            component={data.Home}
            options={{
              title: "Daten",
            }}
          />
        </Drawer.Navigator>
      </GestureHandlerRootView>
    </AppContextProvider>
  );
}
