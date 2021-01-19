import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {cartStyles} from '../styles';
import {Colors} from '../styles/colors';

export default function Cart({navigation}) {
  return (
    <LinearGradient
      colors={[
        Colors.mainColor,
        Colors.mainColorMed,
        Colors.mainColorRed,
        Colors.mainColorYellow,
      ]}
      style={cartStyles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={cartStyles.titleText}>Go back to list</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
