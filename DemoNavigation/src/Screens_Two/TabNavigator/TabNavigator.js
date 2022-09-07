//import liraries
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Cart, LoginScreen } from '../../Screens_Two';
import navigationStrings from '../../Components/navigationStrings';
import imagePaths from '../../Components/imagePaths';
// create a component
function TabNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName={navigationStrings.HOME}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'white',
                    borderRadius: 50,
                    marginBottom: 20,
                    marginHorizontal: 16,
                    elevation: 10,
                }
            }} >

            <Tab.Screen
                name={navigationStrings.PROFILE} component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ height: 20, width: 20, tintColor: focused ? '#2747F8' : '#AAAAAA' }}
                                source={imagePaths.icProfile} />
                        )
                    }
                }}
            />
            <Tab.Screen
                name={navigationStrings.HOME} component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ height: 20, width: 20, tintColor: focused ? '#2747F8' : '#AAAAAA' }}
                                source={imagePaths.icHome} />
                        )
                    }
                }}
            />
            <Tab.Screen name={navigationStrings.CART} component={Cart}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ height: 20, width: 20, tintColor: focused ? '#2747F8' : '#AAAAAA' }}
                                source={imagePaths.icCart} />
                        )
                    }
                }}
            />
        </Tab.Navigator>
    );

};

//make this component available to the app
export default TabNavigator;

{/* <Stack.Navigator screenOptions={{ headerShown: false }}>
{MainSctak(Stack)}
</Stack.Navigator>  */}