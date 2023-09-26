import { FlatList, View, StyleSheet } from "react-native";

import { MEALS } from "../utils/dummyData";
import MealItem from "../components/MealItem";

function MealsOverview({ route }) {
  const categoryId = route.params.categoryId;
  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(categoryId) >= 0;
  });

  function renderMeals(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      affordability: item.affordability,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeals}
      />
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
