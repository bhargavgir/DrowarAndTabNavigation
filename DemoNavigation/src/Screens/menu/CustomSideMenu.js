import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import imagePaths from '../../Components/imagePaths';
//source={imagePaths.icProfile}
export default function CustomSideMenu() {

    const [selectedId, setSelectedId] = useState(null);


    const menuList = [
        { icon: imagePaths.icProfile, title: 'Profile' },
        { icon: imagePaths.icMessage, title: 'Messages' },
        { icon: imagePaths.icLognout, title: 'SinOut' },
        { icon: imagePaths.icActivity, title: 'Activity' },
        { icon: imagePaths.icList, title: 'Lists' },
        { icon: imagePaths.icReport, title: 'Report' },
        { icon: imagePaths.icStatistic, title: 'Statistic' },
    ]
    const menuList2 = [
        { icon: imagePaths.icTellFriends, title: 'Tell a Friends' },
        { icon: imagePaths.icHelp, title: 'Help and FeedBack' },
    ]


    const Item = ({ title, icon, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor: backgroundColor }]}>
            <Image
                source={icon}
                style={styles.drawrimage_statyle}
            />
            <Text style={[styles.title_style, { color: textColor }]}>{title}</Text>
        </TouchableOpacity >
    );

    const renderItem = ({ item }) => {

        const backgroundColor = item.title === selectedId ? "#87CEEB" : "#fff";
        const color = item.title === selectedId ? 'white' : 'black';

        return (
            < Item
                onPress={() => setSelectedId(item.title)}
                backgroundColor={backgroundColor}
                textColor={color}
                title={item.title}
                icon={item.icon} />
        )
    }
    return (
        <View style={styles.mainView}>
            <View style={styles.view1_style}>
                <Image
                    source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }}
                    style={styles.imagestyle}
                />
                <Text style={styles.textstyle}>Bhargavgir Gauswami</Text>
                <Text style={styles.text_follower}>{`600 Followers`}</Text>
            </View>

            <View style={styles.view2_style}>
                <FlatList
                    data={menuList}
                    renderItem={renderItem}
                />
            </View>
            <View style={{ backgroundColor: '#AAAAAA' }} ></View>
            <View style={styles.view3_style}>
                <FlatList
                    data={menuList2}
                    renderItem={renderItem}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },

    //=========================View 1 Style==========================================

    view1_style: {
        flex: 0.25,
        backgroundColor: '#87CEEB',
        paddingTop: 50,
        paddingHorizontal: 20,

    }, imagestyle: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: 'red',

    }, textstyle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#AAAAAA',
    }, text_follower: {
        fontSize: 18,
        marginTop: 5,
        color: '#000000',

    },

    //=========================View 2 Style==========================================
    view2_style: {
        flex: 0.65,
        justifyContent: 'center'

    },
    drawrimage_statyle: {
        height: 20,
        width: 20,
        marginLeft: 10,
    },

    item: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderRadius: 10,


    }, title_style: {
        color: '#000000',
        marginLeft: 20,
        fontSize: 18,
    },



    //=========================View 3 Style==========================================
    view3_style: {
        flex: 0.2,
        backgroundColor: '#fff',
    },
})