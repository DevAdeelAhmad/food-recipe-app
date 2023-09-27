import { View, Text, Image, StyleSheet } from "react-native";
import { MEALS } from "../utils/dummyData";
import MealDetails from "../components/MealDetail";

function MealDetailsScreen({ route }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find((meal) => meal.id === mealId);
  return (
    <>
      <View style={styles.container}>
        <Image
          style
          source={{ uri: meal.imageUrl }}
          width={"100%"}
          height={300}
        />
        <Text style={styles.text}>{meal.title}</Text>
        <MealDetails
          duration={meal.duration}
          affordability={meal.affordability}
          complexity={meal.complexity}
        />
        <Text style={styles.text}>Ingridients:</Text>
        {meal.ingredients.map((ingredient) => (
          <Text style={styles.text1} key={ingredient}>
            {ingredient}
          </Text>
        ))}
        <Text style={styles.text}>Steps:</Text>
        {meal.steps.map((step) => (
          <Text style={styles.text1} key={step}>
            {step}
          </Text>
        ))}
      </View>
    </>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  text1: {
    fontSize: 15,
    color: "#9e9e9e",
    textAlign: "center",
  },
  imageStyle: {},
});
