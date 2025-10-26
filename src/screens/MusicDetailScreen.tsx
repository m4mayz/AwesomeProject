import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getMusicById, Music } from '../api/music';
import type { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'MusicDetail'>;

// Function to extract YouTube video ID from eId
const getYouTubeId = (eId?: string): string | null => {
  if (!eId) return null;
  // eId format: "/yt/VIDEO_ID"
  const match = eId.match(/\/yt\/([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
};

export default function MusicDetailScreen({ route }: Props) {
  const { id: _id } = route.params;
  const [music, setMusic] = useState<Music | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    (async () => {
      try {
        setError(null);
        const data = await getMusicById(_id);
        setMusic(data);
      } catch (e: any) {
        setError(e.message || 'Failed to load detail');
      } finally {
        setLoading(false);
      }
    })();
  }, [_id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text style={styles.muted}>Loading detail…</Text>
      </View>
    );
  }
  if (error || !music) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Error: {error ?? 'Not found'}</Text>
      </View>
    );
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topSection}>
        {music.img ? (
          <Image source={{ uri: music.img }} style={styles.cover} />
        ) : (
          <View style={styles.placeholder} />
        )}
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{music.name}</Text>
          <Text style={styles.artist}>{music.uNm || 'Unknown'}</Text>
          {music.pl && <Text style={styles.playlist}>{music.pl.name}</Text>}
          {music.score && (
            <Text style={styles.score}>Score: {music.score}</Text>
          )}
        </View>
      </View>

      {/* YouTube Video Player */}
      {music.eId && getYouTubeId(music.eId) ? (
        <View style={styles.videoContainer}>
          <YoutubePlayer
            height={250}
            viewContainerStyle={{ paddingTop: 20 }}
            play={false}
            videoId={getYouTubeId(music.eId) || ''}
          />
        </View>
      ) : (
        <View style={styles.videoPlaceholder}>
          <Text style={styles.videoText}>No Video Available</Text>
        </View>
      )}

      {/* Song Information Section */}
      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Song Information</Text>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Title:</Text>
          <Text style={styles.infoValue}>{music.name}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Artist:</Text>
          <Text style={styles.infoValue}>{music.uNm || 'Unknown'}</Text>
        </View>

        {music.pl && (
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Playlist:</Text>
            <Text style={styles.infoValue}>{music.pl.name}</Text>
          </View>
        )}

        {music.score && (
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Score:</Text>
            <Text style={styles.infoValue}>{music.score}</Text>
          </View>
        )}

        {music.nbR && (
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Reposts:</Text>
            <Text style={styles.infoValue}>{music.nbR}</Text>
          </View>
        )}

        {music.nbP && (
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Plays:</Text>
            <Text style={styles.infoValue}>{music.nbP}</Text>
          </View>
        )}

        {music.eId && getYouTubeId(music.eId) && (
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Video ID:</Text>
            <Text style={styles.infoValue} numberOfLines={1}>
              {getYouTubeId(music.eId)}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    backgroundColor: '#F5F5F5',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  topSection: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  cover: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
  },
  artist: {
    fontSize: 14,
    marginBottom: 2,
    color: '#666',
  },
  playlist: {
    fontSize: 13,
    color: '#999',
    marginBottom: 2,
  },
  score: {
    fontSize: 14,
    color: '#00C853',
    fontWeight: '600',
  },
  videoContainer: {
    margin: 16,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  videoPlaceholder: {
    margin: 16,
    height: 250,
    backgroundColor: '#E0E0E0',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  infoSection: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
  },
  infoRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
    width: 100,
    fontWeight: '600',
  },
  infoValue: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  muted: {
    color: '#666',
    marginTop: 8,
  },
  error: {
    color: '#ef4444',
    fontWeight: '600',
  },
});
