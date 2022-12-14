import * as React from 'react';
import * as Notifications from 'expo-notifications';
import * as SplashScreen from 'expo-splash-screen';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { View, Text, ActivityIndicator, AppState } from 'react-native';
import { Provider as ThemeProvider } from '@draftbit/ui';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppNavigator from './AppNavigator';
import DraftbitTheme from './themes/DraftbitTheme.js';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import { useFonts } from 'expo-font';
SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const queryClient = new QueryClient();

const App = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Manrope_300Light:
      'https://fonts.gstatic.com/s/manrope/v13/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk6jFO_F87jxeN7B.ttf',
    Manrope_400Regular:
      'https://fonts.gstatic.com/s/manrope/v13/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk79FO_F87jxeN7B.ttf',
    Manrope_600SemiBold:
      'https://fonts.gstatic.com/s/manrope/v13/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4jE-_F87jxeN7B.ttf',
    Manrope_700Bold:
      'https://fonts.gstatic.com/s/manrope/v13/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4aE-_F87jxeN7B.ttf',
    Manrope_800ExtraBold:
      'https://fonts.gstatic.com/s/manrope/v13/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk59E-_F87jxeN7B.ttf',
  });

  React.useEffect(() => {
    async function prepare() {
      try {
        await cacheAssetsAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = React.useCallback(async () => {
    if (isReady && fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isReady, fontsLoaded]);

  if (!isReady || !fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={DraftbitTheme}>
            <AppNavigator />
          </ThemeProvider>
        </QueryClientProvider>
      </GlobalVariableProvider>
    </SafeAreaProvider>
  );
};

export default App;
