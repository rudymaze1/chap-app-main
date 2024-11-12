import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)/login" options={{ title: "login" }} />
      <Stack.Screen name="(auth)/RegisterScreen" options={{ title: "register" }} />
    </Stack>
  );
}
