import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const {width} = Dimensions.get('screen');

const styles = {
  image: {width: width / 3, height: RFValue(120)},
  brokenImage: {
    backgroundColor: 'grey',
    width: width / 3,
    height: RFValue(120),
  },
};

export default styles;
