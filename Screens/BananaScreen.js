import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";

import { FontAwesome } from "react-native-vector-icons";
import ProgressCircle from "react-native-progress-circle";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../store/cartSlice";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const BananaScreen = ({ navigation }) => {
  const BananaInfo = {
    id: 1,
    name: "Bananas Organic",
    price: 140,
    type: "organic",
    rating: 4.8,
    description:
      "The banana pulp contains minerals and vitamins useful and necessary for the human body: Vitamins of group B,E,C.",
    myImage: require("../assets/bananarb2.png"),
  };

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

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

  return (
    <>
      <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
      <ScrollView>
        <View>
          <SafeAreaView style={styles.mainBody}></SafeAreaView>
          <Image style={styles.mainImage} source={BananaInfo.myImage} />
          <View style={styles.priceContainer}>
            <View style={[styles.priceButton, { flexDirection: "row" }]}>
              <Text style={styles.priceText}> रु {BananaInfo.price} </Text>
            </View>
            <FontAwesome
              name="heart"
              size={24}
              color="red"
              style={styles.searchIcon}
            />
          </View>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              margin: 10,
              paddingLeft: 10,
            }}
          >
            {" "}
            {BananaInfo.name}
          </Text>

          <View style={styles.priceContainer}>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome
                name="star"
                size={24}
                color="grey"
                style={styles.searchIcon}
              />
              <Text style={styles.ratingText}>{BananaInfo.rating} Rating</Text>
            </View>

            <FontAwesome
              name="comment"
              size={24}
              color="grey"
              style={styles.searchIcon}
            />
          </View>
          <Text style={styles.bodyText}>{BananaInfo.description}</Text>

          <View
            style={{
              flexDirection: "row",
              margin: 20,
              justifyContent: "space-between",
            }}
          >
            <ProgressCircle
              percent={75}
              radius={50}
              borderWidth={8}
              color="#70ba8c"
              shadowColor="#999"
              bgColor="#fff"
              style={styles.circe}
            >
              <Text style={{ fontSize: 18 }}>{"1.1g"}</Text>
            </ProgressCircle>

            <ProgressCircle
              percent={80}
              radius={50}
              borderWidth={8}
              color="#3399FF"
              shadowColor="#999"
              bgColor="#fff"
              style={styles.circe}
            >
              <Text style={{ fontSize: 18 }}>{"23g"}</Text>
            </ProgressCircle>

            <ProgressCircle
              percent={90}
              radius={50}
              borderWidth={8}
              color="#f2e4af"
              shadowColor="#999"
              bgColor="#fff"
              style={styles.circe}
            >
              <Text style={{ fontSize: 18 }}>{"96"}</Text>
            </ProgressCircle>
          </View>

          {cart.some((value) => value.id == BananaInfo.id) ? (
            <TouchableOpacity
              key={BananaInfo.id}
              onPress={() => removeItemFromCart(BananaInfo)}
              style={styles.button}
            >
              <Text style={styles.text}>- Remove from Cart</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              key={BananaInfo.id}
              onPress={() => addItemToCart(BananaInfo)}
              style={styles.button}
            >
              <Text style={styles.text}>+ Add to Cart</Text>
            </TouchableOpacity>
          )}

          {cart.map((item, index) => (
            <View style={{ padding: 10 }} key={index}>
              <Text>{item.name}</Text>
              <Image
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 8,
                  marginTop: 6,
                }}
                source={{ uri: item.image }}
              />
              <Pressable
                style={{
                  flexDirection: "row",
                  marginTop: 20,
                  alignItems: "center",
                  backgroundColor: "#FF3366",
                  borderRadius: 5,
                  width: 120,
                }}
              >
                <Pressable onPress={() => decreaseQuantity(item)}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: "white",
                      paddingHorizontal: 10,
                    }}
                  >
                    -
                  </Text>
                </Pressable>

                <Pressable>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "white",
                      paddingHorizontal: 10,
                    }}
                  >
                    {item.quantity}
                  </Text>
                </Pressable>

                <Pressable onPress={() => increaseQuantity(item)}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "white",
                      paddingHorizontal: 10,
                    }}
                  >
                    +
                  </Text>
                </Pressable>
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default BananaScreen;

const styles = StyleSheet.create({
  mainBody: {
    margin: 10,
    padding: 10,
  },
  mainImage: {
    width: 320,
    height: 250,
    justifyContent: "center",
    alignSelf: "center",
    margin: 10,
    transform: [{ scaleX: -1 }],
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  priceButton: {
    height: 30,
    width: 60,
    backgroundColor: "#c6cbbc",
    borderRadius: 12,
    justifyContent: "center",
    // alignSelf: "center",
    margin: 10,
  },
  priceText: {
    fontFamily: "Ubuntu-Regular",
    alignSelf: "center",
    color: "#455621",
  },
  searchIcon: {
    marginLeft: 10,
  },
  ratingText: {
    fontFamily: "Ubuntu-Regular",
    alignSelf: "center",
    color: "#455621",
    paddingLeft: 5,
  },
  bodyText: {
    margin: 15,
    paddingLeft: 10,
    marginTop: 20,
    fontSize: 18,
    fontFamily: "Ubuntu-Regular",
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
