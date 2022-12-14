import React from 'react';
import { IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const YourtriptouristScreen = props => {
  const { theme } = props;

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());

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
            <Text style={styles(theme).Textef047395}>{'Your trip'}</Text>

            <Text style={styles(theme).Text58634b9a}>{'Settings'}</Text>
          </View>
          <IconButton
            icon={'FontAwesome/trash-o'}
            color={theme.colors['Background']}
            size={24}
          />
        </View>

        <View style={styles(theme).View1f23771b}>
          <View style={styles(theme).View6b85bbdb}>
            <Text style={styles(theme).Textf9462986}>{'Start date'}</Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8c7a7bde}
              placeholder={'Eg: Finance'}
              editable={true}
            />
          </View>

          <View style={styles(theme).View6b85bbdb}>
            <Text style={styles(theme).Textf9462986}>{'End date'}</Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8c7a7bde}
              placeholder={'Eg: Finance'}
              editable={true}
            />
          </View>

          <View style={styles(theme).View6b85bbdb}>
            <Text style={styles(theme).Textf9462986}>
              {'Country of arrival'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8c7a7bde}
              placeholder={'Eg: Finance'}
              editable={true}
              defaultValue={'🇧🇪 Belgium'}
            />
          </View>

          <View style={styles(theme).View6b85bbdb}>
            <Text style={styles(theme).Textf9462986}>
              {'Country of Departure'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles(theme).TextInput8c7a7bde}
              placeholder={'Eg: Finance'}
              editable={true}
              defaultValue={'🇧🇪 Belgium'}
            />
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Text58634b9a: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
      lineHeight: 16,
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
    View1f23771b: { height: '88%' },
    View6b85bbdb: { marginLeft: 16, marginRight: 16, marginTop: 18 },
    View8dc796a9: { height: '100%', width: '100%' },
    View948e2b51: { flexDirection: 'row', marginTop: 50 },
    Viewf6842d6f: {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      width: '83%',
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(YourtriptouristScreen);
