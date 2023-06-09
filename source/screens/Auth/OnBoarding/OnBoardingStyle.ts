import {StyleSheet} from 'react-native';
import {
  borderRadius,
  colors,
  marginHorizontal,
  deviceHeight,
  fontFamily,
  fontSize,
  responsiveHeight,
  responsiveWidth,
  spaceVertical,
} from '../../../styles/variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  height: {
    height: deviceHeight,
  },
  mr: {
    marginRight: marginHorizontal.extraSmall,
  },
  pager: {
    height: responsiveHeight(80),
    alignItems: 'center',
  },
  boardingView: {
    height: responsiveHeight(6.1),
    width: responsiveWidth(90),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  nextTitle: {
    alignSelf: 'center',
    fontFamily: fontFamily.medium,
    fontSize: fontSize.normal,
    color: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    bottom: responsiveHeight(7),
  },

  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
    width: responsiveWidth(16),
    marginVertical: spaceVertical.small,
  },

  dot: {
    width: responsiveHeight(1.25),
    height: responsiveHeight(1.25),
    borderRadius: 6,
  },

  activeColor: {
    backgroundColor: colors.dotsActive,
    width: responsiveWidth(6),
  },

  inactiveColor: {
    backgroundColor: colors.inputBorder,
  },
  image1: {
    flex: 1,
    width: '100%',
    height: deviceHeight,
  },

  btnNext: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.charcol,
    height: responsiveHeight(6),
    width: responsiveWidth(80),
    borderRadius: borderRadius.semiLarge,
  },

  btnGetStarted: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    height: responsiveHeight(6),
    width: responsiveWidth(80),
    borderRadius: borderRadius.semiLarge,
  },

  btnText: {
    color: colors.white,
    fontFamily: fontFamily.regular,
    fontSize: fontSize.normal,
  },
});

export {styles};
