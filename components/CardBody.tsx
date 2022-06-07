import { cardProp } from "./TypesResource"
import { StyleSheet, View, Text, Image } from "react-native"
import LikeBtn from "./LikeBtn"
import CardFooter from "./CardFooter"

// CardBody => composant qui permet de construire le body pour chaque Card
export default function CardBody({ prod }: cardProp) {
    return (
        <View style={styles.container}>

            <View style={styles.imageBox}>
                <Image style={styles.image} source={prod.photo} />
            </View>

            <Text style={styles.titleStyle}>{prod.title + " (" + prod.brand + ") "}</Text>

            <View>
                <Text numberOfLines={3} style={styles.descTextStyle}>{prod.desc}</Text>
            </View>

            <View style={styles.footStyle}>
                <CardFooter prodSize={prod} />
                <LikeBtn prodLikes={prod} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between"
    },

    imageBox: {
        borderBottomWidth: 1,
        borderBottomColor: "#3498db",
        height: "40%",
        backgroundColor: "#dff9fb"
    },

    image: {
        resizeMode: "contain",
        width: "100%",
        height: "100%"
    },

    titleStyle: {
        fontWeight: "bold",
        textAlign: "left"
    },

    descTextStyle: {
        fontSize: 12,
        margin: 5,
        textAlign: "justify"
    },

    footStyle: {
        height: "15%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 5
    }
})