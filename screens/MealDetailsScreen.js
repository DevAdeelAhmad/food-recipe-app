import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../utils/dummyData";
import MealDetails from "../components/MealDetail";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailsScreen({ route, navigation }) {
  const favoriteMealsContext = useContext(FavoritesContext);

  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);

  const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      favoriteMealsContext.removeFavorite(mealId);
    } else {
      favoriteMealsContext.addFavorite(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
  return (
    <>
      <ScrollView style={styles.container}>
        <Image style source={{ uri: meal.imageUrl }} width={410} height={300} />
        <Text style={styles.text}>{meal.title}</Text>
        <MealDetails
          duration={meal.duration}
          affordability={meal.affordability}
          complexity={meal.complexity}
        />
        <View styles={styles.detailsContainer}>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Ingridients:</Text>
          </View>
          {meal.ingredients.map((ingredient) => (
            <Text style={styles.text1} key={ingredient}>
              {ingredient}
            </Text>
          ))}
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Steps:</Text>
          </View>
          {meal.steps.map((step) => (
            <Text style={styles.text1} key={step}>
              {step}
            </Text>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 32,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    padding: 6,
  },
  text1: {
    fontSize: 15,
    textAlign: "center",
    padding: 6,
    marginVertical: 3,
    borderRadius: 10,
    backgroundColor: "#9e9e9e",
  },
  imageStyle: {},
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomColor: "white",
    borderBottomWidth: 2,
  },
  detailsContainer: {
    width: "80%",
  },
});
