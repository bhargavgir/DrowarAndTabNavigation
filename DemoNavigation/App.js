//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './src/Navigation/Routes';
import { LoginScreen } from './src/Screens_Two';


// create a component
const App = () => {
  return (
    <Routes />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;



















//=====drower 

// import React from 'react';
// import { Button, View } from 'react-native';

// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import CustomSideMenu from './src/Screens/menu/CustomSideMenu';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';


// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator drawerContent={props => <CustomSideMenu {...props} />} initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>

//     </NavigationContainer>
//   );
// }
// //=== bottom 
// //<Tabs />
// // import HomeScreen from './src/Screens/HomeScreen';
// // import ProfileScreen from './src/Screens/ProfileScreen';
// // import SettingScreen from './src/Screens/SettingScreen';
// // import BottomTab from './src/Screens/BottomTab/BottomTab';
// // const stack = createNativeStackNavigator()
// // function App() {
// //   return (

// //     <NavigationContainer>
// //       <stack.Navigator>
// //         <stack.Screen name='BottomTab' component={BottomTab} />

// //       </stack.Navigator>
// //     </NavigationContainer>
// //   )
// // }
// // export default App;