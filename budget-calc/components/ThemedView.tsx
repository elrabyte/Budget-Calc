import { View, type ViewProps } from "react-native";
import { useAppContext } from "@/app/app-context";

const ThemedView = ({ children }: ViewProps) => {
  const { theme } = useAppContext();

  return (
    <View style={{ backgroundColor: theme.colors.background }}>{children}</View>
  );
};

export default ThemedView;
