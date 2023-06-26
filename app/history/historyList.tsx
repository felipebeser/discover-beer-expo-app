import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { globalStyles } from '../../styles/styles'
import { sqliteService } from '../../services/beer-sqlite-service'
import { Beer } from '../../models/Beer'
import { FlatList } from 'react-native-gesture-handler'
import { Link, useRouter } from 'expo-router'
import BeerCompactDetails from '../../components/BeerCompactDetail'
import { StatusBar } from 'expo-status-bar'

const history = () => {
  const { listBeer, eraseBeer } = sqliteService()
  const [ beerHistory, setBeerHistory ] = useState<Beer[]>([])
  const [ loading, setLoading ] = useState(true)
  const { push } = useRouter()

  useEffect(() => {
      setBeerHistory(listBeer());
      setLoading(false)
  },[])

  const eraseHistory = () => {
    eraseBeer();
    setBeerHistory(null)
    setLoading(false)
  }
  return (
    <View style={globalStyles.container}>
      <StatusBar style='light'/>
      {!loading
      ? <View style={globalStyles.historyContainer}>
          <FlatList
            data={beerHistory}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => push({ pathname: '/history/detail', params: {id: item.id} })}>
                  <BeerCompactDetails beer={item}/>
                </TouchableOpacity>
              )}
          />
          <TouchableOpacity style={globalStyles.eraseButtonContainer} onPress={() => eraseHistory()}>
            <Text style={globalStyles.text}>Remove history</Text>
          </TouchableOpacity>
        </View>
       :  <View style={globalStyles.loadingContainer}>
            <ActivityIndicator size="large" color="#f5f5f5"/>
          </View>
      }
    </View>
  )
}

export default history
