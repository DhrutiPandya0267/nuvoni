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

const OnboardingSplashScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors['Custom Color'] }}
      hasSafeArea={false}
      scrollable={false}
    >
      <View style={styles.View2200bac7}>
        <View style={styles.Viewe671b726}>
          <IconButton
            onPress={() => {
              try {
                navigation.goBack();
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.IconButtonbb88980b}
            size={32}
            icon={'Ionicons/arrow-back'}
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
          <View style={styles.View61326745}>
            <Text
              style={[
                styles.Text666385e8,
                { color: theme.colors['Neutral/700'] },
              ]}
            >
              {'Hey you'}
            </Text>
            {/* Welcome to Nuvoni For Diplomats */}
            <Text
              style={[
                styles.Text039c273c,
                { color: theme.colors['Neutral/900'] },
              ]}
              adjustsFontSizeToFit={true}
              selectionColor={theme.colors['Neutral/900']}
              suppressHighlighting={true}
            >
              {'Welcome to Nuvoni\nFor Diplomats'}
            </Text>
          </View>

          <View style={styles.Viewdbaaf393}>
            <Image
              style={styles.Imagef91555cd}
              resizeMode={'cover'}
              source={Images.Group22}
            />
          </View>

          <View style={styles.Viewe8293b3d}>
            <View style={styles.View22b4b15d}>
              {/* lblText */}
              <Text
                style={[
                  styles.Text7982c8d9,
                  { color: theme.colors['Neutral/900'] },
                ]}
              >
                {
                  'To get started we will ask you a series of questions to set up your account. You’ll need your National ID card and bank account information so keep those near you!'
                }
              </Text>
            </View>

            <View style={styles.View22b4b15d}>
              {/* lblText1 */}
              <Text
                style={[
                  styles.Textd34d7a05,
                  { color: theme.colors['Neutral/900'] },
                ]}
              >
                {'This process shouldn’t take longer than 10 minutes.'}
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.View46ce48d1}>
          <Divider
            style={styles.Dividerde11d607}
            color={theme.colors['Neutral/100']}
          />
          {/* Continue as a guest */}
          <Button
            style={[
              styles.Button9a2dc427,
              {
                backgroundColor: theme.colors['Primary/700'],
                color: theme.colors['Custom Color_2'],
              },
            ]}
            title={'Continue as a guest'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Button9a2dc427: {
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
  Text039c273c: {
    alignSelf: 'center',
    fontFamily: 'Manrope_800ExtraBold',
    fontSize: 28,
    lineHeight: 40,
    marginTop: 15,
    textAlign: 'center',
  },
  Text666385e8: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 20,
    lineHeight: 32,
  },
  Text7982c8d9: {
    alignSelf: 'center',
    fontFamily: 'Manrope_400Regular',
    lineHeight: 24,
  },
  Textd34d7a05: {
    alignSelf: 'center',
    fontFamily: 'Manrope_400Regular',
    lineHeight: 24,
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
});

export default withTheme(OnboardingSplashScreen);
