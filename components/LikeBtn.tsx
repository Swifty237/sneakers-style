import { useState } from "react"
import { Text, StyleSheet, TouchableOpacity } from "react-native"
import { likeProp } from "./TypesResource"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

// LikeBtn => Bouton like qui est appelé dans le composant CardBody
export default function LikeBtn({ prodLikes }: likeProp) {

    if (prodLikes.likes >= 0) {

        const [like, setLike] = useState<number>(parseInt(prodLikes.likes))
        return (
            <TouchableOpacity style={styles.container} onPress={() => { setLike(like + 1) }}>
                <Text style={{ marginHorizontal: 4 }}>
                    <MaterialCommunityIcons name="heart" size={20} color="#3498db" />
                </Text>
                <Text style={styles.text}>{like ? like : 0}</Text>
            </TouchableOpacity>
        )
    }
    else {

        const [like, setLike] = useState<number>(0)
        return (
            <TouchableOpacity style={styles.container} onPress={() => { setLike(like + 1) }}>
                <Text style={{ marginHorizontal: 4 }}>
                    <MaterialCommunityIcons name="heart" size={20} color="#3498db" />
                </Text>
                <Text style={styles.text}>{like ? like : 0}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row"
    },

    text: {
        color: "#3498db",
        fontWeight: "bold",
        fontSize: 15
    }
})