import { ScrollView, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import PlaceObj from "./PlaceObj";


export default function ScrollPanel() {
    return (<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <PlaceObj />
        <PlaceObj />
        <PlaceObj />
        <PlaceObj />
        <PlaceObj />
        <PlaceObj />
        <PlaceObj />
        <PlaceObj />
        <PlaceObj />
        <PlaceObj />  
    </ScrollView>);
}


const styles = StyleSheet.create({
    container: {
        
        flex: 1,
      borderColor: '#fff',
        width: '100%',
        height: 90,
backgroundColor: 'transparent',
    },
    box: {
        flex: 1,
    }
})