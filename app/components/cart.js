import React, {useReducer} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {cartStyles} from '../styles';
import {Colors} from '../styles/colors';
import {useSelector} from 'react-redux';

export default function Cart({navigation}) {
  const state = useSelector((state) => state.addToCartReducer);
  console.log(state.cardItems);
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
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={cartStyles.button}>
          <Text style={cartStyles.titleText}>Go back to list</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <Text style={cartStyles.titleText}>Cart Screen</Text>
      </View>
    </LinearGradient>
  );
}
