import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Beer } from '../../models/Beer'
import { useLocalSearchParams } from 'expo-router'
import { sqliteService } from '../../services/beer-sqlite-service'
import { FlatList } from 'react-native-gesture-handler'
import BeerDetails from '../../components/BeerDetails'
import { globalStyles } from '../../styles/styles'

const detail = () => {

  const { id } = useLocalSearchParams<{id: string}>()
  const [ selectedBeer, setSelectedBeer ] = useState<Beer[]>([])
  const {findBeerById} = sqliteService()

  useEffect(() => {
    const fetchData = async () => {
      setSelectedBeer(await findBeerById(Number(id)))
    }
    fetchData()
  },[])

  return (
    <View style={globalStyles.container}>
      {selectedBeer &&
        <FlatList
        data={selectedBeer}
        renderItem={({item}) => (
          <BeerDetails beer={item}/>
        )}
        />
      }
    </View>
  )
}

export default detail
