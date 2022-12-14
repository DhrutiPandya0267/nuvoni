import React from 'react';
import {
  Button,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Surface,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const YourealmostdoneScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      <View style={styles(theme).View815d17bb}>
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

        <View style={styles(theme).View85bb5f8f}>
          <Text style={styles(theme).Text12d19509}>{'You’re almost done'}</Text>

          <Text style={styles(theme).Textc15f21a9}>
            {
              'Please confirm all data, after signing and submitting your registration is final and cannot be changed.'
            }
          </Text>
        </View>

        <View style={styles(theme).View8fe2f8b8}>
          <ScrollView
            style={styles(theme).ScrollView2200bac7}
            contentContainerStyle={styles(theme).ScrollView989db244Content}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            {/* personal */}
            <Surface style={styles(theme).Surfaced581555f}>
              <Text style={styles(theme).Text963bea8b}>{'Personal'}</Text>
              {/* name and half address */}
              <View style={styles(theme).Viewdebd3207}>
                <View style={styles(theme).View686558a6}>
                  <Icon
                    name={'Ionicons/person'}
                    color={theme.colors['Primary/700']}
                    size={18}
                  />
                  <Text style={styles(theme).Textad9084bb}>
                    {'Mr. Vandevyver Laurens'}
                  </Text>
                </View>

                <View style={styles(theme).Viewe59596c1}>
                  <Icon
                    color={theme.colors['Primary/700']}
                    size={18}
                    name={'FontAwesome/map-pin'}
                  />
                  <Text style={styles(theme).Textad9084bb}>
                    {'Rue de lalala'}
                  </Text>
                </View>
              </View>
              {/* email and half address */}
              <View style={styles(theme).Viewdebd3207}>
                <View style={styles(theme).View04371788}>
                  <Icon
                    color={theme.colors['Primary/700']}
                    size={18}
                    name={'Entypo/email'}
                  />
                  <Text style={styles(theme).Textad9084bb}>
                    {'laurens@sndq.be'}
                  </Text>
                </View>

                <View style={styles(theme).View33b24a1d}>
                  <Text style={styles(theme).Text93a13de4}>
                    {'24 1000 Brussels'}
                  </Text>
                </View>
              </View>
              {/* phone and birthdate */}
              <View style={styles(theme).Viewdebd3207}>
                <View style={styles(theme).View04371788}>
                  <Icon
                    color={theme.colors['Primary/700']}
                    size={18}
                    name={'FontAwesome/phone'}
                  />
                  <Text style={styles(theme).Textad9084bb}>
                    {'+32 493 64 41 32'}
                  </Text>
                </View>

                <View style={styles(theme).View530d4ace}>
                  <Icon
                    name={'FontAwesome/birthday-cake'}
                    size={18}
                    color={theme.colors['Primary/700']}
                  />
                  <Text style={styles(theme).Textad9084bb}>{'04/05/1997'}</Text>
                </View>
              </View>
            </Surface>
            {/* Diplomatic */}
            <Surface style={styles(theme).Surfaced8d016fd}>
              <Text style={styles(theme).Text963bea8b}>
                {'Diplomatic info'}
              </Text>
              {/* file number */}
              <View style={styles(theme).Viewb078db66}>
                <Text style={styles(theme).Textf8d05f40}>{'File number'}</Text>

                <Text style={styles(theme).Textd55259e5}>
                  {'X/00/00000/X00000/XX/00'}
                </Text>
              </View>
              {/* organisation */}
              <View style={styles(theme).Viewb078db66}>
                <Text style={styles(theme).Textf8d05f40}>{'Organisation'}</Text>

                <Text style={styles(theme).Textd55259e5}>
                  {'Embassy of Italy'}
                </Text>
              </View>
              {/* department */}
              <View style={styles(theme).Viewb078db66}>
                <Text style={styles(theme).Textf8d05f40}>{'Department'}</Text>

                <Text style={styles(theme).Textd55259e5}>
                  {'DepartmentPlaceholder'}
                </Text>
              </View>
              {/* Position */}
              <View style={styles(theme).Viewb078db66}>
                <Text style={styles(theme).Textf8d05f40}>{'Position'}</Text>

                <Text style={styles(theme).Textd55259e5}>
                  {'PositionPlaceholder'}
                </Text>
              </View>
            </Surface>
            {/* bank details */}
            <Surface style={styles(theme).Surface1b5365ed}>
              <Text style={styles(theme).Text963bea8b}>{'Bank details'}</Text>
              {/* bank name */}
              <View style={styles(theme).Viewb078db66}>
                <Text style={styles(theme).Textf8d05f40}>{'Name'}</Text>

                <Text style={styles(theme).Textd55259e5}>
                  {'Laurens Vandevyver'}
                </Text>
              </View>
              {/* bank account */}
              <View style={styles(theme).Viewb078db66}>
                <Text style={styles(theme).Textf8d05f40}>{'Bank account'}</Text>

                <Text style={styles(theme).Textd55259e5}>
                  {'BE70 4411 2655 2014'}
                </Text>
              </View>
              {/* bank account */}
              <View style={styles(theme).Viewb078db66}>
                <Text style={styles(theme).Textf8d05f40}>{'Bank'}</Text>

                <Text style={styles(theme).Textd55259e5}>
                  {'BNP paribas fortis'}
                </Text>
              </View>
            </Surface>
            {/* pricing 1 */}
            <Surface style={styles(theme).Surfaced5c45ee9}>
              <Text style={styles(theme).Text963bea8b}>{'Pricing'}</Text>

              <Text style={styles(theme).Text276db914}>
                {'Standard (You receive your refund in 6 months)'}
              </Text>

              <Text style={styles(theme).Textaabdd6c2}>
                {'Want to receive your refunds within 7 business days?'}
              </Text>
              <Button
                style={styles(theme).Button153266a4}
                title={'Upgrade to premium*'}
              />
              <Text style={styles(theme).Text4ca7f519}>
                {
                  '*You pay 2% on each purchase on the basis of the VAT-incl. invoice amount'
                }
              </Text>
            </Surface>
            {/* pricing 2 */}
            <Surface style={styles(theme).Surfaceaa115156}>
              <Text style={styles(theme).Text963bea8b}>{'Pricing'}</Text>

              <Text style={styles(theme).Textff1a4955}>
                {'Premium (you receive your refund within 7 business days)'}
              </Text>
            </Surface>
          </ScrollView>
        </View>
        <Divider
          style={styles(theme).Divider1535eeac}
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
    Button153266a4: {
      backgroundColor: theme.colors['Custom Color_20'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      marginTop: 5,
      textAlign: 'center',
    },
    Button6ea6ce13: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      marginTop: 8,
      textAlign: 'center',
    },
    Divider1535eeac: { height: 2 },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    ScrollView2200bac7: { height: '100%' },
    Surface1b5365ed: {
      backgroundColor: theme.colors['Primary/50'],
      height: 150,
      marginTop: 8,
      minHeight: 40,
      paddingLeft: 16,
      paddingRight: 16,
      width: '100%',
    },
    Surfaceaa115156: {
      backgroundColor: theme.colors['Primary/50'],
      height: 100,
      marginBottom: 8,
      marginTop: 8,
      minHeight: 40,
      paddingLeft: 16,
      width: '100%',
    },
    Surfaced581555f: {
      backgroundColor: theme.colors['Primary/50'],
      height: 140,
      marginTop: 8,
      minHeight: 40,
      paddingLeft: 16,
      paddingRight: 16,
      width: '100%',
    },
    Surfaced5c45ee9: {
      backgroundColor: theme.colors['Primary/50'],
      height: 200,
      marginTop: 8,
      minHeight: 40,
      paddingLeft: 16,
      paddingRight: 16,
      width: '100%',
    },
    Surfaced8d016fd: {
      backgroundColor: theme.colors['Primary/50'],
      height: 185,
      marginTop: 8,
      minHeight: 40,
      paddingLeft: 16,
      paddingRight: 16,
      width: '100%',
    },
    Text12d19509: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      textAlign: 'center',
    },
    Text276db914: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginTop: 5,
    },
    Text4ca7f519: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_300Light',
      fontSize: 12,
      lineHeight: 16,
      marginTop: 5,
    },
    Text93a13de4: { color: theme.colors.strong, marginLeft: 50 },
    Text963bea8b: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_600SemiBold',
      fontSize: 18,
      lineHeight: 32,
      marginTop: 10,
    },
    Textaabdd6c2: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_300Light',
      fontSize: 12,
      lineHeight: 16,
    },
    Textad9084bb: { color: theme.colors.strong, marginLeft: 8 },
    Textc15f21a9: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 13,
      lineHeight: 24,
      textAlign: 'center',
    },
    Textd55259e5: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginLeft: 10,
    },
    Textf8d05f40: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_600SemiBold',
      lineHeight: 24,
    },
    Textff1a4955: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginTop: 8,
    },
    View04371788: { flexDirection: 'row', marginTop: 10 },
    View33b24a1d: { flexDirection: 'row', marginLeft: 10, marginTop: 10 },
    View530d4ace: { flexDirection: 'row', marginLeft: 50, marginTop: 10 },
    View686558a6: { flexDirection: 'row', marginTop: 8 },
    View7e52fb3d: { height: '10%', paddingLeft: 16, paddingRight: 16 },
    View815d17bb: { height: '100%', marginBottom: '2%', width: '100%' },
    View85bb5f8f: {
      height: '12%',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
    },
    View8fe2f8b8: { height: '70%', paddingLeft: 16, paddingRight: 16 },
    Viewb078db66: { flexDirection: 'row', marginTop: 8 },
    Viewdebd3207: { flexDirection: 'row' },
    Viewe59596c1: { flexDirection: 'row', marginLeft: 10, marginTop: 8 },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: {
      backgroundColor: theme.colors['Custom Color_15'],
      height: '100%',
      width: '100%',
    },
  });

export default withTheme(YourealmostdoneScreen);
