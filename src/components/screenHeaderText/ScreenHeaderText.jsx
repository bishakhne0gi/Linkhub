import { TouchableOpacity, Text } from "react-native";
import styles from './screenHeaderText.style'

const ScreenheaderBtn = () => {
    return (

        <>
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>
                    ne0gi02
                </Text>
            </TouchableOpacity>
        </>
    )

}

export default ScreenheaderBtn;