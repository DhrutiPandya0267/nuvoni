import React from 'react';
import * as XenoAuthApi from '../apis/XenoAuthApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode.js';
import * as Utils from '../utils';
import {
  Button,
  Checkbox,
  Divider,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegistrationScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [chkPrivacy, setChkPrivacy] = React.useState(false);
  const [chkTerms, setChkTerms] = React.useState(false);
  const [txtConfirmPassword, setTxtConfirmPassword] = React.useState('');
  const [txtEmail, setTxtEmail] = React.useState('');
  const [txtPassword, setTxtPassword] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
    >
      <View style={styles(theme).View2200bac7}>
        <View style={styles(theme).Viewe671b726}>
          <Image
            style={styles(theme).Image3e14e945}
            resizeMode={'cover'}
            source={Images.Vector}
          />
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

        <View style={styles(theme).View8443cb50}>
          {/* Register */}
          <Text
            style={styles(theme).Text48dd68d4}
            adjustsFontSizeToFit={true}
            selectionColor={theme.colors['Neutral/900']}
            suppressHighlighting={true}
          >
            {'Register'}
          </Text>
        </View>

        <ScrollView
          style={styles(theme).ScrollView2cb0e1d8}
          contentContainerStyle={styles(theme).ScrollView9fa86917Content}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles(theme).Viewdce79471}>
            {/* lblEmail */}
            <Text style={styles(theme).Textf29b69bc}>{'Email'}</Text>
            {/* txtEmail */}
            <TextInput
              onChangeText={newTxtEmailValue => {
                try {
                  setTxtEmail(newTxtEmailValue);
                  setGlobalVariableValue({
                    key: 'txtLoginEmail',
                    value: newTxtEmailValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInputa64d7bbd}
              placeholder={'Eg. benjamin@nuvoni.eu'}
              editable={true}
              textContentType={'emailAddress'}
              keyboardType={'email-address'}
            />
            <Utils.CustomCodeErrorBoundary>
              <CustomCode.ValidateEmail emailId={txtEmail} />
            </Utils.CustomCodeErrorBoundary>
          </View>

          <View style={styles(theme).Viewdce79471}>
            {/* lblPassword */}
            <Text style={styles(theme).Textf29b69bc}>{'Password'}</Text>
            {/* txtPassword */}
            <TextInput
              onChangeText={newTxtPasswordValue => {
                try {
                  setTxtPassword(newTxtPasswordValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput9665bdb1}
              placeholder={'********'}
              editable={true}
              placeholderTextColor={theme.colors['Neutral/500']}
              secureTextEntry={true}
              textContentType={'password'}
            />
          </View>

          <View style={styles(theme).Viewdce79471}>
            {/* lblConfirmPassword */}
            <Text style={styles(theme).Textf29b69bc}>{'Confirm password'}</Text>
            {/* txtConfirmPassword */}
            <TextInput
              onChangeText={newTxtConfirmPasswordValue => {
                try {
                  setTxtConfirmPassword(newTxtConfirmPasswordValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput9665bdb1}
              placeholder={'*******'}
              editable={true}
              textContentType={'password'}
              secureTextEntry={true}
            />
          </View>

          <View style={styles(theme).View30c38ecb}>
            <View style={styles(theme).Viewedd61be4}>
              <Utils.CustomCodeErrorBoundary>
                <CustomCode.CountStringCharacter strName={txtPassword} />
              </Utils.CustomCodeErrorBoundary>
              {/* err_charector_limit */}
              <Text style={styles(theme).Text6f157e70}>
                {'Minimum 8 characters'}
              </Text>
            </View>

            <View style={styles(theme).Viewedd61be4}>
              <Utils.CustomCodeErrorBoundary>
                <CustomCode.AtListOneCapital strName={txtPassword} />
              </Utils.CustomCodeErrorBoundary>
              {/* err_capital_letter */}
              <Text style={styles(theme).Text86dd9515}>
                {'At least one capital letter'}
              </Text>
            </View>

            <View style={styles(theme).Viewedd61be4}>
              <Utils.CustomCodeErrorBoundary>
                <CustomCode.AtListOneNumber strName={txtPassword} />
              </Utils.CustomCodeErrorBoundary>
              {/* err_number */}
              <Text style={styles(theme).Text01abb009}>
                {'At least one number (0-9)'}
              </Text>
            </View>

            <View style={styles(theme).Viewedd61be4}>
              <Utils.CustomCodeErrorBoundary>
                <CustomCode.ConfirmPasswordCheck
                  strName={txtPassword}
                  strConName={txtConfirmPassword}
                />
              </Utils.CustomCodeErrorBoundary>
              {/* err_password_match */}
              <Text style={styles(theme).Textbe8f7c40}>
                {'Passwords match'}
              </Text>
            </View>
          </View>

          <View style={styles(theme).View6c4f11af}>
            <View style={styles(theme).Viewedd61be4}>
              {/* chkTerms */}
              <Checkbox
                onPress={newChkTermsValue => {
                  try {
                    setChkTerms(newChkTermsValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).Checkboxd34fb6c9}
                uncheckedColor={theme.colors['Neutral/50']}
                checkedIcon={'AntDesign/checksquare'}
                uncheckedIcon={'FontAwesome/square'}
                color={theme.colors['Primary/700']}
                size={24}
              />
              {/* lblTerms */}
              <Text style={styles(theme).Textbe8f7c40}>
                {'I have read and agree to the terms and conditions'}
              </Text>
            </View>

            <View style={styles(theme).Viewedd61be4}>
              {/* chkPrivacy */}
              <Checkbox
                onPress={newChkPrivacyValue => {
                  try {
                    setChkPrivacy(newChkPrivacyValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).Checkboxd34fb6c9}
                uncheckedColor={theme.colors['Neutral/50']}
                checkedIcon={'AntDesign/checksquare'}
                uncheckedIcon={'FontAwesome/square'}
                color={theme.colors['Primary/700']}
                size={24}
              />
              {/* lblPrivacy */}
              <Text style={styles(theme).Text01abb009}>
                {'I have read and agree to the terms and conditions'}
              </Text>
            </View>
          </View>
        </ScrollView>
        <Divider
          style={styles(theme).Dividerde11d607}
          color={theme.colors['Neutral/100']}
        />
        <KeyboardAwareScrollView
          style={styles(theme).KeyboardAwareScrollView52bfc8f1}
          contentContainerStyle={
            styles(theme).KeyboardAwareScrollView9fa86917Content
          }
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps={'never'}
        >
          <Utils.CustomCodeErrorBoundary>
            <CustomCode.BothCheckBoxCheck
              chkTermsCheck={chkTerms}
              chkPrivacyCheck={chkPrivacy}
              txtEmail={txtEmail}
              txtConfirmPassword={txtConfirmPassword}
            />
          </Utils.CustomCodeErrorBoundary>
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
    Checkboxd34fb6c9: { left: 0, position: 'absolute' },
    Dividerde11d607: { height: 1 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Image3e14e945: { height: 40, marginLeft: 40, marginRight: 40, width: 40 },
    KeyboardAwareScrollView52bfc8f1: { height: '10%' },
    KeyboardAwareScrollView9fa86917Content: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    ScrollView2cb0e1d8: { height: '65%' },
    ScrollView9fa86917Content: { paddingLeft: 16, paddingRight: 16 },
    Text01abb009: {
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginLeft: 25,
    },
    Text48dd68d4: {
      alignSelf: 'flex-start',
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      marginTop: 15,
      textAlign: 'center',
    },
    Text6f157e70: {
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginLeft: 25,
    },
    Text86dd9515: {
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginLeft: 25,
    },
    TextInput9665bdb1: {
      backgroundColor: theme.colors['Neutral/100'],
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_300Light',
      height: 40,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    TextInputa64d7bbd: {
      backgroundColor: theme.colors['Neutral/100'],
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      height: 40,
      lineHeight: 24,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Textbe8f7c40: {
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginLeft: 25,
    },
    Textf29b69bc: {
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_600SemiBold',
      lineHeight: 24,
    },
    View2200bac7: { height: '100%' },
    View30c38ecb: {
      justifyContent: 'flex-end',
      marginBottom: 25,
      overflow: 'hidden',
    },
    View6c4f11af: { bottom: 1, marginBottom: 5 },
    View8443cb50: {
      alignItems: 'center',
      height: '10%',
      marginTop: 20,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 10,
    },
    Viewdce79471: { justifyContent: 'flex-end', marginBottom: 5, marginTop: 5 },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    Viewedd61be4: { marginBottom: 5, marginTop: 5 },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(RegistrationScreen);
