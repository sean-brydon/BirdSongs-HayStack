/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import NatureSVG from './components/NatureSVG';
import SearchBar from './components/SearchBar';
import SongList from './components/SongList';
import {FieldLabel, Heading, SubHeading} from './components/Typography';

const URL = 'https://www.xeno-canto.org/api/2/recordings?query=';

const App = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [pickedCity, setPickedCity] = useState<string>('');
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const searchApi = async (param: string) => {
    setLoading(true);
    fetch(`${URL}${param}`)
      .then(res => res.json())
      .then(res => setData(res))
      .finally(() => setLoading(false));
  };

  return (
    <View style={styles.root}>
      <View style={styles.column}>
        {!pickedCity && (
          <View style={styles.searchContainer}>
            <Heading>Bird Songs</Heading>
            <FieldLabel style={{marginTop: 24}}>Enter a location</FieldLabel>
            <SearchBar
              onChangeText={setSearchInput}
              value={searchInput}
              searchApi={searchApi}
            />
            <TouchableOpacity
              style={styles.button}
              disabled={!searchInput}
              onPress={() => {
                searchApi(`loc:"${searchInput}"`);
                setPickedCity(searchInput);
              }}>
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>Retrive Top 5</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {pickedCity && (
          <View style={styles.songsContainer}>
            <Heading>Bird Songs</Heading>
            <SubHeading>{pickedCity}</SubHeading>
            <SongList data={data} isLoading={loading} />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setPickedCity('');
                setData([]);
                setLoading(false);
              }}>
              <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>Select a different city</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.natureSVG}>
          <NatureSVG />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    width: '400px',
  },
  searchContainer: {
    marginTop: '298px',
  },
  songsContainer: {
    marginTop: '184px',
  },
  root: {
    height: '100vh',
    fontFamily: 'Roboto',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
  },
  button: {
    marginTop: '16px',
    width: '100%',
    height: '48px',
    backgroundColor: '#007BFF',
    borderRadius: 4,
  },
  buttonText: {
    fontWeight: '500',
    fontSize: 16,
    color: '#ffffff',
  },
  buttonTextContainer: {
    margin: 'auto',
  },
  natureSVG: {
    marginHorizontal: 'auto',
    marginTop: '298px',
  },
});

export default App;
