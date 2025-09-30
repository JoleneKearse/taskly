import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View } from "react-native";
import { ShoppingListItem } from "../components/ShoppingListItem";
import { theme } from "../theme";
import { useState } from "react";
import { map } from "../eslint.config";

type ShoppingListItemType = {
  id: string;
  name: string;
  isCompleted: boolean;
};

const initialList: ShoppingListItemType[] = [
  { id: "1", name: "Coffee", isCompleted: false },
  { id: "2", name: "Tea", isCompleted: true },
];

export default function App() {
  const [shoppingListItem, setShoppingListItem] = useState("");
  const [shoppingList, setShoppingList] =
    useState<ShoppingListItemType[]>(initialList);

  const handleSubmit = () => {
    if (shoppingListItem.trim() === "") return;
    setShoppingList((prev) => [
      {
        id: Date.now().toString(),
        name: shoppingListItem,
        isCompleted: false,
      },
      ...prev,
    ]);
    setShoppingListItem("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="E.g. New dogs"
        value={shoppingListItem}
        onChangeText={setShoppingListItem}
        keyboardType="default"
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      {shoppingList.map((item) => (
        <ShoppingListItem
          key={item.id}
          name={item.name}
          isCompleted={item.isCompleted}
        />
      ))}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5e5c5cff",
    alignItems: "center",
    paddingTop: 12,
  },
  textInput: {
    borderColor: theme.colorLightGray,
    borderWidth: 2,
    borderRadius: 8,
    width: "90%",
    padding: 8,
    fontSize: 18,
    color: theme.colorWhite,
  },
});
