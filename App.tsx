import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';
import { Routes } from 'src/routes';

export default function App() {

  // Verificar se font esta carregada antes do aplicativo
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (

    <>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />

     {fontsLoaded ? <Routes/> : <Loading/>}
     </>

    
  );
}

