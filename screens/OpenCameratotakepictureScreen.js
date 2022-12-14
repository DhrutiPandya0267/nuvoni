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

const OpenCameratotakepictureScreen = props => {
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

        <View style={styles(theme).Viewc5c8fceb}>
          <Touchable
            onPress={() => {
              const handler = async () => {
                try {
                  const snap = await Utils.openCamera({ allowsEditing: true });
                  setGlobalVariableValue({
                    key: 'Placeholder_image',
                    value: snap,
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            style={styles(theme).Touchable0ed4bba4}
          >
            <Image
              style={styles(theme).Imagea98db7de}
              resizeMode={'cover'}
              source={{ uri: `${Constants['Placeholder_image']}` }}
            />
          </Touchable>
        </View>

        <View style={styles(theme).Viewc48a8e7a}>
          <Text style={styles(theme).Text0611c8c3}>{'Front first'}</Text>

          <Text style={styles(theme).Textee014c1f}>
            {
              'Hold the front of your national ID card in the frame, align the sides as well as you can and snap a picture.'
            }
          </Text>
        </View>

        <View>
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
    Text0611c8c3: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
    },
    Textee014c1f: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    Touchable0ed4bba4: {
      borderColor: theme.colors['Background'],
      borderStyle: 'dotted',
      height: '100%',
      width: '100%',
    },
    View2200bac7: { height: '100%' },
    Viewc48a8e7a: {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      height: '36%',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 25,
    },
    Viewc5c8fceb: {
      backgroundColor: theme.colors['Primary/50'],
      borderColor: 'rgba(0, 0, 0, 0)',
      height: '40%',
      marginTop: 20,
      width: '100%',
    },
    Viewd5224b78: {
      flexDirection: 'row',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 10,
      width: '100%',
    },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(OpenCameratotakepictureScreen);
