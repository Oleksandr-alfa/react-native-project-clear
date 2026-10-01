import { View, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet } from "react-native";


export default function PlaceObj() {
    return <View style={styles.container}>
        <Text style={styles.text}>Marias iela 28-12</Text>
        <View>
             <Ionicons name={'bed-outline'} color={'#130f0f'} size={36}/>
        </View>
    </View>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 36,
        textAlign: 'left',
    },
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',
        borderBottomColor: '#0a0a0a',
        borderBottomWidth: 3,
    }
})