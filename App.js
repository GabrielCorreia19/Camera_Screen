import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Camera_Frontal from './Camera_Frontal'
import Camera_Traseira from './Camera_Traseira'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Camera_Frontal" component={Camera_Frontal}/>
        <Stack.Screen name="Camera_Traseira" component={Camera_Traseira}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}