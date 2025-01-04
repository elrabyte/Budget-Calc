import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { useAppContext } from "@/app/context/app-context";

type ThemedDropDown = {
  items: { label: string; value: string }[];
  value: string;
  setValue: (value: string) => void;
};
export const ThemedDropDown = ({ items, value, setValue }: ThemedDropDown) => {
  const { theme } = useAppContext();
  const [open, setOpen] = useState(false);

  const styles = StyleSheet.create({
    input: {
      color: theme.colors.onSurface,
      backgroundColor: theme.colors.surface,
      borderColor: theme.colors.outline,
      width: "100%",
      alignSelf: "center",
      borderRadius: 5,
      marginBottom: 10,
    },
  });

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      multiple={false}
      setOpen={setOpen}
      setItems={() => {}}
      setValue={() => {}}
      onSelectItem={(selectedItem) => {
        setOpen(false);
        setValue(selectedItem.value!);
      }}
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: open ? theme.colors.primary : theme.colors.outline,
        borderRadius: 5,
        marginBottom: 10,
      }}
      dropDownContainerStyle={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.outline,
        borderRadius: 8,
      }}
      textStyle={{
        color: theme.colors.onBackground,
        fontSize: 14,
      }}
      labelStyle={{
        color: theme.colors.onBackground,
      }}
      selectedItemContainerStyle={{
        backgroundColor: theme.colors.secondary,
      }}
      selectedItemLabelStyle={{
        color: theme.colors.onSecondary,
      }}
    />
  );
};
