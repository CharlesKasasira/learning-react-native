import { StyleSheet } from "react-native";
import { COLORS } from "./helpers/constants";

const GLOBAL_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        'alignItems': 'center',
        'justifyContent': 'center'
    },
    button: {
        'backgroundColor': 'red',
        'padding': 10,
        width: '100%'
    },
    btnText: {
        'color': COLORS.WHITE,
        'textAlign': 'center'
    },
    geniusStaff: {
        fontWeight: "bold"
    },
    contacts: {
        padding: 10,
        height: 40,
        fontSize: 18
    }
})


export { GLOBAL_STYLES }