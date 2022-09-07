//import liraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainSctak from '../Screens_Two/Stacks/MainSctak';
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import TabNavigator from '../Screens_Two/TabNavigator/TabNavigator';
import CustomeSideMenu from '../Screens/menu/CustomSideMenu';
import navigationStrings from '../Components/navigationStrings';
import {
    LoginScreen,
    SameRedictionScreen,
    SecondProfile,
    SecondCart
} from '../Screens_Two';


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
// create a component
function drawareNavigation() {
    return <Drawer.Navigator drawerContent={props => <CustomeSideMenu {...props} />} initialRouteName="NewRoute">
        <Drawer.Screen name={"NewRoute"} component={TabNavigator}
        />
    </Drawer.Navigator>
}

function Routes() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={navigationStrings.SHOME}>
                <Stack.Screen
                    name={navigationStrings.SHOME}
                    component={drawareNavigation}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name={navigationStrings.LOGIN}
                    component={LoginScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
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
export default Routes;


