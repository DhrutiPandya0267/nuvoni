import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Divider,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const WeneedtoAskYouthisScreen = props => {
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

        <View style={styles(theme).Viewd587b990}>
          <Text style={styles(theme).Text8a0dbb01}>
            {'We need to ask you this'}
          </Text>

          <Text style={styles(theme).Textc111fb19}>
            {
              'To scan your diplomatic ID card we need access to your camera, you can also choose to just upload a picture.'
            }
          </Text>
        </View>

        <View style={styles(theme).View1a5e4d39}>
          <Image
            style={styles(theme).Image8dc796a9}
            resizeMode={'cover'}
            source={Images.Image8}
          />
        </View>
        <Divider
          style={styles(theme).Dividerde11d607}
          color={theme.colors.divider}
        />
        <View style={styles(theme).View6d25d414}>
          <Button
            onPress={() => {
              try {
                navigation.navigate('UploadpicturefrontfirstScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Button21bf3efe}
            title={'I’ll upload manually'}
          />
          <Button
            onPress={() => {
              try {
                navigation.navigate('OpenCameratotakepictureScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles(theme).Buttond854e4ce}
            title={'Use the camera'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button21bf3efe: {
      backgroundColor: theme.colors['Primary/50'],
      borderColor: 'rgba(0, 0, 0, 0)',
      borderRadius: 0,
      color: theme.colors['Background'],
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      marginRight: 4,
      textAlign: 'center',
      width: '45%',
    },
    Buttond854e4ce: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      textAlign: 'center',
      width: '45%',
    },
    Dividerde11d607: { height: 1 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Image8dc796a9: { height: '100%', width: '100%' },
    Text8a0dbb01: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      textAlign: 'center',
    },
    Textc111fb19: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginLeft: 16,
      marginRight: 16,
      marginTop: 25,
      textAlign: 'center',
    },
    View1a5e4d39: { alignItems: 'center', height: '62%' },
    View6d25d414: {
      flexDirection: 'row',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 12,
      width: '100%',
    },
    View8dc796a9: { height: '100%', width: '100%' },
    Viewd587b990: { marginLeft: 16, marginRight: 16, marginTop: 22 },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(WeneedtoAskYouthisScreen);
