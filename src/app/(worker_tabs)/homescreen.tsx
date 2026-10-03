import { Text, View, StyleSheet, ScrollView } from 'react-native';
 import { Link } from 'expo-router'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import User from '@/components/User';
import Data from '@/components/Data';
import Header from '@/components/Header';
import ScrollPanel from '@/components/ScrollPanel';
import Footer from '@/components/Footer';
import PlaceObj from '@/components/PlaceObj';
import { useLocalSearchParams } from "expo-router";


 

export default function HomeScreen() {
  const { name } = useLocalSearchParams();
  const today = new Date().toLocaleDateString("lv-LV");
 
  return (
      <SafeAreaView style={styles.container} edges={['top']}>
      <Header>
        <User>{name}</User>
        <Data>{today}</Data>
      </Header>
       {/* <input id="datetime-picker" style={{ display: "none" }} /> */}
     <ScrollPanel/>
   <Footer />
    </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    
   
  },
  containerscrole: {
    // height: '100%',
    flex: 1,
   
  },
 
 
 

});
