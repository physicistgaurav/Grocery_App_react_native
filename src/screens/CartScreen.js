import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "react-native-vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../store/cartSlice";

import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../store/cartSlice";
import { selectProductItems } from "../store/productSlice";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const CartScreen = () => {
  const cartItems = useSelector(selectCartItems);

  const [data, setData] = React.useState([
    {
      id: 1,
      name: "Apple",
      imageloc: require("../assets/applerb.png"),
      price: 450,

      quantity: 1,
      description: "Organic",
    },
    {
      id: 2,
      name: "Banana",
      imageloc: require("../assets/bananarb.png"),
      price: 140,

      quantity: 2,
      description: "Organic",
    },
    {
      id: 3,
      name: "Mango",
      imageloc: require("../assets/mango.png"),
      price: 300,

      quantity: 1,
      description: "Organic",
    },
    {
      id: 4,
      name: "Peach",
      imageloc: require("../assets/peachrb.png"),
      price: 220,

      quantity: 2,
      description: "Organic",
    },
  ]);

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const increaseQuantity = (item) => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = (item) => {
    if (item.quantity == 1) {
      dispatch(removeFromCart(item));
    } else {
      dispatch(decrementQuantity(item));
    }
  };
  const total = cartItems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);
  const onDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const renderItems = ({ item }) => {
    return (
      <View style={styles.FlatListContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={styles.imageStyle} source={item.images[0]} />
          <View style={{ marginLeft: 16 }}>
            <View style={{ width: 100 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  fontFamily: "Ubuntu-Regular",
                }}
              >
                {item.name}
              </Text>
            </View>

            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                // fontFamily: "Ubuntu-Regular",
              }}
            >
              {item.quantity} Kg
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                fontFamily: "Ubuntu-Regular",
                color: "#dc364b",
              }}
            >
              रु{item.price * item.quantity}
            </Text>
          </View>
        </View>
        <View style={{ padding: 5, marginVertical: 5 }}>
          <TouchableOpacity
            onPress={() => increaseQuantity(item)}
            style={styles.plusbtnStyle}
          >
            <FontAwesome
              name="plus"
              size={14}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => decreaseQuantity(item)}
            style={styles.minusbtnStyle}
          >
            <FontAwesome
              name="minus"
              size={14}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => removeItemFromCart(item)}
          style={styles.btnStyle}
        >
          <FontAwesome
            name="close"
            size={20}
            color="white"
            style={styles.closeicon}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
      <View>
        <SafeAreaView style={styles.mainBody}>
          <View style={styles.container}>
            <FlatList
              data={cartItems}
              renderItem={renderItems}
              keyExtractor={(item) => item.id}
            />
          </View>
          <Text style={styles.total}>
            Your Total: <Text style={styles.total2}> रु {total}</Text>{" "}
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}> 💸 Cash Out</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  mainBody: {
    margin: 10,
    padding: 10,
  },
  headerText: {
    fontSize: 34,
    fontWeight: "bold",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 15,
  },
  container: {
    // flex: 1,
    padding: 24,
  },
  FlatListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#bebeb6",
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 16,
  },
  btnStyle: {
    backgroundColor: "red",
    padding: 3,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  plusbtnStyle: {
    backgroundColor: "green",
    padding: 5,
    borderRadius: 50,
    alignItems: "center",
    marginBottom: 5,
    width: 30,
    height: 30,
  },
  minusbtnStyle: {
    backgroundColor: "#e01932",
    padding: 5,
    borderRadius: 50,
    marginBottom: 5,
    width: 30,
    height: 30,
  },
  icon: {
    height: 20,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    marginTop: 3,
  },
  closeicon: {
    height: 30,
    width: 30,
    paddingTop: 4,
    paddingLeft: 6,
  },
  total: {
    marginLeft: 25,
    fontSize: "24",
    fontWeight: "bold",
  },
  total2: {
    marginLeft: 25,
    fontSize: "24",
    fontWeight: "bold",
    color: "red",
  },
  button: {
    backgroundColor: "#3a7c53",
    borderRadius: 15,
    padding: 10,
    margin: 14,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
