import { useState } from "react";
import { Text, Button, StyleSheet, View, Alert, TextInput } from "react-native";

const Calculo = () => {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(0);

  const calcular = () => {
    const kmlNum = parseFloat(numero1);
    const litroNum = parseFloat(numero2);
    if (kmlNum > 0 && litroNum > 0) {
      setResultado(kmlNum / litroNum);
    } else {
      Alert.alert("Atenção", "O consumo e os litros devem ser maiores que zero.");
      
    }
  };
  return (
    <View>
      <View style={style.container}>
  <Text style={style.label}>Distância percorrida (Km):</Text>
        <TextInput
          style={style.input}
          placeholder="Km/L"
          keyboardType="numeric"
          value={numero1}
          onChangeText={setNumero1}
        />
      <Text style={style.label}>Combustível gasto (Litros):</Text>
        <TextInput
          style={style.input}
          placeholder="Litros"
          keyboardType="numeric"
          value={numero2}
          onChangeText={setNumero2}
        />
              
        <Button title=" Calcular " onPress={calcular} />

        <Text style={style.txt}> Consumo médio: {resultado.toFixed(2)} km/L</Text>
      </View>
    </View>
  );
};
export default Calculo;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',   
    paddingHorizontal: 20,  
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: '100%',          
    marginBottom: 12,       
    borderRadius: 5,
    textAlign: 'center', 
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",        
    marginTop: 10,
  },
  txt: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20, 
    marginTop: 10        
  },
  label:{
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    textAlign: 'left',
  }
});
