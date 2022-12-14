import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountryPicker from '@volkenomakers/react-native-country-picker';

export const AllCountryName = () => {
  return (
    <View>
      <CountryPicker showCallingCodes={false} />
    </View>
  );
};

const stylesPicker = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleText: {
    color: '#000',
    fontSize: 14,
    marginBottom: 25,
  },
  pickerTitleStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  pickerStyle: {
    height: 48,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#F1F3F3',
    borderColor: '#F1F3F3',
    borderRadius: 0,
    borderWidth: 1,
    fontSize: 14,
    color: '#121826',
  },
  selectedCountryTextStyle: {
    paddingLeft: 5,
    color: '#000',
    textAlign: 'right',
  },
  countryNameTextStyle: {
    paddingLeft: 10,
    color: '#000',
    textAlign: 'right',
  },
  searchBarStyle: {
    flex: 1,
  },
});
