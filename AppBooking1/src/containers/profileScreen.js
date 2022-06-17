import * as React from 'react';
import {View ,Text,Image} from 'react-native';
import body from '../styles/body';

function profileScreen({ navigation }) {
    return (
      <View style={body.contenedor}>
        <Text style={body.titulo}>Profile</Text>
        <Image style={body.imagen} source={require('../assets/image.jpg')}></Image>
        <Text style={body.text}>Name: Daniel Valiente</Text>
        <Text style={body.text}>Age: 20</Text>
        <Text style={body.text}>Favorite meals: Choco Frito </Text>
      </View>
    );
  }

  export default profileScreen;