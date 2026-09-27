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
      <Tabs.Screen name="admin_screen" options={{
        headerShown: false,
            tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
        />
          <Tabs.Screen name="objects_screen" options={{
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'bed-sharp' : 'bed-outline'} color={color} size={24}/>
          ),
          }} />
          <Tabs.Screen name="workers_screen" options={{
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'people-sharp' : 'people-outline'} color={color} size={24}/>
          ),
           }} />
    </Tabs>
  );
}
