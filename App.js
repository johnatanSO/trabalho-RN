import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import Summary from './src/components/Summary';
import {styles} from './styles/globalStyles.js'

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <Summary />
    </View>
  );
}