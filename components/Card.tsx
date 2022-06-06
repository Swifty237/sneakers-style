import CardHeader from "./CardHeader"
import CardBody from "./CardBody"
import { StyleSheet, View, FlatList, TouchableOpacity, Modal, Text, ScrollView, Image } from "react-native"
import { useState } from "react"
import { itemProp, searchProp } from "./TypesResource"
import PRODUITS from "./data"


export default function Card({ searchedProduct }: searchProp) {

    const [modalVisible, setModalVisible] = useState(false)
    const [index, setIndex] = useState(0)

    const renderItem = ({ item }: itemProp) => (
        <TouchableOpacity
            style={styles.cardStyle}
            onPress={() => { setIndex(PRODUITS.indexOf(item)), setModalVisible(true) }}>
            <CardHeader prod={item} />
            <CardBody prod={item} />
        </TouchableOpacity>
    )

    return (
        <View>
            <Modal style={styles.modalBox} visible={modalVisible} animationType="slide">
                <View style={styles.modalImageBox}>
                    <Image style={styles.modalImage} source={PRODUITS[index].photo} />
                </View>

                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.modalTextBox}>
                        <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center", margin: 10 }}>{PRODUITS[index].title + " (" + PRODUITS[index].brand + ") "}</Text>
                        <Text style={styles.modalText}>{PRODUITS[index].desc}</Text>
                        <Text style={styles.modalText}>{"Tailles disponibles: " + PRODUITS[index].size}</Text>
                        <Text style={styles.modalText}>{"Prix: " + PRODUITS[index].price}</Text>
                        <Text style={styles.modalText}>{"En stock: " + PRODUITS[index].stocked}</Text>
                    </View>
                </ScrollView>

                <TouchableOpacity style={styles.closeModal} onPress={() => setModalVisible(false)}>
                    <View style={{ width: 100, margin: 10, alignItems: "center" }}>
                        <Text>Fermer</Text>
                    </View>
                </TouchableOpacity>
            </Modal>

            <FlatList
                keyExtractor={(item) => item.id}
                numColumns={2}
                data={searchedProduct}
                renderItem={renderItem}
                ItemSeparatorComponent={() => (<View style={styles.separator} />)} />
        </View>



        // < ScrollView >
        /* <View style={styles.boxCards}> */
        /* { */
        // items.map((obj: any, i: number) => {
        // return (
        // <View key={i} style={styles.cardStyle}>
        /* <CardHeader prod={obj} /> */
        /* <CardBody prod={obj} /> */
        /* </View> */
        // )
        // })
        // }
        /* </View> */
        /* </ScrollView > */
    )


}

const styles = StyleSheet.create({
    boxCards: {
        width: "100%"
    },

    cardStyle: {
        borderColor: "#3498db",
        width: "48%",
        height: 300,
        borderWidth: 1,
        marginBottom: 7,
        marginHorizontal: 4
    },

    separator: {
        borderWidth: 1,
        marginTop: 2,
        borderColor: "transparent"
    },

    modalBox: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    modalImageBox: {
        flex: 2,
        backgroundColor: "black"

    },

    modalImage: {
        height: "100%",
        width: "100%",
        resizeMode: "contain"
    },

    modalText: {
        textAlign: "justify",
        margin: 10
    },

    modalTextBox: {
        flex: 1
    },

    closeModal: {
        alignItems: "center",
        width: 150,
        borderRadius: 5,
        borderWidth: 2,
        alignSelf: "center",
        margin: 20
    }
})
