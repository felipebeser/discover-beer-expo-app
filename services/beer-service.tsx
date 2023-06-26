import { Beer } from "../models/Beer";
import axios from 'axios'

export const getRamdomBeer = async () => {
  const { data } = await axios.get<Beer>('https://random-data-api.com/api/beer/random_beer');
  return data;
}