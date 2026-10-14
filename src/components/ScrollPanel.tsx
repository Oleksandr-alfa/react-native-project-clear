import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import PlaceObj from "./PlaceObj";




export default function ScrollPanel() {
    return (<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
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
        // backgroundColor: 'transparent',
        borderBottomColor: '#0f0f0f',
borderBottomWidth: 1,
    },
    box: {
        flex: 1,
    }
})