import { StyleSheet } from "react-native"
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        color: COLORS.secondary,
        fontSize: SIZES.medium,
        paddingHorizontal: SIZES.large,
        paddingVertical: SIZES.large,
        borderRadius: SIZES.medium,
        marginTop: SIZES.small,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SIZES.xxxLarge,
    },
    forgetButton:
    {
        color: COLORS.secondary,
        alignItems: "center",
        padding: SIZES.small
    },
    button: {
        backgroundColor: COLORS.secondary,
        width: '100%',
        padding: SIZES.medium,
        borderRadius: SIZES.medium,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: COLORS.secondary,
        borderWidth: 2,
    },
    buttonText: {
        color: COLORS.primary,
        fontWeight: '700',
        fontSize: SIZES.large,
    },
    buttonOutlineText: {
        color: COLORS.secondary,
        fontSize: SIZES.large,
        fontWeight: '700',
    },
})

export default styles;