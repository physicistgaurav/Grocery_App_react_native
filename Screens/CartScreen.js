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

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const CartScreen = () => {
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

  const onDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  const renderItems = ({ item }) => {
    return (
      <View style={styles.FLatListContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image style={styles.imageStyle} source={item.imageloc} />
          <View style={{ marginLeft: 16 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                fontFamily: "Ubuntu-Regular",
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "400",
                // fontFamily: "Ubuntu-Regular",
              }}
            >
              {item.description}
            </Text>

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
              }}
            >
              Rs.{item.price}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => onDelete(item.id)}
          style={styles.btnStyle}
        >
          <FontAwesome
            name="close"
            size={24}
            color="white"
            style={styles.icon}
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
          <Text style={styles.headerText}>My Cart</Text>
          <View style={styles.container}>
            <FlatList
              data={data}
              renderItem={renderItems}
              keyExtractor={(item) => item.id}
            />
          </View>
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
    padding: 24,
  },
  FLatListContainer: {
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
    padding: 10,
    borderRadius: 75,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
});
