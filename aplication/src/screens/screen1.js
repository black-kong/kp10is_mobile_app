import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  ScrollViewComponent,
} from "react-native";
import {} from "native-base";
//import { ScrollView } from "react-native-gesture-handler";

//PRESENTATION DE KP10 AVEC LES  PAGES DU SITE WEB
export default function S1() {
  return (
    <View>
      <View>
        <ScrollView>
          <Image
            source={
              (require("../images/bg_4.jpg"))
            }
            style={{ width: "100%", height: 200 }}
          />

          <Image
            source={require("../images/bg_8.jpg")}
            style={{ width: "100%", height: 200 }}
          />

          <Image
            source={require("../images/bg_9.jpg")}
            style={{ width: "100%", height: 200 }}
          />
          <Image
            source={require("../images/bg_10.jpg")}
            style={{ width: "100%", height: 200 }}
          />
        </ScrollView>
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
