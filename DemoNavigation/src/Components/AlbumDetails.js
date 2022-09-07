import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AlbumDetails({ trackName, trackartistName }) {

    return (
        <View style={{ justifyContent: 'center' }}>
            <Text style={styles.trackname} >{trackName}</Text>
            <Text style={styles.trackname}>{trackartistName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    trackname: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,

    }, artistname: {

    },
})