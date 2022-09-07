//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const SameRedictionScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#rad', fontSize: 25 }}>SameRedictionScreen</Text>
        </View>
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
export default SameRedictionScreen;
