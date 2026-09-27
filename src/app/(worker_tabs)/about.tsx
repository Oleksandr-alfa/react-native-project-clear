import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
          <Text style={styles.text}>About screen</Text>
           <Link href="/" style={styles.button}>
                  Go to LoginScreen screen
                </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    },
    button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
