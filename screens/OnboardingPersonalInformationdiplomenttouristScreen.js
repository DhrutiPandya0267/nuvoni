import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode.js';
import * as countryCodeImagePicker from '../custom-files/countryCodeImagePicker.js';
import * as Utils from '../utils';
import {
  Button,
  Divider,
  IconButton,
  NumberInput,
  Picker,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const OnboardingPersonalInformationdiplomenttouristScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const [addAddition, setAddAddition] = React.useState('');
  const [addCity, setAddCity] = React.useState('');
  const [addNumber, setAddNumber] = React.useState('');
  const [addPostalcode, setAddPostalcode] = React.useState('');
  const [addStreet, setAddStreet] = React.useState('');
  const [btdDate, setBtdDate] = React.useState('');
  const [btdMonth, setBtdMonth] = React.useState('');
  const [btdYear, setBtdYear] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [numberInputValue3, setNumberInputValue3] = React.useState('');
  const [numberInputValue4, setNumberInputValue4] = React.useState('');
  const [pickerValue, setPickerValue] = React.useState('');
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [rdoGender, setRdoGender] = React.useState('');
  const [txtFirstname, setTxtFirstname] = React.useState('');
  const [txtLastname, setTxtLastname] = React.useState('');
  const [txtPhone, setTxtPhone] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
    >
      <View style={styles(theme).View8dc796a9}>
        <View style={styles(theme).Viewe671b726}>
          <IconButton
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).IconButtonbb88980b}
            size={32}
            icon={'Ionicons/arrow-back'}
            color={theme.colors['Background']}
          />
        </View>

        <View style={styles(theme).View20607a6a}>
          <Text style={styles(theme).Textac86e355}>{'Let’s get personal'}</Text>

          <Text style={styles(theme).Text14523dc9}>
            {
              'We’d love to get to know you before we dive into the more technical stuff.'
            }
          </Text>
        </View>

        <ScrollView
          style={styles(theme).ScrollView989db244}
          contentContainerStyle={styles(theme).ScrollView7245b3d8Content}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          {/* how should we address you */}
          <View style={styles(theme).View02f8ec45}>
            {/* lblHowAddress */}
            <Text style={styles(theme).Texte2ac526f}>
              {'How we address you'}
            </Text>
            {/* rdoGenderBlock */}
            <View style={styles(theme).Viewfe37c177}>
              <RadioButtonGroup
                onValueChange={newRadioButtonGroupValue => {
                  try {
                    setRdoGender(newRadioButtonGroupValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                value={radioButtonGroupValue}
                direction={'horizontal'}
              >
                <RadioButton
                  style={styles(theme).RadioButtone21dc5f6}
                  value={'sir'}
                  size={24}
                  selectedIcon={'MaterialIcons/radio-button-checked'}
                  unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                  unselectedColor={theme.colors['Background']}
                  color={theme.colors['Background']}
                />
                <Text style={styles(theme).Text617f8071}>{'Sir'}</Text>
                <RadioButton
                  style={styles(theme).RadioButton277a712c}
                  value={'madam'}
                  color={theme.colors['Background']}
                  size={24}
                  selectedIcon={'MaterialIcons/radio-button-checked'}
                  unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                  unselectedColor={theme.colors['Background']}
                />
                <Text style={styles(theme).Text617f8071}>{'Madam'}</Text>
                <RadioButton
                  style={styles(theme).RadioButton277a712c}
                  value={'Other'}
                  size={24}
                  selectedIcon={'MaterialIcons/radio-button-checked'}
                  unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                  color={theme.colors['Background']}
                  unselectedColor={theme.colors['Background']}
                />
                <Text style={styles(theme).Texte9f9757c}>
                  {"I'd Rather not say"}
                </Text>
              </RadioButtonGroup>
            </View>
          </View>
          {/* First Name */}
          <View style={styles(theme).View9d0ad012}>
            <Text style={styles(theme).Textb137ccc6}>{'First name'}</Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInputb91817f5}
              placeholder={'Eg. Tabitha'}
              editable={true}
            />
          </View>
          {/* last Name */}
          <View style={styles(theme).View9d0ad012}>
            <Text style={styles(theme).Textb137ccc6}>{'Last name'}</Text>
            <TextInput
              style={styles(theme).TextInputb91817f5}
              placeholder={'Eg: Olsen'}
              editable={true}
            />
          </View>
          {/* Birthdate */}
          <View style={styles(theme).View9d0ad012}>
            <Text style={styles(theme).Textb137ccc6}>{'Birthday'}</Text>

            <View style={styles(theme).View269d9253}>
              {/* datePicker */}
              <Picker
                style={styles(theme).Pickere4029bc4}
                options={Constants['dates']}
                leftIconMode={'inset'}
                type={'solid'}
                rightIconName={'AntDesign/down'}
                iconSize={16}
                iconColor={theme.colors['Background']}
                placeholderTextColor={theme.colors['BG Gray']}
                placeholder={'Date'}
              />
              {/* monthPicker */}
              <Picker
                style={styles(theme).Picker70b23e33}
                options={Constants['months']}
                leftIconMode={'inset'}
                type={'solid'}
                rightIconName={'AntDesign/down'}
                iconSize={16}
                iconColor={theme.colors['Background']}
                placeholder={'Month'}
                placeholderTextColor={theme.colors['BG Gray']}
              />
              <View style={styles(theme).View759c4218}>
                <Utils.CustomCodeErrorBoundary>
                  <CustomCode.GetYearPicker />
                </Utils.CustomCodeErrorBoundary>
              </View>
            </View>
          </View>
          {/* phone number */}
          <View style={styles(theme).View9d0ad012}>
            <Text style={styles(theme).Textb137ccc6}>{'Phone number'}</Text>

            <View style={styles(theme).Viewdebd3207}>
              <Utils.CustomCodeErrorBoundary>
                <countryCodeImagePicker.CountryCode />
              </Utils.CustomCodeErrorBoundary>
              {/* numPhone */}
              <NumberInput
                style={styles(theme).NumberInput24c1bf63}
                value={numberInputValue}
                editable={true}
                clearTextOnFocus={true}
                placeholderTextColor={theme.colors['BG Gray']}
                placeholder={'000000000'}
              />
            </View>
          </View>
          {/* Address */}
          <View style={styles(theme).View1ed1cbf9}>
            {/* street address */}
            <View style={styles(theme).View39546f65}>
              <Text style={styles(theme).Textb137ccc6}>{'Street'}</Text>
              <TextInput
                style={styles(theme).TextInputb91817f5}
                placeholder={'Eg. Paleisstraat'}
                editable={true}
              />
            </View>
            {/* Number */}
            <View style={styles(theme).View7f707a21}>
              <Text style={styles(theme).Textb137ccc6}>{'Number'}</Text>
              <NumberInput
                style={styles(theme).NumberInput7be9eaf1}
                value={numberInputValue4}
                editable={true}
                placeholder={'Enter a number...'}
              />
            </View>
            {/* Addition */}
            <View style={styles(theme).View8ddf670c}>
              <Text style={styles(theme).Textb137ccc6}>{'Addition'}</Text>
              <NumberInput
                style={styles(theme).NumberInput807279bf}
                editable={true}
                placeholder={'Enter a number...'}
              />
            </View>
          </View>
          {/* postal code and city */}
          <View style={styles(theme).View1ed1cbf9}>
            {/* postal code */}
            <View style={styles(theme).View38fb1bab}>
              <Text style={styles(theme).Textf9462986}>{'Postal Code'}</Text>
              <NumberInput
                style={styles(theme).NumberInputd9ac6d83}
                value={numberInputValue3}
                editable={true}
                placeholder={'Enter a number...'}
              />
            </View>
            {/* city */}
            <View style={styles(theme).View38fb1bab}>
              <Text style={styles(theme).Textf9462986}>{'City'}</Text>
              <TextInput
                style={styles(theme).TextInputb91817f5}
                placeholder={'Eg. Brussels'}
                editable={true}
              />
            </View>
          </View>
        </ScrollView>

        <KeyboardAwareScrollView
          style={styles(theme).KeyboardAwareScrollView4518333f}
          contentContainerStyle={
            styles(theme).KeyboardAwareScrollView989db244Content
          }
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps={'never'}
        >
          <Divider
            style={styles(theme).Dividerde11d607}
            color={theme.colors.divider}
          />
          <Button style={styles(theme).Button9eec9329} title={'Next'} />
        </KeyboardAwareScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button9eec9329: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
      textAlign: 'center',
    },
    Dividerde11d607: { height: 1 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    KeyboardAwareScrollView4518333f: { height: 80 },
    NumberInput24c1bf63: {
      backgroundColor: theme.colors['Neutral/50'],
      borderBottomWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0)',
      borderLeftWidth: 1,
      borderRadius: 0,
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 48,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
      width: '68%',
    },
    NumberInput7be9eaf1: {
      backgroundColor: theme.colors['Neutral/50'],
      borderBottomWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0)',
      borderLeftWidth: 1,
      borderRadius: 0,
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 48,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    NumberInput807279bf: {
      backgroundColor: theme.colors['Neutral/50'],
      borderBottomWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0)',
      borderLeftWidth: 1,
      borderRadius: 0,
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 48,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    NumberInputd9ac6d83: {
      backgroundColor: theme.colors['Neutral/50'],
      borderBottomWidth: 1,
      borderColor: 'rgba(0, 0, 0, 0)',
      borderLeftWidth: 1,
      borderRadius: 0,
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 48,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Picker5c345f69: {
      backgroundColor: theme.colors['Neutral/50'],
      borderColor: 'rgba(0, 0, 0, 0)',
      fontFamily: 'Manrope_700Bold',
      height: 48,
      lineHeight: 24,
      width: '32.5%',
    },
    Picker70b23e33: {
      backgroundColor: theme.colors['Neutral/50'],
      borderColor: 'rgba(0, 0, 0, 0)',
      fontFamily: 'Manrope_700Bold',
      height: 48,
      lineHeight: 24,
      marginRight: 4,
      width: '33%',
    },
    Pickere4029bc4: {
      backgroundColor: theme.colors['Neutral/50'],
      borderColor: 'rgba(0, 0, 0, 0)',
      fontFamily: 'Manrope_700Bold',
      fontSize: 12,
      height: 48,
      lineHeight: 24,
      marginRight: 4,
      width: '33%',
    },
    RadioButton277a712c: { right: 2 },
    RadioButtone21dc5f6: { marginRight: 2 },
    ScrollView7245b3d8Content: { marginLeft: 16, marginRight: 16 },
    Text14523dc9: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 12,
      textAlign: 'center',
    },
    Text617f8071: { color: theme.colors.strong, marginRight: 8 },
    TextInputb91817f5: {
      backgroundColor: theme.colors['Neutral/50'],
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 0,
      borderRightWidth: 1,
      borderTopWidth: 1,
      height: 48,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Textac86e355: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      textAlign: 'center',
    },
    Textb137ccc6: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
    },
    Texte2ac526f: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_600SemiBold',
      lineHeight: 24,
    },
    Texte9f9757c: { color: theme.colors.strong },
    Textf9462986: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
    },
    View02f8ec45: { marginTop: 20 },
    View1ed1cbf9: { flexDirection: 'row', marginTop: 5 },
    View20607a6a: { marginTop: 15 },
    View269d9253: { flexDirection: 'row', width: '100%' },
    View38fb1bab: { marginRight: 5, width: '49%' },
    View39546f65: { marginRight: 5, width: '45%' },
    View759c4218: { height: 48, width: '32.5%' },
    View7f707a21: { marginRight: 5, width: '25%' },
    View8dc796a9: { height: '100%', width: '100%' },
    View8ddf670c: { width: '25%' },
    View9d0ad012: { marginTop: 5 },
    Viewdebd3207: { flexDirection: 'row' },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    Viewfe37c177: { alignItems: 'flex-start', overflow: 'hidden' },
    screen: {
      backgroundColor: theme.colors['Custom Color'],
      borderColor: 'rgba(0, 0, 0, 0)',
    },
  });

export default withTheme(OnboardingPersonalInformationdiplomenttouristScreen);
