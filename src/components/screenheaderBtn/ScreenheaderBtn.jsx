import { TouchableOpacity, Image } from "react-native";
import styles from './screenheaderBtn.style'
import { auth } from "../../../firebase";
import { useRouter } from "expo-router";

const ScreenheaderBtn = ({ iconUrl, dimension }) => {

    const route = useRouter();
    const handleSignOut = () => {
        auth.signOut().then(() => {
            route.push('./')
        })
    }

    return (

        <>
            <TouchableOpacity style={styles.btnContainer} onPress={() => { handleSignOut(); console.log("Logged Out!!") }}>
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