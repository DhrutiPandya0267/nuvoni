import React from 'react';
import {
  Button,
  Divider,
  IconButton,
  NumberInput,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const WesentyouatextScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      hasSafeArea={false}
      scrollable={false}
    >
      <View style={styles(theme).View8dc796a9}>
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

          <View style={styles(theme).View38a40f3b}>
            <Text style={styles(theme).Textac86e355}>
              {'We sent you a text'}
            </Text>
          </View>

          <View style={styles(theme).Viewbe248ef9}>
            <Text style={styles(theme).Textee014c1f}>
              {
                'Can’t receive text messages? Please reach out to our support team to help you set up your account.'
              }
            </Text>
          </View>
        </View>

        <View style={styles(theme).View5f71dffa}>
          <ScrollView
            style={styles(theme).ScrollView989db244}
            contentContainerStyle={styles(theme).ScrollViewdebd3207Content}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            <NumberInput
              style={styles(theme).NumberInputd1740d57}
              editable={true}
              placeholderTextColor={theme.colors['Neutral/500']}
              clearTextOnFocus={true}
              autoFocus={false}
              maxLength={2}
            />
            <NumberInput
              style={styles(theme).NumberInputd1740d57}
              value={numberInputValue}
              editable={true}
              placeholderTextColor={theme.colors['Neutral/500']}
              clearTextOnFocus={true}
              autoFocus={false}
              maxLength={2}
            />
            <NumberInput
              style={styles(theme).NumberInputd1740d57}
              editable={true}
              placeholderTextColor={theme.colors['Neutral/500']}
              clearTextOnFocus={true}
              autoFocus={false}
              maxLength={2}
            />
            <NumberInput
              style={styles(theme).NumberInputd1740d57}
              editable={true}
              placeholderTextColor={theme.colors['Neutral/500']}
              clearTextOnFocus={true}
              autoFocus={false}
              maxLength={2}
            />
            <NumberInput
              style={styles(theme).NumberInputd1740d57}
              editable={true}
              placeholderTextColor={theme.colors['Neutral/500']}
              clearTextOnFocus={true}
              autoFocus={false}
              maxLength={2}
            />
            <NumberInput
              style={styles(theme).NumberInputdbddb10d}
              editable={true}
              placeholderTextColor={theme.colors['Neutral/500']}
              clearTextOnFocus={true}
              autoFocus={false}
              maxLength={2}
            />
          </ScrollView>
        </View>
        <Divider
          style={styles(theme).Dividerde11d607}
          color={theme.colors.divider}
        />
        <View style={styles(theme).View9d7f0a84}>
          <Button style={styles(theme).Button499133f5} title={'Get Started'} />
          <Button
            style={styles(theme).Button0ffa3af2}
            title={'Send text again'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button0ffa3af2: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      textAlign: 'center',
      width: 230,
    },
    Button499133f5: {
      backgroundColor: theme.colors['Primary/50'],
      borderRadius: 0,
      color: theme.colors['Background'],
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      marginRight: 5,
      textAlign: 'center',
      width: 103,
    },
    Dividerde11d607: { height: 1 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    NumberInputd1740d57: {
      backgroundColor: theme.colors['Neutral/100'],
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 0,
      borderRightWidth: 1,
      borderTopWidth: 1,
      fontFamily: 'Manrope_400Regular',
      height: 72,
      marginRight: 6,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
      textAlign: 'center',
      width: '15%',
    },
    NumberInputdbddb10d: {
      backgroundColor: theme.colors['Neutral/100'],
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 0,
      borderRightWidth: 1,
      borderTopWidth: 1,
      fontFamily: 'Manrope_400Regular',
      height: 72,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
      textAlign: 'center',
      width: '15%',
    },
    ScrollViewdebd3207Content: { flexDirection: 'row' },
    Textac86e355: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      textAlign: 'center',
    },
    Textee014c1f: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    View38a40f3b: { marginLeft: 16, marginRight: 16, marginTop: 50 },
    View5f71dffa: {
      flexDirection: 'row',
      height: '64%',
      marginLeft: 16,
      marginRight: 16,
      paddingTop: '50%',
    },
    View8dc796a9: { height: '100%', width: '100%' },
    View9d7f0a84: {
      flexDirection: 'row',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 6,
    },
    Viewbe248ef9: { marginLeft: 16, marginRight: 16, marginTop: 10 },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(WesentyouatextScreen);
