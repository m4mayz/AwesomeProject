import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import type { Music } from '../api/music';

type Props = {
  music: Music;
  onPress: () => void;
};

export default function MusicCard({ music, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.leftContent}>
        {music.img ? (
          <Image source={{ uri: music.img }} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        )}
        <View style={styles.textContainer}>
          <Text numberOfLines={2} style={styles.title}>
            {music.name}
          </Text>
          <Text style={styles.meta} numberOfLines={1}>
            {music.uNm || 'Unknown'}
          </Text>
          {music.pl ? (
            <Text style={styles.playlist} numberOfLines={1}>
              {music.pl.name}
            </Text>
          ) : (
            <Text style={styles.playlist} numberOfLines={1}>
              Unknown Playlist
            </Text>
          )}
          {music.score && (
            <Text style={styles.score}>Score: {music.score}</Text>
          )}
        </View>
      </View>
      <View style={styles.playButton}>
        <Text style={styles.playIcon}>▶</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginHorizontal: 12,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  leftContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  placeholder: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  meta: {
    color: '#666',
    fontSize: 13,
    marginBottom: 2,
  },
  playlist: {
    color: '#999',
    fontSize: 12,
    marginBottom: 2,
  },
  score: {
    color: '#00C853',
    fontSize: 13,
    fontWeight: '600',
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1E3A5F',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  playIcon: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 3,
  },
});
