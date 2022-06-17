import * as React from 'react';
import { TouchableOpacity, View,Text,Image} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import body from '../styles/body';


export default function ListaBooking({Reservas, onPress}){
    return(
        <TouchableOpacity onPress={onPress}>
        <View style={body.contenedor}>
            <Image style={body.imagen} source={Reservas.imagen}/>
            <Text style={body.texto}>{Reservas.subtext}</Text>
            <Text style={body.subtext}>{Reservas.texto}€/kg</Text>
        </View>
        </TouchableOpacity>
    )
}