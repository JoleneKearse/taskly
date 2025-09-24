import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { theme } from "./theme";

export default function App() {
  const handleDelete = () => {
    Alert.alert(
      "Are you sure you want to delete this item?",
      "This action cannot be undone.",
      [
        {
          text: "Yes",
          onPress: () => console.log("Item deleted"),
          style: "destructive",
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemText}>Drunken dove party!</Text>
        <TouchableOpacity
          onPress={handleDelete}
          activeOpacity={0.6}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252222ff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContainer: {
    borderBottomWidth: 10,
    borderBottomColor: "#1a759fff",
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
    color: "#fff",
  },
  button: {
    backgroundColor: theme.colorPurple,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
