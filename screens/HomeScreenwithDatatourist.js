import React from 'react';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const HomeScreenwithDatatourist = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      <View style={styles(theme).View8dc796a9}>
        <View style={styles(theme).View3b7b69d4}>
          <Text style={styles(theme).Text651de3a1}>{'Hello Jessica'}</Text>

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
          <Touchable>
            <View style={styles(theme).Viewce068078}>
              <Icon
                size={24}
                name={'Ionicons/add-circle-sharp'}
                color={theme.colors['Custom #14495c']}
              />
              <View style={styles(theme).Viewdbef4bd9}>
                <Text style={styles(theme).Text67d12b4b}>{'Start a trip'}</Text>

                <Text style={styles(theme).Text58634b9a}>
                  {'And start adding receipts'}
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

        <View style={styles(theme).View71a4f23c}>
          <ScrollView showsVerticalScrollIndicator={true} bounces={true}>
            <Surface style={styles(theme).Surfacef234e595}>
              <View style={styles(theme).Viewb06b36c8}>
                <View style={styles(theme).Viewbd814785}>
                  <Text style={styles(theme).Text2aa31cd3}>{'From'}</Text>

                  <Text style={styles(theme).Textcef76e30}>{'🇧🇪 Belgium'}</Text>

                  <Text style={styles(theme).Texta4c0dd02}>{'to'}</Text>

                  <Text style={styles(theme).Textcef76e30}>
                    {'🇵🇹 Portugal'}
                  </Text>
                </View>

                <View style={styles(theme).Viewdc98ebbd}>
                  <Button
                    style={styles(theme).Button6dbb31b3}
                    title={'Active'}
                  />
                </View>
              </View>

              <View style={styles(theme).View5e9b3c6d}>
                <Text style={styles(theme).Text21659c60}>
                  {'01/08/2022 - 14/08/2022'}
                </Text>
              </View>

              <View style={styles(theme).View822722fb}>
                <View style={styles(theme).View02308be1}>
                  <Text style={styles(theme).Texte9f9757c}>
                    {'Total expenses'}
                  </Text>

                  <Text style={styles(theme).Texte9f9757c}>{'€5.501,47'}</Text>
                </View>

                <View style={styles(theme).View3e936f7d}>
                  <Text style={styles(theme).Texte9f9757c}>
                    {'Eligable refunds'}
                  </Text>

                  <Text style={styles(theme).Texte9f9757c}>{'€1.155,31'}</Text>
                </View>
              </View>
              <Divider
                style={styles(theme).Dividerde11d607}
                color={theme.colors.divider}
              />
            </Surface>

            <Surface style={styles(theme).Surfacef234e595}>
              <View style={styles(theme).Viewb06b36c8}>
                <View style={styles(theme).Viewbd814785}>
                  <Text style={styles(theme).Textd98b9642}>{'To'}</Text>

                  <Text style={styles(theme).Textcef76e30}>{'🇧🇪 Belgium'}</Text>
                </View>

                <View style={styles(theme).Viewdc98ebbd}>
                  <Button
                    style={styles(theme).Button6abfb1f2}
                    title={'Archived'}
                  />
                </View>
              </View>

              <View style={styles(theme).View5e9b3c6d}>
                <Text style={styles(theme).Text21659c60}>
                  {'22/02/2022 - 23/02/2022'}
                </Text>
              </View>

              <View style={styles(theme).View822722fb}>
                <View style={styles(theme).View02308be1}>
                  <Text style={styles(theme).Texte9f9757c}>
                    {'Total expenses'}
                  </Text>

                  <Text style={styles(theme).Texte9f9757c}>{'€377,69'}</Text>
                </View>

                <View style={styles(theme).View3e936f7d}>
                  <Text style={styles(theme).Texte9f9757c}>
                    {'Eligable refunds'}
                  </Text>

                  <Text style={styles(theme).Texte9f9757c}>{'€79,31'}</Text>
                </View>
              </View>
              <Divider
                style={styles(theme).Dividerde11d607}
                color={theme.colors.divider}
              />
            </Surface>

            <Surface style={styles(theme).Surfacef234e595}>
              <View style={styles(theme).Viewb06b36c8}>
                <View style={styles(theme).Viewbd814785}>
                  <Text style={styles(theme).Text2aa31cd3}>{'From'}</Text>

                  <Text style={styles(theme).Textcef76e30}>
                    {'🇳🇱 Netherlands'}
                  </Text>

                  <Text style={styles(theme).Texta4c0dd02}>{'to'}</Text>

                  <Text style={styles(theme).Textcef76e30}>{'🇭🇷 Croatia'}</Text>
                </View>

                <View style={styles(theme).Viewdc98ebbd}>
                  <Button
                    style={styles(theme).Button6abfb1f2}
                    title={'Archived'}
                  />
                </View>
              </View>

              <View style={styles(theme).View5e9b3c6d}>
                <Text style={styles(theme).Text21659c60}>
                  {'01/08/2022 - 14/08/2022'}
                </Text>
              </View>

              <View style={styles(theme).View822722fb}>
                <View style={styles(theme).View02308be1}>
                  <Text style={styles(theme).Texte9f9757c}>
                    {'Total expenses'}
                  </Text>

                  <Text style={styles(theme).Texte9f9757c}>{'€5.501,47'}</Text>
                </View>

                <View style={styles(theme).View3e936f7d}>
                  <Text style={styles(theme).Texte9f9757c}>
                    {'Eligable refunds'}
                  </Text>

                  <Text style={styles(theme).Texte9f9757c}>{'€1.155,31'}</Text>
                </View>
              </View>
              <Divider
                style={styles(theme).Dividerde11d607}
                color={theme.colors.divider}
              />
            </Surface>

            <Surface style={styles(theme).Surfacef234e595}>
              <View style={styles(theme).Viewb06b36c8}>
                <View style={styles(theme).Viewbd814785}>
                  <Text style={styles(theme).Textd98b9642}>{'To'}</Text>

                  <Text style={styles(theme).Textcef76e30}>{'🇧🇪 Belgium'}</Text>
                </View>

                <View style={styles(theme).Viewdc98ebbd}>
                  <Button
                    style={styles(theme).Button6abfb1f2}
                    title={'Archived'}
                  />
                </View>
              </View>

              <View style={styles(theme).View5e9b3c6d}>
                <Text style={styles(theme).Text21659c60}>
                  {'22/02/2022 - 23/02/2022'}
                </Text>
              </View>

              <View style={styles(theme).View822722fb}>
                <View style={styles(theme).View02308be1}>
                  <Text style={styles(theme).Texte9f9757c}>
                    {'Total expenses'}
                  </Text>

                  <Text style={styles(theme).Texte9f9757c}>{'€377,69'}</Text>
                </View>

                <View style={styles(theme).View3e936f7d}>
                  <Text style={styles(theme).Texte9f9757c}>
                    {'Eligable refunds'}
                  </Text>

                  <Text style={styles(theme).Texte9f9757c}>{'€79,31'}</Text>
                </View>
              </View>
              <Divider
                style={styles(theme).Dividerde11d607}
                color={theme.colors.divider}
              />
            </Surface>

            <Surface style={styles(theme).Surfacef234e595}>
              <View style={styles(theme).Viewb06b36c8}>
                <View style={styles(theme).Viewbd814785}>
                  <Text style={styles(theme).Textd98b9642}>{'To'}</Text>

                  <Text style={styles(theme).Textcef76e30}>{'🇧🇪 Belgium'}</Text>
                </View>

                <View style={styles(theme).Viewdc98ebbd}>
                  <Button
                    style={styles(theme).Button6abfb1f2}
                    title={'Archived'}
                  />
                </View>
              </View>

              <View style={styles(theme).View5e9b3c6d}>
                <Text style={styles(theme).Text21659c60}>
                  {'22/02/2022 - 23/02/2022'}
                </Text>
              </View>

              <View style={styles(theme).View822722fb}>
                <View style={styles(theme).View02308be1}>
                  <Text style={styles(theme).Texte9f9757c}>
                    {'Total expenses'}
                  </Text>

                  <Text style={styles(theme).Texte9f9757c}>{'€377,69'}</Text>
                </View>

                <View style={styles(theme).View3e936f7d}>
                  <Text style={styles(theme).Texte9f9757c}>
                    {'Eligable refunds'}
                  </Text>

                  <Text style={styles(theme).Texte9f9757c}>{'€79,31'}</Text>
                </View>
              </View>
              <Divider
                style={styles(theme).Dividerde11d607}
                color={theme.colors.divider}
              />
            </Surface>
          </ScrollView>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button6abfb1f2: {
      backgroundColor: theme.colors['Background'],
      borderRadius: 0,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
      height: 24,
      lineHeight: 16,
      maxHeight: 24,
      minHeight: 24,
      textAlign: 'center',
    },
    Button6dbb31b3: {
      backgroundColor: theme.colors['Custom #14495c'],
      borderRadius: 0,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
      height: 24,
      lineHeight: 16,
      maxHeight: 24,
      minHeight: 24,
      textAlign: 'center',
    },
    Button79e85d3f: {
      backgroundColor: theme.colors['Custom #14495c'],
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      marginLeft: 5,
      textAlign: 'center',
    },
    Dividerde11d607: { height: 1 },
    Surface5d392a58: {
      flexDirection: 'column',
      height: 60,
      justifyContent: 'center',
      minHeight: 40,
    },
    Surfacef234e595: {
      borderColor: theme.colors['BG Gray'],
      marginLeft: 8,
      marginRight: 8,
      marginTop: 16,
    },
    Text21659c60: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
      lineHeight: 16,
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
    Texta4c0dd02: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
      marginLeft: 5,
    },
    Textcef76e30: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      lineHeight: 24,
      marginLeft: 5,
    },
    Textd98b9642: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      lineHeight: 24,
    },
    Texte9f9757c: { color: theme.colors.strong },
    View02308be1: { width: '50%' },
    View3b7b69d4: {
      flexDirection: 'row',
      height: '10%',
      marginLeft: 8,
      marginRight: 8,
      marginTop: 35,
    },
    View3e936f7d: { marginBottom: 8, width: '50%' },
    View5e9b3c6d: { marginLeft: 16, marginRight: 16, marginTop: 8 },
    View71a4f23c: { height: '77%', width: '100%' },
    View7af23793: { alignItems: 'flex-end', width: 90 },
    View822722fb: {
      flexDirection: 'row',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
    },
    View8dc796a9: { height: '100%', width: '100%' },
    View9f3be2e6: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: '48%',
    },
    Viewb06b36c8: {
      flexDirection: 'row',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
    },
    Viewbd814785: { flexDirection: 'row', width: '80%' },
    Viewce068078: {
      alignItems: 'center',
      flexDirection: 'row',
      marginLeft: 8,
      width: '85%',
    },
    Viewdbef4bd9: { marginLeft: 8, width: '70%' },
    Viewdc98ebbd: { height: '24%' },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(HomeScreenwithDatatourist);
