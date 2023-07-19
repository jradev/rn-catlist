import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { UtilityThemeProvider } from 'react-native-design-utility';

import { theme } from './src/theme';
import Dashboard from './src/views/dashboard';


function App(): JSX.Element {

  return (
    <SafeAreaView style={{ flex: 1}}>
        <UtilityThemeProvider theme={theme}>
          <Dashboard />
        </UtilityThemeProvider>
    </SafeAreaView>
  );
}


export default App;
