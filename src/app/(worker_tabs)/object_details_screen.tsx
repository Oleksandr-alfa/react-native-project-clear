import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";
import AddressMapSnippet from "@/components/MapForObjScreen";
import ObjectAddressText from "@/components/ObjectAddressText";
import KeyForObject from "@/components/KeyForObject";

export default function ObjectDetailsScreen() {
    return (
        <SafeAreaView>
            <AddressMapSnippet />
            <ObjectAddressText />
            <KeyForObject/>
        </SafeAreaView>
    )
}