import React from 'react';
import * as Utils from '../utils';
import {
  Button,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';

const HomeScreenThereisnothinghere = props => {
  const { theme } = props;

  const [mdlAddOptions, setMdlAddOptions] = React.useState(false);

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      <View style={styles(theme).View8dc796a9}>
        <View style={styles(theme).View3b7b69d4}>
          <Text style={styles(theme).Text651de3a1}>{'Hello'}</Text>

          <Text style={styles(theme).Text8291eb94}>{'Jessica'}</Text>

          <View style={styles(theme).View9f3be2e6}>
            <Icon
              size={24}
              name={'AntDesign/search1'}
              color={theme.colors['Custom #14495c']}
            />
            <Button
              style={styles(theme).Button79e85d3f}
              icon={'Ionicons/settings-sharp'}
              title={''}
            />
          </View>
        </View>

        <Surface style={styles(theme).Surface5d392a58}>
          <Touchable
            onPress={() => {
              try {
                setMdlAddOptions(true);
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <View style={styles(theme).Viewce068078}>
              <Icon
                size={24}
                name={'Ionicons/add-circle-sharp'}
                color={theme.colors['Custom #14495c']}
              />
              <View style={styles(theme).View26942535}>
                <Text style={styles(theme).Text67d12b4b}>
                  {'Add an invoice'}
                </Text>

                <Text style={styles(theme).Text58634b9a}>
                  {'Have something to declare? Add it now'}
                </Text>
              </View>

              <View style={styles(theme).View7af23793}>
                <Icon
                  name={'AntDesign/right'}
                  color={theme.colors['Custom #14495c']}
                  size={16}
                />
              </View>
            </View>
          </Touchable>
        </Surface>

        <View style={styles(theme).Viewd9417178}>
          <ScrollView
            style={styles(theme).ScrollView43b1ad91}
            contentContainerStyle={styles(theme).ScrollView989db244Content}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            <View style={styles(theme).View8dc796a9}>
              <Text style={styles(theme).Textc5274cb5}>
                {'There is nothing here...'}
              </Text>

              <Text style={styles(theme).Texte9b0a397}>
                {'Get started by adding your first invoice'}
              </Text>
            </View>
          </ScrollView>
        </View>

        <View style={styles(theme).View1fb6b15b}>
          <Modal
            visible={mdlAddOptions}
            animationType={'slide'}
            transparent={false}
            presentationStyle={'pageSheet'}
          >
            <View>
              <IconButton
                onPress={() => {
                  try {
                    setMdlAddOptions(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={styles(theme).IconButtond0e65ef4}
                size={32}
                icon={'AntDesign/close'}
                color={theme.colors['Background']}
              />
              <Touchable
                onPress={() => {
                  const handler = async () => {
                    try {
                      const imageInvoice = await Utils.openCamera({
                        allowsEditing: true,
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
              >
                <View style={styles(theme).Viewde4ecd4b}>
                  <Icon name={'AntDesign/camerao'} size={24} />
                  <Text style={styles(theme).Text06f3fc27}>
                    {'Take a photo'}
                  </Text>
                </View>
                <Divider
                  style={styles(theme).Dividerde11d607}
                  color={theme.colors.divider}
                />
              </Touchable>

              <Touchable
                onPress={() => {
                  const handler = async () => {
                    try {
                      await Utils.openImagePicker({});
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
              >
                <View style={styles(theme).Viewde4ecd4b}>
                  <Icon size={24} name={'FontAwesome/picture-o'} />
                  <Text style={styles(theme).Text06f3fc27}>
                    {'Choose a photo'}
                  </Text>
                </View>
                <Divider
                  style={styles(theme).Dividerde11d607}
                  color={theme.colors.divider}
                />
              </Touchable>

              <Touchable
                onPress={() => {
                  const handler = async () => {
                    try {
                      await Utils.openCamera({});
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
              >
                <View style={styles(theme).Viewde4ecd4b}>
                  <Icon size={24} name={'AntDesign/scan1'} />
                  <Text style={styles(theme).Text06f3fc27}>
                    {'Scan a document'}
                  </Text>
                </View>
                <Divider
                  style={styles(theme).Dividerde11d607}
                  color={theme.colors.divider}
                />
              </Touchable>

              <Touchable
                onPress={() => {
                  const handler = async () => {
                    try {
                      await Utils.openImagePicker({});
                    } catch (err) {
                      console.error(err);
                    }
                  };
                  handler();
                }}
              >
                <View style={styles(theme).Viewde4ecd4b}>
                  <Icon size={24} name={'MaterialCommunityIcons/upload'} />
                  <Text style={styles(theme).Text06f3fc27}>
                    {'Upload a document'}
                  </Text>
                </View>
                <Divider
                  style={styles(theme).Dividerde11d607}
                  color={theme.colors.divider}
                />
              </Touchable>
            </View>
          </Modal>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button79e85d3f: {
      backgroundColor: theme.colors['Custom #14495c'],
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      marginLeft: 5,
      textAlign: 'center',
    },
    Dividerde11d607: { height: 1 },
    IconButtond0e65ef4: { marginLeft: '90%' },
    ScrollView43b1ad91: { height: '90%' },
    Surface5d392a58: {
      flexDirection: 'column',
      height: 60,
      justifyContent: 'center',
      minHeight: 40,
    },
    Text06f3fc27: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
      paddingLeft: 16,
    },
    Text58634b9a: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
      lineHeight: 16,
    },
    Text651de3a1: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
    },
    Text67d12b4b: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
    },
    Text8291eb94: {
      alignSelf: 'center',
      color: theme.colors.strong,
      fontFamily: 'Manrope_800ExtraBold',
      fontSize: 28,
      lineHeight: 40,
      marginLeft: 5,
    },
    Textc5274cb5: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
      marginTop: '50%',
      textAlign: 'center',
    },
    Texte9b0a397: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    View1fb6b15b: { height: '40%' },
    View26942535: { marginLeft: 5 },
    View3b7b69d4: {
      flexDirection: 'row',
      height: '10%',
      marginLeft: 8,
      marginRight: 8,
      marginTop: 35,
    },
    View7af23793: { alignItems: 'flex-end', width: 90 },
    View8dc796a9: { height: '100%', width: '100%' },
    View9f3be2e6: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: '48%',
    },
    Viewce068078: {
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 8,
      width: '85%',
    },
    Viewd9417178: {
      height: '73%',
      marginBottom: 16,
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
    },
    Viewde4ecd4b: {
      flexDirection: 'row',
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(HomeScreenThereisnothinghere);
