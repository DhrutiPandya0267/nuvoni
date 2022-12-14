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

const TouristSplashScreen = props => {
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

        <ScrollView
          style={styles(theme).ScrollView1bff80c4}
          contentContainerStyle={styles(theme).ScrollView989db244Content}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          <View style={styles(theme).Viewd664bbb3}>
            <Text style={styles(theme).Textb1685582}>{'Hey you'}</Text>
            {/* Welcome to Nuvoni For Tourism */}
            <Text
              style={styles(theme).Text22da8028}
              adjustsFontSizeToFit={true}
              selectionColor={theme.colors['Neutral/900']}
              suppressHighlighting={true}
            >
              {'Welcome to Nuvoni\nFor Tourism'}
            </Text>
          </View>

          <View style={styles(theme).Viewdbaaf393}>
            <Image
              style={styles(theme).Image67631d85}
              resizeMode={'cover'}
              source={Images.Frame1749}
            />
          </View>

          <View style={styles(theme).Viewe8293b3d}>
            <View style={styles(theme).View22b4b15d}>
              {/* lblText */}
              <Text style={styles(theme).Text505da5b1}>
                {
                  'To get started we will ask you for some basic info regarding yourself and where we should refund your VAT.'
                }
              </Text>
            </View>

            <View style={styles(theme).View22b4b15d}>
              {/* lblText1 */}
              <Text style={styles(theme).Text6ed8c264}>
                {'This process shouldn’t take longer than 5 minutes.'}
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles(theme).View46ce48d1}>
          <Divider
            style={styles(theme).Dividerde11d607}
            color={theme.colors['Neutral/100']}
          />
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
    Image67631d85: { height: 324, width: '100%' },
    ScrollView1bff80c4: { height: '80%' },
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
    View8dc796a9: { height: '100%', width: '100%' },
    Viewd664bbb3: {
      alignItems: 'center',
      height: '20%',
      marginTop: 18,
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

export default withTheme(TouristSplashScreen);
