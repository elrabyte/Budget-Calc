import React, { useMemo, useState } from "react";
import { FloatingButton } from "@/components/FloatingButton";
import { Popup } from "@/components/Popup";
import ThemedScrollView from "@/components/ThemedScrollView";
import { AddExpense } from "./AddExpense";
import { DataTable } from "react-native-paper";
import { useAppContext } from "../context/app-context";

export const Home = () => {
  const { expenses } = useAppContext();
  const [showAddExpense, setShowAddExpense] = useState<boolean>(false);
  const [sortColumn, setSortColumn] = useState("category");
  const [sortAscending, setSortAscending] = useState(true);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortAscending(!sortAscending);
    } else {
      setSortColumn(column);
      setSortAscending(true);
    }
  };

  const sortedExpenses = [...expenses].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortAscending ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortAscending ? 1 : -1;
    return 0;
  });
  return (
    <>
      <ThemedScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title
              sortDirection={
                sortColumn === "category"
                  ? sortAscending
                    ? "ascending"
                    : "descending"
                  : undefined
              }
              onPress={() => handleSort("category")}
            >
              Category
            </DataTable.Title>
            <DataTable.Title
              sortDirection={
                sortColumn === "description"
                  ? sortAscending
                    ? "ascending"
                    : "descending"
                  : undefined
              }
              onPress={() => handleSort("description")}
            >
              Description
            </DataTable.Title>
            <DataTable.Title
              sortDirection={
                sortColumn === "frequency"
                  ? sortAscending
                    ? "ascending"
                    : "descending"
                  : undefined
              }
              onPress={() => handleSort("frequency")}
            >
              Frequency
            </DataTable.Title>
            <DataTable.Title
              sortDirection={
                sortColumn === "price"
                  ? sortAscending
                    ? "ascending"
                    : "descending"
                  : undefined
              }
              onPress={() => handleSort("price")}
            >
              Price
            </DataTable.Title>
          </DataTable.Header>
          {sortedExpenses.map((item, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell>{item.category}</DataTable.Cell>
              <DataTable.Cell>{item.description}</DataTable.Cell>
              <DataTable.Cell>{item.frequency.name}</DataTable.Cell>
              <DataTable.Cell>{item.cost.toFixed(2)}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ThemedScrollView>
      <FloatingButton
        name="Add Expense"
        action={() => {
          setShowAddExpense(true);
        }}
      />

      <Popup
        title="Add Expense"
        visible={showAddExpense}
        setVisible={setShowAddExpense}
      >
        <AddExpense
          close={() => {
            setShowAddExpense(false);
          }}
        />
      </Popup>
    </>
  );
};
export default Home;
