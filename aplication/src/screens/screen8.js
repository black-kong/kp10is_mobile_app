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

export default class screen8 extends Component {
  constructor() {
    super();
    this.state = {
      sLabel: "",
    };
  }
  show = (value) => {
    this.setState({ sLabel: value });
  };
  /*com = () => {
    fetch("http://192.168.43.202/kp10/login.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.userEmail,

        password: this.state.userPass,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson === "ok") {
          this.props.navigation.navigate("Espace Client");
        } else {
          Alert.alert(responseJson);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };*/
  render() {
    return (
      <View style={styles.container}>
        <Text> Saisissez votre commande </Text>
        <View>
          <Picker
            selectedValue={this.state.sLabel}
            onValueChange={this.show.bind()}
          >
            <Picker.Item
              label="Service"
              value="0"
              color="#3498db"
            ></Picker.Item>
            <Picker.Item
              label="Sondage"
              value="1"
              color="#3498db"
            ></Picker.Item>
            <Picker.Item
              label="Analyse de données"
              value="2"
              color="#3498db"
            ></Picker.Item>
            <Picker.Item
              label="Modélisation"
              value="3"
              color="#3498db"
            ></Picker.Item>
            <Picker.Item
              label="Prédiction"
              value="4"
              color="#3498db"
            ></Picker.Item>
            <Picker.Item
              label="Évaluation d'impact de projets"
              value="5"
              color="#3498db"
            ></Picker.Item>
            <Picker.Item
              label="Étude de marché"
              value="6"
              color="#3498db"
            ></Picker.Item>
            <Picker.Item
              label="Analyse des risques"
              value="7"
              color="#3498db"
            ></Picker.Item>
            <Picker.Item
              label="Conception de stratégie de marketing"
              value="8"
              color="#3498db"
            ></Picker.Item>
            <Picker.Item
              label="Gestion de chantier de A à Z"
              value="9"
              color="#3498db"
            ></Picker.Item>
            <Picker.Item
              label="Création d'entreprise de A à Z"
              value="10"
              color="#3498db"
            ></Picker.Item>
          </Picker>
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require("../images/icons8-fountain-pen-48.png")}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Description"
            //keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(desc) => this.setState({ desc })}
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require("../images/icons8-horloge-64.png")}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Durée maximale du projet"
            //keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(desc) => this.setState({ desc })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => {
            this.com();
          }}
        >
          <Text style={styles.loginText}>commander</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 400,
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputCtner: {
    borderBottomColor: "#F5FCFF",
    //backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 400,
    height: 50,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 50,
    marginLeft: 16,
    borderBottomColor: "#FFFFFF",
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: "center",
  },
  buttonContainer: {
    height: 45,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: "white",
  },
});
