import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  Platform,
} from 'react-native'

const Login = () => {
  const [user, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleSubmit = async () => {
    const payload = {
      user,
      password,
    }
    await AsyncStorage.setItem('@USER_LOGIN', JSON.stringify(payload))
    Alert.alert('Cadastrado com sucesso')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View styles={styles.body}>
        <Text style={styles.text}>Usuário</Text>
        <TextInput
          style={styles.input}
          testID="user"
          placeholder="Digite seu email ou nome de usuário"
          onChangeText={(text) => setUser(text)}
        />
        <Text style={styles.text}>Senha</Text>
        <TextInput
          style={styles.input}
          testID="password"
          placeholder="Digite sua senha"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View styles={styles.footer}>
        <Button
          onPress={() => handleSubmit()}
          style={styles.button}
          title="Enviar"
        />
        <Button style={styles.button} title="Voltar" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e5494',
    justifyContent: 'space-between',
  },
  body: {
    flex: 1,
  },
  footer: {
    flex: 1,
  },
  button: {
    marginBottom: 15,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: Platform.OS === 'ios' ? 75 : 65,
  },
  text: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 25,
    marginLeft: 15,
  },
})

export default Login
