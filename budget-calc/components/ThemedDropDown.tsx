import { useAppContext } from "@/app/app-context";
import DropDownPicker, {
  DropDownPickerProps,
} from "react-native-dropdown-picker";
import { useState } from "react";

type ThemedDropDown = DropDownPickerProps<any> & {
  items: { label: string; value: string }[];
  value: string;
  setValue: (value: string) => void;
};
export const ThemedDropDown = ({ items, value, setValue }: ThemedDropDown) => {
  const { theme, isDarkMode } = useAppContext();
  const [open, setOpen] = useState(false);
  return (
    <DropDownPicker
      theme={isDarkMode ? "DARK" : "LIGHT"}
      open={open}
      value={value}
      items={items}
      multiple={false}
      setOpen={setOpen}
      setItems={() => {}}
      setValue={() => {}}
      onSelectItem={(selectedItem) => {
        setOpen(false);
        setValue(selectedItem.value);
      }}
    />
  );
};
