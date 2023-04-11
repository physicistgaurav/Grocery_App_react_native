import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
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
import { selectProductItems } from "../store/productSlice";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const ProductScreen = ({ navigation, route }) => {
  const { params } = route;

  const products = useSelector(selectProductItems);

  const productDetail = products?.find((el) => el?.id === params.productId);

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
          <Image style={styles.mainImage} source={productDetail.images[0]} />
          <View style={styles.priceContainer}>
            <View style={[styles.priceButton, { flexDirection: "row" }]}>
              <Text style={styles.priceText}> रु {productDetail.price} </Text>
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
            {productDetail.name}
          </Text>

          <View style={styles.priceContainer}>
            <View style={{ flexDirection: "row" }}>
              <FontAwesome
                name="star"
                size={24}
                color="grey"
                style={styles.searchIcon}
              />
              <Text style={styles.ratingText}>
                {productDetail.rating} Rating
              </Text>
            </View>

            <FontAwesome
              name="comment"
              size={24}
              color="grey"
              style={styles.searchIcon}
            />
          </View>
          <Text style={styles.bodyText}>{productDetail.description}</Text>

          <View
            style={{
              flexDirection: "row",
              margin: 20,
              justifyContent: "space-between",
            }}
          >
            <ProgressCircle
              percent={productDetail.progress1}
              radius={50}
              borderWidth={8}
              color="#70ba8c"
              shadowColor="#999"
              bgColor="#fff"
              style={styles.circe}
            >
              <Text style={{ fontSize: 18 }}>{productDetail.vitaminA}</Text>
            </ProgressCircle>

            <ProgressCircle
              percent={productDetail.progress2}
              radius={50}
              borderWidth={8}
              color="#3399FF"
              shadowColor="#999"
              bgColor="#fff"
              style={styles.circe}
            >
              <Text style={{ fontSize: 18 }}>{productDetail.vitaminB}</Text>
            </ProgressCircle>

            <ProgressCircle
              percent={productDetail.progress3}
              radius={50}
              borderWidth={8}
              color="#f2e4af"
              shadowColor="#999"
              bgColor="#fff"
              style={styles.circe}
            >
              <Text style={{ fontSize: 18 }}>{productDetail.vitaminC}</Text>
            </ProgressCircle>
          </View>
          <TouchableOpacity
            onPress={() => addItemToCart(productDetail)}
            style={styles.button}
          >
            <Text style={styles.text}>+ Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductScreen;

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
