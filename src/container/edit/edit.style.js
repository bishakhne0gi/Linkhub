import { StyleSheet } from "react-native"
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.large,
        width: "100%"
    },
    edit_superContainer: {
        flexDirection: "column"
    },
    edit_container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    edit_button: {

    },
    editCard_tabs:
    {
        marginTop: SIZES.medium,
        padding: SIZES.medium,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.xSmall,
        justifyContent: "space-between",
        flexBasis: "50%",
    },
    editCard_done:
    {
        marginTop: SIZES.xLarge,
        marginBottom: SIZES.xLarge,
        // padding: SIZES.xLarge,
        backgroundColor: COLORS.tertiary,
        borderRadius: SIZES.xSmall,
        alignItems: "center",
        justifyContent: "center",
        flexBasis: "30%",
    },
    editCard_text:
    {
        color: COLORS.primary,
        fontSize: SIZES.xLarge,
        textAlign: "center",
        fontStyle: FONT.bold,
    },
    editCard_textDone:
    {
        color: COLORS.secondary,
        fontSize: SIZES.medium,
        textAlign: "center",
        fontStyle: FONT.bold,
    },
    inputContainer: {
        width: '100%',

    },
    input: {
        flex: 1,
        backgroundColor: 'white',
        color: COLORS.secondary,
        fontSize: SIZES.medium,
        paddingHorizontal: SIZES.large,
        paddingVertical: SIZES.large,
        borderRadius: SIZES.medium,
        marginTop: SIZES.small,
    },
})

export default styles;