import { Image, StyleSheet, Text, View } from "react-native";
import Card from "../shared/Card";
import { globalStyles, images } from "../styles/global";

export default function Details(props) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text>{props.route.params.title}</Text>
        <Text>{props.route.params.body}</Text>
        <View style={styles.rating}>
          <Text>GameZone Rating: </Text>
          <Image source={images.ratings[props.route.params.rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
