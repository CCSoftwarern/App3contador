import {
  Text,
  Button,
  StyleSheet,
  View,
  Alert,
  TextInput,
  Image,
} from "react-native";
import { useState } from "react";

const Sorteador = ({}) => {
  const [nNumeros, setNNumeros] = useState("6");
  const [numerosSorteados, setNumerosSorteados] = useState([]);

  const sortearNumeros = () => {
    const quantidade = parseInt(nNumeros);
    if (isNaN(quantidade) || quantidade < 6 || quantidade > 20) { 
      Alert.alert(
        "Atenção",
        "Por favor, insira um número válido entre 6 e 20.",
      );
      return;
    }
    const sorteados = [];
    while (sorteados.length < quantidade) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!sorteados.includes(numero)) {
        sorteados.push(numero.toString().padStart(2, "0")); // aqui contverti pra string e adiciona zero a esqerda se for menor que 10
      }
    }
    setNumerosSorteados(sorteados);
  };

  return (
    <View>
      <View>
        <View style={style.containerIMG}>
          <Image
            style={style.image}
            source="https://cdn.pixabay.com/photo/2013/07/13/12/07/four-leaf-clover-159210_1280.png"
            contentFit="cover"
            transition={1000}
          />
        </View>
        <Text style={style.titulo}>Sorteador de Números</Text>

        <TextInput
          style={style.txtNumero}
          placeholder="Quantidade de números"
          keyboardType="numeric"
          value={nNumeros}
          onChangeText={setNNumeros}
        />

        <Button style={style.btn} title=" Sortear " onPress={sortearNumeros} />

        <View style={style.containerNumeros}>
          {numerosSorteados.map((numero, index) => (
            <View style={style.circulo} key={index}>
              <Text style={style.textoInterno}>{numero}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};
export default Sorteador;

const style = StyleSheet.create({
  btn: {
    width: "20%",

    marginBottom: 12,
    marginTop: 12,
    alignSelf: "center",
    backgroundColor: "#1b7c4f",
  },
  txtNumero: {
    fontSize: 25,
    marginHorizontal: 10,
    textAlign: "center",
    padding: 5,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    minWidth: 50,
    marginBottom: 12,

  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  containerNumeros: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 280,
    alignSelf: "center",
    marginTop: 20,
  },

  circulo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
    borderWidth: 1.5,
    borderColor: "#14442e",
    backgroundColor: "#d4e6d9",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },

  textoInterno: {
    color: "#094931",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
    containerIMG: {
    justifyContent: "center",
    alignItems: "center",
  },
    titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    },
});
