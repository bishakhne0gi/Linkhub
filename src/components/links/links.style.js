import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants/theme";
import { ceil } from "react-native-reanimated";

const style = StyleSheet.create(
    {
        links_container:
        {
            flex: 1,
            justifyContent: "center",
            width: "100%",
            alignItems: "center",
        },
        links_tabs:
        {
            marginTop: SIZES.medium,
            padding: SIZES.xLarge,
            backgroundColor: COLORS.secondary,

            borderRadius: SIZES.xSmall,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            flexBasis: "80%",
        },
        links_text:
        {
            color: COLORS.primary,
            fontSize: SIZES.xLarge,
            textAlign: "center",
        }

    }
)
export default style;