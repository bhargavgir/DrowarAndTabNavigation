import React from "react";
import navigationStrings from "../../Components/navigationStrings";
import LoginScreen from "../LoginScreen";
import SameRedictionScreen from "../SameRedictionScreen";
import SecondCart from "../SecondCart";
import SecondHome from "../SecondHome";
import SecondProfile from "../SecondProfile";
import TabNavigator from "../TabNavigator/TabNavigator";

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={navigationStrings.Tabs}
                component={TabNavigator}
            />
            <Stack.Screen
                name={navigationStrings.SAMESCREEN}
                component={SameRedictionScreen}
            />
            <Stack.Screen
                name={navigationStrings.SCART}
                component={SecondCart}
            />
            {/* <Stack.Screen
                name={navigationStrings.SPROFILE}
                component={SecondProfile}
            /> */}
            <Stack.Screen
                name={navigationStrings.SHOME}
                component={SecondHome}
            />
            <Stack.Screen
                name={navigationStrings.LOGIN}
                component={LoginScreen}
            />
        </>
    )
}