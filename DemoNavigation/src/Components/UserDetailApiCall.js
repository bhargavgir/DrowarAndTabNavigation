//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from "axios";
import UserView from '../Components/UserView';
//let axios = require('https://reqres.in/api/users').default;

// create a component
const UserDetailApiCall = ({ userId, isVisible }) => {
    const [userResult, setuserResult] = useState(null)
    const [error, setError] = useState('')
    const [supportData, setSupportData] = useState(null)
    const [showProgressbar, setshowProgressbar] = useState(false)


    useEffect(() => {
        if (!!userId) {

            setshowProgressbar(true)
            axios.get(`https://reqres.in/api/users/${userId}`)
                .then(function (response) {
                    setuserResult(response.data.data)
                    setSupportData(response.data.support)
                    setshowProgressbar(false)
                })
                .catch(function (error) {
                    setError(error)
                })
        }

    }, [userId])

    console.log("userId 1  " + userId)
    return (
        <View >
            {showProgressbar ? (<View>
                <ActivityIndicator
                    size={'large'} color="#ff0000" /></View>) :
                <UserView
                    userData={userResult}
                    userSupport={supportData}
                    errorResponse={error}
                />
            }
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    touchableOpacity: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    touchButtonstyle: {
        width: "50%",
        backgroundColor: "#00B5E2",
        marginTop: 40,
        borderRadius: 25,
        justifyContent: 'center',
        height: 50,
        alignItems: 'center',
    },
    activityIndicatorStyle: {
        minHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
});

//make this component available to the app
export default UserDetailApiCall;
