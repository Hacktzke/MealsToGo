import * as React from 'react';
import { StatusBar, StyleSheet, Text, View, Platform } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const isAndroid = Platform.OS === 'android';

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 10,
    backgroundColor: 'blue',
    padding: 16,
  },
});
