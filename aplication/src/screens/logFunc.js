import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Log() {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (userEmail == "") {
    //alert("Please enter Email address");
    setEmail({ email: "Please enter Email address" });
  } else if (reg.test(userEmail) === false) {
    //alert("Email is Not Correct");
    setEmail({ email: "Email is Not Correct" });
    return false;
  } else if (userPass == "") {
    setEmail({ email: "Please enter password" });
  } else {
    fetch("192.168.43.202/config/login.php", {
      method: "post",
      header: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        // we will pass our input data to server
        email: userEmail,
        password: userPass,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson == "ok") {
          // redirect to profile page
          alert("Successfully Login");
          navigation.navigate("Espace Client");
        } else {
          alert("Vous avez saisis les mauvaises informations");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  Keyboard.dismiss();
}
