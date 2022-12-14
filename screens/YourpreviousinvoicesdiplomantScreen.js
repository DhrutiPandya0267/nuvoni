import React from 'react';
import * as NuvoniApi from '../apis/NuvoniApi.js';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  Surface,
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

const YourpreviousinvoicesdiplomantScreen = props => {
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

        <View style={styles(theme).View59b1f5da}>
          <Text style={styles(theme).Text67d12b4b}>
            {'Your previous invoices'}
          </Text>
        </View>

        <View style={styles(theme).Viewdff4d955}>
          <ScrollView
            style={styles(theme).ScrollView2200bac7}
            contentContainerStyle={styles(theme).ScrollView989db244Content}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            <NuvoniApi.FetchCountryListGET>
              {({ loading, error, data, refetchCountryList }) => {
                const fetchData = data;
                if (!fetchData || loading) {
                  return <ActivityIndicator />;
                }

                if (error) {
                  return (
                    <Text style={{ textAlign: 'center' }}>
                      There was a problem fetching this data
                    </Text>
                  );
                }

                return (
                  <FlatList
                    data={fetchData}
                    listKey={'H20Ndqmt'}
                    keyExtractor={listData =>
                      listData?.id || listData?.uuid || JSON.stringify(listData)
                    }
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <View>
                          <View style={styles(theme).Viewdebd3207}>
                            <View style={styles(theme).View2792877e}>
                              <>
                                {!listData?.created_at ? null : (
                                  <Button
                                    style={styles(theme).Buttoncf39eda4}
                                    title={'Feb\n02'}
                                  />
                                )}
                              </>
                            </View>

                            <View style={styles(theme).View1045a2d2}>
                              <>
                                {!listData?.countries ? null : (
                                  <Text style={styles(theme).Text2aa31cd3}>
                                    {listData?.countries}
                                  </Text>
                                )}
                              </>
                              <Text style={styles(theme).Text58634b9a}>
                                {'€1.570,00'}
                              </Text>
                            </View>

                            <View style={styles(theme).View278054c3}>
                              <Button
                                style={styles(theme).Button0c967dba}
                                title={'Sent'}
                              />
                            </View>
                          </View>
                          <Divider
                            style={styles(theme).Dividerde11d607}
                            color={theme.colors.divider}
                          />
                        </View>
                      );
                    }}
                    style={styles(theme).FlatList989db244}
                    contentContainerStyle={
                      styles(theme).FlatListc992f941Content
                    }
                    numColumns={1}
                  />
                );
              }}
            </NuvoniApi.FetchCountryListGET>
          </ScrollView>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = theme =>
  StyleSheet.create({
    Button0c967dba: {
      backgroundColor: theme.colors['Background'],
      borderRadius: 0,
      fontFamily: 'Manrope_600SemiBold',
      fontSize: 12,
      height: 24,
      lineHeight: 16,
      textAlign: 'center',
      width: '100%',
    },
    Button79e85d3f: {
      backgroundColor: theme.colors['Custom #14495c'],
      borderRadius: 8,
      fontFamily: 'System',
      fontWeight: '700',
      marginLeft: 5,
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
    Dividerde11d607: { height: 1 },
    Fetch431eb058: { minHeight: 40 },
    FlatListc992f941Content: { flex: 1 },
    ScrollView2200bac7: { height: '100%' },
    Surface5d392a58: {
      flexDirection: 'column',
      height: 60,
      justifyContent: 'center',
      minHeight: 40,
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
    View1045a2d2: { marginLeft: 8, width: '62%' },
    View26942535: { marginLeft: 5 },
    View278054c3: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '21%',
    },
    View2792877e: { height: 50, justifyContent: 'center', width: '15%' },
    View3b7b69d4: {
      flexDirection: 'row',
      height: '10%',
      marginLeft: 8,
      marginRight: 8,
      marginTop: 35,
    },
    View59b1f5da: { marginLeft: 8 },
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
    Viewdebd3207: { flexDirection: 'row' },
    Viewdff4d955: {
      height: '71%',
      marginLeft: 8,
      marginRight: 8,
      marginTop: 12,
    },
    screen: { backgroundColor: theme.colors['Custom Color'] },
  });

export default withTheme(YourpreviousinvoicesdiplomantScreen);
