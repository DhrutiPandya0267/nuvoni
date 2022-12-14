import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Divider,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const PersonalstartScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
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

        <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
          <View style={styles(theme).View61326745}>
            <Text style={styles(theme).Textb48391d7}>{'Step 1'}</Text>
            {/* Personal information */}
            <Text
              style={styles(theme).Text61bf4d93}
              adjustsFontSizeToFit={true}
              selectionColor={theme.colors['Neutral/900']}
              suppressHighlighting={true}
            >
              {'Personal information'}
            </Text>
          </View>

          <View style={styles(theme).Viewdbaaf393}>
            <Image
              style={styles(theme).Imagedd5b6b59}
              resizeMode={'cover'}
              source={Images.Peep45}
            />
          </View>
        </ScrollView>

        <View style={styles(theme).View46ce48d1}>
          <Divider
            style={styles(theme).Dividerde11d607}
            color={theme.colors['Neutral/100']}
          />
          {/* Lets get started */}
          <Button
            onPress={() => {
              try {
                navigation.navigate(
                  'OnboardingPersonalInformationdiplomenttouristScreen'
                );
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Button86441ba1}
            title={'Let’s get started'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button86441ba1: {
      backgroundColor: theme.colors['Primary/700'],
      borderColor: 'rgba(0, 0, 0, 0)',
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Manrope_600SemiBold',
      height: 48,
      marginBottom: 5,
      marginTop: 5,
      textAlign: 'center',
    },
    Dividerde11d607: { height: 1 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Image3e14e945: { height: 40, marginLeft: 40, marginRight: 40, width: 40 },
    Imagedd5b6b59: { height: 500, width: 350 },
    Text505da5b1: {
      alignSelf: 'center',
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    Text61bf4d93: {
      alignSelf: 'center',
      color: theme.colors['Primary/700'],
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      marginTop: 15,
      textAlign: 'center',
    },
    Text6ed8c264: {
      alignSelf: 'center',
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
    },
    Textb48391d7: {
      color: theme.colors['Primary/900'],
      fontFamily: 'Manrope_600SemiBold',
      fontSize: 20,
      lineHeight: 32,
    },
    View2200bac7: { height: '100%' },
    View22b4b15d: { alignItems: 'center', marginBottom: 5, marginTop: 5 },
    View46ce48d1: {
      bottom: 15,
      justifyContent: 'flex-end',
      left: 0,
      paddingBottom: 15,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 15,
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
    Viewdbaaf393: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingLeft: 12,
      paddingRight: 12,
    },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    Viewe8293b3d: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      marginTop: 5,
      paddingLeft: 12,
      paddingRight: 12,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(PersonalstartScreen);
