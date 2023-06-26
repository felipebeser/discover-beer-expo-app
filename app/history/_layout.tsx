import { Stack } from "expo-router"
import { globalStyles } from "../../styles/styles"
import { Text } from "react-native"

export default () => {
  return (
    <Stack
      initialRouteName="historyList"
      screenOptions={{
        headerStyle: {backgroundColor: '#121212'},
        headerTitleStyle: { color: 'white'},
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="historyList" options={{
        headerTitle: () => (<Text style={globalStyles.headerTitle}>History</Text>),
        headerBackTitleVisible: false
      }}/>
      <Stack.Screen name="detail" options={{
        headerTitle: () => (<Text style={globalStyles.headerTitle}>Beer</Text>),

      }}/>
    </Stack>
  )
}