import { View, Text, TouchableOpacity } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";


export default function PlaceObj() {
    return <TouchableOpacity><View style={styles.container}>
        <View style={styles.boxContentPlaceObj}>
            <View style={styles.address}><Text style={styles.text}>kllllhhhlllllllll iela 28-12</Text></View>
  </View>
        <View style={styles.boxIcons}>
                <View style={styles.boxTime}>
                <Ionicons name={'enter'} color={'#f40808'} size={36} />
                <Text style={styles.text}>-- --</Text>
            </View>
            <View style={styles.boxTime}>
                <Ionicons name={'exit'} color={'#130f0f'} size={36} />
                <Text style={styles.text}>12:00</Text>
            </View>
            <View style={styles.item}>
                <Ionicons name={'bed'} color={'#ec0b0b'} size={36} />
            </View>
               <View style={styles.checkboxIcon}>
            <Ionicons name={'checkbox'} color={'#05ac26d1'} size={48} />
                </View>
          
            </View>
       
       
    </View>
        </TouchableOpacity>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        textAlign: 'left',
        flexShrink: 1,
    },
    address: {
        width: '100%',
    },
    container: {
        paddingLeft: 3,
        flex: 1,
        borderBottomColor: '#0a0a0a',
        borderBottomWidth: 1,
        flexDirection: 'column',
    },
    boxContentPlaceObj: {
        flex: 1,
        width: '100%',
    },
    boxIcons: {
        flex: 1,
        width: '100%',
        // gap: 60,
        flexDirection: 'row',
        alignItems: 'center',
   justifyContent: 'space-between',
    },

    item: {
        justifyContent: 'center',
    },
   
    boxTime: {
        paddingLeft: 3,
        paddingRight: 3,
        gap: 5,
        justifyContent: 'center',
         flexDirection: 'row',
      backgroundColor: 'rgba(179, 246, 45, 0.3)',
    },

    checkboxIcon: {
        justifyContent: 'center',
     }
})