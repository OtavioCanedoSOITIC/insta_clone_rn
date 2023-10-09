import { AppBar, IconButton } from "@react-native-material/core";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { AntDesign } from "@expo/vector-icons";

function App() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <AppBar
        title="Instagram"
        trailing={(props) => [
          <IconButton
            {...props}
            key="1"
            name="chat"
            icon={<AntDesign name="hearto" size={24} color="white" />}
          />,
          <IconButton
            {...props}
            key="2"
            name="chat"
            icon={<AntDesign name="message1" color="white" size={24} />}
          />,
        ]}
        style={{ paddingTop: insets.top }}
      />
    </View>
  );
}

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
    // backgroundColor: "#000000",
  },
});

export default AppProvider;
