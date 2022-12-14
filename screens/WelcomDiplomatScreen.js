import React from 'react';
import Images from '../config/Images';
import { Button, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const WelcomDiplomatScreen = props => {
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
        </View>

        <View style={styles(theme).View5c2d43d7}>
          {/* WelcomeText */}
          <Text
            style={styles(theme).Textfb529ac3}
            adjustsFontSizeToFit={true}
            selectionColor={theme.colors['Neutral/900']}
            suppressHighlighting={true}
          >
            {'Welcome to Nuvoni'}
          </Text>
        </View>

        <View style={styles(theme).View9d5131b0}>
          <Image
            style={styles(theme).Imagedfe1dd0f}
            resizeMode={'cover'}
            source={Images.Group22}
          />
        </View>

        <View style={styles(theme).Viewc1a73518}>
          {/* I want to register */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('RegistrationScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Buttondcf60541}
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
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
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
    Buttondcf60541: {
      backgroundColor: theme.colors['Primary/700'],
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Manrope_600SemiBold',
      height: 48,
      marginBottom: 5,
      marginTop: 1,
      textAlign: 'center',
    },
    Image3e14e945: { height: 40, marginLeft: 40, marginRight: 40, width: 40 },
    Imagedfe1dd0f: { height: 333, width: 396 },
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
    View5c2d43d7: {
      alignItems: 'center',
      marginTop: 40,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
    },
    View9d5131b0: { alignSelf: 'center', justifyContent: 'center' },
    Viewc1a73518: {
      borderColor: theme.colors['Neutral/100'],
      borderTopWidth: 1,
      bottom: 5,
      justifyContent: 'flex-end',
      left: 0,
      paddingBottom: 15,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 15,
      position: 'absolute',
      right: 0,
    },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(WelcomDiplomatScreen);
