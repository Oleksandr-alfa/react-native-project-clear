import { ScrollView, View, Text } from "react-native";
import { StyleSheet } from "react-native";


export default function ScrollPanel() {
    return (<ScrollView style={styles.box}>
        
        <Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text><Text>Hello</Text>
        <View style={styles.container}><Text>Hello</Text></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
    </ScrollView>);
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        borderColor: '#050404',
        width: '100%',
        height: 90,
backgroundColor: '#fff',
    },
    box: {
        flex: 1,
    }
})