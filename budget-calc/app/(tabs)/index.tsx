import React, { useMemo } from "react";
import { useAppContext } from "../context/app-context";

import { ScrollView, StyleSheet, View, Text } from "react-native";

export const Home = () => {
  const { expenses, income } = useAppContext();

  // const categories = useMemo(() => {
  //   return new Set(expenses.map((e) => e.category));
  // }, [expenses]);

  // const sumCostsMonth = useMemo(() => {
  //   return expenses.reduce(
  //     (sum, current) => sum + current.frequency.toMonth(current.cost),
  //     0
  //   );
  // }, [expenses]);
  // const sumCostsYear = useMemo(() => {
  //   return expenses.reduce(
  //     (sum, current) => sum + current.frequency.toYear(current.cost),
  //     0
  //   );
  // }, [expenses]);

  // const savingsMonth = useMemo(
  //   () => income - sumCostsMonth,
  //   [expenses, income]
  // );
  // const savingsYear = useMemo(() => income - sumCostsYear, [expenses, income]);

  return (
    <ScrollView style={styles.container}>
      <Section title="Monat und Jahr">
        <></>
        {/* <Row label="Einkommen (Netto)" monat={income} jahr={income * 12} /> */}
        {/* <Row
          label="Summe der Kosten"
          monat={sumCostsMonth}
          jahr={sumCostsYear}
        />
        <Row label="Rest (Sparen)" monat={savingsMonth} jahr={savingsYear} /> */}
      </Section>

      <Section title="Auf Seite legen pro Monat">
        <></>
      </Section>

      <Section title="Kosten pro Zahlungsmethode">
        <></>
      </Section>

      {/* <Section title="Kosten je Kategorie pro Monat">
        {Object.entries(categories).map(([key, value]) => (
          <Row label={key} monat={value} jahr={value} />
        ))}
      </Section> */}
    </ScrollView>
  );
};

export default Home;

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const Row = ({ label, monat, jahr }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{`${monat.toLocaleString("de-CH", {
      style: "currency",
      currency: "CHF",
    })}`}</Text>
    {jahr && (
      <Text style={styles.value}>{`${jahr.toLocaleString("de-CH", {
        style: "currency",
        currency: "CHF",
      })}`}</Text>
    )}
  </View>
);

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
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    color: "#333",
  },
});
