import { View, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";


export default function PlaceObj() {
    return <View style={styles.container}>
        <View style={styles.boxContentPlaceObj}>
            <Text style={styles.text}>Mariasssssss iela 28-12</Text>
        <View style={styles.boxIcons}>
                <View style={styles.boxTime}>
                    <Ionicons name={'warning'} color={'#f40808'} size={36} />
                    <Text style={styles.textTime}>12:00</Text>
                </View>
            <Ionicons name={'bed'} color={'#ec0b0b'} size={36} />
            <Ionicons name={'cafe-outline'} color={'#130f0f'} size={36} />
            </View>
            </View>
        <View style={styles.checkboxIcon}>
            <Ionicons name={'checkbox'} color={'#05ac26d1'} size={48} />
        </View>
       
    </View>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        textAlign: 'left',
    },
    container: {
        paddingLeft: 3,
        // paddingRight: 5,
        flex: 1,
        // width: '100%',
        // justifyContent: 'flex-start',
        borderBottomColor: '#0a0a0a',
        borderBottomWidth: 1,
        flexDirection: 'row',
//         shadowColor: '#000',
//   shadowOffset: { width: 0, height: 4 },
//   shadowOpacity: 0.3,
//   shadowRadius: 10,
//   elevation: 10, // Android
    },
    boxContentPlaceObj: {
marginRight: 'auto',
    },
    boxIcons: {
        flex: 1,
        // justifyContent: 'space-between',
        gap: 50,
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
        // marginLeft: 'auto',
        justifyContent: 'center'
     }
})