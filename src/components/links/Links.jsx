import React from 'react'
import styles from './links.style'
import { ToastAndroid, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { View } from 'react-native';
import CopyToClipboard from '../../assets/svgcomponent/CopyToClipBoard';
import { SIZES } from '../../constants/theme';
import LeetCode from '../../assets/svgcomponent/LeetCode';
import LinkCards from '../linkcards/LinkCards';
import LinkedIn from '../../assets/svgcomponent/LinkedIn';
import Github from '../../assets/svgcomponent/Github';
import * as Clipboard from 'expo-clipboard'
const Links = ({ fielname, fieldsvg, fieldurl }) => {

    const link = [
        {
            id: '1',
            fielname: 'LinkedIn',
            fieldurl: 'https://www.linkedin.com/in/bishakh-neogi-387815205/',
            fieldsvg: <LinkedIn />,
        },
        {
            id: '2',
            fielname: 'Github',
            fieldurl: 'https://github.com/bishakhne0gi',
            fieldsvg: <Github />,
        },
        {
            id: '3',
            fielname: 'LeetCode',
            fieldurl: 'https://leetcode.com/ne0gi02/',
            fieldsvg: <LeetCode />,
        },
    ];


    const showToast = () => {
        ToastAndroid.show('Copied to Clipboard!', ToastAndroid.SHORT);
    }
    return (
        <>


            <View style={styles.links_container}>
                <FlatList
                    contentContainerStyle={{ justifyContent: 'center' }}
                    style={{ flex: 1 }}
                    data={link}
                    renderItem={({ item }) => {
                        const copyToClipBoard = async () => {
                            await Clipboard.setStringAsync(item.fieldurl)
                        }
                        return (

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <LinkCards
                                    fielname={item.fielname}
                                    fieldurl={item.fieldurl}
                                    fieldsvg={item.fieldsvg}

                                />


                                <TouchableOpacity style={{ marginTop: SIZES.small, justifyContent: 'center' }} onPress={() => { copyToClipBoard(); showToast() }}>

                                    <CopyToClipboard />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </>
    )
}

export default Links