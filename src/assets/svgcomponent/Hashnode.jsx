import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { COLORS } from "../../constants/theme"
const SvgComponent = (props) => (
    <Svg
        width={40}
        height={40}
        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
        <Path d="m22.351 8.019-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z"
            fill={COLORS.primary}
            fillRule="nonzero"
        />

    </Svg>
)
export default SvgComponent
