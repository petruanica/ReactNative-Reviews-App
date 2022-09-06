import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
          height: 60,
        },
        headerTintColor: "#444",
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "GameZone",
          headerStyle: {
            backgroundColor: "red",
          },
          headerTintColor: "#444",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            letterSpacing: 1,
          },
          headerTitleAlign: "center",
          headerLeft: () => (
            <MaterialIcons
              name="menu"
              size={28}
              onPress={navigation.openDrawer}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ title: "Review Details" }}
      />
    </Stack.Navigator>
  );
}

