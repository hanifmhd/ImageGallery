import AsyncStorage from '@react-native-async-storage/async-storage';

const StorageKeys = {
  FAVORITE: 'favorite',
};

const saveObjectItem = async (key, value) => {
  const stringifiedArray = JSON.stringify(value);
  await AsyncStorage.setItem(key, stringifiedArray);
};

const getObjectItem = async key => {
  const data = await AsyncStorage.getItem(key);
  return data != null ? JSON.parse(data) : [];
};

export {StorageKeys, saveObjectItem, getObjectItem};
