import { StyleSheet } from "react-native";
import { COLORS } from "./helpers/constants";

const GLOBAL_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        // padding: 20
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
    },
    card: {
        margin: 10,
        width: '100%',
        height: 100,
        backgroundColor: 'red',
        borderWidth: 3,
        borderRadius: 20
    },
    flat: {
        width: '100%',
        padding: 10
    }
})


export { GLOBAL_STYLES }