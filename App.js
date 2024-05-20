import { StyleSheet, Text, View } from 'react-native';
import {PaperProvider} from 'react-native-paper';
import React, {useState} from 'react';

import Auth from './src/screens/Auth';

export default function App() {

  const [auth, setAuth] = useState(undefined);

  return (
    <PaperProvider>
        {auth ? <Text>Zona de Usuarios</Text> : <Auth/>}
    </PaperProvider>
  );
}
