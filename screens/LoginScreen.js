import React from 'react';
import * as XenoAuthApi from '../apis/XenoAuthApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as CustomCode from '../custom-files/CustomCode.js';
import ConcateAuthtoken from '../global-functions/ConcateAuthtoken';
import * as Utils from '../utils';
import { Button, IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [txtEmail, setTxtEmail] = React.useState('');
  const [txtpassword, setTxtpassword] = React.useState('');

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

        <View style={styles(theme).View61326745}>
          {/* Log in */}
          <Text
            style={styles(theme).Text48dd68d4}
            adjustsFontSizeToFit={true}
            selectionColor={theme.colors['Neutral/900']}
            suppressHighlighting={true}
          >
            {'Log in'}
          </Text>
        </View>

        <View style={styles(theme).View0d59f7ce}>
          <View style={styles(theme).Viewdce79471}>
            {/* lblEmail */}
            <Text style={styles(theme).Textf29b69bc}>{'Email'}</Text>
            {/* txtEmail */}
            <TextInput
              onChangeText={newTxtEmailValue => {
                try {
                  setTxtEmail(newTxtEmailValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput66ac2a3b}
              placeholder={'Eg. benjamin@nuvoni.eu'}
              editable={true}
              placeholderTextColor={theme.colors['Neutral/500']}
              textContentType={'emailAddress'}
              keyboardType={'email-address'}
              returnKeyType={'next'}
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
                  setTxtpassword(newTxtPasswordValue);
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
            {/* Forgot your password */}
            <Button
              onPress={() => {
                try {
                  navigation.navigate('ForgotPasswordScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).Buttone5954ac5}
              title={'Forgot your password?'}
            />
          </View>
        </View>

        <View style={styles(theme).View29890b4c}>
          {/* Log in */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  const signupResponseJson = await XenoAuthApi.newLoginPOST(
                    Constants,
                    { txtemail: txtEmail, txtpassword: txtpassword }
                  );
                  const authToken = signupResponseJson.authToken;
                  const message = signupResponseJson.message;
                  setGlobalVariableValue({
                    key: 'ERR_MESSAGE',
                    value: message,
                  });
                  setGlobalVariableValue({
                    key: 'AUTHORIZATION_HEADER',
                    value: 'Bearer ' + authToken,
                  });
                  const FinalBerearToken = ConcateAuthtoken(
                    Constants['AUTHORIZATION_HEADER']
                  );
                  navigation.navigate('HomeScreenThereisnothinghere');
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={styles(theme).Buttonb8abe3f2}
            title={'Log in'}
          />
        </View>
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
    Buttone5954ac5: {
      backgroundColor: theme.colors['Neutral/50'],
      color: theme.colors['Primary/900'],
      fontFamily: 'Manrope_600SemiBold',
      height: 48,
      lineHeight: 24,
      marginBottom: 5,
      marginTop: 5,
      textAlign: 'center',
    },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Image3e14e945: { height: 40, marginLeft: 40, marginRight: 40, width: 40 },
    Text48dd68d4: {
      alignSelf: 'flex-start',
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      marginTop: 15,
      textAlign: 'center',
    },
    TextInput66ac2a3b: {
      backgroundColor: theme.colors['Neutral/100'],
      borderColor: theme.colors.divider,
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginTop: 5,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
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
    Textf29b69bc: {
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_600SemiBold',
      lineHeight: 24,
    },
    View0d59f7ce: { paddingBottom: 100, paddingLeft: 12, paddingRight: 12 },
    View2200bac7: { height: '100%' },
    View29890b4c: {
      borderColor: theme.colors['Neutral/100'],
      borderTopWidth: 1,
      bottom: 15,
      justifyContent: 'flex-end',
      left: 0,
      paddingBottom: 8,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 8,
      position: 'absolute',
      right: 0,
    },
    View61326745: {
      alignItems: 'center',
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
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(LoginScreen);
