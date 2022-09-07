//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

// create a component
const UserView = ({ userData, userSupport, errorResponse }) => {


    return (

        <View>
            {/* Condition in side view or function */}
            {!!userData && !!userSupport ? <View style={styles.dataView}>
                <Image style={styles.imageStyle} source={{ uri: userData.avatar }} />
                <View style={styles.testView}>
                    <Text style={{ fontWeight: "bold", color: "black" }}>
                        {userData.first_name + " " + userData.last_name} </Text>
                    <Text style={{ fontWeight: "bold", color: "gray" }}>{userData.email}</Text>
                    <Text style={{ fontWeight: "bold", color: "#AAAAAA", fontSize: 10, width: "70%", margin: "auto" }}>{userSupport.text}</Text>
                </View>
            </View> :

                <View><Text style={styles.textStyle}> ! Pease Search Get Data </Text></View>

            }

        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    dataView: {
        margin: 10,
        padding: 10,
        backgroundColor: '#FFF',
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 5,
        margin: 'auto',
        marginTop: 20,

    }, imageStyle: {
        width: 60,
        height: 60,
        borderRadius: 30,
    }, testView: {
        marginLeft: 20,
    }, textStyle: {
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 100,
        marginTop: 20,
    }

});

//make this component available to the app
export default UserView;
