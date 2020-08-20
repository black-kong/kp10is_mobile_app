//COMMANDER
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  Picker,
} from "react-native";

import {
  Container,
  Header,
  Content,
  ListItem,
  CheckBox,
  Body,
} from "native-base";

import { color } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";




export default class screen9 extends Component {
  constructor() {
    super();
    this.state = {};
  }

  com = () => {
    fetch("http://192.168.43.202/kp10/commandes.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((responseJson) => {})
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return <View></View>;
  }
}
