import { Text, View, StyleSheet, ScrollView } from 'react-native';
 import { Link } from 'expo-router'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import User from '@/components/User';
import Data from '@/components/Data';
import Header from '@/components/Header';
import ScrollPanel from '@/components/ScrollPanel';
import Footer from '@/components/Footer';
import PlaceObj from '@/components/PlaceObj';

 

export default function HomeScreen() {
  return (
   
      
      <SafeAreaView style={styles.container}>
      <Header>
        <User>{"Olena"}</User>
        <Data>{"01.01.2026"}</Data>
      </Header>
     <ScrollPanel/>
     
   <Footer/>
    </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#c68625',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerscrole: {
    // height: '100%',
    flex: 1,
    backgroundColor: "rgb(163, 22, 22)",
  },
 
 
 

});
