import { TouchableOpacity, Image } from "react-native";
import styles from './screenheaderBtn.style'
import { auth } from "../../../firebase";
import { useRouter } from "expo-router";
import UserAvatar from "@muhzi/react-native-user-avatar";
import { COLORS } from "../../constants";

const ScreenheaderBtn = ({ dimension }) => {

    const route = useRouter();
    const handleSignOut = () => {
        auth.signOut().then(() => {
            route.push('./')
        })
    }

    return (

        <>
            <TouchableOpacity style={styles.btnContainer} onPress={() => { handleSignOut(); console.log("Logged Out!!") }}>
                <UserAvatar
                    userName="A"
                    backgroundColor={COLORS.tertiary}
                    // rounded={false}
                    size={50}
                    active
                    resizeMode="cover"
                    style={styles.btnImg(dimension)}

                />
            </TouchableOpacity>
        </>
    )

}

export default ScreenheaderBtn;