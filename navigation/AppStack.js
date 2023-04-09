import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppleScreen from "../Screens/AppleScreen";
import BananaScreen from "../Screens/BananaScreen";
import CartScreen from "../Screens/CartScreen";
import HomeScreen from "../Screens/HomeScreen";
import MangoScreen from "../Screens/MangoScreen";
import OrangeScreen from "../Screens/OrangeScreen";
import PeachScreen from "../Screens/PeachScreen";
import WaterMelonScreen from "../Screens/WaterMelonScreen";

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
