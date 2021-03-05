
import React from 'react';
import { StyleSheet,View,Text,StatusBar} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Ant from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import * as Screens from './Screens';

const Tab = createBottomTabNavigator();

const tabs = ()=>(
  <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let bg = focused ? { backgroundColor: "#1D262A", borderRadius: 8, padding: 8 } : { backgroundColor: 'white' };
            if (route.name === 'Home') {
              return <Ant name="home" size={size} color={color} style={bg} />
            } else if (route.name === 'ShopBag') {
              return <Feather name="shopping-bag" size={size} color={color} style={bg} />
            } else if (route.name === 'Search') {
              return <Ant name="search1" size={size} color={color} style={bg} />
            } else if (route.name === 'Profile') {
              return <Feather name="user" size={size} color={color} style={bg} />
            }

            // You can return any component that you like here!
            return <Ant name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          showLabel: false,
          style: { borderTopWidth: 0, elevation: 0, },

        }}
      >
        <Tab.Screen name="Home" component={Screens.Home} />
        <Tab.Screen name="ShopBag" component={Screens.ShopBag} />
        <Tab.Screen name="Search" component={Screens.Search} />
        <Tab.Screen name="Profile" component={Screens.Profile} />
    </Tab.Navigator>
);
function TestScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Test!</Text>
		</View>
	);
}
const stack = createStackNavigator();
export default function App() {
  return (
    <>
    <StatusBar hidden/>
    <NavigationContainer>
      <stack.Navigator initialRouteName="Tabs" headerMode='none'>
        <stack.Screen name="Tabs" component={tabs}/>
        <stack.Screen name="Restaurant" component={Screens.Restaurant}/>
      </stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
