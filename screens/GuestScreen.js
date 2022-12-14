import React from 'react';
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
import { Image, StyleSheet, Text, View } from 'react-native';

const GuestScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [chkPrivacy, setChkPrivacy] = React.useState(false);
  const [chkTerms, setChkTerms] = React.useState(false);

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
          {/* Continue as a guest */}
          <Text
            style={styles(theme).Text48dd68d4}
            adjustsFontSizeToFit={true}
            selectionColor={theme.colors['Neutral/900']}
            suppressHighlighting={true}
          >
            {'Continue as a guest'}
          </Text>

          <Text style={styles(theme).Texte9f9757c}>
            {
              'Explore what Nuvoni can do for you; create trips and add receipts. To declare your goods you will need to create an account.'
            }
          </Text>
        </View>

        <View style={styles(theme).Viewdbaaf393}>
          <Image
            style={styles(theme).Imagef91555cd}
            resizeMode={'cover'}
            source={Images.Frame1749}
          />
        </View>

        <View style={styles(theme).View46ce48d1}>
          <View style={styles(theme).Viewface9a6c}>
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
          <Divider
            style={styles(theme).Dividerde11d607}
            color={theme.colors['Neutral/100']}
          />
          <Utils.CustomCodeErrorBoundary>
            <CustomCode.checkForTermsAndPrivacyGuest
              chkTerms={chkTerms}
              chkPrivacy={chkPrivacy}
            />
          </Utils.CustomCodeErrorBoundary>
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
    Checkboxd34fb6c9: { left: 0, position: 'absolute' },
    Dividerde11d607: { height: 1 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Image3e14e945: { height: 40, marginLeft: 40, marginRight: 40, width: 40 },
    Imagef91555cd: { height: 324, width: 350 },
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
    Textbe8f7c40: {
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginLeft: 25,
    },
    Texte9f9757c: { color: theme.colors.strong },
    View2200bac7: { height: '100%' },
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
    Viewedd61be4: { marginBottom: 5, marginTop: 5 },
    Viewface9a6c: { marginBottom: 10, marginTop: 5 },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(GuestScreen);
