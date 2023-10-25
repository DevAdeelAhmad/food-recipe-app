import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#000000" },
          headerTintColor: "#fff",
          sceneContainerStyle: { backgroundColor: "#5e2df2" },
          drawerContentStyle: {
            backgroundColor: "#9d00ff",
          },
          drawerInactiveTintColor: "#ffffff",
          drawerActiveTintColor: "#ffffff",
          drawerActiveBackgroundColor: "#ffffff5f",
        }}
      >
        <Drawer.Screen
          component={CategoriesScreen}
          name="Categories"
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          component={FavoritesScreen}
          name="Favorites"
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#000000",
            },
            headerTintColor: "#fff",
            contentStyle: {
              backgroundColor: "#5e2df2",
            },
          }}
          initialRouteName="MealsCategories"
        >
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigation}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
            options={{
              title: "About the Meal",
              headerRight: () => {
                return <Button title="Tap Me" />;
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
