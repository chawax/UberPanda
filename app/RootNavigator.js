import { createStackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import ResultsScreen from "./ResultsScreen";
import DetailScreen from "./DetailsScreen";

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Uber Panda"
      }
    },
    Results: {
      screen: ResultsScreen,
      navigationOptions: {
        title: "Résultats"
      }
    },
    Details: {
      screen: DetailScreen,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.item.name
      })
    }
  },
  {
    initialRouteName: "Home"
  }
);
