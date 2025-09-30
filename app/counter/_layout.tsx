import { Link, Stack } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "../../theme";
import { Pressable } from "react-native";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Counter",
          headerRight: () => (
            <Link href="/counter/history" style={{ marginTop: 25 }} asChild>
              <Pressable hitSlop={20}>
                <AntDesign name="history" size={32} color={theme.colorGray} />
              </Pressable>
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
