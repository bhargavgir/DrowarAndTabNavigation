import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

export default function AlbumCover({ albumCover }) {

    return (
        <View style={{ margin: 10 }}>
            <Image source={{ uri: albumCover }} style={{
                width: 400, height: 300, borderRadius: 5,
            }}
                resizeMode={'contain'}
            />

        </View>
    )
}

const styles = StyleSheet.create({})