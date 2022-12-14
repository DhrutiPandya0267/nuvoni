import React from 'react';
import {
  Button,
  Icon,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const VerifyamountScreen = props => {
  const { theme } = props;

  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');
  const [textInputValue4, setTextInputValue4] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      <View style={styles(theme).Viewa98db7de}>
        <View style={styles(theme).View948e2b51}>
          <View style={styles(theme).Viewbddd9568}>
            <IconButton
              style={styles(theme).IconButton589b1f61}
              icon={'AntDesign/arrowleft'}
              color={theme.colors['Background']}
              size={24}
            />
          </View>

          <View style={styles(theme).Viewea018f38}>
            <Text style={styles(theme).Text493c01ab}>{'Amount'}</Text>

            <Text style={styles(theme).Textf34d7fd5}>
              {'Spent at Decathlon'}
            </Text>
          </View>
        </View>

        <View style={styles(theme).View99a01941}>
          <View style={styles(theme).View690568df}>
            <View style={styles(theme).View7d6a39b7}>
              <Icon
                style={styles(theme).Iconddacad0b}
                size={64}
                name={'FontAwesome/euro'}
              />
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue4(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).TextInput1171e4d4}
                placeholder={'00,000'}
                value={textInputValue4}
                editable={true}
              />
            </View>

            <Text style={styles(theme).Text58634b9a}>{'Incl. VAT'}</Text>
          </View>
        </View>

        <KeyboardAwareScrollView
          style={styles(theme).KeyboardAwareScrollView52bfc8f1}
          contentContainerStyle={
            styles(theme).KeyboardAwareScrollView989db244Content
          }
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps={'never'}
        >
          <View style={styles(theme).View9b0fcf26}>
            <Button style={styles(theme).Button2b1368d4} title={'Cancel'} />
            <Button
              style={styles(theme).Buttoncb40d5fc}
              title={'Verify amount'}
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
    IconButton589b1f61: { marginLeft: 10 },
    Iconddacad0b: { height: 90, marginTop: 10, maxHeight: 90, minHeight: 90 },
    KeyboardAwareScrollView52bfc8f1: { height: '10%' },
    Text493c01ab: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
      textAlign: 'center',
    },
    Text58634b9a: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
      lineHeight: 16,
    },
    TextInput1171e4d4: {
      borderBottomWidth: 1,
      borderColor: '"rgba(0, 0, 0, 0)"',
      borderLeftWidth: 1,
      borderRadius: 0,
      borderRightWidth: 1,
      borderTopWidth: 1,
      fontFamily: 'Manrope_700Bold',
      fontSize: 64,
      lineHeight: 64,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
      width: 200,
    },
    Textf34d7fd5: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
      lineHeight: 16,
      textAlign: 'center',
    },
    View690568df: {
      alignItems: 'center',
      flexDirection: 'column',
      height: '20%',
    },
    View7d6a39b7: { alignItems: 'center', flexDirection: 'row' },
    View948e2b51: { flexDirection: 'row', marginTop: 50 },
    View99a01941: {
      alignItems: 'center',
      height: '80%',
      justifyContent: 'center',
    },
    View9b0fcf26: {
      flexDirection: 'row',
      height: '100%',
      paddingLeft: 16,
      paddingRight: 16,
    },
    Viewa98db7de: { height: '100%', width: '100%' },
    Viewbddd9568: { width: '10%' },
    Viewea018f38: { width: '90%' },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(VerifyamountScreen);
