import { useAppContext } from "@/app/context/app-context";
import { StyleSheet } from "react-native";
import { Props, Text } from "react-native-paper";

export type ThemedTextProps = Props & {
  text: string;
};

export function ThemedText({ text }: ThemedTextProps) {
  const { theme } = useAppContext();
  return (
    <Text variant="headlineMedium" style={{ color: theme.colors.onBackground }}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
