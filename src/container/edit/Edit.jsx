import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, TextInput, ScrollView, TurboModuleRegistry } from 'react-native'
import styles from './edit.style.js'
import { db, auth } from '../../../firebase.js'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const Edit = () => {

    const [links, setLinks] = useState({ github: '', leetcode: '', linkedin: '' })
    const user = auth.currentUser;


    const getLinks = async () => {
        console.log(user.uid);
        try {
            const docRef = doc(db, 'userlink', user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const link = docSnap.data();
                console.log("Document data: ", link);
                setLinks({ github: link.github, leetcode: link.leetcode, linkedin: link.linkedin })

            }
            else {
                console.log("No such document");
                setLinks({ github: '', leetcode: '', linkedin: '' })
            }
        }
        catch (err) {
            console.log(err);
        }
    }


    const editLinks = async () => {
        console.log("User id: ", user.uid);
        const userRef = doc(db, "userlink", user.uid);
        try {
            await setDoc(userRef, {
                github: links.github,
                leetcode: links.leetcode,
                linkedin: links.linkedin
            })
        } catch (err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getLinks()
    }, [])
    return (
        <>
            <View style={styles.container}>

                <ScrollView>
                    <View style={styles.edit_superContainer}>
                        <View style={styles.edit_container}>

                            <TouchableOpacity style={styles.editCard_tabs}>
                                <Text style={styles.editCard_text}>
                                    Github
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.editCard_done} onPress={editLinks}>
                                <Text style={styles.editCard_textDone}>
                                    Done
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>

                            <TextInput placeholder="Your Link" value={links.github} onChangeText={(text) => setLinks({ ...links, github: text })} style={styles.input} />
                        </View>
                    </View>



                    <View style={styles.edit_superContainer}>
                        <View style={styles.edit_container}>

                            <TouchableOpacity style={styles.editCard_tabs}>
                                <Text style={styles.editCard_text}>
                                    LinkedIn
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.editCard_done} onPress={editLinks}>
                                <Text style={styles.editCard_textDone}>
                                    Done
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>

                            <TextInput placeholder="Your Link" value={links.leetcode} onChangeText={(text) => setLinks({ ...links, leetcode: text })} style={styles.input} />
                        </View>

                    </View>




                    <View style={styles.edit_superContainer}>
                        <View style={styles.edit_container}>

                            <TouchableOpacity style={styles.editCard_tabs} >
                                <Text style={styles.editCard_text}>
                                    LeetCode
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.editCard_done} onPress={editLinks}>
                                <Text style={styles.editCard_textDone}>
                                    Done
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>

                            <TextInput placeholder="Your Link" value={links.linkedin} onChangeText={(text) => setLinks({ ...links, linkedin: text })} style={styles.input} />
                        </View>

                    </View>

                </ScrollView>
            </View>
        </>
    )
}

export default Edit