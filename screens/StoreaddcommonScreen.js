import React from 'react';
import { Button, IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const StoreaddcommonScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      <View style={styles(theme).View8dc796a9}>
        <View style={styles(theme).View948e2b51}>
          <IconButton
            style={styles(theme).IconButton897c6051}
            icon={'AntDesign/arrowleft'}
            color={theme.colors['Background']}
            size={24}
          />
          <View style={styles(theme).Viewf6842d6f}>
            <Text style={styles(theme).Textef047395}>{'Store'}</Text>
          </View>
        </View>

        <View style={styles(theme).View1bff80c4}>
          <ScrollView
            style={styles(theme).ScrollView2200bac7}
            contentContainerStyle={styles(theme).ScrollView989db244Content}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            <View style={styles(theme).View6b85bbdb}>
              <Text style={styles(theme).Textf9462986}>{'Department'}</Text>
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
                {'Previously used'}
              </Text>
            </View>

            <View style={styles(theme).View23794709}>
              <View style={styles(theme).Viewedf7c5e6}>
                <Button style={styles(theme).Button90fe8b63} title={'Ikea'} />
                <Button style={styles(theme).Button90fe8b63} title={'Apple'} />
                <Button style={styles(theme).Button90fe8b63} title={'Uniqlo'} />
                <Button
                  style={styles(theme).Buttone0fda131}
                  title={'Nespresso'}
                />
              </View>

              <View style={styles(theme).Viewedf7c5e6}>
                <Button
                  style={styles(theme).Button90fe8b63}
                  title={'Media Markt'}
                />
                <Button
                  style={styles(theme).Button90fe8b63}
                  title={'Cameleon'}
                />
                <Button
                  style={styles(theme).Buttone0fda131}
                  title={'Rituals'}
                />
              </View>

              <View style={styles(theme).Viewedf7c5e6}>
                <Button style={styles(theme).Button36497537} title={'Chanel'} />
                <Button
                  style={styles(theme).Button36497537}
                  title={'Suitsupply'}
                />
                <Button
                  style={styles(theme).Button36497537}
                  title={'Decathlon'}
                />
                <Button
                  style={styles(theme).Buttone0fda131}
                  title={'Coolblue'}
                />
              </View>

              <View style={styles(theme).Viewedf7c5e6}>
                <Button
                  style={styles(theme).Button36497537}
                  title={'Louis Vuitton'}
                />
                <Button style={styles(theme).Button36497537} title={'Prada'} />
                <Button style={styles(theme).Button36497537} title={'Gucci'} />
                <Button style={styles(theme).Buttone0fda131} title={'Makro'} />
              </View>
            </View>
          </ScrollView>
        </View>

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps={'never'}
        >
          <View style={styles(theme).View7e52fb3d}>
            <View>
              <Button
                style={styles(theme).Button6ea6ce13}
                title={'Verify retailer'}
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
    Button36497537: {
      backgroundColor: theme.colors['Primary/100'],
      borderRadius: 15,
      color: theme.colors['Neutral/900'],
      fontFamily: 'System',
      fontWeight: '400',
      marginRight: 8,
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
    Button90fe8b63: {
      backgroundColor: theme.colors['Primary/100'],
      borderRadius: 15,
      color: theme.colors['Neutral/900'],
      fontFamily: 'System',
      fontWeight: '400',
      marginRight: 10,
      textAlign: 'center',
    },
    Buttone0fda131: {
      backgroundColor: theme.colors['Primary/100'],
      borderRadius: 15,
      color: theme.colors['Neutral/900'],
      fontFamily: 'System',
      fontWeight: '400',
      textAlign: 'center',
    },
    IconButton897c6051: { marginLeft: 16 },
    ScrollView2200bac7: { height: '100%' },
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
    View1bff80c4: { height: '80%' },
    View23794709: { height: '200%' },
    View6b85bbdb: { marginLeft: 16, marginRight: 16, marginTop: 18 },
    View7e52fb3d: { height: '10%', paddingLeft: 16, paddingRight: 16 },
    View8dc796a9: { height: '100%', width: '100%' },
    View948e2b51: { flexDirection: 'row', marginTop: 50 },
    Viewedf7c5e6: {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
    },
    Viewf6842d6f: {
      alignContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      width: '83%',
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(StoreaddcommonScreen);
