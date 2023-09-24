import { Text, View, StyleSheet } from "react-native";

import { MEALS } from "../utils/dummyData";
function MealsOverview({ route }) {
  const categoryId = route.params.categoryId;
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen # {categoryId}</Text>
    </View>
  );
}
export default MealsOverview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
