import { AppBar, IconButton } from "@react-native-material/core";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import axios from "axios";

const PostItem = ({ item }) => {
  return (
    <View>
      <View style={styles.createPostContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="person-circle" size={45} color="white" />
          <Text style={styles.profileName}>{item.name}</Text>
        </View>
        <View>
          <Ionicons name="ellipsis-vertical" size={24} color="white" />
        </View>
      </View>
      {item.image && (
        <Image
          source={{ uri: item.image }}
          style={styles.postImage}
          resizeMode="cover"
        />
      )}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "40%",
          }}
        >
          <AntDesign name="hearto" size={24} color="white" />
          <AntDesign name="message1" size={24} color="white" />
          <Feather name="send" size={24} color="white" />
        </View>
        <Feather
          name="bookmark"
          size={24}
          color="white"
          style={{ marginRight: 10 }}
        />
      </View>
      <View style={{ marginBottom: 5 }}>
        <Text style={{ color: "white", marginLeft: 10 }}>
          {item.likes + " curtidas"}
        </Text>
      </View>
      {item.desc && (
        <View style={{ marginBottom: 5 }}>
          <Text style={{ color: "white", marginLeft: 10 }} numberOfLines={5}>
            <Text style={{ fontWeight: "bold" }}>{item.username}</Text>{" "}
            {item.desc}
          </Text>
        </View>
      )}
      <View style={{ marginBottom: 5 }}>
        <Text style={{ color: "gray", marginLeft: 10 }} numberOfLines={5}>
          Ver todos os comentários
        </Text>
      </View>
      <View style={{ marginBottom: 5 }}>
        <Text style={{ color: "gray", marginLeft: 10 }} numberOfLines={5}>
          há 5 minutos • Ver tradução
        </Text>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [people, setPeople] = useState([
    {
      name: "Otavio Canedo",
      username: "otaviocanedo",
      likes: "100",
      desc: "Desenvolvedor entusiasta em busca de soluções inovadoras! 💻🚀 #CodeLife",
      image: "",
    },
    {
      name: "Gui Miranda",
      username: "guimiranda",
      likes: "110",
      desc: "Apaixonado por programação e tecnologia. 💡🖥️ #DevLife",
      image: "",
    },
    {
      name: "Luccas Benedetti",
      username: "luccasbenedetti",
      likes: "120",
      desc: "Explorando o mundo da programação com paixão e dedicação! 🌍👨‍💻",
      image: "",
    },
    {
      name: "Vini Charleaux",
      username: "vinicharleaux",
      likes: "130",
      desc: "Amante do código e da criatividade. 🎵💻 Juntos, podemos criar coisas incríveis!",
      image: "",
    },
    {
      name: "Hiago Martins",
      username: "hiagomartins",
      likes: "140",
      desc: "Focado em aprender e evoluir a cada linha de código! 📚💻 #CodingJourney",
      image: "",
    },
    {
      name: "Danilo Augusto",
      username: "daniloaugusto",
      likes: "150",
      desc: "Vivendo a vida com paixão pela programação! 🌟👨‍💻 #CodePassion",
      image: "",
    },
    {
      name: "Alexandre Ventura",
      username: "alexandreventura",
      likes: "160",
      desc: "Amor pela tecnologia e pela resolução de problemas. 💡🔧 Juntos, podemos criar um futuro digital incrível!",
      image: "",
    },
  ]);

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    const apiKey = "U7KfROdTkvR0sWH5PBIxIULBT5KIvoGEeyadd2kbLucDgk1tTJPNW01E";
    const query = "programing";
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}`,
        {
          headers: {
            Authorization: apiKey,
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        setPeople((prevPeople) => {
          const updatedPeople = prevPeople.map((person, index) => {
            return {
              ...person,
              image: data.photos[index].src.original,
            };
          });

          return [...updatedPeople];
        });
      } else {
        setError("Failed to load photos");
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
          }}
        >
          <ActivityIndicator size="large" color="white" />
        </View>
      ) : (
        <View style={styles.body}>
          <FlatList
            data={people}
            keyExtractor={(item) => item.username}
            horizontal
            renderItem={({ item }) => (
              <View style={styles.storieContainer}>
                <Ionicons name="person-circle" size={65} color="white" />
                <Text style={styles.profileName}>{item.username}</Text>
              </View>
            )}
          />
          <FlatList
            data={people}
            renderItem={({ item }) => <PostItem item={item} />}
          />
        </View>
      )}
    </>
  );
};

const SearchScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Buscar</Text>
    </View>
  );
};

const AddScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Adicionar publicação</Text>
    </View>
  );
};

const VideoScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Reels</Text>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Visualizar perfil</Text>
    </View>
  );
};

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
        color="black"
        style={{ paddingTop: insets.top }}
      />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "rgba(255, 255, 255, 0.6)",
            tabBarStyle: {
              backgroundColor: "black",
            },
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Feed"
            component={HomeScreen}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "home-sharp" : "home-outline"}
                  size={30}
                  color={focused ? "white" : "rgba(255, 255, 255, 0.6)"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "search-sharp" : "search-outline"}
                  size={30}
                  color={focused ? "white" : "rgba(255, 255, 255, 0.6)"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Add"
            component={AddScreen}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <MaterialIcons
                    name="add-box"
                    size={30}
                    color={focused ? "white" : "rgba(255, 255, 255, 0.6)"}
                  />
                ) : (
                  <Octicons
                    name="diff-added"
                    size={30}
                    color={focused ? "white" : "rgba(255, 255, 255, 0.6)"}
                  />
                ),
            }}
          />
          <Tab.Screen
            name="Video"
            component={VideoScreen}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons
                  name={focused ? "movie-open-play" : "movie-open-play-outline"}
                  size={30}
                  color={focused ? "white" : "rgba(255, 255, 255, 0.6)"}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ focused }) => (
                <Ionicons
                  name={focused ? "person-circle" : "person-circle-outline"}
                  size={35}
                  color={focused ? "white" : "rgba(255, 255, 255, 0.6)"}
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
  },
  storieContainer: {
    alignItems: "center",
    marginTop: 10,
    marginRight: 10,
    marginBottom: 30,
    marginLeft: 10,
  },
  profileName: {
    color: "white",
  },
  body: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "space-evenly",
    width: "100%",
  },
  createPostContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "black",
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  postImageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});

export default AppProvider;
