// package import
import React, { useEffect } from 'react';
import { View, StatusBar, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { createModelsTable, createNotesTable } from './src/ModelsLocalDB/DBConnection';
import { insertIntoModelsTable } from './src/ModelsLocalDB/ModelsTableScript';


//constants import


// Main Navigator import
import MainNavigation from './src/navigation/MainNavigation';

// redux store
import configureStore from './src/redux/configureStore';
import colors from './src/utils/colors';

const store = configureStore();

const checkIfFirstOpen = async () => {
  const opened = await AsyncStorage.getItem('OPENED')

  if (!opened) {
    insertIntoModelsTable('GT2000', 'G2000', 'PGT2000', 200, 1, 'Additional Description about printer', 'printer-img')
    insertIntoModelsTable('GT2001', 'G2001', 'PGT2001', 350, 1, 'Additional Description about lcd', 'pc-img')
    insertIntoModelsTable('GT2002', 'G2002', 'PGT2002', 500, 1, 'Additional Description abo laptops', 'laptop-img')
    insertIntoModelsTable('GT2003', 'G2003', 'PGT2003', 250, 1, 'Additional Description about printer inc', 'colors-img')
    createNotesTable()
    AsyncStorage.setItem('OPENED', 'TRUE')
  }
}
const App = () => {
  useEffect(()=>{
    checkIfFirstOpen()
  },[])
  
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
