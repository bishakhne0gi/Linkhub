import { StyleSheet } from "react-native"
import { COLORS, FONT, SIZES } from "../../constants/theme"
const style = StyleSheet.create(
    {

        linksCard_tabs:

        {
            marginTop: SIZES.medium,
            padding: SIZES.xLarge,
            backgroundColor: COLORS.secondary,
            borderRadius: SIZES.xSmall,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            flexBasis: "80%",
        },
        linksCard_text:
        {
            color: COLORS.primary,
            fontSize: SIZES.xLarge,
            textAlign: "center",
            // fontFamily: FONT.bold,
            fontWeight: '700'
        }
    }
)

export default style