import homeScreen from "../containers/homeScreen";
import NewBooking from "../containers/NewBooking";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const stack = createNativeStackNavigator();

function StackBooking(){
    <stack.Navigator>
        <stack.Screen name="Home" component={homeScreen}></stack.Screen>
        <stack.Screen name="Booking" component={NewBooking}></stack.Screen>
    </stack.Navigator>
}
export default StackBooking;