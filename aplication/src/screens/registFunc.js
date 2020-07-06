UserRegistrationFunction = () => {
  fetch(" 192.168.43.202/config/register.php", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userName,

      email: userEmail,

      password: userPass,
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
