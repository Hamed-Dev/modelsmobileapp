export const CURRENT_USER = 'CURRENT_USER';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUserDataApi } from "../../Apis/AuthApis";

export const setUser = (user) => {

  return { type: CURRENT_USER, payload: user };
};

export const getUserData = (currentUser) => {

  getUserDataApi(currentUser)
    .then((response) => {
      var user = currentUser
      user.user = response.data.result
      AsyncStorage.setItem('User', JSON.stringify(user))
      setUser(user)

    })
    .catch((error) => {
      console.log('Error', error);
    });

}