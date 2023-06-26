import { StyleSheet } from "react-native";


export const colors = {
  dark: {
    background: '#121212',
    beer: '#DE7523',
    text: '#fff'
  }
}

export const globalStyles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: colors.dark.background,
    padding: 30
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  historyContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  text: {
    color: colors.dark.text
  },
  beerButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.dark.beer,
    borderWidth: 1,
    marginHorizontal: 30,
    borderRadius: 15,
    flex: 0.25
  },
  beerButton: {
    fontFamily: 'Caprasimo',
    fontSize: 20,
    color: colors.dark.text
  },
  beerDetailsContainer: {
    borderColor: colors.dark.beer,
    borderWidth: 1,
    borderRadius: 20,
    margin: 30,
    shadowColor: 'lightblue',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  beerDetails: {
    padding: 20,
    gap: 10,
  },
  beerDetailsTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'Caprasimo',
    color: colors.dark.beer,
  },
  beerDetailsBrand: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Caprasimo',
    color: colors.dark.beer,
    shadowColor: '#f5f5f5',
    shadowOffset: {width: 2, height: 3},
    shadowOpacity: 0.2,
    shadowRadius: 0.5,
  },
  beerDetailsText: {
    fontSize: 18,
    color: colors.dark.text,
    shadowOffset: {width: 3, height: 5},
    shadowOpacity: 0.35,
    shadowRadius: 2,
  },
  beerCompactDetailsContainer: {
    paddingBottom: 10
  },
  beerCompactDetailsInfoContainer: {
    flexDirection: 'row'
  },
  beerCompactDetailsTitle: {
    fontFamily: 'Caprasimo',
    fontSize: 20,
    color: colors.dark.beer,
    shadowColor: '#f5f5f5',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 0.5,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'Caprasimo',
    fontWeight: 'normal',
    color: colors.dark.text,
  },
  eraseButtonContainer: {
    backgroundColor: colors.dark.beer,
    alignSelf: 'center',
    height: 25,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  emptyHistoryMessage: {
    fontSize: 20,
    fontFamily: 'Caprasimo',
    color: colors.dark.beer
  }
})