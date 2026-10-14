import { ReactNode } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';



type Props = {
  children: ReactNode;
};

export default function User({ children }: Props) {
  return  <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
      flex: 1,
    fontSize: 32,
      color: '#0d0c0c',
       
    }
})