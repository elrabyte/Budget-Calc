import { useAppContext } from "@/app/context/app-context";
import { StyleSheet, View } from "react-native";
import { ThemedSubTitle } from "./ThemedTexts";

export const ThemedSection = ({ title, children }) => {
  const { theme } = useAppContext();

  const styles = StyleSheet.create({
    section: {
      margin: 15,
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: "#ccc",
      paddingBottom: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 12,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 8,
    },
    label: {
      fontWeight: "bold",
    },
    value: {
      color: "#333",
    },
  });

  return (
    <View style={styles.section}>
      <ThemedSubTitle text={title} />
      {children}
    </View>
  );
};
