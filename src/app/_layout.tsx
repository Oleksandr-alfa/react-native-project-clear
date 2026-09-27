



import { Stack } from "expo-router";

export default function RootLayout() {
 
  return (
    
    <Stack initialRouteName="index">
       <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(worker_tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(admin_tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
