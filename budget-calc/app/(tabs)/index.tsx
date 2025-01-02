import React, { useMemo, useState } from "react";
import { DataTable, Text } from "react-native-paper";
import { useAppContext } from "../app-context";
import { ThemedText } from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import { ThemedDropDownMultiple } from "@/components/ThemedDropDownMultiple";

export const Home = () => {
  const { expenses } = useAppContext();
  const [sortColumn, setSortColumn] = useState("category");
  const [sortAscending, setSortAscending] = useState(true);

  const [groupCategories, setGroupCategories] = useState<string[]>([]);
  const groupedCategories = useMemo(() => {
    const categories = expenses.map((e) => ({
      label: e.category,
      value: e.category,
    }));
    return [...new Set(categories), { label: "-", value: "" }];
  }, [expenses]);

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
    <ThemedView>
      <ThemedText
        text="Expense Entries"
        icon={""}
        label={""}
        extended={false}
      />
      <ThemedDropDownMultiple
        items={groupedCategories}
        values={groupCategories}
        setValue={(values) => {
          setGroupCategories(values);
        }}
      />
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
            <DataTable.Cell>{item.price.toFixed(2)}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </ThemedView>
  );
};

export default Home;
