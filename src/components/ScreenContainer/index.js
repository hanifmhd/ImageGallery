import R from '../../configs';
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {RFValue} from 'react-native-responsive-fontsize';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const ScreenContainer = props => {
  const {
    children,
    style,
    extraHeight,
    extraScrollHeight,
    statusBarStyle,
    statusBarBackgroundColor,
    disableScrollView,
    navigation,
    withNavigation,
    withNavigationTitle,
    withoutDefaultPadding,
    customBackScreen,
    onPressBackNavigation,
  } = props;
  const insets = useSafeAreaInsets();
  const safeaAreaStyle = {
    flex: 1,
    paddingTop: 0,
    paddingBottom: -insets.bottom,
    backgroundColor: statusBarBackgroundColor || 'white',
  };
  const keyboardAvoidingStyle = {
    flex: 1,
  };
  const scrollViewContentStyle = {
    flexGrow: 1,
    height: '100%',
    width: '100%',
  };
  const defaultStyle = {
    flex: 1,
    paddingHorizontal: withoutDefaultPadding ? 0 : RFValue(16),
    backgroundColor: 'white',
    ...style,
  };
  const navigationItemContainer = {
    flexDirection: 'row',
    alignItems: 'center',
  };
  const navigationTitle = {flex: 1, ...R.typography.H4};

  const renderCustomNavigation = () => {
    return (
      <View style={navigationItemContainer}>
        <Icon
          name={'chevron-back-outline'}
          size={RFValue(28)}
          onPress={() =>
            onPressBackNavigation
              ? onPressBackNavigation()
              : customBackScreen
              ? navigation.navigate(customBackScreen)
              : navigation.goBack()
          }
          style={{marginLeft: RFValue(-4), marginRight: RFValue(4)}}
        />
        <Text style={navigationTitle} numberOfLines={1}>
          {withNavigationTitle}
        </Text>
      </View>
    );
  };

  return (
    <>
      <StatusBar
        barStyle={statusBarStyle || 'dark-content'}
        backgroundColor={statusBarBackgroundColor || 'white'}
      />
      <SafeAreaView style={safeaAreaStyle}>
        {disableScrollView ? (
          <View style={defaultStyle}>
            {withNavigation && renderCustomNavigation()}
            {children}
          </View>
        ) : (
          <KeyboardAwareScrollView
            bounces={true}
            enableOnAndroid={true}
            enableAutomaticScroll={true}
            extraHeight={extraHeight}
            extraScrollHeight={extraScrollHeight}
            style={{keyboardAvoidingStyle}}
            contentContainerStyle={scrollViewContentStyle}>
            <View style={defaultStyle}>
              {withNavigation && renderCustomNavigation()}
              {children}
            </View>
          </KeyboardAwareScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default ScreenContainer;
