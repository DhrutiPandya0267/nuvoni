import React from 'react';
import * as XenoAuthApi from '../apis/XenoAuthApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { Button, Icon, NumberInput } from '@draftbit/ui';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { useNavigation } from '@react-navigation/native';

export const MyExampleComponent = () => <Text>Hello world!</Text>;
export const CountStringCharacter = ({ strName }) => {
  const Constants = GlobalVariables.useValues();
  if (strName.length < 8) {
    Constants.chkChar = true;
    return (
      <Icon
        name="MaterialIcons/close"
        color={'red'}
        size={22}
        style={style.errorMsg}
      />
    );
  } else {
    return (
      <Icon
        name="MaterialIcons/done"
        color={'green'}
        size={22}
        style={style.errorMsg}
      />
    );
  }
};

export const AtListOneCapital = ({ strName }) => {
  const Constants = GlobalVariables.useValues();
  if (Boolean(strName.match(/[A-Z]/))) {
    Constants.chkCap = true;
    return (
      <Icon
        name="MaterialIcons/done"
        color={'green'}
        size={22}
        style={style.errorMsg}
      />
    );
  } else {
    return (
      <Icon
        name="MaterialIcons/close"
        color={'red'}
        size={22}
        style={style.errorMsg}
      />
    );
  }
};

export const AtListOneNumber = ({ strName }) => {
  const Constants = GlobalVariables.useValues();
  if (Boolean(/\d/.test(strName))) {
    Constants.chkNumber = true;
    return (
      <Icon
        name="MaterialIcons/done"
        color={'green'}
        size={22}
        style={style.errorMsg}
      />
    );
  } else {
    return (
      <Icon
        name="MaterialIcons/close"
        color={'red'}
        size={22}
        style={style.errorMsg}
      />
    );
  }
};

export const ConfirmPasswordCheck = ({ strName, strConName }) => {
  const Constants = GlobalVariables.useValues();
  if (strName == strConName && strConName != '' && strName != '') {
    Constants.chkConPass = true;
    return (
      <Icon
        name="MaterialIcons/done"
        color={'green'}
        size={22}
        style={style.errorMsg}
      />
    );
  } else {
    return (
      <Icon
        name="MaterialIcons/close"
        color={'red'}
        size={22}
        style={style.errorMsg}
      />
    );
  }
};

export const ValidateEmail = ({ emailId }) => {
  const Constants = GlobalVariables.useValues();
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (emailId != '') {
    if (emailId.match(validRegex)) {
      return '';
    } else {
      return (
        <Text color={'red'} size={22} style={style.emailError}>
          Email Invalid!!
        </Text>
      );
    }
  } else {
    // return (
    //     <Text color={'red'} size={22} style={style.emailError}>
    //       Email Required!!
    //     </Text>
    //   );
    return '';
  }
};

export const BothCheckBoxCheck = ({
  chkTermsCheck,
  chkPrivacyCheck,
  txtEmail,
  txtConfirmPassword,
}) => {
  const navigation = useNavigation();
  const Constants = GlobalVariables.useValues();
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  if (
    chkTermsCheck == true &&
    chkPrivacyCheck == true &&
    Constants.chkCap == true &&
    Constants.chkNumber == true &&
    Constants.chkChar == true &&
    Constants.chkConPass == true
  ) {
    return (
      <Button
        onPress={() => {
          const handler = async () => {
            try {
              const signupResponseJson = await XenoAuthApi.newSignUpPOST(
                Constants,
                { txtemail: txtEmail, txtpassword: txtConfirmPassword }
              );
              const authToken = signupResponseJson.authToken;
              const message = signupResponseJson.message;
              setGlobalVariableValue({
                key: 'ERR_MESSAGE',
                value: message,
              });
              if (!authToken) {
                return;
              }
              setGlobalVariableValue({
                key: 'AUTHORIZATION_HEADER',
                value: 'Bearer ' + authToken,
              });
              navigation.navigate('RegistrationSuccessScreen');
            } catch (err) {
              console.error(err);
            }
          };
          handler();
        }}
        style={[
          style.Button9a2dc427,
          {
            backgroundColor: '#427F8A',
            color: 'white',
          },
        ]}
        title={'Register now'}
        disabled={false}
      />
    );
  } else {
    return (
      <Button
        style={[
          style.btnStyle,
          {
            backgroundColor: '#427F8A',
            color: 'white',
          },
        ]}
        title={'Register now'}
        disabled={true}
      />
    );
  }
};

