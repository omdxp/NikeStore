import React from 'react';
import {View, Text} from 'react-native';
import {headerStyles} from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../styles/colors';

export default function Header() {
  return (
    <View style={headerStyles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 1}}>
          <Ionicons
            name="cart"
            size={headerStyles.iconDimension.width}
            color={Colors.textColor}
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={headerStyles.titleText}>NikeStore</Text>
        </View>
      </View>
    </View>
  );
}
