import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Onboardingstep3financialinfoScreen = props => {
  const { theme } = props;
  const { navigation } = props;

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

        <View style={styles(theme).View74f59245}>
          <Text style={styles(theme).Textd70eb763}>{'Step 3'}</Text>

          <Text style={styles(theme).Textdf1f1e08}>{'Financial info'}</Text>
        </View>

        <View style={styles(theme).Viewd58daf54}>
          <Image
            style={styles(theme).Imagee7fcfe1e}
            resizeMode={'cover'}
            source={Images.Image11}
          />
        </View>

        <View style={styles(theme).Viewe08e988e}>
          <View style={styles(theme).View501f5e97}>
            <Icon name={'AntDesign/infocirlceo'} size={22} />
            <Text style={styles(theme).Text7271f88e}>
              {'    You will need your Diplomatic ID card for this'}
            </Text>
          </View>
        </View>

        <KeyboardAwareScrollView
          style={styles(theme).KeyboardAwareScrollView4f0e2a0b}
          contentContainerStyle={
            styles(theme).KeyboardAwareScrollView989db244Content
          }
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps={'never'}
        >
          <View style={styles(theme).View631fa48d}>
            <Divider
              style={styles(theme).Dividerde11d607}
              color={theme.colors.divider}
            />
            <Button style={styles(theme).Buttonda3d525c} title={'I got it'} />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Buttonda3d525c: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      color: theme.colors['Custom Color'],
      fontFamily: 'System',
      fontWeight: '400',
      height: 48,
      marginTop: 12,
      textAlign: 'center',
    },
    Dividerde11d607: { height: 1 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Imagee7fcfe1e: { height: 400, width: 396 },
    KeyboardAwareScrollView4f0e2a0b: { height: 104 },
    Text7271f88e: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
      lineHeight: 24,
    },
    Textd70eb763: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 20,
      lineHeight: 32,
      textAlign: 'center',
    },
    Textdf1f1e08: {
      alignSelf: 'center',
      color: theme.colors['Primary/700'],
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      marginTop: 8,
      textAlign: 'center',
    },
    View501f5e97: { flexDirection: 'row', marginLeft: 16, marginRight: 16 },
    View631fa48d: { marginLeft: 16, marginRight: 16, marginTop: 12 },
    View74f59245: { height: '15%', marginTop: 20 },
    View8dc796a9: { height: '100%', width: '100%' },
    Viewd58daf54: { alignItems: 'center', alignSelf: 'center', height: '56%' },
    Viewe08e988e: {
      alignContent: 'center',
      alignItems: 'flex-start',
      backgroundColor: theme.colors['Secondary/50'],
      flexDirection: 'column',
      height: 56,
      marginLeft: 16,
      marginRight: 16,
      paddingBottom: 16,
      paddingTop: 16,
    },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(Onboardingstep3financialinfoScreen);
