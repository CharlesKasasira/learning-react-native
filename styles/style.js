import { StyleSheet } from "react-native";
import { COLORS } from "./helpers/constants";

const GLOBAL_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        // padding: 20
    },
    dashboard:{
        'flex':1,
        'justifyContent':'space-between',
        // 'alignItems':'space-between',
    },
    dashboardItem:{
        'flex':1,
        'justifyContent':'center',
        'alignItems':'center',
        'marginBottom':10,
    },
    dashboardItemText:{
        'fontSize':20,
        'fontWeight':'bold'
    },
    dashboardItemPurple:{
        backgroundColor:COLORS.PURPLE
    },
    dashboardItemOrange:{
        backgroundColor:COLORS.ORANGE
    },
    dashboardItemWhite:{
        backgroundColor:COLORS.WHITE
    },
    dashboardItemGreen:{
        backgroundColor:COLORS.GREEN
    },
    dashboardItemPink:{
        backgroundColor:COLORS.PINK
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