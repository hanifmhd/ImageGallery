import {RFValue} from 'react-native-responsive-fontsize';

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: RFValue(16),
  },
  containerSearchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderRadius: RFValue(12),
    padding: RFValue(8),
  },
  textInputStyle: {
    flex: 1,
  },
};

export default styles;
