import {
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  Alert,
  TouchableWithoutFeedback,
  View,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';

import DateTimePicker from '@react-native-community/datetimepicker';

type ChoiceProps = NativeStackScreenProps<StackProps, 'Choice'>;

function Choice({navigation}: ChoiceProps): React.JSX.Element {
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  const validateDate = () => {
    const today: Date = new Date();
    const june16date: Date = new Date('1995-06-16');
    const toastErrorMessageFutureDate: string =
      "Unfortunately we don't support time travel so select a date between Jun 16, 1995 and today";
    const toastErrorMessageInvalidToDate: string =
      'To date must be after from date';
    if (
      fromDate > today ||
      fromDate < june16date ||
      toDate > today ||
      toDate < june16date
    ) {
      setFromDate(new Date());
      setToDate(new Date());
      if (Platform.OS == 'android') {
        ToastAndroid.show(toastErrorMessageFutureDate, ToastAndroid.LONG);
      } else {
        Alert.alert(toastErrorMessageFutureDate);
      }
    } else if (toDate < fromDate) {
      if (Platform.OS == 'android') {
        ToastAndroid.show(toastErrorMessageInvalidToDate, ToastAndroid.LONG);
      } else {
        Alert.alert(toastErrorMessageInvalidToDate);
      }
    } else {
      navigation.navigate('Details', {
        fromDate: fromDate.toISOString().slice(0, 10),
        toDate:
          toDate.toISOString().slice(0, 10) ==
          fromDate.toISOString().slice(0, 10)
            ? ''
            : toDate.toISOString().slice(0, 10),
      });
    }
  };

  return (
    <ImageBackground
      source={require('../assets/images/bg2.jpg')}
      style={styles.container}>
      <Text style={[styles.text, styles.headingText]}>
        Let's start the astro journey to glaze at the observable with your loved
        ones.
      </Text>
      <Text style={[styles.text, styles.chooseDateText]}>Choose the dates</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={[styles.date]}>
          <Text style={[styles.text]}>From:</Text>
          <DateTimePicker
            value={fromDate}
            onChange={e => setFromDate(new Date(e.nativeEvent.timestamp))}
            themeVariant="dark"></DateTimePicker>
        </View>
        <View style={[styles.date]}>
          <Text style={[styles.text]}>To:</Text>
          <DateTimePicker
            value={toDate}
            onChange={e => setToDate(new Date(e.nativeEvent.timestamp))}
            themeVariant="dark"></DateTimePicker>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={validateDate}>
        <Text style={[styles.text, styles.takeOffBtn]}>Take off? 🚀</Text>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

export default Choice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  text: {
    fontFamily: 'Lobster',
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
  },
  headingText: {
    marginBottom: 40,
  },
  chooseDateText: {
    margin: 9,
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4,
  },
  takeOffBtn: {
    marginTop: 40,
    backgroundColor: '#f2e4fd',
    padding: 10,
    borderRadius: 7,
    color: '#000000',
  },
});
