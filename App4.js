import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useEffect, useState } from "react";

const App4 = () => {
  const [prices, setPrices] = useState(141.8);
  const [pricesTemp, setPricesTemp] = useState(0);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setPricesTemp(prices * quantity);
    setTotal(prices * quantity);
  }, [quantity]);
  return (
    <View style={styles.container}>
      <View style={styles.product}>
        <View style={styles.infor}>
          <Image
            source={require("./assets/book.jpg")}
            resizeMode="cover"
            style={styles.imageProduct}
          />
          <View style={styles.viewInfo}>
            <Text style={styles.txtNameProduct}>
              Nguyên hàm tích phân và ứng dụng
              <br />
              Cung cấp bởi Tiki Trading
            </Text>
            <Text style={styles.prices}>{prices.toFixed(3)} đ</Text>
            <Text style={styles.pricesPre}>141.800 đ</Text>
            <View style={styles.viewQuantity}>
              <TouchableWithoutFeedback
                onPress={() =>
                  quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
                }
              >
                <View style={styles.viewBtnQuantity}>
                  <Text style={{ fontSize: "25px" }}>-</Text>
                </View>
              </TouchableWithoutFeedback>
              <Text style={{ margin: "10px" }}>{quantity}</Text>
              <TouchableWithoutFeedback
                onPress={() => setQuantity(quantity + 1)}
              >
                <View style={styles.viewBtnQuantity}>
                  <Text style={{ fontSize: "25px" }}>+</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
        <View style={styles.sale}>
          <Text
            style={{
              fontSize: "12px",
              fontWeight: "bold",
              marginRight: "20px",
            }}
          >
            Mã giảm giá đã lưu
          </Text>
          <Text
            style={{ fontSize: "12px", fontWeight: "bold", color: "#134FEC" }}
          >
            Xem tại đây
          </Text>
        </View>
        <View style={styles.voucher}>
          <View style={styles.viewVoucher}>
            <Text style={styles.menu}></Text>
            <Text style={{ fontSize: "18px", fontWeight: "bold" }}>
              Mã giảm giá
            </Text>
          </View>
          <TouchableWithoutFeedback>
            <View style={styles.viewBtnApply}>
              <Text
                style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
              >
                Áp dụng
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.viewTiki}>
        <Text
          style={{ fontSize: "12px", fontWeight: "bold", marginRight: "10px" }}
        >
          Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
        </Text>
        <Text
          style={{ fontSize: "12px", fontWeight: "bold", color: "#134FEC" }}
        >
          Nhập tại đây?
        </Text>
      </View>
      <View style={styles.viewTemp}>
        <Text
          style={{ fontSize: "18px", fontWeight: "bold", marginRight: "10px" }}
        >
          Tạm tính
        </Text>
        <Text
          style={{ fontSize: "18px", fontWeight: "bold", color: "#EE0D0D" }}
        >
          {pricesTemp.toFixed(3)} đ
        </Text>
      </View>
      <View style={styles.viewPayment}>
        <View style={styles.viewPricesFinish}>
          <Text
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              marginRight: "10px",
              color: "#808080",
            }}
          >
            Thành tiền
          </Text>
          <Text
            style={{ fontSize: "18px", fontWeight: "bold", color: "#EE0D0D" }}
          >
            {total.toFixed(3)} đ
          </Text>
        </View>
        <TouchableWithoutFeedback>
          <View style={styles.viewBtnOrder}>
            <Text
              style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
            >
              TIẾN HÀNH ĐẶT HÀNG
            </Text>
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  product: {
    width: "100%",
    height: "40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "10px",
  },
  infor: {
    width: "100%",
    height: "150px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageProduct: {
    width: "30%",
    height: "100%",
    borderWidth: "1px",
    borderColor: "black",
  },
  txtNameProduct: {
    fontSize: "12px",
    fontWeight: "bold",
  },
  prices: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#EE0D0D",
  },
  pricesPre: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#808080",
    textDecorationLine: "line-through",
  },
  viewQuantity: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  viewBtnQuantity: {
    width: "20px",
    height: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
    padding: "10px",
  },
  sale: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  voucher: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewVoucher: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: "1px",
    borderColor: "#808080",
    paddingHorizontal: "20px",
    paddingVertical: "10px",
  },
  menu: {
    paddingHorizontal: "20px",
    paddingVertical: "10px",
    backgroundColor: "#F2DD1B",
    marginRight: "10px",
  },
  viewBtnApply: {
    backgroundColor: "#0A5EB7",
    padding: "10px",
  },
  viewTiki: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: "10px",
  },
  viewTemp: {
    paddingHorizontal: "10px",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewPayment: {
    paddingHorizontal: "10px",
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  viewPricesFinish: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  viewBtnOrder: {
    width: "100%",
    height: "45px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E53935",
    borderRadius: "2px",
    marginTop: "20px",
  },
});
export default App4;
