import React, {useEffect, useState} from 'react';
import {FlatList, Image, RefreshControl, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {getAll as getAllAPI} from '../../../api/services/home';
import {EmptyState, ScreenContainer} from '../../../components';
import R from '../../../configs';
import SearchBar from './SearchBar';
import styles from './styles';

const DiscoverHome = props => {
  const {navigation} = props;
  const [value, setValue] = useState('');
  const [dataImage, setDataImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllImage();
  }, []);

  const getAllImage = () => {
    setIsLoading(true);
    getAllAPI(1, 15)
      .then(response => {
        setIsLoading(false);
        if (response) {
          setDataImage(response);
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <ScreenContainer disableScrollView withoutDefaultPadding>
      <SearchBar
        value={value}
        onChangeText={text => setValue(text)}
        onClose={() => setValue('')}
      />
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={dataImage.data}
        numColumns={3}
        renderItem={({item, index}) => {
          if (item.thumbnail !== null) {
            const baseURL = dataImage.config.iiif_url;
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.push(R.pages.DetailHome, {data: item})
                }>
                <Image
                  source={{
                    uri: `${baseURL}/${dataImage.data[index].image_id}/full/843,/0/default.jpg`,
                  }}
                  style={styles.image}
                />
              </TouchableOpacity>
            );
          } else {
            return (
              <TouchableOpacity
                style={styles.brokenImage}
                onPress={() =>
                  navigation.push(R.pages.DetailHome, {data: item})
                }
              />
            );
          }
        }}
        ListEmptyComponent={
          <EmptyState
            title={'No data found'}
            subtitle={'You can search it by typing in Search Bar'}
          />
        }
        style={{marginTop: RFValue(12)}}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => {
              setValue('');
              getAllImage();
            }}
          />
        }
      />
    </ScreenContainer>
  );
};

export default DiscoverHome;
