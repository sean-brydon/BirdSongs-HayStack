import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
// import {useCurrentPosition} from '../utils/usePosition';
import SearchIcon from './SearchIcon';

type Props = {
  onChangeText: (text: string) => void;
  value: string;
  searchApi: (param: string) => Promise<void>;
};

function SearchBar({onChangeText, value, searchApi}: Props) {
  // const [position, error] = useCurrentPosition();
  const [focused, setFocused] = useState(false);

  return (
    <View style={[style.container, focused && style.focused]}>
      <View style={style.icon}>
        <SearchIcon />
      </View>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder="Start typing to start..."
        style={[style.searchBar]}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
      />
      <TouchableOpacity
        style={style.icon}
        onPress={() => {
          // searchApi(
          //   `lat:"${position.coods.latitude}" lon:"${position.coods.longitude}"`,
          // );
        }}>
        📍
      </TouchableOpacity>
    </View>
  );
}

export default SearchBar;

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: '48px',
    backgroundColor: '#ffffff',
    width: '100%',
    boxSizing: 'border-box',
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.08);',
    borderRadius: 4,
    padding: '12px',
    marginTop: '8px',
  },
  icon: {
    marginVertical: 'auto',
    paddingRight: '8px',
  },
  searchBar: {
    fontSize: 16,
    fontWeight: '400',
    color: '#747474',
    fontFamily: 'Roboto',
    lineHeight: 24,
    width: '100%',
    outlineStyle: 'none',
  },
  focused: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#007BFF',
  },
});
