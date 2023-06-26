import { Tabs } from "expo-router"
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { colors, globalStyles } from "../styles/styles";
import { Text } from "react-native";

export default () => {

  const [fontsLoaded] = useFonts({
    "Caprasimo": require("../fonts/Caprasimo-Regular.ttf")
  })

  if (!fontsLoaded){
    return undefined;
  }

  return (
    <Tabs screenOptions={{
      headerStyle: {backgroundColor: '#121212'},
      headerTitleStyle: { color: 'white'},
      headerShadowVisible: false,
      tabBarStyle: { backgroundColor: '#121212', borderTopColor: 'transparent'},
      tabBarShowLabel: false
    }}>
      <Tabs.Screen name="index" options={{
        tabBarIcon: ({focused}) => <Ionicons name="beer-outline" size={24} color={focused ? colors.dark.beer : 'white'} />,
        headerTitle: () => (<Text style={globalStyles.headerTitle}>Discover beer</Text>)
      }}/>
      <Tabs.Screen name="history" options={{
        unmountOnBlur: true,
        tabBarIcon: ({focused}) => <Ionicons name="ios-list-outline" size={24} color={focused ? colors.dark.beer : 'white'} />,
        headerTitle: () => (<Text style={globalStyles.headerTitle}>History</Text>),
        headerShown: false
      }}/>
    </Tabs>
  )
}