import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {itemStyles} from '../styles';
import {Colors} from '../styles/colors';

export default function Item({navigation, route}) {
  const item = route.params.item;
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
      <View style={itemStyles.card}>
        <Image
          source={{
            uri: item.img_url,
            width: itemStyles.imageDimensions.width,
            height: itemStyles.imageDimensions.height,
          }}
          style={itemStyles.imageStyles}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={itemStyles.titleText}>{item.name}</Text>
          <Text style={itemStyles.normalText}>{item.price}</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
