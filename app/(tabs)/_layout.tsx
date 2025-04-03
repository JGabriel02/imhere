// app/(tabs)/_layout.tsx
import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#1f252f',
                    borderTopColor: 'transparent',
                },
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: '#8e8e93',
            }}>
            <Tabs.Screen 
                name="index" 
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
        </Tabs>
    )
}