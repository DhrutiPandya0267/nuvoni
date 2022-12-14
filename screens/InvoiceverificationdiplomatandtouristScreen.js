import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  Button,
  Divider,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const InvoiceverificationdiplomatandtouristScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      <View style={styles(theme).Viewa98db7de}>
        <View style={styles(theme).View948e2b51}>
          <IconButton
            style={styles(theme).IconButton59b1f5da}
            icon={'AntDesign/arrowleft'}
            color={theme.colors['Background']}
            size={24}
          />
          <View style={styles(theme).Viewf6842d6f}>
            <Text style={styles(theme).Textef047395}>{'Invoice'}</Text>
          </View>
        </View>

        <View style={styles(theme).View686a5d87}>
          <Touchable style={styles(theme).Touchablea98db7de}>
            <Text style={styles(theme).Textb536ac60}>
              {'Tap to open Camera'}
            </Text>
          </Touchable>
        </View>

        <View style={styles(theme).View844c0787}>
          <View style={styles(theme).View02308be1}>
            <Text style={styles(theme).Textaddf174c}>{'Store'}</Text>

            <Text style={styles(theme).Textb536ac60}>{'Decathlon'}</Text>
          </View>

          <View style={styles(theme).View3e936f7d}>
            <Text style={styles(theme).Textaddf174c}>{'Amount paid'}</Text>

            <Text style={styles(theme).Textb536ac60}>{'€457,99'}</Text>
          </View>
        </View>
        <Divider
          style={styles(theme).Dividerde11d607}
          color={theme.colors.divider}
        />
        <KeyboardAwareScrollView
          style={styles(theme).KeyboardAwareScrollView52bfc8f1}
          contentContainerStyle={
            styles(theme).KeyboardAwareScrollView9d0ad012Content
          }
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps={'never'}
        >
          <View style={styles(theme).View9b0fcf26}>
            <Button style={styles(theme).Button2b1368d4} title={'Cancel'} />
            <Button
              style={styles(theme).Buttoncb40d5fc}
              title={'Send this invoice'}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button2b1368d4: {
      backgroundColor: theme.colors['Primary/50'],
      borderRadius: 0,
      color: theme.colors['Background'],
      fontFamily: 'Manrope_600SemiBold',
      height: 48,
      textAlign: 'center',
      width: '30%',
    },
    Buttoncb40d5fc: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      marginLeft: 16,
      textAlign: 'center',
      width: '65%',
    },
    Dividerde11d607: { height: 1 },
    IconButton59b1f5da: { marginLeft: 8 },
    Image8dc796a9: { height: '100%', width: '100%' },
    KeyboardAwareScrollView52bfc8f1: { height: '10%' },
    KeyboardAwareScrollView9d0ad012Content: { marginTop: 5 },
    Textaddf174c: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_600SemiBold',
      lineHeight: 24,
      textAlign: 'center',
    },
    Textb536ac60: { color: theme.colors.strong, textAlign: 'center' },
    Textef047395: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
    },
    Touchablea98db7de: { height: '100%', width: '100%' },
    View02308be1: { width: '50%' },
    View3e936f7d: { marginBottom: 8, width: '50%' },
    View686a5d87: {
      height: '73%',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: '65%',
    },
    View844c0787: {
      flexDirection: 'row',
      height: '8%',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
    },
    View948e2b51: { flexDirection: 'row', marginTop: 50 },
    View9b0fcf26: {
      flexDirection: 'row',
      height: '100%',
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewa98db7de: { height: '100%', width: '100%' },
    Viewf6842d6f: {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      width: '83%',
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(InvoiceverificationdiplomatandtouristScreen);
