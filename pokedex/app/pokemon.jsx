import { useLocalSearchParams } from "expo-router";
import { Dimensions } from "react-native";
import Button from "../components/Button";
import Header from "../components/Header";
import TextInfo from "../components/TextInfo";
import { backgrounds } from "polished";
import { styles } from "../components/Button/styles";

const width = Dimensions.get("window").width;

export default function PokemonDetail(){
    const pokemon = useLocalSearchParams();
    const tipos =
        typeof pokemon.Tipo === "string" ? JSON.parse(pokemon.Tipo) : pokemon.Tipo;

    return (
        <View style={styles.container}>
            <Header title={`#${pokemon.Numero} - ${pokemon.Nome}`}
            back={true} />

            <View style={[styles.card, { backgroundColor: tipos[0].Cor }]}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: pokemon.Imagem }}
                        styles={styles.image} />
                </View>

                <ScrollView>
                    
                </ScrollView>
            </View>
        </View>
    )
}
