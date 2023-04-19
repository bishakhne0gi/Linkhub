import React, { useState } from 'react'
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


    const [LinkContainer, setLinkContainer] = useState({ github: links.github, leetcode: links.leetcode, linkedin: links.linkedin })

    const editLinks = async () => {
        console.log("User id: ", user.uid);
        const userRef = doc(db, "userlink", user.uid);
        try {
            await setDoc(userRef, {
                github: LinkContainer.github,
                leetcode: LinkContainer.leetcode,
                linkedin: LinkContainer.linkedin
            })
        } catch (err) {
            console.log(err);
        }
    }

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

                            <TextInput placeholder="Your Link" value={LinkContainer.github} onChangeText={(text) => setLinkContainer({ ...LinkContainer, github: text })} style={styles.input} />
                        </View>
                    </View>



                    <View style={styles.edit_superContainer}>
                        <View style={styles.edit_container}>

                            <TouchableOpacity style={styles.editCard_tabs} >
                                <Text style={styles.editCard_text}>
                                    LinkedIn
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.editCard_done} >
                                <Text style={styles.editCard_textDone}>
                                    Done
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>

                            <TextInput placeholder="Your Link" style={styles.input} />
                        </View>

                    </View>




                    <View style={styles.edit_superContainer}>
                        <View style={styles.edit_container}>

                            <TouchableOpacity style={styles.editCard_tabs}>
                                <Text style={styles.editCard_text}>
                                    LeetCode
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity style={styles.editCard_done} >
                                <Text style={styles.editCard_textDone}>
                                    Done
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputContainer}>

                            <TextInput placeholder="Your Link" style={styles.input} />
                        </View>

                    </View>

                </ScrollView>
            </View>
        </>
    )
}

export default Edit