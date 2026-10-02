import { Text, View, StyleSheet } from "react-native";




export default function Footer() {
    return <View style={styles.container}><Text>there  will be something</Text></View>;
}


const styles = StyleSheet.create({
    container: {
       
        height: 60,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
alignItems: 'center'
    }
})