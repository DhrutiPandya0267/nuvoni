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

const DiplomaticmissionScreen = props => {
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

        <View style={styles(theme).View87d81379}>
          <View style={styles(theme).View84857a26}>
            <Text style={styles(theme).Text324261fd}>
              {'Your Diplomatic mission'}
            </Text>

            <Text style={styles(theme).Textb2e831e4}>
              {'Just to be sure, is this your Diplomatic mission?'}
            </Text>
          </View>

          <View style={styles(theme).View9bea21ad}>
            <Image
              style={styles(theme).Imaged1225a1e}
              resizeMode={'cover'}
              source={Images.Image7}
            />
            <Text style={styles(theme).Text1f6405b0}>{'Embassy of Italy'}</Text>
          </View>
        </View>
        <Divider
          style={styles(theme).Dividerde11d607}
          color={theme.colors.divider}
        />
        <View style={styles(theme).View3ddb6426}>
          <Button style={styles(theme).Button0028541a} title={'No it isn’t'} />
          <Button style={styles(theme).Button2cfdbb54} title={'Yes it is'} />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button0028541a: {
      backgroundColor: theme.colors['Primary/50'],
      color: theme.colors['Background'],
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      marginRight: 8,
      textAlign: 'center',
      width: '38%',
    },
    Button2cfdbb54: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      textAlign: 'center',
      width: '60%',
    },
    Dividerde11d607: { height: 1 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Imaged1225a1e: { height: 80, width: 80 },
    Text1f6405b0: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      fontSize: 20,
      lineHeight: 32,
      marginTop: 12,
    },
    Text324261fd: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      textAlign: 'center',
    },
    Textb2e831e4: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginTop: 8,
      textAlign: 'center',
    },
    View3ddb6426: {
      flexDirection: 'row',
      height: '10%',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
    },
    View84857a26: {
      alignItems: 'center',
      alignSelf: 'center',
      height: '20%',
      justifyContent: 'center',
      marginTop: 22,
    },
    View87d81379: {
      alignItems: 'flex-start',
      height: '82%',
      marginLeft: 16,
      marginRight: 16,
    },
    View8dc796a9: { height: '100%', width: '100%' },
    View9bea21ad: {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      height: '77%',
      justifyContent: 'center',
      width: '100%',
    },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(DiplomaticmissionScreen);
