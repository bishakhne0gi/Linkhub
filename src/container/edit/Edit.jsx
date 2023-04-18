import React from 'react'
import { View, Text, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import styles from './edit.style.js'
import style from '../../components/links/links.style.js'
import { COLORS } from '../../constants/theme.js'
const Edit = () => {
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





                {/* </FlatList> */}
            </View>
        </>
    )
}

export default Edit