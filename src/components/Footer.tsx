import { Text, View, StyleSheet } from "react-native";




export default function Footer() {
    return <View style={styles.container}><Text style={styles.text}>h: 10</Text></View>;
}


const styles = StyleSheet.create({
    container: {
       marginBottom: 0,
        height: 60,
        backgroundColor: "transparent",
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
alignItems: 'center'
    },
    text: {
fontSize: 32,
    },
})