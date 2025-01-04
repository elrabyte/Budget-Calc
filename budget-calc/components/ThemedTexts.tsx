import { useAppContext } from "@/app/context/app-context";
import { StyleProp, TextStyle } from "react-native";
import { Text } from "react-native-paper";

export type ThemedTextProps = {
  text: string;
  style?: StyleProp<TextStyle>;
};

export function ThemedText({ text }: ThemedTextProps) {
  const { theme } = useAppContext();
  return <Text style={{ color: theme.colors.onBackground }}>{text}</Text>;
}
export function ThemedLabel({ text }: ThemedTextProps) {
  const { theme } = useAppContext();
  return (
    <Text
      variant="labelMedium"
      style={{ color: theme.colors.onBackground, fontWeight: "bold" }}
    >
      {text}
    </Text>
  );
}

export function ThemedSubTitle({ text }: ThemedTextProps) {
  const { theme } = useAppContext();
  return (
    <Text variant="bodyLarge" style={{ color: theme.colors.onBackground }}>
      {text}
    </Text>
  );
}
