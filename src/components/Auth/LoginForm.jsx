import { StyleSheet, View } from 'react-native'
import React from 'react'

import { Button, TextInput } from 'react-native-paper'
import { formStyles } from '../../styles'

export default function LoginForm({changeForm}) {
  return (
    <View>
        <TextInput
            label="Correo electronico"
            style={formStyles.input}
        />

        <TextInput
            label="Contraseña"
            style={formStyles.input}
            secureTextEntry
        />

        <Button mode="contained" style={formStyles.btnSuccess}>
            Inniciar sesion
        </Button>

        <Button mode="text" style={formStyles.btnText} labelStyle={formStyles.btnTextLabel}
                onPress={changeForm}>
            Registrarse
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({})