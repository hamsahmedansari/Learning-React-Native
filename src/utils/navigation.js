import { createStackNavigator, createAppContainer } from "react-navigation";
import { Home, Components, Api, Expo } from "./taskList";

const getScreensNavigator = () => {
  let temp = {};
  const allTasks = { ...Home, ...Components, ...Api, ...Expo };

  Object.keys(allTasks).map(e => {
    temp[e] = {
      screen: allTasks[e].screen,
      navigationOptions: ({ navigation }) => ({
        title: allTasks[e].title
      })
    };
  });
  return temp;
};

const RootStack = createStackNavigator(getScreensNavigator());

const App = createAppContainer(RootStack);

export default App;
