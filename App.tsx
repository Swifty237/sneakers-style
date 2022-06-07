import Card from "./components/Card"
import PRODUITS from "./components/data"
import { useState } from "react"
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native"
import { Header } from "@rneui/themed"
import Ionicons from "react-native-vector-icons/Ionicons"
import { productsProp } from "./components/TypesResource"



export default function App() {

  const [search, setSearch] = useState("")
  const [btn, setBtn] = useState("search")

  // newDatas => construction du tabelau avec les éléments correspondants à la recherche
  const newDatas: Array<productsProp> = PRODUITS.filter((item: productsProp) => {
    if (search === "" || item.title.toLowerCase().includes(search.toLowerCase()) || item.brand.toLowerCase().includes(search.toLowerCase())) {
      return item
    }
  })

  // changeBtn => permet de changer de bouton dans la barre de de recherche
  const changeBtn = (text: string) => {
    setSearch(text);
    (text !== "") ? setBtn("close") : setBtn("search")
  }

  // erase => permet d'annuler la recherche
  const erase = () => {
    if (btn == "close") {
      setSearch("");
      setBtn("search")
    }
  }

  return (
    <View style={styles.container}>
      <Header containerStyle={styles.headContainer} backgroundColor="black" />
      <View style={styles.searchContainer}>
        <View style={styles.content}>
          <TextInput
            placeholder="Search..."
            onChangeText={changeBtn}
            style={styles.textInput}
            value={search} />

          <TouchableOpacity style={styles.searchBtn} onPress={erase}>
            <Ionicons name={btn} size={30} color="#3498db" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.cardBox}>
        <Card searchedProduct={newDatas} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  headContainer: {
    height: 40,
    backgroundColor: "black"
  },

  searchContainer: {
    width: "100%",
    height: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15
  },

  content: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#3498db",
    height: 60,
    flexDirection: "row",
    alignItems: "center"
  },

  textInput: {
    flex: 1,
    height: "70%",
    marginHorizontal: 8
  },

  searchBtn: {
    marginEnd: 15
  },

  cardBox: {
    flex: 1,
    marginBottom: 4
  }
})