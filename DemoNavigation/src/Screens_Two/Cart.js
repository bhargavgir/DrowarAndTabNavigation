//import liraries
import React, { useState } from 'react';
import Video from 'react-native-video'
import { View, Text, StyleSheet, Button } from 'react-native';
import { TRACKS } from '../Components/TreacksData';
import AlbumCover from '../Components/AlbumCover';
import AlbumDetails from '../Components/AlbumDetails';
import Controls from '../Components/Controls';



// create a component
const Cart = ({ navigation }) => {

    const [selectedTrack, setSelectedTrack] = useState(0);
    const currentTrack = TRACKS[selectedTrack];

    const [pause, setPause] = useState(false)

    function togglePlayPauseBtn() {
        setPause(!pause)
    }

    return (
        <View style={styles.container}>
            <AlbumCover albumCover={currentTrack.albumArtUrl} />

            <AlbumDetails
                trackName={currentTrack.title}
                trackartistName={currentTrack.artist}
            />

            <Controls
                {...{ togglePlayPauseBtn }}
                {...{ pause }}
            />

            <Video
                source={{ uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/44/d7/a744d7c6-d06c-17a2-ad19-cd01b46a8cbd/mzaf_8512763237108905867.plus.aac.ep.m4a' }}
                audioOnly
                paused={true}
            />

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
export default Cart;
