import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

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

import P1 from "../pages/page1";
import P2 from "../pages/page2";

import S6 from "../screens/screen6";
import S7 from "../screens/screen7";
import S8 from "../screens/screen8";
import S9 from "../screens/screen9";
import S10 from "../screens/screen10";
import S11 from "../screens/screen11";
import S12 from "../screens/screen12";
import S13 from "../screens/screen13";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const TopTabs = createMaterialTopTabNavigator();

export default class First extends Component {
  render() {
    myTopTab = () => {
      return (
        <TopTabs.Navigator>
          <TopTabs.Screen />
          <TopTabs.Screen />
          <TopTabs.Screen />
          <TopTabs.Screen />
          <TopTabs.Screen />
        </TopTabs.Navigator>
      );
    };
    myDrawer = () => {
      return (
        <Drawer.Navigator>
          <Drawer.Screen name="Profil" component={S7} />
          <Drawer.Screen name="Commander" component={S8} />
          <Drawer.Screen name="Mes Commandes" component={S9} />
          <Drawer.Screen name="Notifications" component={S10} />
        </Drawer.Navigator>
      );
    };
    myDrawer1 = () => {
      return (
        <Drawer.Navigator>
          <Drawer.Screen name="Profil" component={S7} />
          <Drawer.Screen name="New Commandes" component={S11} />
          <Drawer.Screen name="Projets encours" component={S12} />
          <Drawer.Screen name="Notifications" component={S10} />
        </Drawer.Navigator>
      );
    };
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="KP10 IS"
            component={P1}
            options={{
              headerStyle: {
                backgroundColor: "#3498db",
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="Inscription"
            component={S6}
            options={{
              headerStyle: {
                backgroundColor: "#3498db",
              },
              headerTintColor: "#fff",
            }}
          />

          <Stack.Screen
            name="LoginP"
            component={S13}
            options={{
              headerStyle: {
                backgroundColor: "#3498db",
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="Espace Client"
            children={myDrawer}
            options={{
              headerStyle: {
                backgroundColor: "#3498db",
              },
              headerTintColor: "#fff",
            }}
          />
          <Stack.Screen
            name="Espace Pro"
            children={myDrawer1}
            options={{
              headerStyle: {
                backgroundColor: "#3498db",
              },
              headerTintColor: "#fff",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
