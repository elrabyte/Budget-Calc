import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { StyleSheet } from "react-native";
import { AppContextProvider } from "./context/app-context";

export default function RootLayout() {
  return (
    <AppContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer>
          <Drawer.Screen
            name="(tabs)"
            options={{ headerShown: true, title: "Overview" }}
          />
          <Drawer.Screen
            name="(data)"
            options={{ headerShown: true, title: "Daten" }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </AppContextProvider>
  );
}

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
});
