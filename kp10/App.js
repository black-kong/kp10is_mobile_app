import React from "react";
import { StyleSheet, Text, View,Image ,SafeAreaView} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  console.log("App executed");
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <pre>Télécharger</pre>
      <h1>Application Mobile</h1>
    <a href="https://google.fr" target="blank">Amen</a>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    /* alignItems: "center",
    justifyContent: "center",*/
  },
});
