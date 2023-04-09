import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create(
    {
        header:
        {
            color: COLORS.secondary,
            fontFamily: FONT.bold,
            fontSize: SIZES.xxLarge,
            textAlign: "center"
        }
    }
)

export default styles;