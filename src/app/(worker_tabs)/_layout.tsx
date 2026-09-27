


import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';




export default function TabLayout() {
  return (
    <Tabs  screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.5)',
      tabBarStyle: {
      backgroundColor: '#25292e',
    },
      }}>
      <Tabs.Screen name="homescreen" options={{
        headerShown: false,
            tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
        />
          <Tabs.Screen name="about" options={{
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
           }} />
          <Tabs.Screen name="navigate" options={{
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (

           <Ionicons name={focused ? 'map' : 'map-outline'} color={color} size={24}/>
        ),
           }} />
    </Tabs>
  );
}
