import { View, ViewProps } from "react-native";
import { useAppContext } from "@/app/context/app-context";

export const ThemedView = ({ children }: ViewProps) => {
  const { theme } = useAppContext();

  return (
    // <View style={{ backgroundColor: theme.colors.background }}>{children}</View>
    <View>{children}</View>
  );
};
