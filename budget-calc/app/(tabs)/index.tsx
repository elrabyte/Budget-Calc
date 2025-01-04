import React, { useCallback, useMemo } from "react";
import { useAppContext } from "../context/app-context";

import { StyleSheet } from "react-native";
import ThemedScrollView from "@/components/ThemedScrollView";
import { ThemedSection } from "@/components/ThemedSection";
import { DataTable } from "react-native-paper";
import { getFrequency } from "../types/frequency";

export const Home = () => {
  const { expenses, income, currency } = useAppContext();

  const categories = useMemo(() => {
    return Array.from(new Set(expenses.map((e) => e.category)));
  }, [expenses]);

  const accounts = useMemo(() => {
    return Array.from(new Set(expenses.map((e) => e.payment_account)));
  }, [expenses]);

  const sumCostsMonth = useMemo(() => {
    return expenses.reduce(
      (sum, current) =>
        sum + getFrequency(current.frequencyId).toMonth(current.cost),
      0
    );
  }, [expenses]);
  const sumCostsYear = useMemo(() => {
    return expenses.reduce(
      (sum, current) =>
        sum + getFrequency(current.frequencyId).toYear(current.cost),
      0
    );
  }, [expenses]);

  const savingsMonth = useMemo(
    () => income - sumCostsMonth,
    [expenses, income]
  );
  const savingsYear = useMemo(() => income - sumCostsYear, [expenses, income]);

  const expenseCategoryMonth = useCallback(
    (category: string) => {
      const expense = expenses
        .filter((e) => e.category == category)
        .reduce(
          (sum, current) =>
            sum + getFrequency(current.frequencyId).toMonth(current.cost),
          0
        );
      return expense;
    },
    [expenses]
  );
  const expenseCategoryYear = useCallback(
    (category: string) => {
      const expense = expenses
        .filter((e) => e.category == category)
        .reduce(
          (sum, current) =>
            sum + getFrequency(current.frequencyId).toYear(current.cost),
          0
        );
      return expense;
    },
    [expenses]
  );
  const expenseAccountMonth = useCallback(
    (account: string) => {
      const expense = expenses
        .filter((e) => e.payment_account == account)
        .reduce(
          (sum, current) =>
            sum + getFrequency(current.frequencyId).toMonth(current.cost),
          0
        );
      return expense;
    },
    [expenses]
  );
  const expenseAccountYear = useCallback(
    (account: string) => {
      const expense = expenses
        .filter((e) => e.payment_account == account)
        .reduce(
          (sum, current) =>
            sum + getFrequency(current.frequencyId).toYear(current.cost),
          0
        );
      return expense;
    },
    [expenses]
  );

  return (
    <ThemedScrollView style={styles.container}>
      <ThemedSection title="Monat und Jahr">
        <DataTable>
          <DataTable.Row key={1}>
            <DataTable.Cell>{"Einkommen (Netto)"}</DataTable.Cell>
            <DataTable.Cell numeric>{`${income} ${currency}`}</DataTable.Cell>
            <DataTable.Cell numeric>{`${
              income * 12
            } ${currency}`}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row key={2}>
            <DataTable.Cell>{"Summe der Kosten"}</DataTable.Cell>
            <DataTable.Cell
              numeric
            >{`${sumCostsMonth} ${currency}`}</DataTable.Cell>
            <DataTable.Cell
              numeric
            >{`${sumCostsYear} ${currency}`}</DataTable.Cell>
          </DataTable.Row>
          <DataTable.Row key={3}>
            <DataTable.Cell>{"Rest (Sparen)"}</DataTable.Cell>
            <DataTable.Cell
              numeric
            >{`${savingsMonth} ${currency}`}</DataTable.Cell>
            <DataTable.Cell
              numeric
            >{`${savingsYear} ${currency}`}</DataTable.Cell>
          </DataTable.Row>
        </DataTable>
      </ThemedSection>
      <ThemedSection title="Auf Seite legen pro Monat	">
        <DataTable>
          {accounts.map((account: string) => {
            return (
              <DataTable.Row key={account}>
                <DataTable.Cell>{account}</DataTable.Cell>
                <DataTable.Cell numeric>{`${expenseAccountMonth(
                  account
                )} ${currency}`}</DataTable.Cell>
                <DataTable.Cell numeric>{`${expenseAccountYear(
                  account
                )} ${currency}`}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
      </ThemedSection>
      <ThemedSection title="Kosten je Kategorie	">
        <DataTable>
          {categories.map((category: string) => {
            return (
              <DataTable.Row key={category}>
                <DataTable.Cell>{category}</DataTable.Cell>
                <DataTable.Cell numeric>{`${expenseCategoryMonth(
                  category
                )} ${currency}`}</DataTable.Cell>
                <DataTable.Cell numeric>{`${expenseCategoryYear(
                  category
                )} ${currency}`}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
      </ThemedSection>
    </ThemedScrollView>
  );
};

export default Home;

type RowProps = {
  label: string;
  monat: number;
  jahr: number;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  section: {
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  row: {
    flexDirection: "row", // Arrange items horizontally
    justifyContent: "space-between", // Space between columns
    alignItems: "center", // Align items vertically in the center
    paddingVertical: 8, // Add spacing between rows
    borderBottomWidth: 1, // Optional divider
    borderBottomColor: "#666", // Divider color
  },
  label: {
    flex: 2, // Allocate more space for the label
    fontSize: 16,
    color: "#ffffff", // White text for dark mode
    textAlign: "left", // Align the label text to the left
  },
  value: {
    flex: 1, // Equal space for each value column
    fontSize: 16,
    color: "#ffffff", // White text for dark mode
    textAlign: "right", // Align the values to the right
  },
});
