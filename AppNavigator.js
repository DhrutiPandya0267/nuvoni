import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AgreeFalseScreen from './screens/AgreeFalseScreen';
import AgreeTrueScreen from './screens/AgreeTrueScreen';
import ChoiceScreen from './screens/ChoiceScreen';
import DiplomatSplashScreen from './screens/DiplomatSplashScreen';
import DiplomaticmissionScreen from './screens/DiplomaticmissionScreen';
import DiplometicProfileScreen from './screens/DiplometicProfileScreen';
import FinancialinfogetyourmoneybackScreen from './screens/FinancialinfogetyourmoneybackScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import GetyourmoneybackpaypalScreen from './screens/GetyourmoneybackpaypalScreen';
import GetyourmoneybacktouristScreen from './screens/GetyourmoneybacktouristScreen';
import GuestScreen from './screens/GuestScreen';
import HomeScreenThereisnothinghere from './screens/HomeScreenThereisnothinghere';
import HomeScreenThereisnothingheretourist from './screens/HomeScreenThereisnothingheretourist';
import HomeScreenYouraccountisstillpending from './screens/HomeScreenYouraccountisstillpending';
import HomeScreenwithDatatourist from './screens/HomeScreenwithDatatourist';
import InvoiceverificationdiplomatandtouristScreen from './screens/InvoiceverificationdiplomatandtouristScreen';
import LoginScreen from './screens/LoginScreen';
import OnboardingPersonalInformationdiplomenttouristScreen from './screens/OnboardingPersonalInformationdiplomenttouristScreen';
import Onboardingstep2diplomentScreen from './screens/Onboardingstep2diplomentScreen';
import Onboardingstep3financialinfoScreen from './screens/Onboardingstep3financialinfoScreen';
import OpenCameratotakepictureScreen from './screens/OpenCameratotakepictureScreen';
import PersonalstartScreen from './screens/PersonalstartScreen';
import PricingScreen from './screens/PricingScreen';
import RegistrationScreen from './screens/RegistrationScreen';
import RegistrationSuccessScreen from './screens/RegistrationSuccessScreen';
import ResetpasswordmailsentScreen from './screens/ResetpasswordmailsentScreen';
import StoreaddcommonScreen from './screens/StoreaddcommonScreen';
import ThisisntyourDiplomaticmissionScreen from './screens/ThisisntyourDiplomaticmissionScreen';
import TimetosignScreen from './screens/TimetosignScreen';
import TouristPassportinfostep2Screen from './screens/TouristPassportinfostep2Screen';
import TouristSplashScreen from './screens/TouristSplashScreen';
import UploadpicturefrontfirstScreen from './screens/UploadpicturefrontfirstScreen';
import UploadpicturenearnextScreen from './screens/UploadpicturenearnextScreen';
import VerifyamountScreen from './screens/VerifyamountScreen';
import VerifyauthorizationEmployeesofinternationalorganisationsScreen from './screens/VerifyauthorizationEmployeesofinternationalorganisationsScreen';
import WelcomDiplomatScreen from './screens/WelcomDiplomatScreen';
import WelcomTouristScreen from './screens/WelcomTouristScreen';
import WeneedtoAskYouthisScreen from './screens/WeneedtoAskYouthisScreen';
import WesentyouatextScreen from './screens/WesentyouatextScreen';
import YourealldoneScreen from './screens/YourealldoneScreen';
import YourealmostdoneScreen from './screens/YourealmostdoneScreen';
import YourpassportinfoScreen from './screens/YourpassportinfoScreen';
import YourpaymentTouristScreen from './screens/YourpaymentTouristScreen';
import YourpaymentTouristalreadyproccessedScreen from './screens/YourpaymentTouristalreadyproccessedScreen';
import YourpreviousinvoicesdiplomantScreen from './screens/YourpreviousinvoicesdiplomantScreen';
import YourtriptoBelgiumtouristwithnoreceiptScreen from './screens/YourtriptoBelgiumtouristwithnoreceiptScreen';
import YourtriptoBelgiumtouristwithreceiptScreen from './screens/YourtriptoBelgiumtouristwithreceiptScreen';
import YourtriptouristScreen from './screens/YourtriptouristScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screen
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        This screen is not in a navigator.
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Go to Navigation mode, and click the + (plus) icon in the Navigator tab
        on the left side to add this screen to a Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        If the screen is in a Tab Navigator, make sure the screen is assigned to
        a tab in the Config panel on the right.
      </Text>
    </View>
  );
}
export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="ChoiceScreen"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors['White'],
          },
          cardStyle: {
            backgroundColor: theme.colors['Custom Color'],
          },
        }}
      >
        <Stack.Screen
          name="ChoiceScreen"
          component={ChoiceScreen}
          options={{ title: 'Choice' }}
        />
        <Stack.Screen
          name="WelcomDiplomatScreen"
          component={WelcomDiplomatScreen}
          options={{ title: 'WelcomDiplomat ' }}
        />
        <Stack.Screen
          name="WelcomTouristScreen"
          component={WelcomTouristScreen}
          options={{ title: 'WelcomTourist' }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ title: 'Registration' }}
        />
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{ title: 'ForgotPassword' }}
        />
        <Stack.Screen
          name="ResetpasswordmailsentScreen"
          component={ResetpasswordmailsentScreen}
          options={{ title: 'Reset password mail sent' }}
        />
        <Stack.Screen
          name="RegistrationSuccessScreen"
          component={RegistrationSuccessScreen}
          options={{ title: 'Registration Success' }}
        />
        <Stack.Screen
          name="GuestScreen"
          component={GuestScreen}
          options={{ title: 'Guest' }}
        />
        <Stack.Screen
          name="DiplomatSplashScreen"
          component={DiplomatSplashScreen}
          options={{ title: 'Diplomat Splash' }}
        />
        <Stack.Screen
          name="AgreeFalseScreen"
          component={AgreeFalseScreen}
          options={{ title: 'AgreeFalse' }}
        />
        <Stack.Screen
          name="AgreeTrueScreen"
          component={AgreeTrueScreen}
          options={{ title: 'AgreeTrue' }}
        />
        <Stack.Screen
          name="TouristSplashScreen"
          component={TouristSplashScreen}
          options={{ title: 'TouristSplash' }}
        />
        <Stack.Screen
          name="PersonalstartScreen"
          component={PersonalstartScreen}
          options={{ title: 'Personal start' }}
        />
        <Stack.Screen
          name="OnboardingPersonalInformationdiplomenttouristScreen"
          component={OnboardingPersonalInformationdiplomenttouristScreen}
          options={{
            title: 'Onboarding Personal Information diploment/tourist',
          }}
        />
        <Stack.Screen
          name="WesentyouatextScreen"
          component={WesentyouatextScreen}
          options={{ title: 'We sent you a text' }}
        />
        <Stack.Screen
          name="Onboardingstep2diplomentScreen"
          component={Onboardingstep2diplomentScreen}
          options={{ title: 'onboarding step 2 diploment' }}
        />
        <Stack.Screen
          name="DiplometicProfileScreen"
          component={DiplometicProfileScreen}
          options={{ title: 'Diplometic Profile' }}
        />
        <Stack.Screen
          name="DiplomaticmissionScreen"
          component={DiplomaticmissionScreen}
          options={{ title: 'Diplomatic mission' }}
        />
        <Stack.Screen
          name="ThisisntyourDiplomaticmissionScreen"
          component={ThisisntyourDiplomaticmissionScreen}
          options={{ title: 'This isn’t your Diplomatic mission?' }}
        />
        <Stack.Screen
          name="WeneedtoAskYouthisScreen"
          component={WeneedtoAskYouthisScreen}
          options={{ title: 'We need to Ask You this' }}
        />
        <Stack.Screen
          name="OpenCameratotakepictureScreen"
          component={OpenCameratotakepictureScreen}
          options={{ title: 'Open Camera to take picture' }}
        />
        <Stack.Screen
          name="UploadpicturefrontfirstScreen"
          component={UploadpicturefrontfirstScreen}
          options={{ title: 'upload picture front first' }}
        />
        <Stack.Screen
          name="UploadpicturenearnextScreen"
          component={UploadpicturenearnextScreen}
          options={{ title: 'upload picture near next' }}
        />
        <Stack.Screen
          name="TouristPassportinfostep2Screen"
          component={TouristPassportinfostep2Screen}
          options={{ title: 'Tourist Passport info step 2' }}
        />
        <Stack.Screen
          name="YourpassportinfoScreen"
          component={YourpassportinfoScreen}
          options={{ title: 'Your passport info' }}
        />
        <Stack.Screen
          name="Onboardingstep3financialinfoScreen"
          component={Onboardingstep3financialinfoScreen}
          options={{ title: 'Onboarding step 3 financial info' }}
        />
        <Stack.Screen
          name="FinancialinfogetyourmoneybackScreen"
          component={FinancialinfogetyourmoneybackScreen}
          options={{ title: 'Financial info (get your money back)' }}
        />
        <Stack.Screen
          name="PricingScreen"
          component={PricingScreen}
          options={{ title: 'Pricing' }}
        />
        <Stack.Screen
          name="YourealmostdoneScreen"
          component={YourealmostdoneScreen}
          options={{ title: 'You’re almost done' }}
        />
        <Stack.Screen
          name="YourealldoneScreen"
          component={YourealldoneScreen}
          options={{ title: 'You’re all done' }}
        />
        <Stack.Screen
          name="GetyourmoneybacktouristScreen"
          component={GetyourmoneybacktouristScreen}
          options={{ title: 'Get your money back ( tourist )' }}
        />
        <Stack.Screen
          name="TimetosignScreen"
          component={TimetosignScreen}
          options={{ title: 'Time to sign' }}
        />
        <Stack.Screen
          name="GetyourmoneybackpaypalScreen"
          component={GetyourmoneybackpaypalScreen}
          options={{ title: 'Get your money back (paypal)' }}
        />
        <Stack.Screen
          name="HomeScreenThereisnothinghere"
          component={HomeScreenThereisnothinghere}
          options={{ title: 'home Screen(There is nothing here...)' }}
        />
        <Stack.Screen
          name="HomeScreenYouraccountisstillpending"
          component={HomeScreenYouraccountisstillpending}
          options={{ title: 'home Screen(Your account is still pending)' }}
        />
        <Stack.Screen
          name="YourpreviousinvoicesdiplomantScreen"
          component={YourpreviousinvoicesdiplomantScreen}
          options={{ title: 'Your previous invoices(diplomant)' }}
        />
        <Stack.Screen
          name="HomeScreenThereisnothingheretourist"
          component={HomeScreenThereisnothingheretourist}
          options={{ title: 'home Screen(There is nothing here...)(tourist)' }}
        />
        <Stack.Screen
          name="HomeScreenwithDatatourist"
          component={HomeScreenwithDatatourist}
          options={{ title: 'home Screen(with Data)(tourist)' }}
        />
        <Stack.Screen
          name="YourtriptoBelgiumtouristwithnoreceiptScreen"
          component={YourtriptoBelgiumtouristwithnoreceiptScreen}
          options={{ title: 'Your trip to Belgium(tourist)(with no receipt)' }}
        />
        <Stack.Screen
          name="YourtriptoBelgiumtouristwithreceiptScreen"
          component={YourtriptoBelgiumtouristwithreceiptScreen}
          options={{ title: 'Your trip to Belgium(tourist)(with receipt)' }}
        />
        <Stack.Screen
          name="YourpaymentTouristScreen"
          component={YourpaymentTouristScreen}
          options={{ title: 'Your payment(Tourist)' }}
        />
        <Stack.Screen
          name="YourpaymentTouristalreadyproccessedScreen"
          component={YourpaymentTouristalreadyproccessedScreen}
          options={{ title: 'Your payment(Tourist) (already proccessed)' }}
        />
        <Stack.Screen
          name="YourtriptouristScreen"
          component={YourtriptouristScreen}
          options={{ title: 'Your trip(tourist)' }}
        />
        <Stack.Screen
          name="StoreaddcommonScreen"
          component={StoreaddcommonScreen}
          options={{ title: 'Store add common' }}
        />
        <Stack.Screen
          name="VerifyamountScreen"
          component={VerifyamountScreen}
          options={{ title: 'verify  amount' }}
        />
        <Stack.Screen
          name="VerifyauthorizationEmployeesofinternationalorganisationsScreen"
          component={
            VerifyauthorizationEmployeesofinternationalorganisationsScreen
          }
          options={{
            title:
              'Verify authorization  (Employees of international organisations)',
          }}
        />
        <Stack.Screen
          name="InvoiceverificationdiplomatandtouristScreen"
          component={InvoiceverificationdiplomatandtouristScreen}
          options={{ title: 'Invoice verification (diplomat and tourist)' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
