import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./HomeStack";
import AboutStack from "./AboutStack";

const Drawer = createDrawerNavigator();

export default function RootDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="AboutStack"
          component={AboutStack}
          options={{ title: "About" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

