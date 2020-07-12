import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Root } from "native-base";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
} from "native-base";

import First from "./src/routes/first";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
    this.setState({ loading: false });
  }
  render() {
    if (this.state.loading) {
      return (
        <Root>
          <First />
        </Root>
      );
    } else {
      return (
        <Root>
          <First />
        </Root>
      );
    }
  }
}
