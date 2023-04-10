import { TouchableOpacity, Text } from "react-native";
import styles from './screenHeaderText.style'
import { auth } from "../../../firebase";

const ScreenheaderBtn = () => {
    return (

        <>
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnText}>
                    {auth.currentUser?.email}
                </Text>
            </TouchableOpacity>
        </>
    )

}

export default ScreenheaderBtn;