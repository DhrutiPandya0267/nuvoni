import React from 'react';
import {
  Button,
  Divider,
  IconButton,
  ScreenContainer,
  SwitchRow,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const DiplometicProfileScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [switchRowValue, setSwitchRowValue] = React.useState(false);
  const [switchRowValue2, setSwitchRowValue2] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');

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

        <View style={styles(theme).View38a40f3b}>
          <Text style={styles(theme).Text013e3ca1}>
            {'Your diplomatic profile'}
          </Text>

          <Text style={styles(theme).Text8fe28b16}>
            {'Diving in, we need to know a bit more about your embassy.'}
          </Text>
        </View>

        <ScrollView
          style={styles(theme).ScrollView1103496c}
          contentContainerStyle={styles(theme).ScrollView7245b3d8Content}
          showsVerticalScrollIndicator={true}
          bounces={true}
        >
          {/* file number */}
          <View style={styles(theme).View7c604ee7}>
            <Text style={styles(theme).Textf9462986}>{'File number'}</Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8c7a7bde}
              placeholder={'X / 00 / 00000 / X00000 / XX / 00'}
              editable={true}
            />
            <Text style={styles(theme).Texta5e74a62}>
              {'You can find this on the back of your Diplomatic ID card'}
            </Text>
          </View>
          {/* department */}
          <View style={styles(theme).View7c604ee7}>
            <Text style={styles(theme).Textf9462986}>{'Department'}</Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8c7a7bde}
              placeholder={'Eg: Finance'}
              editable={true}
            />
          </View>
          {/* Position */}
          <View style={styles(theme).View7c604ee7}>
            <Text style={styles(theme).Textf9462986}>{'Position'}</Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue2(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8c7a7bde}
              placeholder={'Eg: Spokesperson'}
              editable={true}
            />
          </View>
          {/* I work for the international organisation */}
          <View style={styles(theme).View7c604ee7}>
            <SwitchRow
              onValueChange={newSwitchRowValue => {
                try {
                  setSwitchRowValue2(newSwitchRowValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).SwitchRow33d4974a}
              value={switchRowValue2}
              label={'I work for an international organisation          '}
              direction={'row-reverse'}
              activeTrackColor={theme.colors['Background']}
            />
          </View>
        </ScrollView>

        <KeyboardAwareScrollView
          style={styles(theme).KeyboardAwareScrollView989db244}
          contentContainerStyle={
            styles(theme).KeyboardAwareScrollView9d87d275Content
          }
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps={'never'}
        >
          <Divider
            style={styles(theme).Dividerde11d607}
            color={theme.colors.divider}
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
            style={styles(theme).Button22714e03}
            title={'Next'}
          />
        </KeyboardAwareScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button22714e03: {
      backgroundColor: theme.colors['Primary/700'],
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      borderRadius: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      color: theme.colors['Custom Color_2'],
      fontFamily: 'Manrope_600SemiBold',
      height: 48,
      marginBottom: 5,
      marginTop: 5,
      textAlign: 'center',
    },
    Dividerde11d607: { height: 1 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    KeyboardAwareScrollView9d87d275Content: {
      justifyContent: 'flex-end',
      marginLeft: 16,
      marginRight: 16,
    },
    ScrollView1103496c: { height: '60%', width: '100%' },
    ScrollView7245b3d8Content: { marginLeft: 16, marginRight: 16 },
    SwitchRow33d4974a: { marginLeft: 0, marginRight: 0 },
    Text013e3ca1: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      textAlign: 'center',
    },
    Text8fe28b16: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginTop: 15,
      textAlign: 'center',
    },
    TextInput8c7a7bde: {
      backgroundColor: theme.colors['Neutral/50'],
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 0,
      borderRightWidth: 1,
      borderTopWidth: 1,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
    },
    Texta5e74a62: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
      lineHeight: 16,
    },
    Textf9462986: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
    },
    View2200bac7: { height: '100%' },
    View38a40f3b: { marginLeft: 16, marginRight: 16, marginTop: 50 },
    View7c604ee7: { marginTop: 18 },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(DiplometicProfileScreen);
