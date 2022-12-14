import React from 'react';
import * as CountryNamePicker from '../custom-files/CountryNamePicker.js';
import * as CustomCode from '../custom-files/CustomCode.js';
import * as Utils from '../utils';
import {
  Button,
  Checkbox,
  IconButton,
  ScreenContainer,
  Surface,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const GetyourmoneybackpaypalScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      <View style={styles(theme).View8dc796a9}>
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

        <View style={styles(theme).View6a308080}>
          <Text style={styles(theme).Text12d19509}>
            {'Get your money back'}
          </Text>

          <Text style={styles(theme).Textf4e5459a}>
            {
              'Now for the fun part, we need to know where we can send your VAT refunds.'
            }
          </Text>
        </View>

        <View style={styles(theme).View834cacfd}>
          <Surface style={styles(theme).Surface85e98a5d}>
            <Button
              onPress={() => {
                try {
                  navigation.navigate('GetyourmoneybacktouristScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).Button28e41215}
              title={'Bank transfer'}
            />
            <Button
              onPress={() => {
                try {
                  navigation.navigate('GetyourmoneybackpaypalScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).Buttonc8cf5abe}
              title={'PayPal'}
            />
          </Surface>
        </View>

        <View style={styles(theme).Viewb0b29d56}>
          <View style={styles(theme).View686558a6}>
            <Checkbox
              onPress={newCheckboxValue => {
                try {
                  setCheckboxValue(newCheckboxValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              status={checkboxValue}
              color={theme.colors['Custom #14495c']}
              uncheckedColor={theme.colors['Custom #14495c']}
            />
            <Text style={styles(theme).Texte9f9757c}>
              {'Same name as account holder'}
            </Text>
          </View>

          <View style={styles(theme).Viewf8304bf6}>
            <Text style={styles(theme).Textf9462986}>{'PayPal e-mail'}</Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8c7a7bde}
              placeholder={'tabitha@nuvoni.eu'}
              editable={true}
            />
          </View>

          <View style={styles(theme).Viewf8304bf6}>
            <Text style={styles(theme).Textf9462986}>
              {'tabitha@nuvoni.eu'}
            </Text>
            <Utils.CustomCodeErrorBoundary>
              <CountryNamePicker.AllCountryName />
            </Utils.CustomCodeErrorBoundary>
          </View>
        </View>

        <View style={styles(theme).View7e52fb3d}>
          <View>
            <Button
              style={styles(theme).Button6ea6ce13}
              title={'Sign and continue'}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button28e41215: {
      backgroundColor: theme.colors['Neutral/100'],
      borderRadius: 0,
      color: theme.colors['Background'],
      fontFamily: 'Manrope_400Regular',
      height: '32%',
      lineHeight: 24,
      marginLeft: 8,
      maxHeight: 32,
      minHeight: 32,
      textAlign: 'center',
      width: '48%',
    },
    Button6ea6ce13: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      marginTop: 8,
      textAlign: 'center',
    },
    Buttonc8cf5abe: {
      backgroundColor: theme.colors['Custom Color_2'],
      borderRadius: 0,
      color: theme.colors['Background'],
      fontFamily: 'Manrope_400Regular',
      height: '32%',
      lineHeight: 24,
      marginLeft: 2,
      maxHeight: 32,
      minHeight: 32,
      textAlign: 'center',
      width: '48%',
    },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Surface85e98a5d: {
      alignItems: 'center',
      backgroundColor: theme.colors['Neutral/100'],
      flexDirection: 'row',
      height: 40,
      width: '100%',
    },
    Text12d19509: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      textAlign: 'center',
    },
    TextInput8c7a7bde: {
      backgroundColor: theme.colors['Neutral/50'],
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 0,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Texte9f9757c: { color: theme.colors.strong },
    Textf4e5459a: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    Textf9462986: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
    },
    View686558a6: { flexDirection: 'row', marginTop: 8 },
    View6a308080: {
      height: '10%',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 20,
    },
    View7e52fb3d: { height: '10%', paddingLeft: 16, paddingRight: 16 },
    View834cacfd: { marginTop: 20, paddingLeft: 16, paddingRight: 16 },
    View8dc796a9: { height: '100%', width: '100%' },
    Viewb0b29d56: {
      height: '60%',
      marginTop: 12,
      paddingLeft: 16,
      paddingRight: 16,
      width: '100%',
    },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    Viewf8304bf6: { marginTop: 12 },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(GetyourmoneybackpaypalScreen);
