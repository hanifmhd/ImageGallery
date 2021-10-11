import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import R from '../../configs';

const {width} = Dimensions.get('screen');
const EmptyState = props => {
  const {title, subtitle} = props;

  return (
    <View style={styles.container}>
      <Image
        source={R.images.empty}
        resizeMode={'contain'}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={[R.typography.Regular, styles.textContent]}>{title}</Text>
        <Text style={[R.typography.RegularSmall, styles.textContent]}>
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  container: {
    height: width * 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: width * 0.5,
  },
  textContainer: {
    marginVertical: RFValue(10),
    maxWidth: width * 0.85,
  },
  textContent: {
    textAlign: 'center',
  },
});
