import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './src/home';
import DetailsPage from './src/details';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {

  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="DetailsPage" component={DetailsPage} />
      </Stack.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MyStack></MyStack>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
