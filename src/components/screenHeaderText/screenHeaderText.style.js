import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";


const styles = StyleSheet.create({
    btnContainer: {
        marginTop: SIZES.medium,
        width: 200,
        height: 50,
        alignSelf: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.small / 1.25,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: COLORS.primary,
        textAlign: "center",
        fontSize: SIZES.medium,
        borderRadius: SIZES.small / 1.25,
    },
});

export default styles;
