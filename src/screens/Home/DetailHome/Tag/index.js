/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import R from '../../../../configs';

const Tag = props => {
  const {data, style} = props;

  if (Array.isArray(data) && data.length > 0) {
    return (
      <View style={{flexDirection: 'row', flexWrap: 'wrap', ...style}}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              borderRadius: RFValue(4),
              padding: RFValue(4),
              borderColor: '#e5e5e5',
              borderWidth: 1,
              marginRight: RFValue(4),
              marginBottom: RFValue(4),
            }}>
            <Text style={R.typography.SmallText}>{`#${item}`}</Text>
          </View>
        ))}
      </View>
    );
  } else {
    return null;
  }
};

export default Tag;
