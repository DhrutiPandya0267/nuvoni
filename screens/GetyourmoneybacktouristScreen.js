import React from 'react';
import * as CountryNamePicker from '../custom-files/CountryNamePicker.js';
import * as CustomCode from '../custom-files/CustomCode.js';
import * as Utils from '../utils';
import {
  Button,
  Checkbox,
  Divider,
  IconButton,
  ScreenContainer,
  Surface,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const GetyourmoneybacktouristScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [chkSameAddress, setChkSameAddress] = React.useState(true);
  const [chkSameName, setChkSameName] = React.useState(true);

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

        <View style={styles(theme).View664c3e9e}>
          <Text style={styles(theme).Text12d19509}>
            {'Get your money back'}
          </Text>

          <Text style={styles(theme).Textf4e5459a}>
            {
              'Now for the fun part, we need to know where we can send your VAT refunds.'
            }
          </Text>
        </View>

        <View style={styles(theme).View1695f081}>
          <Surface style={styles(theme).Surfacef4f5b0a7}>
            <Button
              onPress={() => {
                try {
                  navigation.navigate('GetyourmoneybacktouristScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).Button90e35b0a}
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
              style={styles(theme).Button75b1a4fb}
              title={'PayPal'}
            />
          </Surface>
        </View>

        <ScrollView
          style={styles(theme).ScrollView4bdd54ff}
          contentContainerStyle={styles(theme).ScrollView9fa86917Content}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles(theme).Viewf8304bf6}>
            {/* Name on the card is the same as account holder */}
            <View style={styles(theme).Viewdebd3207}>
              <Checkbox
                onUncheck={() => {
                  try {
                    setChkSameName(undefined);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                onCheck={() => {
                  try {
                    setChkSameName(true);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                status={chkSameName}
                color={theme.colors['Custom #14495c']}
                uncheckedColor={theme.colors['Custom #14495c']}
              />
              <Text style={styles(theme).Textfa827c01}>
                {'Name on the card is the same as account holder'}
              </Text>
            </View>
            <Utils.CustomCodeErrorBoundary>
              <CustomCode.CheckSameNameCheckbox chksamename={chkSameName} />
            </Utils.CustomCodeErrorBoundary>
            {/* Name on the card is the same as account holder */}
            <View style={styles(theme).Viewdebd3207}>
              <Checkbox
                onCheck={() => {
                  try {
                    setChkSameAddress(true);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                onUncheck={() => {
                  try {
                    setChkSameAddress(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                status={chkSameAddress}
                color={theme.colors['Custom #14495c']}
                uncheckedColor={theme.colors['Custom #14495c']}
              />
              <Text style={styles(theme).Textfa827c01}>
                {'Address is the same as account holder'}
              </Text>
            </View>
            <Utils.CustomCodeErrorBoundary>
              <CustomCode.CheckSameAddressCheckbox
                chksameaddress={chkSameAddress}
              />
            </Utils.CustomCodeErrorBoundary>
          </View>

          <View>
            <View style={styles(theme).Viewf8304bf6}>
              <Text style={styles(theme).Textf9462986}>
                {'Bank account number'}
              </Text>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput8c7a7bde}
                placeholder={'Eg. 0000 0000 00000'}
                editable={true}
              />
            </View>

            <View style={styles(theme).Viewf8304bf6}>
              <Text style={styles(theme).Textf9462986}>{'SWIFT code'}</Text>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput8c7a7bde}
                placeholder={'EG. AAAABB112222'}
                editable={true}
              />
            </View>

            <View style={styles(theme).Viewf8304bf6}>
              <Text style={styles(theme).Textf9462986}>
                {'Routing and account number'}
              </Text>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput8c7a7bde}
                placeholder={'EG. 0000 0000 0000'}
                editable={true}
              />
            </View>

            <View style={styles(theme).Viewf8304bf6}>
              <Text style={styles(theme).Textf9462986}>{'Bank name'}</Text>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput8c7a7bde}
                placeholder={'Start typing...'}
                editable={true}
              />
            </View>

            <View style={styles(theme).Viewf8304bf6}>
              <Text style={styles(theme).Textf9462986}>{'Bank address'}</Text>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput8c7a7bde}
                placeholder={'Start typing...'}
                editable={true}
              />
            </View>

            <View style={styles(theme).Viewf8304bf6}>
              <Text style={styles(theme).Textf9462986}>{'Bank country'}</Text>
              <Utils.CustomCodeErrorBoundary>
                <CountryNamePicker.AllCountryName />
              </Utils.CustomCodeErrorBoundary>
            </View>
          </View>

          <View style={styles(theme).View1ed1cbf9}>
            <Checkbox
              onPress={newCheckboxValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              color={theme.colors['Custom #14495c']}
              uncheckedColor={theme.colors['Custom #14495c']}
            />
            <Text style={styles(theme).Text58634b9a}>
              {
                'I know that additional charges by my bank might apply to this transaction.\nMake sure to check what fees your bank might charge on transactions coming from Belgium. Nuvoni is not responsible for any extra fees charged by your bank.'
              }
            </Text>
          </View>
        </ScrollView>
        <Divider
          style={styles(theme).Dividerde11d607}
          color={theme.colors.divider}
        />
        <KeyboardAwareScrollView
          style={styles(theme).KeyboardAwareScrollView52bfc8f1}
          contentContainerStyle={
            styles(theme).KeyboardAwareScrollView9fa86917Content
          }
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps={'never'}
        >
          <View>
            <Button
              style={styles(theme).Button6ea6ce13}
              title={'Sign and continue'}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button6ea6ce13: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      marginTop: 8,
      textAlign: 'center',
    },
    Button75b1a4fb: {
      backgroundColor: theme.colors['Neutral/100'],
      borderRadius: 0,
      color: theme.colors['Background'],
      fontFamily: 'Manrope_400Regular',
      height: '32%',
      lineHeight: 24,
      marginLeft: 2,
      marginRight: 8,
      maxHeight: 32,
      minHeight: 32,
      textAlign: 'center',
      width: '48%',
    },
    Button90e35b0a: {
      backgroundColor: theme.colors['Custom Color_2'],
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
    Dividerde11d607: { height: 1 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    KeyboardAwareScrollView52bfc8f1: { height: '10%' },
    KeyboardAwareScrollView9fa86917Content: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    ScrollView4bdd54ff: { height: '70%', width: '100%' },
    ScrollView9fa86917Content: { paddingLeft: 16, paddingRight: 16 },
    Surfacef4f5b0a7: {
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
    Text58634b9a: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
      lineHeight: 16,
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
    Textfa827c01: { color: theme.colors.strong, marginLeft: 5 },
    View1695f081: { paddingLeft: 16, paddingRight: 16, width: '100%' },
    View1ed1cbf9: { flexDirection: 'row', marginTop: 5 },
    View664c3e9e: {
      height: '12%',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 15,
    },
    View8dc796a9: { height: '100%', width: '100%' },
    Viewdebd3207: { flexDirection: 'row' },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    Viewf8304bf6: { marginTop: 12 },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(GetyourmoneybacktouristScreen);
