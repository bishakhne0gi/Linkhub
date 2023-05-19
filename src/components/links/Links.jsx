import React from 'react'
import { useState, useEffect } from 'react';
import styles from './links.style'
import { ToastAndroid, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { View } from 'react-native';
import CopyToClipboard from '../../assets/svgcomponent/CopyToClipBoard';
import { SIZES } from '../../constants/theme';
import LeetCode from '../../assets/svgcomponent/LeetCode';
import LinkCards from '../linkcards/LinkCards';
import LinkedIn from '../../assets/svgcomponent/LinkedIn';
import Hashnode from '../../assets/svgcomponent/Hashnode';
import Personal from '../../assets/svgcomponent/Personal';
import Github from '../../assets/svgcomponent/Github';
import * as Clipboard from 'expo-clipboard'
import { db, auth } from '../../../firebase'
import { doc, getDoc } from 'firebase/firestore'
const Links = () => {

    const [links, setLinks] = useState({ github: '', leetcode: '', linkedin: '', hashnode: '', personal: '' })
    const user = auth.currentUser;

    const getLinks = async () => {
        // console.log(user.uid);
        try {
            const docRef = doc(db, 'userinfo', user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const link = docSnap.data();
                console.log("Document data: ", link);
                setLinks({ github: link.github, leetcode: link.leetcode, linkedin: link.linkedin, hashnode: link.hashnode, personal: link.personal })

            }
            else {
                console.log("No such document");
                setLinks({ github: '', leetcode: '', linkedin: '', hashnode: '', personal: '' })
            }
        }
        catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getLinks()
    }, [links])


    const linker = [
        {
            id: '1',
            fielname: 'Github',
            fieldurl: links.github,
            fieldsvg: <Github />,
        },
        {
            id: '2',
            fielname: 'Leetcode',
            fieldurl: links.leetcode,
            fieldsvg: <LeetCode />
        },
        {
            id: '3',
            fielname: 'LinkedIn',
            fieldurl: links.linkedin,
            fieldsvg: <LinkedIn />,
        },
        {
            id: '4',
            fielname: 'Hashnode',
            fieldurl: links.hashnode,
            fieldsvg: <Hashnode />,
        },
        {
            id: '5',
            fielname: 'Portfolio',
            fieldurl: links.personal,
            fieldsvg: <Personal />,
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
                    data={linker}
                    renderItem={({ item }) => {
                        const copyToClipBoard = async () => {
                            await Clipboard.setStringAsync(item.fieldurl)
                            console.log(item.fieldurl);
                        }
                        return (

                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                                <LinkCards
                                    fielname={item.fielname}
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