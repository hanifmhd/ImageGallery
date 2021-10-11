import {RFValue} from 'react-native-responsive-fontsize';
import fonts from '../fonts';

const typography = {
  H1: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: RFValue(34),
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: RFValue(48),
  },
  H2: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: RFValue(28),
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: RFValue(44),
  },
  H3: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: RFValue(24),
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: RFValue(36),
  },
  H4: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: RFValue(20),
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: RFValue(32),
  },
  H5: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: RFValue(18),
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: RFValue(28),
  },
  RegularBold: {
    fontFamily: fonts.NunitoSansBold,
    fontSize: RFValue(16),
    fontWeight: '700',
    fontStyle: 'normal',
    lineHeight: RFValue(24),
  },
  Regular: {
    fontFamily: fonts.NunitoSansRegular,
    fontSize: RFValue(16),
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: RFValue(24),
  },
  RegularSmall: {
    fontFamily: fonts.NunitoSansRegular,
    fontSize: RFValue(14),
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: RFValue(20),
  },
  Label: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: RFValue(16),
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: RFValue(24),
  },
  PreTitle: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: RFValue(14),
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: RFValue(24),
    letterSpacing: 0.03,
    textTransform: 'uppercase',
  },
  PreTitleSmall: {
    fontFamily: fonts.NunitoSansSemiBold,
    fontSize: RFValue(12),
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: RFValue(20),
    letterSpacing: 0.03,
    textTransform: 'uppercase',
  },
  SmallText: {
    fontFamily: fonts.NunitoSansRegular,
    fontSize: RFValue(12),
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: RFValue(16),
  },
  CTAText: {
    fontFamily: fonts.NunitoSansRegular,
    fontSize: RFValue(18),
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: RFValue(28),
  },
};

export default typography;
