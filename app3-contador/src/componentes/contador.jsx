import {useState} from 'react'
import { Text, Button, StyleSheet, View } from 'react-native'


const Contador = ({inicial = 0, passo = 1}) => {
const [numero, setNumero] = useState(inicial)
let inc = () => setNumero(numero + passo)
let dec = () => setNumero(numero - passo)
return (
    <View>
            <View style={style.btn}>
                <Button title=" + " onPress={inc} />

                {numero < 0 ? (
                    <Text style={style.txtNumeroNegativo}>{numero}</Text>
                ) : (
                    <Text style={style.txtNumero}>{numero}</Text>
                )}

                <Button title=" - " onPress={dec} />
            </View>
    </View>
)
}
export default Contador

const style = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '20%',
        marginTop: 10
    },
    txtNumero:{
        fontSize: 25,
        marginHorizontal: 10,
        textAlign: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        minWidth: 50
    },
    txtNumeroNegativo: {
        color: 'red',
        fontSize: 25,
        marginHorizontal: 10,
        textAlign: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        minWidth: 50
    }
})