import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { Music } from '../api/music';

type Props = {
  music: Music;
  onPress: () => void;
};

export default function MusicCard({ music, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Text numberOfLines={1} style={styles.title}>
        {music.title}
      </Text>
      <Text style={styles.meta}>
        Artist: {music.artist} • Year: {music.year}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: '#1E293B',
    borderRadius: 12,
    marginHorizontal: 12,
    marginVertical: 6,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  meta: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
});
