import React, {useCallback, useEffect, useLayoutEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {EmptyState, ScreenContainer} from '../../../components';
import R from '../../../configs';
import {getObjectItem, StorageKeys} from '../../../utils/storage';
import styles from './styles';

const MainFavorite = () => {
  const [dataFavorite, setDataFavorite] = useState([]);

  useLayoutEffect(() => {
    getFavoriteData();
  }, [getFavoriteData]);

  const getFavoriteData = useCallback(() => {
    getObjectItem(StorageKeys.FAVORITE).then(result => {
      console.log({result});
      if (result.length > 0) {
        setDataFavorite(result);
      }
    });
  }, []);

  return (
    <ScreenContainer disableScrollView>
      <FlatList
        data={dataFavorite}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <>
              {item.thumbnail !== null ? (
                <Image
                  source={{
                    uri: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
                  }}
                  style={styles.image}
                />
              ) : (
                <View style={styles.brokenImage} />
              )}
              <Text style={R.typography.PreTitle}>{item.title}</Text>
              <Text style={R.typography.PreTitleSmall}>inscriptions</Text>
              <Text style={R.typography.Regular}>
                {item.inscriptions ? item.inscriptions : '-'}
              </Text>
            </>
          );
        }}
        ListEmptyComponent={
          <EmptyState
            title={'No data found'}
            subtitle={
              "You can add favorite image by pressing 'like' button in detail image"
            }
          />
        }
      />
    </ScreenContainer>
  );
};

export default MainFavorite;
