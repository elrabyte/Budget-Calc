import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { ExpenseEntry } from "../types/expense-entry";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MD3DarkTheme, MD3Theme, PaperProvider } from "react-native-paper";
import { darkTheme } from "../themes/dark-theme";
import { lightTheme } from "../themes/light-theme";

export type AppContextProps = {
  children?: any;
  expenses: ExpenseEntry[];
  addExpense: (expense: ExpenseEntry) => void;
  removeExpense: (id: string) => void;
  income: number;
  theme: MD3Theme;
  isDarkMode: boolean;
  currency: string;
};

const AppContext = createContext<AppContextProps>({
  expenses: [],
  addExpense: () => {},
  removeExpense: () => {},
  income: 6300,
  theme: MD3DarkTheme,
  isDarkMode: true,
  currency: "CHF",
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContext.Provider");
  }
  return context;
};

export const AppContextProvider = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [expenses, setExpenses] = useState<ExpenseEntry[]>([]);
  const [income, setIncome] = useState<number>(6300);
  const [currency, setCurrency] = useState<string>("CHF");

  const theme = useMemo(() => {
    return isDarkMode ? darkTheme : lightTheme;
  }, [isDarkMode]);

  useEffect(() => {
    console.log("isDarkMode", isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    loadExpenses();
  }, []);
  useEffect(() => {
    saveExpenses();
  }, [expenses]);

  function generateGUID(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  const addExpense = (expense: ExpenseEntry) => {
    expense.id = generateGUID();
    console.log(`add expense: ${JSON.stringify(expense)}`);
    setExpenses([...expenses, expense]);
  };
  const removeExpense = (id: string) => {
    console.log(`remove expense: ${id}`);
    setExpenses(expenses.filter((e) => e.id !== id));
  };
  const saveExpenses = async () => {
    try {
      const data = JSON.stringify(expenses);
      if (!data) return;
      await AsyncStorage.setItem("expenses", data);
      console.log(`saved expenses count: ${expenses.length}`);
    } catch (error) {
      alert("Error saving expenses: " + error.message);
    }
  };
  const loadExpenses = async () => {
    try {
      const data = await AsyncStorage.getItem("expenses");
      if (!data) return;
      const expenses: ExpenseEntry[] = JSON.parse(data);
      setExpenses(expenses);
      console.log(`loaded expenses count: ${expenses.length}`);
    } catch (error) {
      alert("Error loading expenses: " + error.message);
    }
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        isDarkMode,
        expenses,
        addExpense,
        removeExpense,
        income,
        currency,
      }}
    >
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </AppContext.Provider>
  );
};
