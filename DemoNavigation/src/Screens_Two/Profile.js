//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import * as ImagePicker from "react-native-image-picker"
import LottieView from 'lottie-react-native'
import imagePaths from '../Components/imagePaths'
// create a component
const Profile = ({ navigation }) => {

    const [imagePath, setImagePath] = useState('')
    console.log(imagePaths.icProfile)
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={{ uri: imagePath }} />

            <Button onPress={() =>
                ImagePicker.launchImageLibrary(
                    {
                        mediaType: 'photo',
                        includeBase64: false,
                        maxHeight: 200,
                        maxWidth: 200,
                    },
                    (response) => {

                        const [file] = response.assets;

                        console.log(file);
                        setImagePath(file.uri);
                    },
                )
            }
                title="Select Image" />

            <LottieView style={styles.lottiStyle}
                autoPlay
                source={require('../assets/lottifile/welcome.json')} />
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

    }, buttonstyle: {
        marginTop: 20,

    }, imageStyle: {
        width: 200,
        height: 200,
        color: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 100,

    }, lottiStyle: {
        marginBottom: 150,
        height: 200,
        width: 200,
    },
});

//make this component available to the app
export default Profile;
