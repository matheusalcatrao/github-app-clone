import { StyleSheet, Text, View } from 'react-native'

export default function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do usuário</Text>
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
})
