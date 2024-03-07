import {SafeAreaView} from 'react-native';
import React from 'react';
import CalculadoraScreen from './screens/CalculadoraScreen';
import {globalStyle} from './config/themes/app-theme';

export default function App() {
  return (
    <SafeAreaView style={globalStyle.backgroud}>
      <CalculadoraScreen />
    </SafeAreaView>
  );
}