export const checkForTermsAndPrivacyGuest = ({ chkTerms, chkPrivacy }) => {
  const navigation = useNavigation();
  if (chkTerms == true && chkPrivacy == true) {
    return (
      <Button
        onPress={() => {
          try {
            navigation.navigate('HomeScreen');
          } catch (err) {
            console.error(err);
          }
        }}
        style={[
          style.btnStyle,
          {
            backgroundColor: '#427F8A',
            color: 'white',
          },
        ]}
        title={'Continue as a guest'}
        disabled={false}
      />
    );
  } else {
    return (
      <Button
        style={[
          style.btnStyle,
          {
            backgroundColor: '#9AA2B1',
            color: '#677083',
          },
        ]}
        title={'Continue as a guest'}
        disabled={true}
      />
    );
  }
};

export const GetYearPicker = () => {
  const year = new Date().getFullYear();
  let allyears = Array.from(new Array(50), (val, index) => index + year);
  return (
    <Picker
      style={[
        style.btnStyle,
        {
          backgroundColor: '#F1F3F3',
          color: '#677083',
        },
      ]}
      options={allyears}
      leftIconMode={'inset'}
      type={'solid'}
      rightIconName={'AntDesign/down'}
      iconSize={16}
      iconColor="#F1F3F3"
      placeholder={'Year'}
      placeholderTextColor="#6E7879"
    />
  );
};

export const CheckSameNameCheckbox = ({ chksamename }) => {
  if (chksamename == true) {
    return '';
  } else {
    return (
      <View style={style.Viewf8304bf6}>
        <Text style={style.Textf9462986}>{'Name on the card'}</Text>
        <TextInput
          onChangeText={newTextInputValue => {
            try {
            } catch (err) {
              console.error(err);
            }
          }}
          style={style.TextInput8c7a7bde}
          placeholder={'Eg. Tabitha Olsen'}
          editable={true}
        />
      </View>
    );
  }
};

export const CheckSameAddressCheckbox = ({ chksameaddress }) => {
  if (chksameaddress == true) {
    return '';
  } else {
    return (
      <View>
        <View style={styles.View1ed1cbf9}>
          <View style={styles.View39546f65}>
            <Text style={styles.Textb137ccc6}>{'Street'}</Text>
            <TextInput
              style={styles.TextInputb91817f5}
              placeholder={'Eg. Paleisstraat'}
              editable={true}
            />
          </View>
          <View style={styles.View7f707a21}>
            <Text style={styles.Textb137ccc6}>{'Number'}</Text>
            <NumberInput
              style={styles.NumberInput7be9eaf1}
              value={''}
              editable={true}
              placeholder={'Enter a number...'}
            />
          </View>
          <View style={styles.View8ddf670c}>
            <Text style={styles.Textb137ccc6}>{'Addition'}</Text>
            <NumberInput
              style={styles.NumberInput807279bf}
              editable={true}
              placeholder={'Enter a number...'}
            />
          </View>
        </View>
        <View style={styles.View1ed1cbf9}>
          <View style={styles.View38fb1bab}>
            <Text style={styles.Textf9462986}>{'Postal Code'}</Text>
            <NumberInput
              style={styles.NumberInputd9ac6d83}
              value={''}
              editable={true}
              placeholder={'Enter a number...'}
            />
          </View>
          <View style={styles.View38fb1bab}>
            <Text style={styles.Textf9462986}>{'City'}</Text>
            <TextInput
              style={styles.TextInputb91817f5}
              placeholder={'Eg. Brussels'}
              editable={true}
            />
          </View>
        </View>
      </View>
    );
  }
};

