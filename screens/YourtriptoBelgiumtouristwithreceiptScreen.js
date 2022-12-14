import React from 'react';
import * as NuvoniApi from '../apis/NuvoniApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  Button,
  Divider,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const YourtriptoBelgiumtouristwithreceiptScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles(theme).screen}
      scrollable={false}
      hasSafeArea={false}
    >
      <View style={styles(theme).View8dc796a9}>
        <View style={styles(theme).View6ee32ed5}>
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
            <IconButton
              style={styles(theme).IconButtona93d3e61}
              icon={'Ionicons/settings-sharp'}
              color={theme.colors['Background']}
              size={24}
            />
          </View>

          <View style={styles(theme).Viewd4ff0305}>
            <Text style={styles(theme).Text21aa51d1}>
              {'Your trip to 🇧🇪 Belgium'}
            </Text>

            <View style={styles(theme).View822722fb}>
              <View style={styles(theme).View02308be1}>
                <Text style={styles(theme).Text8055f86d}>{'From'}</Text>

                <Text style={styles(theme).Textf8d05f40}>{'01/08/2022'}</Text>
              </View>

              <View style={styles(theme).View3e936f7d}>
                <Text style={styles(theme).Text8055f86d}>{'To'}</Text>

                <Text style={styles(theme).Texta654085d}>{'14/08/2022'}</Text>
              </View>
            </View>

            <View style={styles(theme).View321d1de2}>
              <View style={styles(theme).View02308be1}>
                <Text style={styles(theme).Text8055f86d}>
                  {'Total expenses'}
                </Text>

                <Text style={styles(theme).Textf8d05f40}>{'€0,00'}</Text>
              </View>

              <View style={styles(theme).View3e936f7d}>
                <Text style={styles(theme).Text8055f86d}>
                  {'Eligable refunds'}
                </Text>

                <Text style={styles(theme).Texta654085d}>{'€0,00'}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles(theme).Viewbf8d2f62}>
          <ScrollView
            style={styles(theme).ScrollView8dc796a9}
            contentContainerStyle={styles(theme).ScrollView989db244Content}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            <Touchable>
              <View>
                <View style={styles(theme).View520b0dea}>
                  <View style={styles(theme).View2792877e}>
                    <Button
                      style={styles(theme).Buttonf55868b2}
                      title={'Aug\n02'}
                    />
                  </View>

                  <View style={styles(theme).View1045a2d2}>
                    <Text style={styles(theme).Text2aa31cd3}>
                      {'Media Markt'}
                    </Text>

                    <Text style={styles(theme).Text58634b9a}>{'€965,00'}</Text>
                  </View>
                </View>
                <Divider
                  style={styles(theme).Dividerde11d607}
                  color={theme.colors.divider}
                />
              </View>
            </Touchable>

            <Touchable>
              <View>
                <View style={styles(theme).View520b0dea}>
                  <View style={styles(theme).View2792877e}>
                    <Button
                      style={styles(theme).Buttonf55868b2}
                      title={'Feb\n02'}
                    />
                  </View>

                  <View style={styles(theme).View1045a2d2}>
                    <Text style={styles(theme).Text2aa31cd3}>
                      {'Suitsupply'}
                    </Text>

                    <Text style={styles(theme).Text58634b9a}>{'€239,99'}</Text>
                  </View>
                </View>
                <Divider
                  style={styles(theme).Dividerde11d607}
                  color={theme.colors.divider}
                />
              </View>
            </Touchable>

            <Touchable>
              <View>
                <View style={styles(theme).View520b0dea}>
                  <View style={styles(theme).View2792877e}>
                    <Button
                      style={styles(theme).Buttoncf39eda4}
                      title={'Feb\n02'}
                    />
                  </View>

                  <View style={styles(theme).View1045a2d2}>
                    <Text style={styles(theme).Text2aa31cd3}>{'Apple'}</Text>

                    <Text style={styles(theme).Text58634b9a}>
                      {'€1.570,00'}
                    </Text>
                  </View>
                </View>
                <Divider
                  style={styles(theme).Dividerde11d607}
                  color={theme.colors.divider}
                />
              </View>
            </Touchable>

            <Touchable>
              <View>
                <View style={styles(theme).View520b0dea}>
                  <View style={styles(theme).View2792877e}>
                    <Button
                      style={styles(theme).Buttoncf39eda4}
                      title={'Feb\n02'}
                    />
                  </View>

                  <View style={styles(theme).View1045a2d2}>
                    <Text style={styles(theme).Text2aa31cd3}>{'Apple'}</Text>

                    <Text style={styles(theme).Text58634b9a}>
                      {'€1.570,00'}
                    </Text>
                  </View>
                </View>
                <Divider
                  style={styles(theme).Dividerde11d607}
                  color={theme.colors.divider}
                />
              </View>
            </Touchable>

            <Touchable>
              <View>
                <View style={styles(theme).View520b0dea}>
                  <View style={styles(theme).View2792877e}>
                    <Button
                      style={styles(theme).Buttoncf39eda4}
                      title={'Feb\n02'}
                    />
                  </View>

                  <View style={styles(theme).View1045a2d2}>
                    <Text style={styles(theme).Text2aa31cd3}>{'Apple'}</Text>

                    <Text style={styles(theme).Text58634b9a}>
                      {'€1.570,00'}
                    </Text>
                  </View>
                </View>
                <Divider
                  style={styles(theme).Dividerde11d607}
                  color={theme.colors.divider}
                />
              </View>
            </Touchable>

            <Touchable>
              <View>
                <View style={styles(theme).View520b0dea}>
                  <View style={styles(theme).View2792877e}>
                    <Button
                      style={styles(theme).Buttoncf39eda4}
                      title={'Feb\n02'}
                    />
                  </View>

                  <View style={styles(theme).View1045a2d2}>
                    <Text style={styles(theme).Text2aa31cd3}>{'Apple'}</Text>

                    <Text style={styles(theme).Text58634b9a}>
                      {'€1.570,00'}
                    </Text>
                  </View>
                </View>
                <Divider
                  style={styles(theme).Dividerde11d607}
                  color={theme.colors.divider}
                />
              </View>
            </Touchable>
          </ScrollView>
        </View>

        <View style={styles(theme).View70a38307}>
          <Divider
            style={styles(theme).Dividerde11d607}
            color={theme.colors.divider}
          />
          <Button
            style={styles(theme).Buttond0f426c1}
            title={'Finish this trip now'}
          />
          <Button style={styles(theme).Button5696a013} title={'Add receipt'} />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button5696a013: {
      backgroundColor: theme.colors['Primary/700'],
      borderRadius: 0,
      fontFamily: 'System',
      fontWeight: '700',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
      textAlign: 'center',
    },
    Buttoncf39eda4: {
      backgroundColor: theme.colors['Primary/50'],
      borderRadius: 8,
      color: theme.colors['Primary/800'],
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '700',
      height: 40,
      textAlign: 'center',
      width: 45,
    },
    Buttond0f426c1: {
      backgroundColor: theme.colors['Primary/50'],
      borderRadius: 0,
      color: theme.colors['Neutral/500'],
      fontFamily: 'System',
      fontWeight: '700',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
      textAlign: 'center',
    },
    Buttonf55868b2: {
      backgroundColor: theme.colors['Primary/50'],
      borderRadius: 8,
      color: theme.colors['Primary/800'],
      fontFamily: 'System',
      fontSize: 12,
      fontWeight: '700',
      height: 40,
      textAlign: 'center',
      width: '100%',
    },
    Dividerde11d607: { height: 1 },
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    IconButtona93d3e61: { left: '43%' },
    IconButtonbb88980b: { left: 10, position: 'absolute' },
    ScrollView8dc796a9: { height: '100%', width: '100%' },
    Text21aa51d1: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_700Bold',
      fontSize: 24,
      lineHeight: 32,
      marginLeft: 16,
      marginTop: 35,
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
    Text8055f86d: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_400Regular',
      fontSize: 12,
    },
    Texta654085d: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_600SemiBold',
      fontSize: 14,
      lineHeight: 24,
    },
    Textf8d05f40: {
      color: theme.colors.strong,
      fontFamily: 'Manrope_600SemiBold',
      lineHeight: 24,
    },
    View02308be1: { width: '50%' },
    View1045a2d2: { marginLeft: 8, width: '62%' },
    View2792877e: { height: 50, justifyContent: 'center', width: '15%' },
    View321d1de2: {
      flexDirection: 'row',
      marginBottom: 22,
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
    },
    View3e936f7d: { marginBottom: 8, width: '50%' },
    View520b0dea: { flexDirection: 'row', paddingLeft: 16 },
    View6ee32ed5: {
      backgroundColor: theme.colors['Secondary/50'],
      height: '35%',
    },
    View70a38307: { height: '18%' },
    View822722fb: {
      flexDirection: 'row',
      marginLeft: 16,
      marginRight: 16,
      marginTop: 8,
    },
    View8dc796a9: { height: '100%', width: '100%' },
    Viewbf8d2f62: { height: '50%' },
    Viewd4ff0305: { height: '75%' },
    Viewe671b726: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 50,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(YourtriptoBelgiumtouristwithreceiptScreen);
