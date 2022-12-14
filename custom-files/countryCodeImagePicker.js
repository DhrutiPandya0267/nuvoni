import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CountryPicker from 'rn-country-picker';

export const CountryCode = () => {
  const [countryCode, setCountryCode] = useState('91');

  const selectedValue = value => {
    setCountryCode(value);
  };

  return (
    <View style={styles.container}>
      <CountryPicker
        disable={false}
        animationType={'slide'}
        language="en"
        containerStyle={styles.pickerStyle}
        pickerTitleStyle={styles.pickerTitleStyle}
        selectedCountryTextStyle={styles.selectedCountryTextStyle}
        countryNameTextStyle={styles.countryNameTextStyle}
        pickerTitle={'Country Code'}
        searchBarPlaceHolder={'Search......'}
        hideCountryFlag={false}
        hideCountryCode={false}
        searchBarStyle={styles.searchBarStyle}
        countryCode={'1'}
        selectedValue={selectedValue}
      />
    </View>
  );
};

export const CountryNamePicker = () => {
  const [countryCode, setCountryCode] = useState('91');
  const [countryNaem, setCountryName] = useState('India');

  const selectedValue = value => {
    setCountryName(value);
  };
  return (
    <View style={stylesPicker.container}>
      <CountryPicker
        disable={false}
        animationType={'slide'}
        language="en"
        containerStyle={stylesPicker.pickerStyle}
        pickerTitleStyle={stylesPicker.pickerTitleStyle}
        selectedCountryTextStyle={stylesPicker.selectedCountryTextStyle}
        countryNameTextStyle={stylesPicker.countryNameTextStyle}
        pickerTitle={'Country Name'}
        searchBarPlaceHolder={'Search......'}
        hideCountryFlag={false}
        hideCountryCode={true}
        searchBarStyle={stylesPicker.searchBarStyle}
        countryCode={'1'}
        selectedValue={selectedValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    width: 100,
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
