import React from 'react';
import {
  Button,
  IconButton,
  ScreenContainer,
  Surface,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const PricingScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      <View style={styles(theme).Viewa98db7de}>
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
          <Text style={styles(theme).Text12d19509}>{'Pricing'}</Text>

          <Text style={styles(theme).Textf4e5459a}>
            {'Go standard or upgrade to premium'}
          </Text>
        </View>

        <View style={styles(theme).View258b8a78}>
          <Surface style={styles(theme).Surface656227dd}>
            <View style={styles(theme).View02f8ec45}>
              <Text style={styles(theme).Text0fc10596}>{'Standard'}</Text>

              <Text style={styles(theme).Text7f4f4d7c}>
                {
                  'Nuvoni takes care of getting your VAT refunds in Belgium. Your payments will be processed by us and you will receive your refund in 6 months.'
                }
              </Text>

              <View style={styles(theme).Viewc2dd1180}>
                <Text style={styles(theme).Textea7f54e9}>{'Time'}</Text>

                <Text style={styles(theme).Texte9f9757c}>{'  6 months'}</Text>
              </View>

              <View style={styles(theme).Viewc2dd1180}>
                <Text style={styles(theme).Textea7f54e9}>{'Price'}</Text>

                <Text style={styles(theme).Texte9f9757c}>{'  100% free'}</Text>
              </View>
              <Button
                style={styles(theme).Button3f1346ef}
                title={'Choose standard'}
              />
            </View>
          </Surface>
        </View>

        <View style={styles(theme).Viewe8990c40}>
          <Surface style={styles(theme).Surfacec23cf3fb}>
            <View style={styles(theme).View02f8ec45}>
              <Text style={styles(theme).Text0fc10596}>{'Premium'}</Text>

              <Text style={styles(theme).Text7f4f4d7c}>
                {
                  'Nuvoni takes care of getting your VAT refunds in Belgium. Your payments will be processed by us and you will receive your refund within a period of seven business days.'
                }
              </Text>

              <View style={styles(theme).Viewc2dd1180}>
                <Text style={styles(theme).Textea7f54e9}>{'Time'}</Text>

                <Text style={styles(theme).Texte9f9757c}>
                  {'  Max. 7 business days'}
                </Text>
              </View>

              <View style={styles(theme).Viewc2dd1180}>
                <Text style={styles(theme).Textea7f54e9}>{'Price'}</Text>

                <Text style={styles(theme).Texte9f9757c}>
                  {'  2% on each purchase*'}
                </Text>
              </View>
              <Button
                style={styles(theme).Button800e9622}
                title={'Choose premium'}
              />
            </View>
          </Surface>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button3f1346ef: {
      backgroundColor: theme.colors['Custom Color'],
      borderBottomRightRadius: 25,
      borderColor: theme.colors['Custom #14495c'],
      borderTopLeftRadius: 25,
      color: theme.colors['Background'],
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      marginLeft: 16,
      marginRight: 16,
      marginTop: 20,
      textAlign: 'center',
    },
    Button800e9622: {
      backgroundColor: theme.colors['Primary/700'],
      borderBottomRightRadius: 25,
      borderColor: theme.colors['Custom #14495c'],
      borderTopLeftRadius: 25,
      color: theme.colors['Background'],
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      marginLeft: 16,
      marginRight: 16,
      marginTop: 18,
      textAlign: 'center',
    },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Surface656227dd: {
      borderBottomRightRadius: 25,
      borderColor: theme.colors['Custom #14495c'],
      borderTopLeftRadius: 25,
      height: '100%',
      minHeight: 40,
    },
    Surfacec23cf3fb: {
      backgroundColor: theme.colors['Custom Color_19'],
      borderBottomRightRadius: 25,
      borderColor: theme.colors['Custom #14495c'],
      borderTopLeftRadius: 25,
      height: '100%',
      minHeight: 40,
    },
    Text0fc10596: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_600SemiBold',
      fontSize: 24,
      lineHeight: 32,
      textAlign: 'center',
    },
    Text12d19509: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      textAlign: 'center',
    },
    Text7f4f4d7c: {
      color: theme.colors.strong,
      marginLeft: 20,
      marginRight: 20,
      marginTop: 20,
      textAlign: 'center',
    },
    Texte9f9757c: { color: theme.colors.strong },
    Textea7f54e9: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 22,
    },
    Textf4e5459a: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    View02f8ec45: { marginTop: 20 },
    View258b8a78: {
      borderBottomRightRadius: 20,
      borderColor: theme.colors['Custom Color_18'],
      borderStyle: 'solid',
      borderTopLeftRadius: 20,
      height: '38%',
      marginBottom: '2%',
      marginLeft: 16,
      marginRight: 16,
    },
    View6a308080: {
      height: '10%',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 20,
    },
    Viewa98db7de: { height: '100%', width: '100%' },
    Viewc2dd1180: {
      alignContent: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 10,
    },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    Viewe8990c40: {
      backgroundColor: theme.colors['Custom Color_19'],
      borderBottomRightRadius: 20,
      borderColor: theme.colors['Custom Color_18'],
      borderStyle: 'solid',
      borderTopLeftRadius: 20,
      height: '38%',
      marginBottom: '2%',
      marginLeft: 16,
      marginRight: 16,
    },
    screen: {
      backgroundColor: theme.colors['Custom Color'],
      height: '100%',
      width: '100%',
    },
  });

export default withTheme(PricingScreen);
