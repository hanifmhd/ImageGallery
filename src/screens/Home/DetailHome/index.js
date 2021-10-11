import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, Image, ScrollView, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {getDetail as getDetailAPI} from '../../../api/services/home';
import {ScreenContainer} from '../../../components';
import {
  getObjectItem,
  saveObjectItem,
  StorageKeys,
} from '../../../utils/storage';
import Information from './Information';
import styles from './styles';
import Tag from './Tag';

const DetailHome = props => {
  const {navigation, route} = props;
  const [dataImage, setDataImage] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (route.params) {
      const {data} = route.params;
      getDetailImage(data.id);
      getFavoriteImage(data.id);
    }
  }, [getDetailImage, getFavoriteImage, route.params]);

  const getFavoriteImage = useCallback(id => {
    getObjectItem(StorageKeys.FAVORITE).then(result => {
      console.log('result get: ', result);
      if (result.length > 0) {
        const indexOfSaved = result.findIndex(obj => obj.id === id);
        if (indexOfSaved > -1) {
          setIsFavorite(true);
        } else {
          setIsFavorite(false);
        }
      } else {
        setIsFavorite(false);
      }
    });
  }, []);

  const checkFavorite = () => {
    getObjectItem(StorageKeys.FAVORITE).then(result => {
      console.log('result check: ', result);
      if (result.length > 0) {
        console.log('masuk A');
        const indexOfSaved = result.findIndex(obj => obj.id === dataImage.id);
        if (isFavorite) {
          console.log('masuk B');
          result.splice(indexOfSaved, 1);
          saveObjectItem(StorageKeys.FAVORITE, result);
          setIsFavorite(false);
        } else {
          console.log('masuk C');
          saveObjectItem(StorageKeys.FAVORITE, result.push(dataImage));
          setIsFavorite(true);
        }
      } else {
        console.log('masuk D');
        saveObjectItem(StorageKeys.FAVORITE, [dataImage]);
        getFavoriteImage(dataImage.id);
      }
    });
  };

  const getDetailImage = useCallback(id => {
    setIsLoading(true);
    getDetailAPI(id)
      .then(response => {
        setIsLoading(false);
        if (response) {
          const baseURL = response.config.iiif_url;
          setImageURL(
            `${baseURL}/${response.data.image_id}/full/843,/0/default.jpg`,
          );
          setDataImage(response.data);
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <ScreenContainer
      disableScrollView
      withNavigation
      withNavigationTitle={route.params && route.params.data.title}
      onPressBackNavigation={() => navigation.goBack()}>
      {isLoading && imageURL === '' ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <ScrollView
          style={{marginTop: RFValue(12)}}
          showsVerticalScrollIndicator={false}>
          {imageURL === '' ? (
            <View style={styles.brokenImage} />
          ) : (
            <Image
              source={{
                uri: imageURL,
              }}
              style={styles.image}
            />
          )}
          <View style={{marginBottom: RFValue(12), flexDirection: 'row'}}>
            <Tag
              data={dataImage.classification_titles}
              style={{flex: 1, marginRight: RFValue(4)}}
            />
            <Icon
              name={`heart${isFavorite ? '' : '-outline'}`}
              size={RFValue(28)}
              onPress={() => checkFavorite()}
              color={isFavorite ? 'red' : 'black'}
            />
          </View>
          <Information data={dataImage.inscriptions} title={'Inscription'} />
          <Information
            data={dataImage.provenance_text}
            title={'Provenance Text'}
          />
          <Information
            data={dataImage.publication_history}
            title={'Publication History'}
          />
          <Information
            data={dataImage.exhibition_history}
            title={'Exhibition History'}
          />
        </ScrollView>
      )}
    </ScreenContainer>
  );
};

export default DetailHome;
