import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const data = [
  { username: "chanh", password: "123" },
  { username: "an", password: "123" },
];

const checkLogin = (username, password) => {
  const user = data.find((user) => user.username === username);
  if (user && user.password === password) {
    return true;
  } else {
    return false;
  }
};

const App1 = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const handleLogin = () => {
    const isLoginSuccess = checkLogin(username, password);
    if (isLoginSuccess) {
      setLoginStatus("Login thành công！");
    } else {
      setLoginStatus("Login thất bại!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: "700", marginRight: 200 }}>
        LOGIN
      </Text>
      <View>
        <View>
          <TextInput
            style={{
              backgroundColor: "#debe3c",
              width: 330,
              height: 54,
              borderWidth: 1,
              borderColor: "#000",
              fontSize: 20,
              paddingLeft: 50,
              marginBottom: 50,
            }}
            placeholder="Name"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Image
            style={{
              width: 38,
              height: 36,
              position: "absolute",
              top: 8,
              left: 5,
            }}
            source={require("./assets/user.png")}
          />
        </View>
        <View>
          <TextInput
            style={{
              backgroundColor: "#debe3c",
              width: 330,
              height: 54,
              borderWidth: 1,
              borderColor: "#000",
              fontSize: 20,
              paddingLeft: 50,
            }}
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Image
            style={{
              width: 38,
              height: 36,
              position: "absolute",
              top: 8,
              left: 5,
            }}
            source={require("./assets/pass.png")}
          />
          <TouchableOpacity
            style={{ position: "absolute", right: 10, top: 10 }}
          >
            <Image
              style={{ width: 38, height: 36 }}
              source={require("./assets/eye1.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: 330,
          height: 45,
          backgroundColor: "#000",
          marginTop: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={handleLogin}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 80 }}>
          CREATE ACCOUNT
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
        {loginStatus}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4c500",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
export default App1;
