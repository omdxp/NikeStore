import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {homeStyles} from '../styles';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../styles/colors';
import {data} from '../test/data';
import ItemList from './shared/item-list';
import ItemSeperator from './shared/item-separator';
import Header from './shared/header';

export default function Home({navigation}) {
  return (
    <LinearGradient
      colors={[
        Colors.mainColor,
        Colors.mainColorMed,
        Colors.mainColorRed,
        Colors.mainColorYellow,
      ]}
      style={homeStyles.container}>
      <Header navigation={navigation} />
      <View style={{flex: 1, width: '100%'}}>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data}
          ItemSeparatorComponent={() => <ItemSeperator />}
          renderItem={({item}) => (
            <ItemList navigation={navigation} item={item} />
          )}
        />
      </View>
    </LinearGradient>
  );
}
