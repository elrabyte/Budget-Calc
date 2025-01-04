import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import ThemedView from "@/components/ThemedView";
import { Text } from "@/components/ThemedTexts";

export default function NotFoundScreen() {
  return (
    <ThemedView style={styles.container}>
      <Text
        icon={""}
        label={""}
        extended={false}
        text={"This screen doesn't exist."}
      />
      <Link href="/" style={styles.link}>
        <Text
          icon={""}
          label={""}
          extended={false}
          text={"Go to home screen!"}
        />
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
