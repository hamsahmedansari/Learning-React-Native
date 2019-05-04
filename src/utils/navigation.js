import { createStackNavigator, createAppContainer } from "react-navigation";
import taskList from "./taskList";

const getScreensNavigator = () => {
  let temp = {};
  Object.keys(taskList).map(e => {
    temp[e] = {
      screen: taskList[e].screen,
      navigationOptions: ({ navigation }) => ({
        title: taskList[e].title
      })
    };
  });
  return temp;
};

const RootStack = createStackNavigator(getScreensNavigator());

const App = createAppContainer(RootStack);

export default App;
