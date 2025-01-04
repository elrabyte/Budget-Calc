import React, { useState } from "react";
import { ExpenseEntry } from "../types/expense-entry";
import { Frequencies } from "../types/frequency";
import { useAppContext } from "../context/app-context";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import { Button } from "react-native-paper";
import { ThemedDropDown } from "@/components/ThemedDropDown";

const defaultExpense: ExpenseEntry = {
  id: "",
  category: "",
  description: "",
  frequencyId: "monthly",
  payment_account: "",
  cost: 0,
};

type AddExpenseProps = {
  close: () => void;
};
export const AddExpense = ({ close }: AddExpenseProps) => {
  const { addExpense } = useAppContext();

  const [newExpense, setNewExpense] = useState<ExpenseEntry>(defaultExpense);
  const [openFrequency, setOpenFrequency] = useState<boolean>(false);

  const handleAddExpense = () => {
    if (
      newExpense.category &&
      newExpense.description &&
      newExpense.payment_account &&
      newExpense.cost > 0
    ) {
      addExpense(newExpense);
      setNewExpense(defaultExpense);
      close();
    } else {
      alert("Please fill out all fields.");
    }
  };
  return (
    <>
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
      <ThemedDropDown
        value={newExpense.frequencyId}
        items={Frequencies.map((f) => ({ value: f.id, label: f.name }))}
        setValue={(id) => {
          const selectedFrequency = Frequencies.filter((f) => f.id == id)[0];
          setOpenFrequency(false);
          setNewExpense({ ...newExpense, frequencyId: selectedFrequency.id });
        }}
      />
      <ThemedTextInput
        label="Price"
        keyboardType="numeric"
        value={newExpense.cost.toString()}
        setValue={(text) =>
          setNewExpense({ ...newExpense, cost: parseFloat(text) || 0 })
        }
      />

      <Button
        mode="contained"
        onPress={() => {
          handleAddExpense();
        }}
      >
        {"Add"}
      </Button>
    </>
  );
};
