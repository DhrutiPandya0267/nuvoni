import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import { Button, IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const ForgotPasswordScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

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
          {/* lblForgotPassword */}
          <Text
            style={styles(theme).Text33c2fbb6}
            adjustsFontSizeToFit={true}
            selectionColor={theme.colors['Neutral/900']}
            suppressHighlighting={true}
          >
            {'Forgot your password?'}
          </Text>

          <Text style={styles(theme).Text0b1acfb4}>
            {
              'No problem, enter the email address you used to sign up and we will send you an email to reset your password.'
            }
          </Text>
        </View>

        <View style={styles(theme).View8b78384f}>
          <View style={styles(theme).Viewdce79471}>
            {/* lblEmail */}
            <Text style={styles(theme).Textf29b69bc}>{'Email'}</Text>
            {/* txtEmailForgetPassword */}
            <TextInput
              onChangeText={newTxtEmailForgetPasswordValue => {
                try {
                  setGlobalVariableValue({
                    key: 'txtEmailForgetPassword',
                    value: newTxtEmailForgetPasswordValue,
                  });
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
          </View>
        </View>

        <View style={styles(theme).View29890b4c}>
          {/* btnSendEmail */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('ResetpasswordmailsentScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Buttonb8abe3f2}
            title={'Send email'}
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
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Image3e14e945: { height: 40, marginLeft: 40, marginRight: 40, width: 40 },
    Text0b1acfb4: {
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
    },
    Text33c2fbb6: {
      alignSelf: 'flex-start',
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
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
    Textf29b69bc: {
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_600SemiBold',
      lineHeight: 24,
    },
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
    View8b78384f: { paddingBottom: 100, paddingLeft: 12, paddingRight: 12 },
    Viewdce79471: { justifyContent: 'flex-end', marginBottom: 5, marginTop: 5 },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(ForgotPasswordScreen);
