import { useAppContext } from "@/app/context/app-context";
import DropDownPicker from "react-native-dropdown-picker";
import { useState } from "react";

type ThemedDropDownMultipleProps = {
  items: { label: string; value: string }[];
  values: string[];
  setValue: (values: string[]) => void;
};
export const ThemedDropDownMultiple = ({
  items,
  values,
  setValue,
}: ThemedDropDownMultipleProps) => {
  const { theme, isDarkMode } = useAppContext();
  const [open, setOpen] = useState(false);
  return (
    <DropDownPicker
      theme={isDarkMode ? "DARK" : "LIGHT"}
      open={open}
      value={values}
      items={items}
      multiple={true}
      setOpen={setOpen}
      setItems={() => {}}
      setValue={() => {}}
      onSelectItem={(selectedItems) => {
        setOpen(false);
        const values = selectedItems.map((i) => i.value?.toString()!);
        setValue(values);
      }}
    />
  );
};
