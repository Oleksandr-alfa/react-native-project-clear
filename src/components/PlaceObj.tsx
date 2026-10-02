import { View, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";


export default function PlaceObj() {
    return <View style={styles.container}>
        <View style={styles.boxContentPlaceObj}>
            <Text style={styles.text}>Marias iela 28-12</Text>
        <View style={styles.boxIcons}>
            <View style={styles.boxTime}><Ionicons name={'warning-outline'} color={'#f40808'} size={36}/><Text style={styles.textTime}>12:00</Text></View>
            <Ionicons name={'bed-outline'} color={'#130f0f'} size={36} />
            <Ionicons name={'cafe-outline'} color={'#130f0f'} size={36} />
            </View>
            </View>
            <View style={styles.checkboxIcon}><Ionicons name={'checkbox-outline'} color={'#130f0f'} size={72}/></View>
       
    </View>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        textAlign: 'left',
    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        borderBottomColor: '#0a0a0a',
        borderBottomWidth: 3,
        flexDirection: 'row',
    },
    boxContentPlaceObj: {

    },
    boxIcons: {
        flex: 1,
        // justifyContent: 'space-between',
        gap: 30,
        flexDirection: 'row',
    },
    textTime: {
         color: 'red',
        fontSize: 32,
        
    },
     boxTime: {
       
       
        flexDirection: 'row',
    },
    checkboxIcon: {
        marginLeft: 'auto',
        justifyContent: 'center'
     }
})