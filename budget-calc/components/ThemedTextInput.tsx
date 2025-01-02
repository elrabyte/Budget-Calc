import { useAppContext } from "@/app/app-context";
import { StyleSheet } from "react-native";
import { TextInput, TextInputProps } from "react-native-paper";

export type ThemedTextInputProps = TextInputProps & {
  setValue: (value: string) => void;
};
export function ThemedTextInput({
  label,
  keyboardType,
  value,
  setValue,
}: ThemedTextInputProps) {
  const { theme } = useAppContext();

  const styles = StyleSheet.create({
    input: {
      marginBottom: 12,
      backgroundColor: theme.colors.surface,
      borderColor: theme.colors.outline,
    },
  });

  return (
    <TextInput
      label={label}
      mode="outlined"
      keyboardType={keyboardType}
      value={value}
      onChangeText={(text) => {
        setValue(text);
      }}
      style={styles.input}
    />
  );
}
