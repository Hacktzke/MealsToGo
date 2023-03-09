import * as React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <SafeAreaProvider>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </SafeAreaProvider>
  );
}
