import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import {
  Button,
  Divider,
  IconButton,
  ScreenContainer,
  Surface,
  withTheme,
} from '@draftbit/ui';
import * as Linking from 'expo-linking';
import { Image, StyleSheet, Text, View } from 'react-native';

const ResetpasswordmailsentScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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

        <View style={styles(theme).View4eafef57}>
          <View style={styles(theme).Viewdce79471}>
            <Surface style={styles(theme).Surface83f2ab85}>
              {/* lblSuccessMsg */}
              <Text style={styles(theme).Textf840e446}>
                {'An email has been sent to '}
                {Constants['txtEmailForgetPassword']}
                {', also check the spam folder of your email provider.'}
              </Text>
            </Surface>
          </View>
        </View>
        <Divider
          style={styles(theme).Divider686552fd}
          color={theme.colors.divider}
        />
        <View style={styles(theme).Viewba628b4b}>
          {/* support */}
          <Button
            onPress={() => {
              try {
                Linking.openURL('https://www.nuvoni.eu/contact');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Button159bd4b7}
            title={'Support'}
          />
          <Button style={styles(theme).Buttonba138244} title={'Log in'} />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button159bd4b7: {
      backgroundColor: theme.colors['Primary/50'],
      borderRadius: 0,
      color: theme.colors['Background'],
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      marginRight: 8,
      textAlign: 'center',
      width: 103,
    },
    Buttonba138244: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      textAlign: 'center',
      width: 220,
    },
    Divider686552fd: { height: 1, marginBottom: 12 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Image3e14e945: { height: 40, marginLeft: 40, marginRight: 40, width: 40 },
    Surface83f2ab85: {
      backgroundColor: theme.colors['Success/50'],
      borderBottomWidth: 1,
      borderColor: theme.colors['Success/700'],
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopWidth: 1,
      minHeight: 40,
    },
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
    Textf840e446: {
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_600SemiBold',
      lineHeight: 24,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    View2200bac7: { height: '100%' },
    View4eafef57: {
      height: '55%',
      paddingBottom: 100,
      paddingLeft: 12,
      paddingRight: 12,
    },
    View61326745: {
      alignItems: 'center',
      marginTop: 20,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 10,
    },
    Viewba628b4b: {
      flexDirection: 'row',
      height: 64,
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewdce79471: { justifyContent: 'flex-end', marginBottom: 5, marginTop: 5 },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(ResetpasswordmailsentScreen);
