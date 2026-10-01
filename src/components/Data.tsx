import { ReactNode } from "react";
import { Text } from "react-native"


type Props = {
    children: ReactNode;
};
export default function Data({children}: Props) {
    return <Text>{children}</Text>;
}