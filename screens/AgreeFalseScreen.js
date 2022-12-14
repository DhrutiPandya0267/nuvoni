import React from 'react';
import * as CheckBoxCheckFirstThingFirst from '../custom-files/CheckBoxCheckFirstThingFirst.js';
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
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, Text, View } from 'react-native';

const AgreeFalseScreen = props => {
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

        <View style={styles(theme).View8c9646df}>
          {/* First things first */}
          <Text
            style={styles(theme).Texte686fe76}
            adjustsFontSizeToFit={true}
            selectionColor={theme.colors['Neutral/900']}
            suppressHighlighting={true}
          >
            {'First things first'}
          </Text>

          <Text style={styles(theme).Text5df38e8e}>
            {
              'Your registration to Nuvoni excludes you from working with other operators. A change to another operator requires a transition period of two months following your notice of termination.\n\nFor more information please read our terms and conditions.\n\nWant to know how we handle and process your data? Read our privacy statement '
            }
          </Text>
        </View>

        <View style={styles(theme).View02a568ec}>
          {/* Read our terms and conditions */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://www.nuvoni.eu/legal/terms'
                  );
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={styles(theme).Button385131f8}
            title={'Read our terms and conditions'}
          />
          {/* Read our privacy statement */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  await WebBrowser.openBrowserAsync(
                    'https://www.nuvoni.eu/legal/privacy'
                  );
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={styles(theme).Button385131f8}
            title={'Read our privacy statement'}
          />
        </View>

        <View style={styles(theme).View46ce48d1}>
          <View style={styles(theme).Viewface9a6c}>
            <View style={styles(theme).Viewedd61be4}>
              {/* checkboxValue */}
              <>
                {!true ? null : (
                  <Checkbox
                    onPress={newCheckboxValueValue => {
                      try {
                        setCheckboxValue(newCheckboxValueValue);
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
                )}
              </>
              {/* lblTerms */}
              <Text style={styles(theme).Textbe8f7c40}>
                {
                  'I know my registration to Nuvoni excludes me from working with other operators.'
                }
              </Text>
            </View>
          </View>
          <Divider
            style={styles(theme).Dividerde11d607}
            color={theme.colors['Neutral/100']}
          />
          <Utils.CustomCodeErrorBoundary>
            <CheckBoxCheckFirstThingFirst.CheckBoxCheckFirstThingFirst
              checkboxValue={checkboxValue}
            />
          </Utils.CustomCodeErrorBoundary>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button385131f8: {
      backgroundColor: theme.colors['Primary/50'],
      color: theme.colors['Primary/900'],
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
    Checkboxd34fb6c9: { left: 0, position: 'absolute' },
    Dividerde11d607: { height: 1 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Text5df38e8e: {
      alignSelf: 'center',
      color: theme.colors['Neutral/700'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    Textbe8f7c40: {
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginLeft: 25,
    },
    Texte686fe76: {
      alignSelf: 'center',
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      marginTop: 15,
      textAlign: 'center',
    },
    View02a568ec: { paddingLeft: 12, paddingRight: 12 },
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
    View8c9646df: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 10,
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

export default withTheme(AgreeFalseScreen);
