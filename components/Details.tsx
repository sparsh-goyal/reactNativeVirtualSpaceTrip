import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackProps} from '../App';

type DetailsProps = NativeStackScreenProps<StackProps, 'Details'>;

function Details({navigation, route}: DetailsProps): React.JSX.Element {
  const url = `https://api.nasa.gov/planetary/apod?api_key=oKHc7xePB5R5KqhU74Ibphi4M7eFUGXsNWzJwH4p&start_date=${route.params.fromDate}&end_date=${route.params.toDate}`;
  // console.log('URL', url);
  const [jsonData, setJsonData] = useState();

  useEffect(() => {
    fetch(url)
      .then(data => data.json())
      .then(jsonData => setJsonData(jsonData));
  }, []);

  //   {
  //     "date": "1998-12-18",
  //     "explanation": "TT Cygni is a cool red giant star with a wind. This false-color picture of TT Cyg was made using a coordinated array of millimeter wavelength radio telescopes and shows radio emission from carbon monoxide (CO) molecules in the surrounding gas. The central emission is from material blown off the red giant over a few hundred years while the thin ring, with a radius of about 1/4 light-year, actually represents a shell of gas expanding outward for 6,000 years. Carbon stars like TT Cyg are so named for their apparent abundance of carbon containing molecules. The carbon is likely the dredged-up ashes of nuclear helium burning in the stellar interior. Carbon stars loose a significant fraction of their total mass in the form of a stellar wind which ultimately enriches the interstellar gas - the source of material for future generations of stars. TT Cyg is about 1,500 light-years away in the constellation Cygnus.",
  //     "hdurl": "https://apod.nasa.gov/apod/image/9812/ttcyg_olofsson_big.jpg",
  //     "media_type": "image",
  //     "service_version": "v1",
  //     "title": "TT Cygni: Carbon Star",
  //     "url": "https://apod.nasa.gov/apod/image/9812/ttcyg_olofsson1.jpg"
  // },
  return (
    <ImageBackground
      source={require('../assets/images/bg.jpg')}
      style={[styles.container]}>
      <FlatList
        data={jsonData}
        renderItem={({item}) => (
          <View>
            <View style={styles.card}>
              <Image
                source={{uri: item.url}}
                style={{flex: 1, width: 200, height: 200}}
                resizeMode="contain"></Image>
              <Text style={[styles.text]}>{item.title}</Text>
              <Text style={[styles.text, styles.dateText]}>Taken on: {item.date}</Text>
              <Text style={[styles.text]}>{item.explanation}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.hdurl}></FlatList>
    </ImageBackground>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    // fontFamily: 'Lobster',
    fontSize: 14,
    color: '#000000',
  },
  card: {
    flex: 1,
    backgroundColor: '#f2e4fd',
    padding: 15,
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  dateText:{
    margin: 15
  }
});
