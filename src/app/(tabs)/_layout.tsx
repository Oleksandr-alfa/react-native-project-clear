


import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs  screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
      }}>
          <Tabs.Screen name="index" options={{
              title: 'Home', 
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
        />
          <Tabs.Screen name="about" options={{
              title: 'About',
              tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
           }} />
          <Tabs.Screen name="navigate" options={{
              title: 'Navigate',
              tabBarIcon: ({ color, focused }) => (
            // <ion-icon name={focused ? 'map-sharp' : 'map-sharp-outline'} color={color} size={24}/>
           <Ionicons name={focused ? 'map' : 'map-outline'} color={color} size={24}/>
        ),
           }} />
    </Tabs>
  );
}
