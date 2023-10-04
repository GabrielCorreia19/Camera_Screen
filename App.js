import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './src/Home'
import Camera_Frontal from './src/Camera_Frontal'
import Camera_Traseira from './src/Camera_Traseira'
import Video_Traseiro from "./src/Video_Traseiro";
import Video_Frontal from "./src/Video_Frontal";
import Camera_Frontal_Back from './src/Camera_Front_Back'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Camera_Frontal" component={Camera_Frontal}/>
        <Stack.Screen name="Camera_Traseira" component={Camera_Traseira}/>
        <Stack.Screen name="Video_Traseiro" component={Video_Traseiro}/>
        <Stack.Screen name="Video_Frontal" component={Video_Frontal}/>
        <Stack.Screen name="Camera_Frontal_Back" component={Camera_Frontal_Back}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}