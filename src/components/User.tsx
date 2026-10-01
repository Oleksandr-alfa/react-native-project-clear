import { ReactNode } from 'react';
import { Text, StyleSheet } from 'react-native';



type Props = {
  children: ReactNode;
};

export default function User({ children }: Props) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        // textAlign: 'center',
        // justifyContent: 'center',
    }
})