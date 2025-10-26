import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import MusicCard from '../components/MusicCard';
import type { Music } from '../api/music';
import musicData from '../api/musicData.json';
