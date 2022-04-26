import { useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/pages/Home'
import Login from './src/pages/Login'

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  const _searchUser = async () => {
    const userLogin = await AsyncStorage.getItem('@USER_LOGIN')
    setIsAuthenticated(userLogin !== null)
  }

  useEffect(() => {
    _searchUser();
  }, [])

  return isAuthenticated ? <Home /> : <Login />
}
