import { AppBar, IconButton } from "@react-native-material/core";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
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
      <Image
        source={{ uri: item.image }}
        style={styles.postImage}
        resizeMode="cover"
      />
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
      <View style={{ marginBottom: 5 }}>
        <Text style={{ color: "white", marginLeft: 10 }} numberOfLines={5}>
          <Text style={{ fontWeight: "bold" }}>{item.username}</Text>{" "}
          {item.desc}
        </Text>
      </View>
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
  const people = [
    {
      name: "John Doe",
      desc: "Explorando o mundo! As ruas da cidade são um lugar maravilhoso, onde encontro paz e serenidade.",
      username: "john_doe",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      likes: 1024,
    },
    {
      name: "Jane Smith",
      desc: "Amo viajar! Adoro descobrir novos lugares e compartilhar minhas aventuras.",
      username: "jane_smith",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      likes: 542,
    },
    {
      name: "Alice Johnson",
      desc: "Aventuras diárias! Cada dia é uma nova oportunidade para explorar o desconhecido.",
      username: "alice_j",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      likes: 789,
    },
    {
      name: "Michael Brown",
      desc: "Vida ao ar livre! A natureza é meu playground e estou sempre em busca de novas trilhas para explorar.",
      username: "mike_brown",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      likes: 1236,
    },
    {
      name: "Jessica Parker",
      desc: "Amante da natureza! Encontre-me entre as árvores e montanhas, onde minha alma se sente em casa.",
      username: "jess_nature",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      likes: 654,
    },
    {
      name: "Daniel Johnson",
      desc: "Explorador urbano! As ruas da cidade são meu campo de jogo e adoro descobrir seus segredos escondidos.",
      username: "daniel_city",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      likes: 897,
    },
    {
      name: "Emily Davis",
      desc: "Fotógrafa de viagem! Minha câmera é minha melhor amiga, capturando momentos que duram uma vida inteira.",
      username: "emily_photo",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      likes: 345,
    },
    {
      name: "Matthew Turner",
      desc: "Aventureiro extremo! Não há desafio grande demais para mim. Estou sempre em busca de adrenalina e emoção.",
      username: "matt_adv",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      likes: 1567,
    },
    {
      name: "Olivia Anderson",
      desc: "Aventura na natureza! Meu coração pertence às montanhas e rios, onde encontro paz e serenidade.",
      username: "olivia_nature",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      likes: 978,
    },
    {
      name: "Emma Smith",
      desc: "Aventura na natureza! Descubra o mundo comigo e deixe a natureza te surpreender a cada passo.",
      username: "emma_nature",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      likes: 432,
    },
  ];

  return (
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
