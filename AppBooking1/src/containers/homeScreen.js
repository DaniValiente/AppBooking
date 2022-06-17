import * as React from 'react';
import { Button, View,Text,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import body from '../styles/body';
import StackBooking from '../navigation/StackBooking';

import ListaBooking from './ListaBooking';

const Reservas = [
    {imagen:require('../assets/cave.jpg'),subtexto:'Troll Cave',texto:'Even during the dailytime, a troll cave is dark because the trolls keep the blinds pulled down to the..,'},
    {imagen:require('../assets/iceberg.jpg'),subtexto:'Caradharas Iceberg',texto:'Below he snowline, Caradharas is described as having dull red slopes, "as if stained with blood"...',}
]

function homeScreen({ navigation }) {
    return (
        <View style={body.contenedor}>
        <FlatList
        data={Reservas}
        renderItem={({ item }) => <ListaBooking Reservas= {item} onPress={()=>navigation.navigate('Booking',{item:item})} />} 
        />
        </View>

    )
    }
  
  export default homeScreen;