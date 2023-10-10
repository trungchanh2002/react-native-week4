import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextBase,
  LogBox,
  TouchableOpacity,
} from "react-native";
import ImagePicker from "react-native-image-picker";

const App2 = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = () => {
    const options = {
      title: "Chọn hình ảnh",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        setSelectedImage({ uri: response.uri });
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.body1}>
        <Image
          source={require("./assets/usb.png")}
          style={styles.productImage}
        />
        <Text style={styles.productName}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          Bluetooth
        </Text>
      </View>

      <View style={styles.body2}>
        <Text style={styles.rating}>Cực kỳ hài lòng</Text>
        <View style={styles.starContainer}>
          <Image source={require("./assets/sao.png")} style={styles.star} />
          <Image source={require("./assets/sao.png")} style={styles.star} />
          <Image source={require("./assets/sao.png")} style={styles.star} />
          <Image source={require("./assets/sao.png")} style={styles.star} />
          <Image source={require("./assets/sao.png")} style={styles.star} />
        </View>
      </View>

      <View style={styles.body3}>
        <TouchableOpacity
          style={styles.touchableContent}
          onPress={handleImagePicker}
        >
          <Image
            source={require("./assets/camera.png")}
            style={styles.cameraIM}
          />
          <Text style={styles.textTHA}>Thêm hình ảnh</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body4}>
        <Text style={styles.textbd4}>
          Hãy chia sẻ những điều mà bạn thích về sản phẩm
        </Text>
        <Text style={styles.textlink4}>
          https://meet.google.com/nsj-ojwi-xpp
        </Text>
      </View>

      <View style={styles.body5}>
        <Text style={styles.submitButton}>Gửi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingLeft: 20,
    paddingRight: 20,
  },
  body1: {
    flex: 0.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  body2: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 50,
  },
  body3: {
    flex: 0.3,
    padding: 12,
    borderColor: "blue",
    borderWidth: 4,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  body4: {
    flex: 1.4,
    marginTop: 7,
    padding: 10,
    borderRadius: 8,
    borderColor: "#C0C0C0",
    borderWidth: 4,
  },
  body5: {
    flex: 0.3,
    padding: 10,
  },
  touchableContent: {
    flexDirection: "row",
    alignItems: "center",
  },

  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  star: {
    width: 30,
    height: 30,
    marginRight: 14,
  },
  starContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rating: {
    padding: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  review: {
    fontSize: 16,
  },
  textbd4: {
    fontSize: 20,
    color: "#C0C0C0",
    fontWeight: "bold",
  },
  textlink4: {
    paddingTop: 140,
    fontSize: 16,
    textAlign: "right",
  },
  submitButton: {
    fontSize: 18,
    color: "white",
    backgroundColor: "#0033CC",
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  textTHA: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cameraIM: {
    width: 50,
    height: 40,
    marginRight: 10,
  },
});

export default App2;
