import { AppBar, IconButton } from "@react-native-material/core";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const App = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <AppBar
        title="Instagram"
        trailing={(props) => (
          <View style={{ flexDirection: "row" }}>
            <IconButton
              {...props}
              name="chat"
              icon={<AntDesign name="hearto" color={props.color} size={24} />}
            />
            <IconButton
              {...props}
              name="chat"
              icon={<AntDesign name="message1" color={props.color} size={24} />}
            />
          </View>
        )}
        color="#111111"
        style={{ paddingTop: insets.top }}
      />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: "black",
            inactiveTintColor: "rgba(0, 0, 0, 0.5)",
            style: {
              backgroundColor: "#000000",
            },
          }}
        >
          <Tab.Screen
            name="Feed"
            component={() => null}
            options={{
              tabBarLabel: "Início",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "home-sharp" : "home-outline"}
                  size={24}
                  color="black"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={() => null}
            options={{
              tabBarLabel: "Buscar",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "search-sharp" : "search-outline"}
                  size={24}
                  color="black"
                />
              ),
            }}
          />
          <Tab.Screen
            name="Add"
            component={() => null}
            options={{
              tabBarLabel: "Adicionar",
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <MaterialIcons name="add-box" size={24} color="black" />
                ) : (
                  <Octicons name="diff-added" size={24} color="black" />
                ),
            }}
          />
          <Tab.Screen
            name="Video"
            component={() => null}
            options={{
              tabBarLabel: "Videos",
              tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons
                  name={focused ? "movie-open-play" : "movie-open-play-outline"}
                  color="black"
                  size={24}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={() => null}
            options={{
              tabBarLabel: "Perfil",
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "person-circle" : "person-circle-outline"}
                  color="black"
                  size={24}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

const AppProvider = () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
});

export default AppProvider;
