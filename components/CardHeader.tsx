import { cardProp } from "./TypesResource"
import { StyleSheet, View, Text } from "react-native"

// CardHeader => composant à appeler dans chaque Card pour afficher le prix
export default function CardHeader({ prod }: cardProp) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{prod.price + " €"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "flex-end",
        borderBottomWidth: 1,
        borderColor: "#3498db"
    },

    text: {
        color: "gray",
        fontSize: 20
    }
})