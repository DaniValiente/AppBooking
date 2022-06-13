import * as React from 'react';
import { Button, View,Text } from 'react-native';

function bookingScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Booking</Text>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    );
  }
  
  export default bookingScreen;