const style = StyleSheet.create({
  errorMsg: {
    position: 'absolute',
    left: 1,
  },
  emailError: {
    color: 'red',
  },
  btnStyle: {
    fontFamily: 'Manrope_600SemiBold',
    height: 48,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center',
  },
  PickerStyle: {
    fontFamily: 'Manrope_600SemiBold',
    height: 48,
    textAlign: 'center',
  },
  TextInput8c7a7bde: {
    backgroundColor: '#F1F3F3',
    borderBottomWidth: 1,
    borderColor: '#F1F3F3',
    borderLeftWidth: 1,
    borderRadius: 0,
    borderRightWidth: 1,
    borderTopWidth: 1,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  Textf9462986: {
    color: '#112022',
    fontFamily: 'Manrope_700Bold',
    lineHeight: 24,
  },
  Viewf8304bf6: { marginTop: 8 },
});

const styles = StyleSheet.create({
  Button9eec9329: {
    backgroundColor: '#F1F3F3',
    borderRadius: 0,
    fontFamily: 'System',
    fontWeight: '700',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    textAlign: 'center',
  },
  Dividerde11d607: { height: 1 },
  IconButtonbb88980b: { left: 10, position: 'absolute' },
  KeyboardAwareScrollView4518333f: { height: 80 },
  NumberInput24c1bf63: {
    backgroundColor: '#F1F3F3',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderLeftWidth: 1,
    borderRadius: 0,
    borderRightWidth: 1,
    borderTopWidth: 1,
    height: 48,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    width: '68%',
  },
  NumberInput7be9eaf1: {
    backgroundColor: '#F1F3F3',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderLeftWidth: 1,
    borderRadius: 0,
    borderRightWidth: 1,
    borderTopWidth: 1,
    height: 48,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  NumberInput807279bf: {
    backgroundColor: '#F1F3F3',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderLeftWidth: 1,
    borderRadius: 0,
    borderRightWidth: 1,
    borderTopWidth: 1,
    height: 48,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  NumberInputd9ac6d83: {
    backgroundColor: '#F1F3F3',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0)',
    borderLeftWidth: 1,
    borderRadius: 0,
    borderRightWidth: 1,
    borderTopWidth: 1,
    height: 48,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  Picker5c345f69: {
    backgroundColor: '#F1F3F3',
    borderColor: 'rgba(0, 0, 0, 0)',
    fontFamily: 'Manrope_700Bold',
    height: 48,
    lineHeight: 24,
    width: '32.5%',
  },
  Picker70b23e33: {
    backgroundColor: '#F1F3F3',
    borderColor: 'rgba(0, 0, 0, 0)',
    fontFamily: 'Manrope_700Bold',
    height: 48,
    lineHeight: 24,
    marginRight: 4,
    width: '33%',
  },
  Pickere4029bc4: {
    backgroundColor: '#F1F3F3',
    borderColor: 'rgba(0, 0, 0, 0)',
    fontFamily: 'Manrope_700Bold',
    fontSize: 12,
    height: 48,
    lineHeight: 24,
    marginRight: 4,
    width: '33%',
  },
  RadioButton277a712c: { right: 2 },
  RadioButtone21dc5f6: { marginRight: 2 },
  ScrollView7245b3d8Content: { marginLeft: 16, marginRight: 16 },
  Text14523dc9: {
    alignSelf: 'center',
    // color: theme.colors.strong,
    fontFamily: 'Manrope_400Regular',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 12,
    textAlign: 'center',
  },
  Text617f8071: {
    // color: theme.colors.strong,
    marginRight: 8,
  },
  TextInputb91817f5: {
    backgroundColor: '#F1F3F3',
    borderBottomWidth: 1,
    borderColor: '#F1F3F3',
    borderLeftWidth: 1,
    borderRadius: 0,
    borderRightWidth: 1,
    borderTopWidth: 1,
    height: 48,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
  },
  Textac86e355: {
    alignSelf: 'center',
    // color: theme.colors.strong,
    fontFamily: 'Manrope_800ExtraBold',
    fontSize: 28,
    lineHeight: 40,
    textAlign: 'center',
  },
  Textb137ccc6: {
    // color: theme.colors.strong,
    fontFamily: 'Manrope_700Bold',
    lineHeight: 24,
  },
  Texte2ac526f: {
    // color: theme.colors.strong,
    fontFamily: 'Manrope_600SemiBold',
    lineHeight: 24,
  },
  Texte9f9757c: {
    //  color: theme.colors.strong
  },
  Textf9462986: {
    // color: theme.colors.strong,
    fontFamily: 'Manrope_700Bold',
    lineHeight: 24,
  },
  View02f8ec45: { marginTop: 20 },
  View1ed1cbf9: { flexDirection: 'row', marginTop: 5 },
  View20607a6a: { marginTop: 15 },
  View269d9253: { flexDirection: 'row', width: '100%' },
  View38fb1bab: { marginRight: 5, width: '49%' },
  View39546f65: { marginRight: 5, width: '45%' },
  View759c4218: { height: 48, width: '32.5%' },
  View7f707a21: { marginRight: 5, width: '25%' },
  View8dc796a9: { height: '100%', width: '100%' },
  View8ddf670c: { width: '25%' },
  View9d0ad012: { marginTop: 5 },
  Viewdebd3207: { flexDirection: 'row' },
  Viewe671b726: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  Viewfe37c177: { alignItems: 'flex-start', overflow: 'hidden' },
  screen: {
    // backgroundColor: theme.colors['Custom Color'],
    borderColor: 'rgba(0, 0, 0, 0)',
  },
});
