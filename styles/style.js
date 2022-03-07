import { StyleSheet } from "react-native";
import { COLORS, FONTS } from "../helpers/constants";

const GLOBAL_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        'alignItems': 'center',
        'justifyContent': 'center',
        padding: 20
    },
    activityContainer: {
        backgroundColor: 'purple',
        opacity: 0.8
    },
    dashboard:{
        'flex':0.6,
        // 'justifyContent':'space-between',
        // 'alignItems':'space-between',
    },
    dashboardItem:{
        'flex':1,
        'justifyContent':'center',
        'alignItems':'center',
        'marginBottom':10,
    },
    dashboardItemText:{
        'fontSize':20
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
    },
    dashboardFont: {
        fontFamily: FONTS.HEADING
    },
    inputField: {
        borderBottomColor: 'purple',
        borderBottomWidth: 2,
    },
    feedback: {
        color: 'purple'
    },
    flatListItem: {
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    flatListItemText: {
        paddingHorizontal: 10,
        flex: 2
    },
    flatListItemTitle: {
        fontWeight: 'bold',
        fontSize: 18
    },
    flatListItemIcons: {
        flex: 1,
        flexDirection: 'row',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    field: {
        color: 'purple',
        paddingBottom: 2
    },
    flatlistPhoto: {
        height: 55,
        width: 55,
        borderRadius: 10
    },
    flatListNormalText: {
        fontSize: 14
    },
    flatListItemSeparator: {
        borderTopWidth: 1,
        marginLeft: 20,
        borderTopColor: 'purple'
    },
    flatListFooter: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        flex: 1,
        padding: 10,
        backgroundColor: COLORS.PURPLE
    },
    flatListContainer: {
        flex: 17
    }

})


const OVERLAY_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        position: "absolute"
    },
    contentWrapper: {
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3
    },
    overlayHeader: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        padding: 10
    },
    body: {
        padding: 10
    }
})


export { GLOBAL_STYLES, OVERLAY_STYLES }