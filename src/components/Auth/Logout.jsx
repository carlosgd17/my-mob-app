import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Logout({authData}) {
  return (
    <View style={styles.container}>
      <Text>Zona de Usuarios</Text>
      <Button title='Cerrar sesion' onPress={authData.logout}></Button>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})