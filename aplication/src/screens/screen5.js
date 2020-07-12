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
} from "react-native";
import { color } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default class S5 extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      userEmail: "",
      userPass: "",
    };
  }
  log = () =>{
 
      const { userEmail }  = this.state ;
      const { userPass}  = this.state ;
      
      
     fetch('https://reactnativecode.000webhostapp.com/User_Login.php', {
       method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
      
         email: userEmail,
      
         password: userPassword
      
       })
      
     }).then((response) => response.json())
           .then((responseJson) => {
     
             // If server response message same as Data Matched
            if(responseJson === 'Data Matched client')
             {
     
                 //Then open Profile activity and send user email to profile activity.
                 this.props.navigation.navigate('Espace Client', { Email: userEmail });
     
             }
             else{
              if(responseJson === 'Data Matched pro')
              {
      
                  //Then open Profile activity and send user email to profile activity.
                  this.props.navigation.navigate('Espace Pro', { Email: UserEmail });
      
              }else{Alert.alert(responseJson);}
     
               
             }
     
           }).catch((error) => {
             console.error(error);
           });
      
       }
  }

  render() {
    return (
      <View style={styles.container}>
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
            onChangeText={(userEmail) => this.setState({ userEmail })}
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
            onChangeText={(userPass) => this.setState({ userPass })}
          />
        </View>

        <TouchableHighlight
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => {
            this.log();
          }}
        >
          <Text style={styles.loginText}>Se Connecter</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={() => {
            this.props.navigation.navigate("Inscription");
          }}
        >
          <Text style={{ color: "#3498db" }}>
            Pas encore de Compte ,S'inscrire ?
          </Text>
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
