import { createStackNavigator, createAppContainer } from "react-navigation";
import test from "../test";
import test1 from "../test1";

const RootStack = createStackNavigator({
  test1: { screen: test1 },
  test: { screen: test }
});

const App = createAppContainer(RootStack);

export default App;
