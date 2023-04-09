import React from 'react'
import styles from './linkCards.style'
import { TouchableOpacity, Text } from 'react-native'
import { useRouter } from 'expo-router'
const LinkCards = ({ fielname, fieldurl, fieldsvg }) => {

    const router = useRouter();


    return (
        <>
            <TouchableOpacity style={styles.linksCard_tabs} onPress={() => { router.push('/edit/') }}>
                {fieldsvg}
                <Text style={styles.linksCard_text}>{fielname}</Text>

            </TouchableOpacity>
        </>
    )
}

export default LinkCards