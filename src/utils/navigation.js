import { createStackNavigator, createAppContainer } from "react-navigation";

// DefaultScreen
import defaultScreen from "./default";
import task1 from "../tasks/task-1";

const RootStack = createStackNavigator({
  default: {
    screen: defaultScreen
  },
  task1: {
    screen: task1
  }
});

const App = createAppContainer(RootStack);

export default App;
