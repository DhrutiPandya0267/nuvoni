import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Divider,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const DiplomatSplashScreen = props => {
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

        <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
          <View style={styles(theme).View61326745}>
            <Text style={styles(theme).Textb1685582}>{'Hey you'}</Text>
            {/* Welcome to Nuvoni For Diplomats */}
            <Text
              style={styles(theme).Text22da8028}
              adjustsFontSizeToFit={true}
              selectionColor={theme.colors['Neutral/900']}
              suppressHighlighting={true}
            >
              {'Welcome to Nuvoni\nFor Diplomats'}
            </Text>
          </View>

          <View style={styles(theme).Viewdbaaf393}>
            <Image
              style={styles(theme).Imagef91555cd}
              resizeMode={'cover'}
              source={Images.Group22}
            />
          </View>

          <View style={styles(theme).Viewe8293b3d}>
            <View style={styles(theme).View22b4b15d}>
              {/* lblText */}
              <Text style={styles(theme).Text505da5b1}>
                {
                  'To get started we will ask you a series of questions to set up your account. You’ll need your National ID card and bank account information so keep those near you!'
                }
              </Text>
            </View>

            <View style={styles(theme).View22b4b15d}>
              {/* lblText1 */}
              <Text style={styles(theme).Text6ed8c264}>
                {'This process shouldn’t take longer than 10 minutes.'}
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles(theme).View46ce48d1}>
          <Divider
            style={styles(theme).Dividerde11d607}
            color={theme.colors['Neutral/100']}
          />
          {/* Continue as a guest */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('AgreeFalseScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Buttonb8abe3f2}
            title={'I am ready'}
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
    Image3e14e945: { height: 40, marginLeft: 40, marginRight: 40, width: 40 },
    Imagef91555cd: { height: 324, width: 350 },
    Text22da8028: {
      alignSelf: 'center',
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      marginTop: 15,
      textAlign: 'center',
    },
    Text505da5b1: {
      alignSelf: 'center',
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    Text6ed8c264: {
      alignSelf: 'center',
      color: theme.colors['Neutral/900'],
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
    },
    Textb1685582: {
      color: theme.colors['Neutral/700'],
      fontFamily: 'Manrope_600SemiBold',
      fontSize: 20,
      lineHeight: 32,
    },
    View2200bac7: { height: '100%' },
    View22b4b15d: { alignItems: 'center', marginBottom: 5, marginTop: 5 },
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
    Viewe8293b3d: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      marginTop: 5,
      paddingLeft: 12,
      paddingRight: 12,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(DiplomatSplashScreen);
