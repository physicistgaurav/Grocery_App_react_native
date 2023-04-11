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

const Stack = createNativeStackNavigator();

const AppStack = () => {
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
        options={{ headerShown: false }}
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
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
