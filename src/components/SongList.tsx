import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import MuteIcon from './MuteIcon';

type Props = {
  data: {
    numRecordings: string;
    numSpecies: string;
    page: number;
    numPages: number;
    recordings: any[];
  };
  isLoading: boolean;
};

const SongList = ({data, isLoading}: Props) => {
  if (isLoading) {
    return (
      <View style={style.songContainer}>
        <Text style={style.text}>Loading</Text>
      </View>
    );
  }
  if (!(data.recordings.length > 0)) {
    return (
      <View style={style.songContainer}>
        <Text style={style.text}>No data found - try searching again</Text>
      </View>
    );
  }

  return (
    <>
      {data.recordings.slice(0, 5).map((item, index) => (
        <Song index={index} item={item} />
      ))}
    </>
  );
};

const Song = ({index, item}: {index: number; item: any}) => {
  const audio = useRef<any>(null);
  return (
    <View key={item.id}>
      <TouchableOpacity
        style={style.songContainer}
        onPress={() => {
          if (audio.current != null) {
            audio.current?.play();
          }
        }}>
        <audio src={item.file} ref={audio} />
        <Text style={style.text}>
          {index + 1}. {item.en}
        </Text>
        <MuteIcon />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  songContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px',
    width: '100%',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 6px 12px rgba(0,0,0,0.08)',
    borderRadius: 4,
    marginTop: '8px',
    height: '48px',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
});

export default SongList;
