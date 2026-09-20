
// import { ThemeView } from "@/theme";
// import { Link, useRouter } from "expo-router";
// import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";


// import { useContext, useState } from "react";
// const LogoImage = require('@/assets/images/logo.png')

// export default function LoginScreen() {

//   const router = useRouter();
//  const [password, setPassword] = useState('')
  
//   return (
   
//     <View style={styles.container}>
//       <Image source={LogoImage} style={styles.image} />
//        <View style={styles.inputBox}>
//         <TextInput value={password}
//           onChangeText={setPassword}
//         placeholder='password'
//         style={styles.input}
//       />
//         <TouchableOpacity style={styles.button} onPress={(e) => {
//           if(password.toLowerCase() === 'olena') router.push("/")
//         }}>
//       <Text style={styles.buttonText}>Go to Login</Text>
//     </TouchableOpacity></View>
//       {/* <Text style={styles.text}>Login my App Screen</Text>
//        <Link href="/" style={styles.button}>
//                         Go to Home screen
//                       </Link> */}
//     </View>
  
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     gap: 50,
//   },

 

//   light: {
//     backgroundColor: "#eee",
//     color: "#000",
//   },

//   dark: {
//     backgroundColor: "#222",
//     color: "#fff",
//   },
//   button: {
//      height: 40,
//   padding: 10,
//   backgroundColor: "#b5b1b1",
//     borderRadius: 8,
//   justifyContent: 'center',
// },

// buttonText: {
//   fontSize: 15,
//   textDecorationLine: "none",
//   color: "#0b0909",
// },

//   image: {
//     width: 170,
//     height: 60,
//   },
//   input: {
//     width: '60%',
//     height: 40,
//           borderWidth: 1,
//           borderColor: "#ccc",
//           borderRadius: 8,
//     paddingHorizontal: 10,
          
//   },
//   inputBox: {
//     flexDirection: 'row',
//     gap: 10,
//   }
// });


//


import { useState } from "react";
import { 
  View, Text, StyleSheet, Image, TextInput, TouchableOpacity,
  KeyboardAvoidingView, Platform 
} from "react-native";
import { useRouter } from "expo-router";

const LogoImage = require('@/assets/images/logo.png');

export default function LoginScreen() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password.toLowerCase() === "olena") {
      router.push("/homescreen");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Image source={LogoImage} style={styles.logo} />

        <View style={styles.card}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Please enter your password</Text>

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            style={styles.input}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 160,
    height: 60,
    marginBottom: 40,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 14,
    color: "#6A6A6A",
    marginBottom: 20,
  },

  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: "#FAFAFA",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#4A90E2",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#4A90E2",
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 3,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
