import { View, Text } from "react-native"
import { sizeProp } from "./TypesResource"

export default function CardFooter({ prodSize }: sizeProp) {
    return (
        <View>
            <Text style={{ color: "gray", fontSize: 12 }}>{"Taille " + prodSize.size}</Text>
        </View>
    )
}