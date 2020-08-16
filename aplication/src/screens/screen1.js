import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {} from "native-base";

//PRESENTATION DE KP10 AVEC LES  PAGES DU SITE WEB
export default function S1() {
  return (
    <View>
      <View style={styles.acc}>
        <Image source={require("../images/about.jpg")} style={styles.image} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  acc: {
    alignItems: "center",
    borderEndColor: "#3498db",
    borderStyle: "solid",
    borderColor: "blue",
    height: 300,
    width: 400,
  },
  image: {
    height: 200,
    width: 350,
  },
});
