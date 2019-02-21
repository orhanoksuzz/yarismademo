import { createStackNavigator, createAppContainer } from "react-navigation";
import { 
    SplashPageScreen,
    LoginPageScreen,
    MainPageScreen
} from './screen/index';
const RootNavigator = createStackNavigator({
    Splash : {screen:SplashPageScreen},
    Login : {screen:LoginPageScreen},
    Main : {screen:MainPageScreen},
})

export default createAppContainer(RootNavigator);