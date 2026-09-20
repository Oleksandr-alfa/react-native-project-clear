import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 
import { SafeAreaView } from 'react-native-safe-area-context';


 
const LogoImage = require('@/assets/images/logo.png');
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.text}>Home screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
   
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  logo: {
    width: 160,
    height: 60,
    marginBottom: 40,
  },

});
