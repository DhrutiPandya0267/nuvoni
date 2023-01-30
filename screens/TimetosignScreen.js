import React from 'react';
import * as CustomCode from '../custom-files/CustomCode.js';
import * as SignaturPad from '../custom-files/SignaturPad.js';
import * as Utils from '../utils';
import {
  Button,
  Checkbox,
  Divider,
  IconButton,
  ScreenContainer,
  Surface,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const TimetosignScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
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

        <View style={styles(theme).View664c3e9e}>
          <Text style={styles(theme).Text12d19509}>{'Time to sign'}</Text>

          <Text style={styles(theme).Textf4e5459a}>
            {
              'Please sign below. After signing and submitting your registration is final and cannot be changed.'
            }
          </Text>
        </View>

        <View style={styles(theme).View026c23fa}>
          <Surface style={styles(theme).Surface6842abd7}>
            <Utils.CustomCodeErrorBoundary>   
              <SignaturPad.GetMySingturePad />
            </Utils.CustomCodeErrorBoundary>
          </Surface>
        </View>

        <View style={styles(theme).View9eceddda}>
          <Checkbox
            onPress={newCheckboxValue => {
              try {
                setCheckboxValue(newCheckboxValue);
              } catch (err) {
                console.error(err);
              }
            }}
            status={checkboxValue}
            color={theme.colors['Background']}
            uncheckedColor={theme.colors['Background']}
          />
          <Text style={styles(theme).Text2aa31cd3}>
            {
              'Please sign below. After signing and submitting your registration is final and cannot be changed.'
            }
          </Text>
        </View>
        <Divider
          style={styles(theme).Dividerde11d607}
          color={theme.colors.divider}
        />
        <View style={styles(theme).View7e52fb3d}>
          <View>
            <Button
              style={styles(theme).Button6ea6ce13}
              title={'Sign and continue'}
            />
          </View>
        </View>
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
    Dividerde11d607: { height: 1 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Surface6842abd7: {
      borderColor: theme.colors['Background'],
      borderRadius: 25,
      height: '100%',
    },
    Text12d19509: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      textAlign: 'center',
    },
    Text2aa31cd3: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
    },
    Textf4e5459a: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    View026c23fa: { height: '60%', paddingLeft: 16, paddingRight: 16 },
    View664c3e9e: {
      height: '12%',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 15,
    },
    View7e52fb3d: { height: '10%', paddingLeft: 16, paddingRight: 16 },
    View8dc796a9: { height: '100%', width: '100%' },
    View9eceddda: {
      alignContent: 'flex-start',
      flexDirection: 'row',
      height: '10%',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(TimetosignScreen);
