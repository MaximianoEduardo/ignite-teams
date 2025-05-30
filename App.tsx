import { Groups } from '@screens/Groups/index';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';

import theme from '@theme/index'; 
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';

export default function App() {

  // Verificar se font esta carregada antes do aplicativo
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (

    <ThemeProvider theme={theme}>

      <StatusBar 
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />

     {fontsLoaded ? <Groups/> : <Loading/>}
    </ThemeProvider>

    
  );
}

