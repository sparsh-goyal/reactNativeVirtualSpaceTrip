import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';

type SpaceStationProps = NativeStackScreenProps<StackProps, 'SpaceStation'>;

function SpaceStation({navigation}: SpaceStationProps): React.JSX.Element {
  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      resizeMode="cover"
      style={styles.container}>
      <Text style={[styles.text, styles.heading]}>Welcome</Text>
      <Text style={[styles.text, styles.bodyText]}>
        We astronauts invite you to our space station which is open every
        Astroday. Let's come together and cherish each moment.
      </Text>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('Choice')}>
        <Text style={[styles.text, styles.bookBtn]}>Book a seat </Text>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

export default SpaceStation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Lobster',
    fontSize: 18,
  },
  heading: {
    fontSize: 28,
    margin: 50,
  },
  bodyText: {},
  bookBtn: {
    margin: 60,
    backgroundColor: '#f2e4fd',
    padding: 10,
    borderRadius: 7,
    color: '#000000'
  },
});
