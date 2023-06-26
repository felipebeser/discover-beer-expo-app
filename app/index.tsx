import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { getRamdomBeer } from '../services/beer-service';
import BeerDetails from '../components/BeerDetails';
import { Beer } from '../models/Beer';
import { globalStyles } from '../styles/styles';
import { sqliteService } from '../services/beer-sqlite-service';

const index = () => {
  const [beer, setBeer] = useState<Beer>()
  const {db, saveBeer} = sqliteService();

  useEffect(() => {
    saveBeer(beer)
  },[beer])

  useEffect(() => {
    findRandomBeer()
  },[])

  const findRandomBeer = async () => {
    const response = await getRamdomBeer();
    setBeer(response)
  }

  return (
    <View style={globalStyles.container}>
      <StatusBar style='light'/>
      {beer ?
        <>
          <BeerDetails beer={beer}/>
          <TouchableOpacity onPress={() => findRandomBeer()} style={globalStyles.beerButtonContainer}>
            <View>
              <Text numberOfLines={2} style={globalStyles.beerButton}>
                Show new beer 🍻
              </Text>
            </View>
          </TouchableOpacity>
        </>
      : <View style={globalStyles.loadingContainer}>
          <ActivityIndicator size="large" color="#f5f5f5"/>
        </View>
      }
    </View>
  )
}

export default index
