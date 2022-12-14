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

const YourpaymentTouristScreen = props => {
  const { theme } = props;

  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      <View style={styles(theme).View8dc796a9}>
        <View style={styles(theme).View948e2b51}>
          <IconButton
            icon={'AntDesign/arrowleft'}
            color={theme.colors['Background']}
            size={24}
          />
          <View style={styles(theme).Viewf6842d6f}>
            <Text style={styles(theme).Textef047395}>{'Your payment'}</Text>

            <Text style={styles(theme).Text58634b9a}>{'Settings'}</Text>
          </View>
          <IconButton
            icon={'FontAwesome/trash-o'}
            color={theme.colors['Background']}
            size={24}
          />
        </View>

        <View style={styles(theme).Viewd8dd8aa7}>
          <View style={styles(theme).View6b85bbdb}>
            <Text style={styles(theme).Textf9462986}>{'Store name'}</Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8c7a7bde}
              placeholder={'Store name'}
              editable={true}
              defaultValue={'Decathlon'}
            />
          </View>

          <View style={styles(theme).View6b85bbdb}>
            <Text style={styles(theme).Textf9462986}>{'Amount paid'}</Text>

            <View style={styles(theme).View7d6a39b7}>
              <Icon size={24} name={'FontAwesome/euro'} />
              <TextInput
                style={styles(theme).TextInput3294b0a3}
                placeholder={'Ammount'}
                editable={true}
                defaultValue={'449,99'}
              />
            </View>
          </View>
        </View>

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps={'never'}
        >
          <View style={styles(theme).View7e52fb3d}>
            <View>
              <Button
                style={styles(theme).Button6ea6ce13}
                title={'Save changes'}
              />
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button6ea6ce13: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      marginTop: 8,
      textAlign: 'center',
    },
    Text58634b9a: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
      lineHeight: 16,
    },
    TextInput3294b0a3: {
      backgroundColor: theme.colors['Neutral/50'],
      borderBottomWidth: 1,
      borderColor: theme.colors.divider,
      borderLeftWidth: 1,
      borderRadius: 0,
      borderRightWidth: 1,
      borderTopWidth: 1,
      marginLeft: 5,
      paddingBottom: 8,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 8,
      width: '92%',
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
    Textef047395: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
    },
    Textf9462986: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
    },
    View6b85bbdb: { marginLeft: 16, marginRight: 16, marginTop: 18 },
    View7d6a39b7: { alignItems: 'center', flexDirection: 'row' },
    View7e52fb3d: { height: '10%', paddingLeft: 16, paddingRight: 16 },
    View8dc796a9: { height: '100%', width: '100%' },
    View948e2b51: { flexDirection: 'row', marginTop: 50 },
    Viewd8dd8aa7: { height: '79%' },
    Viewf6842d6f: {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      width: '83%',
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(YourpaymentTouristScreen);
