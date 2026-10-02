import { Text, View, StyleSheet } from 'react-native';
 import { Link } from 'expo-router'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from "expo-router";
import Header from '@/components/Header';
import User from '@/components/User';
import Data from '@/components/Data';
import ScrollPanel from '@/components/ScrollPanel';
import Footer from '@/components/Footer';


 

export default function AdminScreen() {
  const { name } = useLocalSearchParams();
  const today = new Date().toLocaleDateString("lv-LV");
  return (
    <SafeAreaView style={styles.container}>
        <Header>
          <User>{name}</User>
          <Data>{today}</Data>
        </Header>
       <ScrollPanel/>
       
     <Footer/>
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
