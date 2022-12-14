import React from 'react';
import { IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const ThisisntyourDiplomaticmissionScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
    >
      <View>
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

        <View style={styles(theme).View284c079c}>
          <Text style={styles(theme).Textb4661c4c}>
            {'This isn’t your Diplomatic mission?'}
          </Text>
        </View>

        <View style={styles(theme).Viewc09a026e}>
          <Text style={styles(theme).Texte9f9757c}>
            {
              'You might have entered a wrong file number, we base the allocation of Diplomatic mission on the file number that was entered. \n\nPlease go back and make sure your file number is correct. If this problem keeps occuring please reach out to us at support@nuvoni.eu and send us a copy of your diplomatic ID card. '
            }
          </Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Textb4661c4c: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_600SemiBold',
      fontSize: 20,
      lineHeight: 32,
    },
    Texte9f9757c: { color: theme.colors.strong },
    View284c079c: {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 35,
    },
    Viewc09a026e: { marginLeft: 16, marginRight: 16, marginTop: 60 },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(ThisisntyourDiplomaticmissionScreen);
