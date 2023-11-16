import * as React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button
        title="Profile"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
      <Button
        title="Settings"
        onPress={() => {
          navigation.navigate("Settings");
        }}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: "absolute" },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator initialRouteName="Feed">
      <Tab.Screen name="Feed" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>SettingsSettings Settings!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            presentation: "card",
          }}
        />

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ presentation: "card" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
