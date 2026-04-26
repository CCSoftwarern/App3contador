
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Sorteador from './src/componentes/sorteador';
import { StyleSheet } from 'react-native';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container} >
        <Sorteador />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
