import { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableNativeFeedback,
  Image,
  Alert,
} from 'react-native'
import api from '../../apiGithub'

export default function Home({ navigation }) {
  const [repositores, setRepositores] = useState([])

  const _loadingRepositores = async () => {
    try {
      const response = await api.get('/users')
      setRepositores(response.data)
    } catch (error) {
      console.error('Error on _loadingRepositores', error)
    }
  }
  const _viewDetails = async (userLogin) => {
    try {
      const response = await api.get(`/users/${userLogin}/repos`)
      const followers = response.data.length

      // Alert.alert(userLogin, `Repositórios: ${followers}`)
      navigation.navigate('Details')
    } catch (error) {
      console.error('Error on _viewDetails', error)
    }
  }

  useEffect(() => {
    _loadingRepositores()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Repositórios do GitHub</Text>
      <FlatList
        data={repositores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableNativeFeedback onPress={() => _viewDetails(item.login)}>
            <View style={styles.line}>
              <Image style={styles.image} source={{ uri: item.avatar_url }} />
              <Text style={styles.lineText}>{item.login}</Text>
            </View>
          </TouchableNativeFeedback>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6e5494',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 65,
  },
  line: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    width: '80%',
    height: 60,
    backgroundColor: '#f5f5f5',
    marginTop: 30,
  },
  lineText: {
    color: '#333',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  image: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginLeft: 15,
    marginRight: 15,
  },
})
