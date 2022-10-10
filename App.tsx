import {NativeBaseProvider, StatusBar} from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import React from 'react';

import { THEME } from './src/styles/theme';

import SignIn from './src/screens/SignIn';
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
// Definir Status bar no App.tsx tera efeito em toda app
  return (
    <NativeBaseProvider theme={THEME}>

      <StatusBar 
      barStyle='light-content'
      backgroundColor="transparent"
      translucent
      />

       { fontsLoaded ? <SignIn /> : <Loading />}
       
    </NativeBaseProvider>
  );
}

