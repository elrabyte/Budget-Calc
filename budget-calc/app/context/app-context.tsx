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
  income: number;
  theme: MD3Theme;
  isDarkMode: boolean;
  currency: string;
};

const AppContext = createContext<AppContextProps>({
  expenses: [],
  addExpense: () => {},
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
    //init
    loadExpenses();
  }, []);

  const addExpense = (expense: ExpenseEntry) => {
    console.log("add expense...");
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
    saveExpenses();
  };
  const saveExpenses = async () => {
    try {
      const data = JSON.stringify(expenses);
      if (!data) return;
      await AsyncStorage.setItem("expenses", data);
      console.log("saved expenses");
    } catch (error) {
      alert("Error saving expenses: " + error.message);
    }
  };
  const loadExpenses = async () => {
    try {
      const data = await AsyncStorage.getItem("expenses");
      if (!data) return;
      setExpenses(JSON.parse(data));
      console.log("loaded expenses");
    } catch (error) {
      alert("Error loading expenses: " + error.message);
    }
  };

  return (
    <AppContext.Provider
      value={{ theme, isDarkMode, expenses, addExpense, income, currency }}
    >
      <PaperProvider theme={theme}>{children}</PaperProvider>
    </AppContext.Provider>
  );
};
