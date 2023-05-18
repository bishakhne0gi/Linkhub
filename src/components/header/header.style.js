import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants/theme";

const styles = StyleSheet.create(
    {
        header:
        {
            color: COLORS.tertiary,
            // fontFamily: FONT.medium,
            fontStyle: "normal",
            fontSize: 50,
            textAlign: "center",
            fontWeight: "bold"
        }
    }
)

export default styles;