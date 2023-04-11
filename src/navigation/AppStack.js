import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppleScreen from "../screens/AppleScreen";
import BananaScreen from "../screens/BananaScreen";
import CartScreen from "../screens/CartScreen";
import HomeScreen from "../screens/HomeScreen";
import MangoScreen from "../screens/MangoScreen";
import OrangeScreen from "../screens/OrangeScreen";
import PeachScreen from "../screens/PeachScreen";
import ProductScreen from "../screens/ProductScreen";
import WaterMelonScreen from "../screens/WaterMelonScreen";
import { useNavigation } from "@react-navigation/native";

import { Text, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../store/cartSlice";

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const navigation = useNavigation();
  const cartItemsCount = useSelector(selectCartItemsCount);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductScreen}
        options={{
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("cart")}>
              <View style={{ position: "relative" }}>
                <AntDesign name="shoppingcart" size={24} color="black" />
                <View
                  style={{
                    position: "absolute",
                    right: -10,
                    top: -10,
                    backgroundColor: "red",
                    height: 20,
                    width: 20,
                    borderRadius: "50%",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 12, color: "white" }}>
                    {cartItemsCount}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="apple"
        component={AppleScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="banana"
        component={BananaScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="peach"
        component={PeachScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="mango"
        component={MangoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="melon"
        component={WaterMelonScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="oranges"
        component={OrangeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="cart"
        component={CartScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
