import { StyleSheet, Text, View } from 'react-native';
import {PaperProvider} from 'react-native-paper';
import React, {useEffect, useMemo, useState} from 'react';

import Auth from './src/screens/Auth';
import AuthContext from './src/context/AuthContext';
import { setTokenApi } from './src/api/token';

export default function App() {

  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    setAuth(null);
  }, []);

  const login =  (user) => {
    console.log('Login APP');
    console.log(user);
    setTokenApi(user.jwt);
    setAuth({
      idUser: user.user._id,
      token: user.jwt
    });
  }

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout: () => null,
    }),
    [auth]
  )

  if(auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>
          {auth ? <Text>Zona de Usuarios</Text> : <Auth/>}
      </PaperProvider>
    </AuthContext.Provider>
  );
}
