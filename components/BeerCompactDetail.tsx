import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Beer } from '../models/Beer'
import { globalStyles } from '../styles/styles';

interface BeerProps {
  beer: Beer;
}
const BeerCompactDetails = ({beer}: BeerProps) => {
  return (
    <View style={globalStyles.beerCompactDetailsContainer}>
        <Text style={globalStyles.beerCompactDetailsTitle}>{beer.name} </Text>
      <View style={globalStyles.beerCompactDetailsInfoContainer}>
        <Text style={globalStyles.text}>by {beer.brand}</Text>
        <Text style={globalStyles.text}> ({beer.style})</Text>
      </View>
    </View>
  )
}

export default BeerCompactDetails
