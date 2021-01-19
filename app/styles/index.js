import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Colors} from './colors';

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('1.25%'),
    margin: wp('1.25%'),
    borderRadius: wp('3%'),
  },
  normalText: {
    fontSize: wp('3%'),
    color: Colors.textColor,
    textAlign: 'justify',
  },
  titleText: {
    fontSize: wp('5%'),
    color: Colors.textColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const listItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: wp('1.25%'),
    flexDirection: 'row',
    backgroundColor: '#ff4fff',
    borderRadius: wp('3%'),
  },
  titleText: {
    fontSize: wp('5%'),
    color: Colors.textColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  normalText: {
    fontSize: wp('2.5%'),
    color: Colors.textColor,
    textAlign: 'justify',
  },
  image: {
    borderRadius: wp('2.5%'),
    marginRight: wp('2%'),
  },
  imageDimensions: {
    height: wp('10%'),
    width: wp('10%'),
  },
});

export const headerStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp('10%'),
    backgroundColor: '#414141',
    borderRadius: wp('2.5%'),
    marginBottom: hp('1.25%'),
    padding: wp('1.25%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconDimension: {
    width: wp('7%'),
  },
  normalText: {
    fontSize: wp('3%'),
    color: Colors.textColor,
    textAlign: 'justify',
  },
  titleText: {
    fontSize: wp('5%'),
    color: Colors.textColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
