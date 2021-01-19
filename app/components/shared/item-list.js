import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {listItemStyles} from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../styles/colors';
export default function ItemList({item}) {
  return (
    <View style={listItemStyles.container}>
      <View style={{flex: 3}}>
        <Image
          style={listItemStyles.image}
          source={{
            uri: item.img_url,
            height: listItemStyles.imageDimensions.height,
            width: listItemStyles.imageDimensions.width,
          }}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={listItemStyles.titleText}>{item.name}</Text>
          <Text style={listItemStyles.normalText}>{item.price}</Text>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => console.log('Pressed!')}>
          <Ionicons
            name={'add'}
            size={listItemStyles.imageDimensions.height}
            color={Colors.textColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
