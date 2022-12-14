import React from 'react';
import Images from '../config/Images';
import { Button, IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const WelcomTouristScreen = props => {
  const { theme } = props;
  const { navigation } = props;

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

        <View style={styles(theme).View7ac235a7}>
          {/* WelcomeText */}
          <Text
            style={styles(theme).Textfb529ac3}
            adjustsFontSizeToFit={true}
            selectionColor={theme.colors['Neutral/900']}
            suppressHighlighting={true}
          >
            {'Welcome to Nuvoni\nFor Tourism'}
          </Text>

          <Text style={styles(theme).Texte872db00}>
            {'Let’s get you started'}
          </Text>
        </View>

        <View style={styles(theme).Viewa11ba2c3}>
          {/* Sign in with Facebook */}
          <Button
            style={styles(theme).Button69c3deb7}
            title={'Sign in with Facebook'}
            icon={'MaterialCommunityIcons/facebook'}
          />
          {/* Sign in with Google */}
          <Button
            style={styles(theme).Button69c3deb7}
            title={'Sign in with Google'}
            icon={'AntDesign/google'}
          />
          {/* Sign in with Apple */}
          <Button
            style={styles(theme).Button69c3deb7}
            title={'Sign in with Apple'}
            icon={'AntDesign/apple1'}
          />
        </View>

        <View style={styles(theme).Viewf9ce62fd}>
          {/* I want to register */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('RegistrationScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Buttonb8abe3f2}
            title={'I want to register'}
          />
          {/* I have an account already */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('LoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Button86f929c3}
            title={'I have an account already'}
          />
          {/* Continue as a guest */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('GuestScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Buttona233d581}
            title={'Continue as a guest'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button69c3deb7: {
      backgroundColor: theme.colors['Neutral/50'],
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_600SemiBold',
      height: 48,
      lineHeight: 24,
      marginBottom: 5,
      marginTop: 5,
      textAlign: 'center',
    },
    Button86f929c3: {
      backgroundColor: theme.colors['Primary/50'],
      color: theme.colors['Primary/900'],
      fontFamily: 'Manrope_600SemiBold',
      height: 48,
      lineHeight: 24,
      marginBottom: 5,
      marginTop: 5,
      textAlign: 'center',
    },
    Buttona233d581: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      color: theme.colors['Primary/700'],
      fontFamily: 'Manrope_600SemiBold',
      height: 48,
      lineHeight: 24,
      marginBottom: 5,
      marginTop: 5,
      textAlign: 'center',
    },
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
    Texte872db00: {
      color: theme.colors['Neutral/700'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
    },
    Textfb529ac3: {
      alignSelf: 'center',
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      marginBottom: 15,
      marginTop: 15,
      textAlign: 'center',
    },
    View2200bac7: { height: '100%' },
    View7ac235a7: {
      alignItems: 'center',
      marginTop: 20,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
    },
    Viewa11ba2c3: {
      justifyContent: 'flex-end',
      paddingBottom: 75,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 75,
    },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    Viewf9ce62fd: {
      borderColor: theme.colors['Neutral/100'],
      borderTopWidth: 1,
      bottom: 5,
      justifyContent: 'flex-end',
      left: 0,
      paddingBottom: 15,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
      position: 'absolute',
      right: 0,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(WelcomTouristScreen);
