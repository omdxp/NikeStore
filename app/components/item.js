import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {itemStyles} from '../styles';
import {Colors} from '../styles/colors';

export default function Item({item, navigation}) {
  return (
    <LinearGradient
      colors={[
        Colors.mainColor,
        Colors.mainColorMed,
        Colors.mainColorRed,
        Colors.mainColorYellow,
      ]}
      style={itemStyles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={itemStyles.titleText}>Go back to list</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
