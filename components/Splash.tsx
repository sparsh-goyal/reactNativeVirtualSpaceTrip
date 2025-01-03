import {Animated, Easing, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';

type SplashProps = NativeStackScreenProps<StackProps, 'Splash'>;

const Splash = ({navigation}: SplashProps) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SpaceStation');
    }, 4000);
  }, []);

  const spinValue = new Animated.Value(0);

  Animated.timing(spinValue, {
    toValue: 1,
    duration: 8000,
    easing: Easing.ease,
    useNativeDriver: true,
  }).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[{transform: [{rotate: spin}]}, styles.image]}
        source={require('../assets/images/astroImg.png')}
        resizeMode={'cover'}
      />
      <Text style={[styles.text]}>Developed with ❤︎ by Sparsh</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  image: {
    // flex: 0.7,
    height: '50%',
    width: '80%',
    borderRadius: '50%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  text: {
    fontFamily: 'Lobster',
    fontSize: 14,
    color: '#ffffff',
    marginTop: 10,
  },
});
