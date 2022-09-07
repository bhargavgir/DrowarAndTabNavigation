import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Controls({ togglePlayPauseBtn, pause }) {

    console.log('play  ', pause, togglePlayPauseBtn)

    return (
        <View style={styles.container}>

            <TouchableOpacity>
                <AntDesign name="banckward" size={30} color="white" />
            </TouchableOpacity>

            {pause ?

                <TouchableOpacity onPress={togglePlayPauseBtn}>
                    <AntDesign name="playcircleo" size={120} color="white" />
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={togglePlayPauseBtn}>
                    <AntDesign name="pausecircleo" size={120} color="white" />
                </TouchableOpacity>
            }



            <TouchableOpacity>
                <AntDesign name="forward" size={30} color="white" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,

    },
})