import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  const [day, setDay] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ninety Days</Text>
      <Text style={styles.day}>Day {day} / 90</Text>

      <Button
        title="Next Day"
        onPress={() => {
          if (day < 90) setDay(day + 1);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
  },
  day: {
    fontSize: 22,
    marginBottom: 20,
  },
});
