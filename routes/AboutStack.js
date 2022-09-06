import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/About";
import { MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
          height: 60,
        },
        headerTintColor: "#444",
      }}>
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          title: "About GameZone",
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
    </Stack.Navigator>
  );
}
