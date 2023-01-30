import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import { ScreenContainer, Surface, Touchable, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const ChoiceScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();

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
          <View style={styles(theme).Viewa7dbf54f}>
            {/* WelcomeText */}
            <Text
              style={styles(theme).Textfb529ac3}
              adjustsFontSizeToFit={true}
              selectionColor={theme.colors['Neutral/900']}
              suppressHighlighting={true}
            >
              {'Welcome to Nuvoni'}
            </Text>

            <Text style={styles(theme).Text82b6dc17}>
              {'How would you like to use our app?'}
            </Text>
          </View>
        </View>

        <View>
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('TimetosignScreen');
                setGlobalVariableValue({
                  key: 'user_type',
                  value: 'diplomat',
                });    
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Touchablec542baed}
          >
            <Surface style={styles(theme).Surfacee6c66084}>
              <View style={styles(theme).Viewfab35482}>
                <Image
                  style={styles(theme).Image6bf74529}
                  resizeMode={'cover'}
                  source={Images.Frame1744}
                />
              </View>

              <View style={styles(theme).Viewfab35482}>
                <Text style={styles(theme).Text7ef1c0fa}>
                  {'I am a diplomat'}
                </Text>

                <Text style={styles(theme).Texte872db00}>
                  {
                    'I have a diplomatic mission in Belgium and would like to get VAT refunds on my purchases.'
                  }
                </Text>
              </View>
            </Surface>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('WelcomTouristScreen');
                setGlobalVariableValue({
                  key: 'user_type',
                  value: 'tourist',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Touchable27ed6151}
          >
            <Surface style={styles(theme).Surfacee6c66084}>
              <View style={styles(theme).Viewfab35482}>
                <Image
                  style={styles(theme).Image6bf74529}
                  resizeMode={'cover'}
                  source={Images.Frame1746}
                />
              </View>

              <View style={styles(theme).Viewfab35482}>
                <Text style={styles(theme).Text7ef1c0fa}>
                  {'I am a tourist'}
                </Text>

                <Text style={styles(theme).Texte872db00}>
                  {
                    'I am visiting from a country outside of the European Union and would like to get a refund on my purchases made in Belgium.'
                  }
                </Text>
              </View>
            </Surface>
          </Touchable>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Image3e14e945: { height: 40, marginLeft: 40, marginRight: 40, width: 40 },
    Image6bf74529: { height: 40, width: 40 },
    Surfacee6c66084: {
      backgroundColor: theme.colors['Custom Color_2'],
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 15,
    },
    Text7ef1c0fa: {
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 24,
      lineHeight: 32,
    },
    Text82b6dc17: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
    },
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
    Touchable27ed6151: { marginLeft: 10, marginRight: 10 },
    Touchablec542baed: {
      marginBottom: 40,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 40,
    },
    View2200bac7: { height: '100%' },
    Viewa7dbf54f: {
      alignItems: 'center',
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
    },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    Viewfab35482: {
      paddingBottom: 5,
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(ChoiceScreen);
