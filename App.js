// package import
import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import { Provider } from 'react-redux';

//constants import


// Main Navigator import
import MainNavigation from './src/navigation/MainNavigation';

// redux store
import configureStore from './src/redux/configureStore';
import colors from './src/utils/colors';

const store = configureStore();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.headerBackground} barStyle="dark-content" />
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </>
  );
};

export default App;
