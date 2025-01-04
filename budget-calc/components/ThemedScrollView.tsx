import { ScrollView, ScrollViewProps } from "react-native";
import { useAppContext } from "@/app/context/app-context";

const ThemedScrollView = ({ children }: ScrollViewProps) => {
  const { theme } = useAppContext();

  return (
    <ScrollView
      style={{
        backgroundColor: theme.colors.background,
      }}
    >
      {children}
    </ScrollView>
  );
};

export default ThemedScrollView;
