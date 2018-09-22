import { createStackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";

export default createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Uber Panda"
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);
