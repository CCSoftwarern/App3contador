
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Contador from './src/componentes/contador';
import { StyleSheet } from 'react-native';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container} >
        <Contador inicial={10} passo={2} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
