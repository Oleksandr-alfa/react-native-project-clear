import { ScrollView, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import PlaceObj from "./PlaceObj";


export default function ScrollPanel() {
    return (<ScrollView style={styles.container}>
        
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
      
        width: '100%',
        height: 90,
backgroundColor: '#db8686',
    },
    box: {
        flex: 1,
    }
})