import { StyleSheet } from "react-native";
import { useAppContext } from "@/app/context/app-context";
import { FAB } from "react-native-paper";

type FloatingButtonProps = {
  name: string;
  action: () => void;
};

export const FloatingButton = ({ name, action }: FloatingButtonProps) => {
  const { theme } = useAppContext();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
    },
    fab: {
      position: "absolute",
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: theme.colors.primary,
    },
  });

  return (
    <FAB
      style={styles.fab}
      icon="plus"
      color={theme.colors.onSurface}
      onPress={action}
    />
  );
};
