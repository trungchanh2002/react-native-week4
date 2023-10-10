import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
  Image,
  CheckBox,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

const App3 = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(0);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpCase, setIsUpCase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSpecialSymbol, setIsSpecialSymbol] = useState(false);

  let handlePressBtnGeneratePassword = () => {
    let characters = "";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let number = "0123456789";
    let symbol = "!@#$%^&*()-_=+";

    if (isLowerCase) {
      characters += lowerCase;
    }

    if (isUpCase) {
      characters += upCase;
    }

    if (isNumber) {
      characters += number;
    }

    if (isSpecialSymbol) {
      characters += symbol;
    }

    if (characters.length === 0) {
      console.log("Vui lòng chọn ít nhất một loại ký tự để tạo mật khẩu!");
      return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialSymbol = /[^a-zA-Z0-9]/.test(password);

    if (!hasLowerCase && isLowerCase) {
      const randomIndex = Math.floor(Math.random() * lowerCase.length);
      password = password.slice(0, length - 1) + lowerCase[randomIndex];
    }

    if (!hasUpperCase && isUpCase) {
      const randomIndex = Math.floor(Math.random() * upCase.length);
      password = password.slice(0, length - 1) + upCase[randomIndex];
    }

    if (!hasNumber && isNumber) {
      const randomIndex = Math.floor(Math.random() * number.length);
      password = password.slice(0, length - 1) + number[randomIndex];
    }

    if (!hasSpecialSymbol && isSpecialSymbol) {
      const randomIndex = Math.floor(Math.random() * symbol.length);
      password = password.slice(0, length - 1) + symbol[randomIndex];
    }

    setPassword(password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contents}>
        <Text style={styles.txtTitle}>
          PASSWORD
          <br />
          GENERATOR
        </Text>
        <TextInput style={styles.inputPassword} value={password} />
        <View style={styles.viewChooses}>
          <View style={styles.viewChoose}>
            <Text style={styles.txtChoose}>Password length</Text>
            <TextInput
              style={{
                width: "120px",
                height: "33px",
                backgroundColor: "white",
                fontSize: "20px",
                fontWeight: "bold",
              }}
              value={length}
              onChangeText={(value) => setLength(value)}
            />
          </View>
          <View style={styles.viewChoose}>
            <Text style={styles.txtChoose}>Include lower case letters</Text>
            <CheckBox
              style={styles.checkbox}
              value={isLowerCase}
              onValueChange={() => setIsLowerCase(!isLowerCase)}
            />
          </View>
          <View style={styles.viewChoose}>
            <Text style={styles.txtChoose}>Include upcase letters</Text>
            <CheckBox
              style={styles.checkbox}
              value={isUpCase}
              onValueChange={() => setIsUpCase(!isUpCase)}
            />
          </View>
          <View style={styles.viewChoose}>
            <Text style={styles.txtChoose}>Include number</Text>
            <CheckBox
              style={styles.checkbox}
              value={isNumber}
              onValueChange={() => setIsNumber(!isNumber)}
            />
          </View>
          <View style={styles.viewChoose}>
            <Text style={styles.txtChoose}>Include special symbol</Text>
            <CheckBox
              style={styles.checkbox}
              value={isSpecialSymbol}
              onValueChange={() => setIsSpecialSymbol(!isSpecialSymbol)}
            />
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handlePressBtnGeneratePassword}>
          <View style={styles.viewBtnGeneratePassword}>
            <Text style={styles.txtBtnGenerate}>GENERATE PASSWORD </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "radial-gradient(circle, rgba(196,196,196,1) 0%, rgba(59,59,152,1) 100%)",
  },
  contents: {
    width: "90%",
    height: "92%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#23235B",
    borderRadius: "15px",
    paddingHorizontal: "10px",
  },
  txtTitle: {
    fontSize: "25px",
    fontWeight: "bold",
    color: "white",
  },
  inputPassword: {
    width: "100%",
    height: "55px",
    backgroundColor: "#151537",
    color: "white",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
  },
  viewChooses: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  viewChoose: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: "15px",
  },
  txtChoose: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "white",
  },
  checkbox: {
    width: "25px",
    height: "25px",
  },
  viewBtnGeneratePassword: {
    width: "90%",
    height: "55px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3B3B98",
  },
  txtBtnGenerate: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "white",
  },
});
export default App3;
