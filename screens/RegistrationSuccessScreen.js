import React from 'react';
import Images from '../config/Images';
import { Button, IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const RegistrationSuccessScreen = props => {
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
        </View>

        <View style={styles(theme).Viewc1daaaf5}>
          <Image
            style={styles(theme).Image4a4d6259}
            resizeMode={'cover'}
            source={Images.Party64}
          />
          {/* lblsuccess */}
          <Text
            style={styles(theme).Textc086337c}
            adjustsFontSizeToFit={true}
            selectionColor={theme.colors['Neutral/900']}
            suppressHighlighting={true}
          >
            {'Your registration was successful'}
          </Text>

          <Text style={styles(theme).Text505da5b1}>
            {
              'We have sent an email to  in case you do not see an email please check your spam folder.\n\nIf you did not receive an email please contact us directly through hello@nuvoni.eu or our website.'
            }
          </Text>
        </View>

        <View style={styles(theme).View29890b4c}>
          {/* btnLogin */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('LoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Buttonb8abe3f2}
            title={'Log in now'}
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
    Image4a4d6259: { height: 64, width: 64 },
    Text505da5b1: {
      alignSelf: 'center',
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    Textc086337c: {
      alignSelf: 'center',
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      marginTop: 15,
      textAlign: 'center',
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
    Viewc1daaaf5: {
      alignItems: 'center',
      bottom: 10,
      justifyContent: 'center',
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 10,
      position: 'absolute',
      top: 10,
    },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(RegistrationSuccessScreen);
