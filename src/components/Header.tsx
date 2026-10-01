import { ReactNode } from "react"
import { View, StyleSheet } from "react-native"

type Props = {
    children: ReactNode;
};

export default function Header({children}: Props) {
    return <View style={styles.container}>{children}</View>
}



const styles = StyleSheet.create({
    container: {
       
        height: 60,
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        width: "100%",
        justifyContent: 'space-between',
        padding: 10,
alignItems: 'center'
    }
})