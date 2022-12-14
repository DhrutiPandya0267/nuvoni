import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import {
  Button,
  Divider,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const UploadpicturefrontfirstScreen = props => {
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

        <View style={styles(theme).Viewe15b3e97}>
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  const PickerValue = await Utils.openImagePicker({
                    allowsEditing: true,
                  });
                  setGlobalVariableValue({
                    key: 'imageUrl',
                    value: PickerValue,
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={styles(theme).Touchable4588a365}
          >
            <Image
              style={styles(theme).Imagea98db7de}
              resizeMode={'cover'}
              source={{ uri: `${Constants['imageUrl']}` }}
            />
          </Touchable>
        </View>

        <View style={styles(theme).Viewa9461651}>
          <Text style={styles(theme).Text65a7415f}>{'Front first'}</Text>

          <Text style={styles(theme).Textd20e6374}>
            {
              'Use your fingers to align the picture to the outline of the card as well as you can.'
            }
          </Text>
        </View>

        <View style={styles(theme).Viewa8006778}>
          <Divider
            style={styles(theme).Dividerde11d607}
            color={theme.colors.divider}
          />
          <View style={styles(theme).Viewd5224b78}>
            <Button style={styles(theme).Buttonccb3acad} title={'Try again'} />
            <Button
              style={styles(theme).Button53cb067c}
              title={'Looks good to me'}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button53cb067c: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      color: theme.colors['Custom Color'],
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      textAlign: 'center',
      width: '60%',
    },
    Buttonccb3acad: {
      backgroundColor: theme.colors['Primary/50'],
      borderRadius: 0,
      color: theme.colors['Background'],
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      marginRight: 8,
      textAlign: 'center',
      width: '30%',
    },
    Dividerde11d607: { height: 1 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Imagea98db7de: { height: '100%', width: '100%' },
    Text65a7415f: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      textAlign: 'center',
    },
    Textd20e6374: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginLeft: 16,
      marginRight: 16,
      textAlign: 'center',
    },
    Touchable4588a365: {
      height: '100%',
      marginLeft: 16,
      marginRight: 16,
      width: '100%',
    },
    View2200bac7: { height: '100%' },
    Viewa8006778: { height: 104, width: '100%' },
    Viewa9461651: { height: '36%', marginTop: 25 },
    Viewd5224b78: {
      flexDirection: 'row',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 10,
      width: '100%',
    },
    Viewe15b3e97: {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      height: '40%',
      marginLeft: 24,
      marginRight: 24,
      marginTop: 20,
      width: '100%',
    },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(UploadpicturefrontfirstScreen);
