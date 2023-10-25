import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../utils/dummyData";
import MealList from "../components/MealsList/MealList";

function MealsOverview({ route, navigation }) {
  const catId = route.params.categoryId;
  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  return <MealList items={displayMeals} />;
}

export default MealsOverview;
