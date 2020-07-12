import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
} from "react-native";
import { color } from "react-native-reanimated";

export default class S6 extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      userEmail: "",
      userPass: "",
    };
  }
  reg = () => {
    fetch("http://192.168.43.202:8080/kp10/register.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom_client: this.state.userName,

        email_client: this.state.userEmail,

        pass_client: this.state.userPass,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require("../images/nom.png")}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Nom"
            underlineColorAndroid="transparent"
            onChangeText={(nom_client) =>
              this.setState({ userName: nom_client })
            }
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require("../images/email.png")}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(email_client) =>
              this.setState({ userEmail: email_client })
            }
          />
        </View>

        <View style={styles.inputContainer}>
          <Image
            style={styles.inputIcon}
            source={require("../images/pass.png")}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(pass_client) =>
              this.setState({ userPass: pass_client })
            }
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.reg()}
        >
          <Text style={styles.loginText}>S'inscrire</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DCDCDC",
  },
  inputContainer: {
    borderBottomColor: "#F5FCFF",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  inputs: {
    height: 45,
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
