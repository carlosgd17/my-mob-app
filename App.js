import { StyleSheet, Text, View } from 'react-native';
import {PaperProvider} from 'react-native-paper';
import React, {useEffect, useMemo, useState} from 'react';

import { jwtDecode } from 'jwt-decode';

import Auth from './src/screens/Auth';
import AuthContext from './src/context/AuthContext';
import { getTokenApi, removeTokenApi, setTokenApi } from './src/api/token';
import Logout from './src/components/Auth/Logout';

export default function App() {

  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    async function fetchData() {
      const token = await getTokenApi();
      if(token) {
        setAuth({
          token,
          idUser: jwtDecode(token).id
        })
      } else {
        setAuth(null);
      }
    }

    fetchData();
  }, [])

  const login =  (user) => {
    console.log('\n\tLogin APP');
    // console.log(user);
    setTokenApi(user.jwt);
    setAuth({
      idUser: user.user._id,
      token: user.jwt
    });
  }

  const logout =  () => {
    if(auth){
      removeTokenApi();
      setAuth(null);
    }
  }

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  )

  if(auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider>
          {auth ? <Logout authData={authData}/> : <Auth/>}
      </PaperProvider>
    </AuthContext.Provider>
  );
}
