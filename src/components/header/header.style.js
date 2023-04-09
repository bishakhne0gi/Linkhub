import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create(
    {
        header:
        {
            color: COLORS.tertiary,
            fontFamily: FONT.bold,
            fontSize: 50,
            textAlign: "center"
        }
    }
)

export default styles;