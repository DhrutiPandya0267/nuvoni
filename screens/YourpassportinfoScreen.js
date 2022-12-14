import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CountryNamePicker from '../custom-files/CountryNamePicker.js';
import * as CustomCode from '../custom-files/CustomCode.js';
import * as Utils from '../utils';
import {
  Button,
  IconButton,
  Picker,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const YourpassportinfoScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const [pickerValue, setPickerValue] = React.useState('');
  const [pickerValue2, setPickerValue2] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
    >
      <View style={styles(theme).View2200bac7}>
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

        <View style={styles(theme).View29739f3a}>
          <Text style={styles(theme).Text013e3ca1}>{'Your passport info'}</Text>

          <Text style={styles(theme).Text42c8ed0a}>
            {'Diving in, we need some basic passport info'}
          </Text>
        </View>

        <ScrollView
          style={styles(theme).ScrollView501e2ed3}
          contentContainerStyle={styles(theme).ScrollView989db244Content}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles(theme).View6b85bbdb}>
            <Text style={styles(theme).Textf9462986}>{'Passport number'}</Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8c7a7bde}
              placeholder={'ES7890123'}
              editable={true}
            />
          </View>

          <View style={styles(theme).View6b85bbdb}>
            <Text style={styles(theme).Textf9462986}>{'Issuing country'}</Text>
            <Utils.CustomCodeErrorBoundary>
              <CountryNamePicker.AllCountryName />
            </Utils.CustomCodeErrorBoundary>
          </View>

          <View style={styles(theme).View6b85bbdb}>
            <Text style={styles(theme).Textf9462986}>{'Expiration date'}</Text>

            <View style={styles(theme).Viewdebd3207}>
              {/* monthPicker */}
              <Picker
                style={styles(theme).Picker7d7badc6}
                options={Constants['months']}
                leftIconMode={'inset'}
                type={'solid'}
                rightIconName={'AntDesign/down'}
                iconSize={16}
                iconColor={theme.colors['Background']}
                placeholderTextColor={theme.colors['BG Gray']}
                placeholder={'Month'}
              />
              {/* monthPicker */}
              <Picker
                style={styles(theme).Picker64a2ef19}
                options={Constants['future_year']}
                leftIconMode={'inset'}
                type={'solid'}
                rightIconName={'AntDesign/down'}
                iconSize={16}
                iconColor={theme.colors['Background']}
                placeholderTextColor={theme.colors['BG Gray']}
                placeholder={'Year'}
              />
            </View>
          </View>
        </ScrollView>

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps={'never'}
        >
          <View style={styles(theme).View7245b3d8}>
            {/* I am ready */}
            <Button
              onPress={() => {
                try {
                  navigation.navigate('AgreeTrueScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).Buttonb8abe3f2}
              title={'Next'}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonb8abe3f2: {
      backgroundColor: theme.colors['Primary/700'],
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Manrope_600SemiBold',
      height: 48,
      marginBottom: 5,
      marginTop: 5,
      textAlign: 'center',
    },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Picker64a2ef19: {
      backgroundColor: theme.colors['Neutral/50'],
      borderColor: 'rgba(0, 0, 0, 0)',
      fontFamily: 'Manrope_700Bold',
      fontSize: 12,
      height: 48,
      lineHeight: 24,
      width: '49%',
    },
    Picker7d7badc6: {
      backgroundColor: theme.colors['Neutral/50'],
      borderColor: 'rgba(0, 0, 0, 0)',
      fontFamily: 'Manrope_700Bold',
      fontSize: 12,
      height: 48,
      lineHeight: 24,
      marginRight: 4,
      width: '49%',
    },
    ScrollView501e2ed3: { height: '70%' },
    Text013e3ca1: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      textAlign: 'center',
    },
    Text42c8ed0a: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginTop: 10,
      textAlign: 'center',
    },
    TextInput8c7a7bde: {
      backgroundColor: theme.colors['Neutral/50'],
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 0,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Textf9462986: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
    },
    View2200bac7: { height: '100%' },
    View29739f3a: { marginLeft: 16, marginRight: 16, marginTop: 20 },
    View6b85bbdb: { marginLeft: 16, marginRight: 16, marginTop: 18 },
    View7245b3d8: { marginLeft: 16, marginRight: 16 },
    Viewdebd3207: { flexDirection: 'row' },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(YourpassportinfoScreen);
