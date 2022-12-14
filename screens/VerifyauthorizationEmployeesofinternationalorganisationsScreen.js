import React from 'react';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  Button,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Square,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const VerifyauthorizationEmployeesofinternationalorganisationsScreen =
  props => {
    const { theme } = props;

    const [mdlVisibleVar, setMdlVisibleVar] = React.useState(false);

    return (
      <ScreenContainer
        style={styles(theme).screen}
        scrollable={false}
        hasSafeArea={false}
      >
        <View style={styles(theme).View8dc796a9}>
          <View style={styles(theme).View70d685a6}>
            <IconButton
              icon={'AntDesign/arrowleft'}
              color={theme.colors['Background']}
              size={24}
            />
            <View style={styles(theme).Viewf6842d6f}>
              <Text style={styles(theme).Textef047395}>
                {'Verify authorization'}
              </Text>

              <Text style={styles(theme).Text58634b9a}>
                {'Spent at Decathlon'}
              </Text>
            </View>
            <IconButton
              icon={'FontAwesome/trash-o'}
              size={24}
              color={'"rgba(0, 0, 0, 0)"'}
            />
          </View>

          <View style={styles(theme).View9eb05219}>
            <Surface style={styles(theme).Surfacea0b7fb7e}>
              <Image
                style={styles(theme).Image06df3877}
                resizeMode={'cover'}
                source={Images.Image13}
              />
              <Text style={styles(theme).Textb2ff281f}>
                {'We need to verify this purchase'}
              </Text>

              <Text style={styles(theme).Textf4e5459a}>
                {'Don’t worry this will only take a couple minutes'}
              </Text>
            </Surface>
          </View>

          <View style={styles(theme).View4f6c805d}>
            <Touchable
              onPress={() => {
                try {
                  setMdlVisibleVar(true);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Surface style={styles(theme).Surface6de3ee0e}>
                <Square bgColor={theme.colors['Secondary/50']} size={40}>
                  <Icon name={'AntDesign/file1'} size={18} />
                </Square>

                <View style={styles(theme).View59b1f5da}>
                  <Text style={styles(theme).Text07c9f689}>
                    {'Upload front'}
                  </Text>

                  <Text style={styles(theme).Text2aa31cd3}>
                    {'Tap to select a photo'}
                  </Text>
                </View>
              </Surface>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  setMdlVisibleVar(true);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Surface style={styles(theme).Surface91ac7a68}>
                <Square bgColor={theme.colors['Secondary/50']} size={40}>
                  <Icon name={'AntDesign/file1'} size={18} />
                </Square>

                <View style={styles(theme).View59b1f5da}>
                  <Text style={styles(theme).Text07c9f689}>
                    {'Upload rear'}
                  </Text>

                  <Text style={styles(theme).Text2aa31cd3}>
                    {'Tap to select a photo'}
                  </Text>
                </View>
              </Surface>
            </Touchable>
          </View>

          <View style={styles(theme).View916a368d}>
            <ScrollView
              style={styles(theme).ScrollView8dc796a9}
              contentContainerStyle={styles(theme).ScrollView989db244Content}
              showsVerticalScrollIndicator={true}
              bounces={true}
            >
              <Text style={styles(theme).Textb47d6be7}>
                {'Why am I seeing this?'}
              </Text>

              <Text style={styles(theme).Textc0ac2551}>
                {
                  'As you are someone who works for a International organization without being a diplomat you need an official Certificate 151 from your government to continue.'
                }
              </Text>

              <Text style={styles(theme).Textc0ac2551}>
                {
                  'You will need to upload digital proof of this in the next step and we request you to mail us the original.'
                }
              </Text>

              <Text style={styles(theme).Textc0ac2551}>
                {
                  'Only after we receive the original we will continue with the payout of your VAT return.'
                }
              </Text>
            </ScrollView>
          </View>
          <Divider
            style={styles(theme).Dividerfee057f2}
            color={theme.colors.divider}
          />
          <KeyboardAwareScrollView
            style={styles(theme).KeyboardAwareScrollView52bfc8f1}
            contentContainerStyle={
              styles(theme).KeyboardAwareScrollView9b672f7cContent
            }
            showsVerticalScrollIndicator={true}
            keyboardShouldPersistTaps={'never'}
          >
            <View style={styles(theme).View9b0fcf26}>
              <Button style={styles(theme).Button2b1368d4} title={'Cancel'} />
              <Button
                style={styles(theme).Buttoncb40d5fc}
                title={'Verify amount'}
              />
            </View>
          </KeyboardAwareScrollView>

          <View>
            <Modal
              visible={mdlVisibleVar}
              animationType={'slide'}
              transparent={false}
              presentationStyle={'pageSheet'}
            >
              <View>
                <IconButton
                  onPress={() => {
                    try {
                      setMdlVisibleVar(false);
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
    Button2b1368d4: {
      backgroundColor: theme.colors['Primary/50'],
      borderRadius: 0,
      color: theme.colors['Background'],
      fontFamily: 'Manrope_600SemiBold',
      height: 48,
      textAlign: 'center',
      width: '30%',
    },
    Buttoncb40d5fc: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      height: 48,
      marginLeft: 16,
      textAlign: 'center',
      width: '65%',
    },
    Dividerde11d607: { height: 1 },
    Dividerfee057f2: { height: 1, marginTop: 5 },
    IconButtond0e65ef4: { marginLeft: '90%' },
    Image06df3877: { height: 64, marginLeft: 130, marginTop: 36, width: 64 },
    KeyboardAwareScrollView52bfc8f1: { height: '10%' },
    KeyboardAwareScrollView9b672f7cContent: { marginTop: 3 },
    ScrollView8dc796a9: { height: '100%', width: '100%' },
    Surface6de3ee0e: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 72,
      paddingLeft: 16,
    },
    Surface91ac7a68: {
      alignItems: 'center',
      flexDirection: 'row',
      height: 72,
      marginTop: 8,
      paddingLeft: 16,
    },
    Surfacea0b7fb7e: {
      backgroundColor: theme.colors['Primary/50'],
      height: '100%',
      marginLeft: 16,
      marginRight: 16,
    },
    Text06f3fc27: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
      paddingLeft: 16,
    },
    Text07c9f689: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_600SemiBold',
      lineHeight: 24,
    },
    Text2aa31cd3: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
    },
    Text58634b9a: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
      lineHeight: 16,
    },
    Textb2ff281f: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      fontSize: 20,
      lineHeight: 24,
      marginTop: 21,
      textAlign: 'center',
    },
    Textb47d6be7: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      fontSize: 20,
      lineHeight: 32,
    },
    Textc0ac2551: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginTop: 5,
    },
    Textef047395: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
    },
    Textf4e5459a: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      textAlign: 'center',
    },
    View4f6c805d: {
      borderColor: theme.colors['Background'],
      height: '21%',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 16,
    },
    View59b1f5da: { marginLeft: 8 },
    View70d685a6: {
      flexDirection: 'row',
      height: '6%',
      marginLeft: 8,
      marginTop: 50,
    },
    View8dc796a9: { height: '100%', width: '100%' },
    View916a368d: { height: '28%', marginLeft: 16, marginRight: 16 },
    View9b0fcf26: {
      flexDirection: 'row',
      height: '100%',
      paddingLeft: 16,
      paddingRight: 16,
    },
    View9eb05219: { height: '23%', marginTop: 16, width: '100%' },
    Viewde4ecd4b: {
      flexDirection: 'row',
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 16,
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

export default withTheme(
  VerifyauthorizationEmployeesofinternationalorganisationsScreen
);
