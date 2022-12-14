import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Button } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
export const MyExampleComponent = () => <Text>Hello world!</Text>;

export const CheckBoxCheckFirstThingFirst = ({ checkboxValue }) => {
  const navigation = useNavigation();
  if (checkboxValue == true) {
    return (
      <Button
        onPress={() => {
          try {
            navigation.navigate('AgreeTrueScreen');
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
        title={'Continue'}
        disabled={false}
      />
    );
  } else {
    return (
      <Button
        style={[
          style.btnStyle,
          {
            backgroundColor: '#858E8F',
            color: 'white',
          },
        ]}
        title={'Please accept the exclusion clause'}
        disabled={true}
      />
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
});
