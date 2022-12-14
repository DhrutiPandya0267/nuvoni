import React from 'react';
import {
  Button,
  Divider,
  IconButton,
  RadioButton,
  RadioButtonGroup,
  ScreenContainer,
  Surface,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const YourealldoneScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [rdoKnow, setRdoKnow] = React.useState('');

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
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

        <View style={styles(theme).View1054891a}>
          <Text style={styles(theme).Text12d19509}>{'You’re all done'}</Text>

          <Text style={styles(theme).Textf4e5459a}>
            {
              'We have sent a confirmation email to laurens@sndq.be if you did not receive anything please check your spam folder.'
            }
          </Text>
        </View>

        <View style={styles(theme).Viewf6bb9fde}>
          <Text style={styles(theme).Text2aa31cd3}>
            {'While you’re here, let us ask you a question'}
          </Text>

          <Text style={styles(theme).Text67d12b4b}>
            {'How did you learn about Nuvoni?'}
          </Text>
        </View>

        <View style={styles(theme).Viewe0c576f0}>
          <RadioButtonGroup
            onValueChange={newRadioButtonGroupValue => {
              try {
                setRadioButtonGroupValue(newRadioButtonGroupValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={radioButtonGroupValue}
          >
            {/* friend */}
            <Surface style={styles(theme).Surface20178917}>
              <View style={styles(theme).View5f5f8d3b}>
                {/* rdoKnow */}
                <RadioButton
                  onPress={() => {
                    try {
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  value={'friend'}
                  size={24}
                  selectedIcon={'MaterialIcons/radio-button-checked'}
                  unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                  color={theme.colors['Background']}
                  unselectedColor={theme.colors['Background']}
                />
                <Text style={styles(theme).Textae87b177}>{'A Friend'}</Text>
              </View>
            </Surface>
            {/* A colleague */}
            <Surface style={styles(theme).Surface04233fba}>
              <View style={styles(theme).View5f5f8d3b}>
                {/* rdoKnow */}
                <RadioButton
                  onPress={() => {
                    try {
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  value={'A colleague'}
                  size={24}
                  selectedIcon={'MaterialIcons/radio-button-checked'}
                  unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                  color={theme.colors['Background']}
                  unselectedColor={theme.colors['Background']}
                />
                <Text style={styles(theme).Textae87b177}>{'A colleague'}</Text>
              </View>
            </Surface>
            {/* Social media */}
            <Surface style={styles(theme).Surface04233fba}>
              <View style={styles(theme).View5f5f8d3b}>
                {/* rdoKnow */}
                <RadioButton
                  onPress={() => {
                    try {
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  value={'social media'}
                  size={24}
                  selectedIcon={'MaterialIcons/radio-button-checked'}
                  unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                  color={theme.colors['Background']}
                  unselectedColor={theme.colors['Background']}
                />
                <Text style={styles(theme).Textae87b177}>{'Social media'}</Text>
              </View>
            </Surface>
            {/* Search engine */}
            <Surface style={styles(theme).Surface04233fba}>
              <View style={styles(theme).View5f5f8d3b}>
                {/* rdoKnow */}
                <RadioButton
                  onPress={() => {
                    try {
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  value={'Search engine'}
                  size={24}
                  selectedIcon={'MaterialIcons/radio-button-checked'}
                  unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                  color={theme.colors['Background']}
                  unselectedColor={theme.colors['Background']}
                />
                <Text style={styles(theme).Textae87b177}>
                  {'Search engine'}
                </Text>
              </View>
            </Surface>
            {/* Diplomatic mission */}
            <Surface style={styles(theme).Surface04233fba}>
              <View style={styles(theme).View5f5f8d3b}>
                {/* rdoKnow */}
                <RadioButton
                  onPress={() => {
                    try {
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  value={'Diplomatic mission'}
                  size={24}
                  selectedIcon={'MaterialIcons/radio-button-checked'}
                  unselectedIcon={'MaterialIcons/radio-button-unchecked'}
                  color={theme.colors['Background']}
                  unselectedColor={theme.colors['Background']}
                />
                <Text style={styles(theme).Textae87b177}>
                  {'Diplomatic mission'}
                </Text>
              </View>
            </Surface>
          </RadioButtonGroup>
        </View>

        <View style={styles(theme).Viewcfc41473}>
          <Text style={styles(theme).Text7a816538}>
            {
              'Right now your application is pending, we will get in touch with you once your account is ready to use.'
            }
          </Text>
        </View>
        <Divider
          style={styles(theme).Divider16880808}
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
    Divider16880808: { height: 1, marginTop: 8 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    Surface04233fba: {
      alignContent: 'center',
      height: 48,
      justifyContent: 'center',
      marginTop: 8,
    },
    Surface20178917: {
      alignContent: 'center',
      height: 48,
      justifyContent: 'center',
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
    Text67d12b4b: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
    },
    Text7a816538: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    Textae87b177: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginLeft: 12,
    },
    Textf4e5459a: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    View1054891a: {
      height: '15%',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 18,
    },
    View2200bac7: { height: '100%' },
    View5f5f8d3b: {
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 8,
    },
    View7e52fb3d: { height: '10%', paddingLeft: 16, paddingRight: 16 },
    Viewcfc41473: { marginRight: 16, paddingLeft: 16 },
    Viewe0c576f0: { height: '45%', marginLeft: 16, marginRight: 16 },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    Viewf6bb9fde: {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      height: '8%',
      marginLeft: 16,
      marginRight: 16,
      marginTop: '8%',
    },
    screen: { backgroundColor: theme.colors['Custom Color_21'] },
  });

export default withTheme(YourealldoneScreen);
