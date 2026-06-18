import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { colors } from '../constants/colors';
import HomeScreen from '../screens/HomeScreen';
import GitaScreen from '../screens/GitaScreen';
import CharactersScreen from '../screens/CharactersScreen';
import AskScreen from '../screens/AskScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ParvaDetailScreen from '../screens/ParvaDetailScreen';
import WarRoomScreen from '../screens/WarRoomScreen';
import GitaChapterScreen from '../screens/GitaChapterScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabIcon = ({ emoji, focused }) => (
  <View style={[styles.tabIconWrap, focused && styles.tabIconActive]}>
    <Text style={[styles.tabEmoji, { opacity: focused ? 1 : 0.5 }]}>{emoji}</Text>
  </View>
);

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Parva" component={ParvaDetailScreen} />
      <Stack.Screen name="WarRoom" component={WarRoomScreen} />
    </Stack.Navigator>
  );
}

function GitaStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GitaMain" component={GitaScreen} />
      <Stack.Screen name="GitaChapter" component={GitaChapterScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarShowLabel: true,
          tabBarLabelStyle: styles.tabLabel,
          tabBarActiveTintColor: colors.gold,
          tabBarInactiveTintColor: colors.textMuted,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon emoji="🏠" focused={focused} />,
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Gita"
          component={GitaStack}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon emoji="📿" focused={focused} />,
            tabBarLabel: 'Gita',
          }}
        />
        <Tab.Screen
          name="Ask"
          component={AskScreen}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon emoji="🪈" focused={focused} />,
            tabBarLabel: 'Ask',
          }}
        />
        <Tab.Screen
          name="Characters"
          component={CharactersScreen}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon emoji="👥" focused={focused} />,
            tabBarLabel: 'People',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon emoji="🙏" focused={focused} />,
            tabBarLabel: 'You',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.bgCard,
    borderTopColor: colors.border,
    borderTopWidth: 1,
    height: 70,
    paddingBottom: 10,
    paddingTop: 6,
  },
  tabLabel: { fontSize: 10, fontWeight: '600', marginTop: 2 },
  tabIconWrap: { width: 32, height: 32, alignItems: 'center', justifyContent: 'center', borderRadius: 10 },
  tabIconActive: { backgroundColor: colors.gold + '22' },
  tabEmoji: { fontSize: 20 },
});
