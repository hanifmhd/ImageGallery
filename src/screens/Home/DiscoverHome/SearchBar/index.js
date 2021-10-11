/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import R from '../../../../configs';
import styles from './styles';

const SearchBar = props => {
  const {value, onChangeText, onClose} = props;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.containerSearchBar,
          {marginRight: value !== '' ? RFValue(8) : 0},
        ]}>
        <Icon
          name={'search-outline'}
          color={'#a2a2a2'}
          size={RFValue(18)}
          style={{marginRight: RFValue(8)}}
        />
        <TextInput
          value={value}
          placeholder={'Search'}
          placeholderTextColor={'#a2a2a2'}
          style={[
            styles.textInputStyle,
            R.typography.RegularSmall,
            {marginRight: value !== '' ? RFValue(4) : 0},
          ]}
          onChangeText={onChangeText}
        />
        {value !== '' && (
          <Icon
            name={'close-circle'}
            color={'#a2a2a2'}
            size={RFValue(18)}
            onPress={onClose}
          />
        )}
      </View>
      {value !== '' && (
        <Text style={R.typography.Regular} onPress={onClose}>
          Cancel
        </Text>
      )}
    </View>
  );
};

export default SearchBar;
