import React from 'react';
import {
  Button,
  Divider,
  IconButton,
  Picker,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

const FinancialinfogetyourmoneybackScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [pickerValue, setPickerValue] = React.useState('');

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

        <View style={styles(theme).View74f59245}>
          <Text style={styles(theme).Textf836b12f}>
            {'Get your money back'}
          </Text>

          <Text style={styles(theme).Text6948330f}>
            {
              'Now for the fun part, we need to know where we can send your VAT refunds.'
            }
          </Text>
        </View>

        <View style={styles(theme).Viewff1adcef}>
          <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
            <View style={styles(theme).View6b85bbdb}>
              <Text style={styles(theme).Textf9462986}>
                {'Name on the card'}
              </Text>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput8c7a7bde}
                placeholder={'Eg. Tabitha Olsen'}
                editable={true}
              />
              <Text style={styles(theme).Text58634b9a}>
                {'State it as it is written on the card exactly.'}
              </Text>
            </View>

            <View style={styles(theme).View6b85bbdb}>
              <Text style={styles(theme).Textf9462986}>{'Card number'}</Text>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput8c7a7bde}
                placeholder={'BE 00 0000 0000 0000'}
                editable={true}
              />
            </View>

            <View style={styles(theme).View6b85bbdb}>
              <Text style={styles(theme).Textf9462986}>{'Bank'}</Text>
              <Picker
                style={styles(theme).Pickerc664db12}
                label={'Select your bank...'}
                value={pickerValue}
                leftIconMode={'inset'}
                type={'solid'}
                rightIconName={'AntDesign/down'}
                iconSize={16}
                iconColor={theme.colors['Background']}
                placeholder={'Select your bank...'}
              />
            </View>
          </ScrollView>
        </View>
        <Divider
          style={styles(theme).Dividerde11d607}
          color={theme.colors.divider}
        />
        <View style={styles(theme).View7245b3d8}>
          {/* I am ready */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('AgreeTrueScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Buttonb8abe3f2}
            title={'Next'}
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
    Dividerde11d607: { height: 1 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Pickerc664db12: { backgroundColor: theme.colors['Neutral/50'], height: 40 },
    Text58634b9a: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
      lineHeight: 16,
    },
    Text6948330f: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginLeft: 16,
      marginRight: 16,
      marginTop: 5,
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
    Textf836b12f: {
      alignSelf: 'center',
      color: theme.colors['Background'],
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      marginTop: 8,
      textAlign: 'center',
    },
    Textf9462986: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
    },
    View6b85bbdb: { marginLeft: 16, marginRight: 16, marginTop: 18 },
    View7245b3d8: { marginLeft: 16, marginRight: 16 },
    View74f59245: { height: '15%', marginTop: 20 },
    View8dc796a9: { height: '100%', width: '100%' },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    Viewff1adcef: { height: '65%', width: '100%' },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(FinancialinfogetyourmoneybackScreen);
