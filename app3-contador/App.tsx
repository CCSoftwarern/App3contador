
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Calculo from './src/componentes/calculo';
import { StyleSheet } from 'react-native';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container} >
        <Calculo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',     // Alinha horizontalmente (centro da largura)
    justifyContent: 'center', // Alinha vertically (centro da altura)
  }
});
