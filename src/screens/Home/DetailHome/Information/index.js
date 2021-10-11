import React from 'react';
import {Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import R from '../../../../configs';

const Information = props => {
  const {data, title} = props;

  return (
    <View style={{marginBottom: RFValue(4)}}>
      <Text style={R.typography.H5}>{title}</Text>
      <Text style={R.typography.RegularSmall}>{data ? data : '-'}</Text>
    </View>
  );
};

export default Information;
