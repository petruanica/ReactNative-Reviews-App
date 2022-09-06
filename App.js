import { useFonts } from "expo-font";
import { ImageBackground } from "react-native";
import Navigator from "./routes/Drawer";

export default function App() {
  const [fontsLoaded] = useFonts({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Navigator />;
}
