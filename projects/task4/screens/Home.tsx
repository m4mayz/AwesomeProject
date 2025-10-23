import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const DestinationCard = ({
  image,
  location,
  name,
  price,
  rating,
  favorite = false,
  description,
  temperature,
  flagImage,
}: {
  image: any;
  location: string;
  name: string;
  price: string;
  rating: string;
  favorite: boolean;
  description?: string;
  temperature?: string;
  flagImage?: any;
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('DetailPage', {
      image,
      location,
      name,
      price,
      rating,
      description,
      temperature,
      flagImage,
    });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={image} style={styles.cardImage} />
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={styles.cardGradient}
      >
        <View style={styles.cardContent}>
          <View>
            <View style={styles.locationRow}>
              <AwesomeIcon name="map-marker" size={12} color="#fff" />
              <Text style={styles.locationText}>{location}</Text>
            </View>
            <Text style={styles.destinationName}>{name}</Text>
          </View>
          <View style={styles.priceRating}>
            <View style={styles.ratingContainer}>
              <Icon name="star" size={12} color="#FFf" />
              <Text style={styles.ratingText}>{rating}</Text>
            </View>
            <Text style={styles.priceText}>{price}</Text>
          </View>
        </View>
      </LinearGradient>
      <TouchableOpacity style={styles.favoriteIcon}>
        {favorite ? (
          <AwesomeIcon name="heart" size={20} color="#fff" />
        ) : (
          <Icon name="heart" size={20} color="#fff" />
        )}
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi,</Text>
            <Text style={styles.userName}>Akmal Z.H.</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <AwesomeIcon name="heart" size={32} color="#FF6B4E" />
            <Text style={styles.notificationBadge}>8</Text>
          </TouchableOpacity>
        </View>

        {/* Summer Banner */}
        <TouchableOpacity style={styles.banner}>
          <LinearGradient
            colors={['#FF7B5F', '#FF6B4E']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.bannerGradient}
          >
            <View style={styles.bannerContent}>
              <Text style={styles.bannerText}>Plan Your</Text>
              <Text style={styles.bannerText}>Summer!</Text>
            </View>
            <View style={styles.bannerIconContainer}>
              <Icon name="arrow-right" size={24} color="#fff" />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Icon name="search" size={20} color="#999" />
            <TextInput
              placeholder="Search destination..."
              placeholderTextColor="#999"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="sliders" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Popular Destination Section */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Destination Cards */}
        <View style={styles.cardsContainer}>
          <DestinationCard
            image={require('../../img/labuan.jpg')}
            location="Indonesia"
            name="Labuan Bajo"
            price="$4.000/pax"
            rating="5.0"
            favorite={true}
            description="From crystal-clear waters to breathtaking sunsets, Labuan Bajo is calling! Explore hidden islands, swim with manta rays, and create memories that last a lifetime"
            temperature="24° C"
            flagImage={require('../../img/flag.png')}
          />
          <DestinationCard
            image={require('../../img/venice.jpg')}
            location="Italia"
            name="Venice"
            price="$1.000/pax"
            rating="4.7"
            favorite={false}
            description="Experience the romantic canals, stunning architecture, and rich culture of Venice. Glide through waterways on a gondola and discover the timeless beauty of this floating city."
            temperature="22° C"
            flagImage={{
              uri: 'https://flagcdn.com/w40/it.png',
            }}
          />
          <DestinationCard
            image={{
              uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?',
            }}
            location="Maldives"
            name="Maldives"
            price="$3.500/pax"
            rating="4.9"
            favorite={true}
            description="Discover paradise in the Maldives with pristine beaches, turquoise waters, and luxurious overwater bungalows. Perfect for relaxation and underwater adventures."
            temperature="28° C"
            flagImage={{
              uri: 'https://flagcdn.com/w40/mv.png',
            }}
          />
          <DestinationCard
            image={{
              uri: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?',
            }}
            location="France"
            name="Paris"
            price="$2.200/pax"
            rating="4.8"
            favorite={false}
            description="Fall in love with the City of Light! From the Eiffel Tower to charming cafés, Paris offers art, culture, and cuisine that will captivate your heart."
            temperature="18° C"
            flagImage={{
              uri: 'https://flagcdn.com/w40/fr.png',
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 14,
    color: '#999',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationButton: {
    position: 'relative',
    padding: 8,
  },
  notificationBadge: {
    position: 'absolute',
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
    bottom: 10,
    right: 8,
    height: 16,
    width: 16,
    borderRadius: 100,
    backgroundColor: '#333',
    paddingVertical: 2,
  },
  banner: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 24,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  bannerGradient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 30,
  },
  bannerContent: {
    flex: 1,
  },
  bannerText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 38,
  },
  bannerIconContainer: {
    width: 50,
    height: 109,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 25,
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 50,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#333',
  },
  filterButton: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#1B3A57',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAll: {
    fontSize: 14,
    color: '#999',
  },
  cardsContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  card: {
    marginBottom: 16,
    borderRadius: 20,
    overflow: 'hidden',
    height: 200,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  cardGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    justifyContent: 'flex-end',
  },
  cardContent: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  locationText: {
    fontSize: 12,
    color: '#fff',
    marginLeft: 4,
  },
  destinationName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  priceRating: {
    alignSelf: 'flex-end',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    gap: 4,
  },
  ratingText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  priceText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  favoriteIcon: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
