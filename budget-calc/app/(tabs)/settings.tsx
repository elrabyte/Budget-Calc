import ThemedView from "@/components/ThemedView";
import DropDownPicker from "react-native-dropdown-picker";
import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { ExpenseEntry } from "../types/expense-entry";
import { Frequencies } from "../types/frequency";
import { useAppContext } from "../app-context";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import { Button, TextInput } from "react-native-paper";

const Tab = createMaterialTopTabNavigator();

const defaultExpense: ExpenseEntry = {
  category: "",
  description: "",
  frequency: Frequencies.filter((f) => f.name == "Monthly")[0],
  payment_account: "",
  price: 0,
};
const { addExpense } = useAppContext();

function ExpensesTab() {
  const [newExpense, setNewExpense] = useState<ExpenseEntry>(defaultExpense);

  const handleAddExpense = () => {
    if (
      newExpense.category &&
      newExpense.description &&
      newExpense.payment_account &&
      newExpense.price > 0
    ) {
      addExpense(newExpense);
      setNewExpense(defaultExpense);
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <ThemedView>
      <TextInput mode="outlined" value={""} />
      <ThemedTextInput
        label="Category"
        value={newExpense.category}
        setValue={(text) => setNewExpense({ ...newExpense, category: text })}
      />
      <ThemedTextInput
        label="Description"
        value={newExpense.description}
        setValue={(text) => setNewExpense({ ...newExpense, description: text })}
      />
      <ThemedTextInput
        label="Payment Account"
        value={newExpense.payment_account}
        setValue={(text) =>
          setNewExpense({ ...newExpense, payment_account: text })
        }
      />
      <DropDownPicker
        theme="DARK"
        open={open}
        value={newExpense.frequency.name}
        items={Frequencies.map((f) => ({ value: f.name, label: f.name }))}
        setOpen={setOpen}
        setItems={() => {}}
        setValue={() => {}}
        onSelectItem={(value) => {
          setOpen(false);
          setNewExpense({ ...newExpense, frequency: { name: value.value! } });
        }}
        multiple={false}
      />
      <ThemedTextInput
        label="Price"
        keyboardType="numeric"
        value={newExpense.price.toString()}
        setValue={(text) =>
          setNewExpense({ ...newExpense, price: parseFloat(text) || 0 })
        }
      />
      <Button mode="contained" onPress={handleAddExpense}>
        Add Expense
      </Button>
    </ThemedView>
  );
}

export default function Settings() {
  return (
    <ThemedView>
      <Tab.Navigator>
        <Tab.Screen name="Expenses" component={ExpensesTab} />
      </Tab.Navigator>
    </ThemedView>
  );
}
