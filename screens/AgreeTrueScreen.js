import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode.js';
import { Button, IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import * as Notifications from 'expo-notifications';
import { StyleSheet, Text, View } from 'react-native';

const AgreeTrueScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const GetNotificatioPermission = async () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Look at that notification',
        body: "I'm so proud of myself!",
      },
      trigger: null,
    });
  };

  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

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

        <View style={styles(theme).Viewff5c23d5}>
          <View style={styles(theme).View6d3b2b49}>
            {/* lblTitle */}
            <Text
              style={styles(theme).Text8b53e6b3}
              adjustsFontSizeToFit={true}
              selectionColor={theme.colors['Neutral/900']}
              suppressHighlighting={true}
            >
              {'Let’s stay in touch'}
            </Text>

            <Text style={styles(theme).Text505da5b1}>
              {
                'We would like to send notifications to your phone regarding updates on your purchases or in case something goes wrong. You can opt out of this at any time.'
              }
            </Text>
          </View>
        </View>

        <View style={styles(theme).Viewc4140cd7}>
          {/* Rather not */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('PersonalstartScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Buttone82d439f}
            title={'Rather not'}
          />
          {/* Sure, send me notifications */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  navigation.navigate('PersonalstartScreen');
                  await GetNotificatioPermission();
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={styles(theme).Button97d85e63}
            title={'Sure, send me notifications'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button97d85e63: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      textAlign: 'center',
      width: '65%',
    },
    Buttonae6a2370: {
      backgroundColor: theme.colors['Primary/50'],
      color: theme.colors['Primary/900'],
      fontFamily: 'Manrope_700Bold',
      height: 48,
      left: 8,
      lineHeight: 24,
      position: 'absolute',
      textAlign: 'center',
      width: 120,
    },
    Buttonc71a2f56: {
      backgroundColor: theme.colors['Primary/700'],
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Manrope_600SemiBold',
      height: 48,
      lineHeight: 24,
      marginBottom: 5,
      marginTop: 16,
      position: 'absolute',
      right: 8,
      textAlign: 'center',
      width: 230,
    },
    Buttone82d439f: {
      backgroundColor: theme.colors['Primary/50'],
      borderRadius: 0,
      color: theme.colors['Background'],
      fontFamily: 'Manrope_700Bold',
      marginRight: 8,
      textAlign: 'center',
      width: '30%',
    },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Text505da5b1: {
      alignSelf: 'center',
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    Text8b53e6b3: {
      alignSelf: 'center',
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      textAlign: 'center',
    },
    View2200bac7: { height: '100%' },
    View6d3b2b49: { alignItems: 'flex-start', marginTop: 50 },
    Viewb396342d: {
      borderColor: theme.colors['Neutral/100'],
      borderTopWidth: 1,
      bottom: 15,
      height: 64,
      justifyContent: 'flex-end',
      left: 0,
      paddingBottom: 8,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 8,
      position: 'absolute',
      right: 0,
    },
    Viewc4140cd7: {
      alignItems: 'flex-start',
      borderColor: theme.colors['Neutral/100'],
      borderTopWidth: 1,
      bottom: 15,
      flexDirection: 'row',
      left: 0,
      paddingBottom: 8,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 8,
      position: 'absolute',
      right: 0,
    },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    Viewff5c23d5: {
      alignItems: 'flex-start',
      height: '80%',
      marginTop: 20,
      paddingBottom: 10,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 10,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(AgreeTrueScreen);
