import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/components/screens/HomeScreen";
import ComponentScreen from './src/components/screens/ComponentScreen';
import ListScreen from './src/components/screens/ListScreen';
import ImageScreen from './src/components/screens/ImageScreen';
import CounterScreen from './src/components/screens/CounterScreen';
import ColorScreen from './src/components/screens/ColorScreen';
import ReadjustColorScreen from './src/components/screens/ReadjustColorScreen';
import ReadjustColorScreenWithReducer from './src/components/screens/ReadjustColorScreenWithReducer';
import CounterScreenWithReducer from './src/components/screens/CounterScreenWithReducer';
import TextScreen from './src/components/screens/TextScreen';
import BoxScreen from './src/components/screens/BoxScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    ReadjustColor: ReadjustColorScreen,
    ReadjustColorV2: ReadjustColorScreenWithReducer,
    CounterV2: CounterScreenWithReducer,
    Text: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
