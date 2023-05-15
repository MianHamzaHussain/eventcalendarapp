import { StyleSheet } from "react-native";
import colors from '../../config/colors';

const getStyles = (color = 'primary') => {
    return StyleSheet.create({
        button: {
            width: "100%",
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            borderRadius: 25,
            backgroundColor: colors[color],
            marginVertical:10,
        },
        text: {
            fontSize: 18,
            color: colors.white,
            textTransform: 'capitalize'
        }
    });
}

export default getStyles;
