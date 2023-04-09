import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontAwesome } from "react-native-vector-icons";

const SCREEN_WIDTH = Dimensions.get("window").width;

const HomeScreen = () => {
  const [fontsLoaded] = useFonts({
    "Ubuntu-Regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
    "Popppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!fontsLoaded) {
      return;
    }
  }, [fontsLoaded]);

  const categories = [
    { id: 1, label: "Nuts", image: require("../assets/acorn.png") },
    { id: 2, label: "Vegetables", image: require("../assets/vegetable.png") },
    { id: 3, label: "Fruits", image: require("../assets/fruits.png") },
    {
      id: 4,
      label: "Gluten-free",
      image: require("../assets/gluten-free.png"),
    },
    { id: 5, label: "Drinks", image: require("../assets/poinsettia.png") },
  ];

  return (
    <ScrollView>
      <View>
        <SafeAreaView style={styles.mainBody}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              Good for you. {"\n"}Great for you.
            </Text>
            <Icon
              name="bell"
              size={30}
              color="grey"
              style={{ paddingRight: 15 }}
            />
          </View>
          <View style={styles.searchContainer}>
            <FontAwesome
              name="search"
              size={24}
              color="black"
              style={styles.searchIcon}
            />
            <TextInput
              placeholder="What are you looking for?"
              style={styles.inputBox}
              value={search}
              onChangeText={(text) => setSearch(text)}
            />
            <Icon name="sliders" size={30} color="grey" style={styles.icon} />
          </View>
          <Text style={styles.bodyText}>Categories</Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesBar}
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "column" }}>
                <TouchableOpacity>
                  <View style={styles.barCard}>
                    <Image
                      style={{ width: 50, height: 50 }}
                      source={item.image}
                    />
                  </View>
                </TouchableOpacity>
                <Text style={styles.categoryLabel}>{item.label}</Text>
              </View>
            )}
          />
        </SafeAreaView>
      </View>
      <View style={{ flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.box}>
            <Image
              style={styles.cardImage}
              source={require("../assets/bananarb.png")}
            />
            <Text style={styles.cardText}>Organic Bananas</Text>
            <Text style={styles.cardPrice}>$1.00</Text>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.cardImage}
              source={require("../assets/peachrb.png")}
            />
            <Text style={styles.cardText}>Peach</Text>
            <Text style={styles.cardPrice}>$1.99</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.box}>
            <Image
              style={styles.cardImage}
              source={require("../assets/applerb.png")}
            />
            <Text style={styles.cardText}>Apple</Text>
            <Text style={styles.cardPrice}>$2.05</Text>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.cardImage}
              source={require("../assets/mango.png")}
            />
            <Text style={styles.cardText}>Mango</Text>
            <Text style={styles.cardPrice}>$4.00</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={styles.box}>
            <Image
              style={styles.cardImage}
              source={require("../assets/melon.png")}
            />
            <Text style={styles.cardText}>Water Melon</Text>
            <Text style={styles.cardPrice}>$3.57</Text>
          </View>
          <View style={styles.box}>
            <Image
              style={styles.cardImage}
              source={require("../assets/orangesrb.png")}
            />
            <Text style={styles.cardText}>Oranges</Text>
            <Text style={styles.cardPrice}>$2.99</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainBody: {
    margin: 10,
    padding: 10,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "500",
    fontFamily: "Ubuntu-Regular",
  },
  bodyText: {
    fontSize: 25,
    fontWeight: "400",
    fontFamily: "Ubuntu-Regular",
    marginTop: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eceff7",
    borderRadius: 15,
    marginTop: 25,
    padding: 10,
  },
  inputBox: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: "black",
  },
  icon: {
    paddingHorizontal: 5,
    paddingRight: 15,
  },
  searchIcon: {
    paddingRight: 15,
  },
  categoriesBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // paddingLeft: 10,
    // paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  barCard: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
    backgroundColor: "#add3dc",
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "column",
  },
  categoryLabel: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 14,
  },
  box: {
    flex: 1,
    backgroundColor: "#bbdae2",
    borderRadius: 20,
    margin: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardText: {
    marginTop: 20,
    fontWeight: "bold",
    textAlign: "flex-start",
    alignSelf: "flex-start",
    fontFamily: "Ubuntu-Regular",
    fontSize: 18,
  },
  cardPrice: {
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "green",
    textAlign: "flex-start",
    alignSelf: "flex-start",
    fontFamily: "Ubuntu-Regular",
    fontSize: 18,
  },
});
