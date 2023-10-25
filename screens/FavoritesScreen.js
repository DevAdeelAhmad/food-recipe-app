import { useContext } from "react";
import MealList from "../components/MealsList/MealList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../utils/dummyData";
import { StyleSheet, View, Text } from "react-native";

function FavoritesScreen() {
  const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsContext.ids.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.text}>You have no Favorite Meals yet.🙁</Text>
      </View>
    );
  }
  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
