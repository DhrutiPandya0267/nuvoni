import React from 'react';
import {
  Button,
  Divider,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const YourtriptoBelgiumtouristwithnoreceiptScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      <View style={styles(theme).View8dc796a9}>
        <View style={styles(theme).View6ee32ed5}>
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
            <IconButton
              style={styles(theme).IconButtona93d3e61}
              icon={'Ionicons/settings-sharp'}
              color={theme.colors['Background']}
              size={24}
            />
          </View>

          <View style={styles(theme).Viewd4ff0305}>
            <Text style={styles(theme).Text21aa51d1}>
              {'Your trip to 🇧🇪 Belgium'}
            </Text>

            <View style={styles(theme).View822722fb}>
              <View style={styles(theme).View02308be1}>
                <Text style={styles(theme).Text8055f86d}>{'From'}</Text>

                <Text style={styles(theme).Textf8d05f40}>{'01/08/2022'}</Text>
              </View>

              <View style={styles(theme).View3e936f7d}>
                <Text style={styles(theme).Text8055f86d}>{'To'}</Text>

                <Text style={styles(theme).Texta654085d}>{'14/08/2022'}</Text>
              </View>
            </View>

            <View style={styles(theme).View321d1de2}>
              <View style={styles(theme).View02308be1}>
                <Text style={styles(theme).Text8055f86d}>
                  {'Total expenses'}
                </Text>

                <Text style={styles(theme).Textf8d05f40}>{'€0,00'}</Text>
              </View>

              <View style={styles(theme).View3e936f7d}>
                <Text style={styles(theme).Text8055f86d}>
                  {'Eligable refunds'}
                </Text>

                <Text style={styles(theme).Texta654085d}>{'€0,00'}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles(theme).View390c63d9}>
          <Text style={styles(theme).Text2dba653b}>
            {'There is nothing here...'}
          </Text>

          <Text style={styles(theme).Text18ddf377}>
            {'Get started by adding your first receipt'}
          </Text>
        </View>

        <View style={styles(theme).View70a38307}>
          <Divider
            style={styles(theme).Dividerde11d607}
            color={theme.colors.divider}
          />
          <Button
            style={styles(theme).Buttonc0e2b830}
            title={'Finish this trip now'}
          />
          <Button style={styles(theme).Button5696a013} title={'Add receipt'} />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button5696a013: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
      textAlign: 'center',
    },
    Buttonc0e2b830: {
      backgroundColor: theme.colors['Neutral/300'],
      borderRadius: 0,
      color: theme.colors['Neutral/500'],
      fontFamily: 'System',
      fontWeight: '700',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
      textAlign: 'center',
    },
    Dividerde11d607: { height: 1 },
    IconButtona93d3e61: { left: '43%' },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Text18ddf377: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    Text21aa51d1: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      fontSize: 24,
      lineHeight: 32,
      marginLeft: 16,
      marginTop: 35,
    },
    Text2dba653b: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
      textAlign: 'center',
    },
    Text8055f86d: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
    },
    Texta654085d: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_600SemiBold',
      fontSize: 14,
      lineHeight: 24,
    },
    Textf8d05f40: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_600SemiBold',
      lineHeight: 24,
    },
    View02308be1: { width: '50%' },
    View321d1de2: {
      flexDirection: 'row',
      marginBottom: 22,
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
    },
    View390c63d9: {
      height: '50%',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: '50%',
    },
    View3e936f7d: { marginBottom: 8, width: '50%' },
    View6ee32ed5: {
      backgroundColor: theme.colors['Secondary/50'],
      height: '35%',
    },
    View70a38307: { height: '18%' },
    View822722fb: {
      flexDirection: 'row',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
    },
    View8dc796a9: { height: '100%', width: '100%' },
    Viewd4ff0305: { height: '75%' },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(YourtriptoBelgiumtouristwithnoreceiptScreen);
