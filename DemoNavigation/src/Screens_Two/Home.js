//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Image } from 'react-native';
import UserDetailApiCall from '../Components/UserDetailApiCall';
import { withNavigation } from 'react-navigation';
import MainSctak from '../Screens_Two/Stacks/MainSctak'
import navigationStrings from '../Components/navigationStrings';

// create a component
const Home = ({ navigation, getdata }) => {
    const [Id, setId] = useState();
    const [userId, setUserId] = useState();
    return (
        <View >

            <View style={styles.InputBoxViewStyle}>
                <TextInput style={styles.InputTextStyle}
                    placeholder='Enter User ID '
                    placeholderTextColor='#AAAAAA'
                    value={Id}
                    keyboardType='number-pad'
                    onChangeText={text => setId(text)}
                />
            </View>

            <View style={styles.touchableViewStyle} >
                <TouchableOpacity style={styles.buttonstyle}
                    onPress={() => setUserId(Id)}>
                    <Text style={styles.textStyle}>Get User Details</Text>
                </TouchableOpacity >
            </View>

            {/* {userId ? (<View><Text style={{ color: 'red' }}>Please Enter Id </Text></View>) :
                <UserDetailApiCall
                userId={userId}
            />
            } */}

            <UserDetailApiCall
                userId={userId}
            />
            <Button title='GOTO Login' onPress={() => navigation.navigate(navigationStrings.LOGIN, { data: userId })} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    InputTextStyle: {
        color: '#FFFFFF',
        width: "70%",
        height: 45,
        borderRadius: 30,
        alignItems: "center",
        backgroundColor: 'gray',
        justifyContent: 'center',
        paddingLeft: 20,

    }, InputBoxViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,

    }, buttonstyle: {
        width: "50%",
        backgroundColor: "#00B5E2",
        marginTop: 40,
        borderRadius: 25,
        justifyContent: 'center',
        height: 50,
        alignItems: 'center',
    }, textStyle: {
        color: '#ffffff'
    }, touchableViewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
});

//make this component available to the app
export default withNavigation(Home);
