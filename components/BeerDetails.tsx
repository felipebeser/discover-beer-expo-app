import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Beer } from '../models/Beer'
import { globalStyles } from '../styles/styles';

interface BeerProps {
  beer: Beer;
}
const BeerDetails = ({beer}: BeerProps) => {
  return (
    <View style={globalStyles.beerDetailsContainer}>
      {/* {Object.entries(beer)
        .filter(([key, value]) => (key != 'id' && key != 'uid'))
        .map(([key, value], index) => (
          <Text style={globalStyles.text} key={index}>{key}: {value}</Text>
          ))} */}
      <View style={globalStyles.beerDetails}>
        <Text style={globalStyles.beerDetailsTitle}>{beer.name}</Text>
        <Text style={globalStyles.beerDetailsBrand}>by {beer.brand}</Text>
        <Text style={globalStyles.beerDetailsText}>Style: {beer.style}</Text>
        <Text style={globalStyles.beerDetailsText}>Hop: {beer.hop}</Text>
        <Text style={globalStyles.beerDetailsText}>Malts: {beer.malts}</Text>
        <Text style={globalStyles.beerDetailsText}>IBU: {beer.ibu}</Text>
        <Text style={globalStyles.beerDetailsText}>Alcohol: {beer.alcohol}</Text>
      </View>
    </View>
  )
}

export default BeerDetails
