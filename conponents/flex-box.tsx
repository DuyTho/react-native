import { View, Text, StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    item1: {
        backgroundColor: "violet",
        padding: 10,
    },
    item2: {
        backgroundColor: "orange",
        padding: 10,
    },
    item3: {
        backgroundColor: "red",
        padding: 10,
    },
    item4: {
        backgroundColor: "yellow",
        padding: 10,
    }
})
const FlexBox = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item1}><Text>item 1</Text></View>
            <View style={styles.item2}><Text>item 2</Text></View>
            <View style={styles.item3}><Text>item 3</Text></View>
            <View style={styles.item4}><Text>item 4</Text></View>

        </View>
    )
}
export default FlexBox;