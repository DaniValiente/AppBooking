import React from 'react';
import 'react-native-gesture-handler';
import DrawerNavigator from './src/navigation/drawernavigation'
import { NavigationContainer} from '@react-navigation/native';
function App(){
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  )
}
export default App;  