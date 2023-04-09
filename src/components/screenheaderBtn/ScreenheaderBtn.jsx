import { TouchableOpacity, Image } from "react-native";
import styles from './screenheaderBtn.style'

const ScreenheaderBtn = ({ iconUrl, dimension }) => {
    return (

        <>
            <TouchableOpacity style={styles.btnContainer}>
                <Image
                    source={iconUrl}
                    resizeMode="cover"
                    style={styles.btnImg(dimension)}
                />
            </TouchableOpacity>
        </>
    )

}

export default ScreenheaderBtn;