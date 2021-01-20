import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {listItemStyles} from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../styles/colors';
import {useDispatch} from 'react-redux';
import {ADD_TO_CART} from '../../redux/constants';
export default function ItemList({item, navigation, showAdd}) {
  const dispatch = useDispatch();
  return (
    <View style={listItemStyles.container}>
      <View style={{flex: 3}}>
        <TouchableOpacity onPress={() => navigation.navigate('Item', {item})}>
          <Image
            style={listItemStyles.image}
            source={{
              uri: item.img_url,
              height: listItemStyles.imageDimensions.height,
              width: listItemStyles.imageDimensions.width,
            }}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'column'}}>
          <Text style={listItemStyles.titleText}>{item.name}</Text>
          <Text style={listItemStyles.normalText}>{item.price}</Text>
        </View>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            const data = {
              dataa: item,
            };
            dispatch({type: ADD_TO_CART, payload: data});
            alert('Item added to list');
          }}>
          {showAdd ? (
            <Ionicons
              name={'add'}
              size={listItemStyles.imageDimensions.height}
              color={Colors.textColor}
            />
          ) : (
            <View />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
