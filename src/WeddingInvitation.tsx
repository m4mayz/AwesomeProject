import React, { useEffect, useMemo, useState } from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type TimeLeft = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const formatNumber = (value: number) => String(value).padStart(2, '0');

const calculateTimeLeft = (targetDate: Date): TimeLeft => {
  const diff = targetDate.getTime() - Date.now();

  if (diff <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  const secondsTotal = Math.floor(diff / 1000);
  const days = Math.floor(secondsTotal / (24 * 3600));
  const hours = Math.floor((secondsTotal % (24 * 3600)) / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  return {
    days: formatNumber(days),
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
  };
};

const Section: React.FC<{ title: string; subtitle?: string; children: React.ReactNode }> = ({
  title,
  subtitle,
  children,
}) => (
  <View style={styles.sectionContainer}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {subtitle ? <Text style={styles.sectionSubtitle}>{subtitle}</Text> : null}
    <View style={styles.sectionContent}>{children}</View>
  </View>
);

const StoryCard: React.FC<{ image: string; title: string; description: string }> = ({
  image,
  title,
  description,
}) => (
  <View style={styles.storyCard}>
    <Image source={{ uri: image }} style={styles.storyImage} />
    <Text style={styles.storyTitle}>{title}</Text>
    <Text style={styles.storyDescription}>{description}</Text>
  </View>
);

const WeddingInvitation: React.FC = () => {
  const eventDate = useMemo(() => new Date('2025-12-20T10:00:00+07:00'), []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(eventDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(eventDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate]);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=1350&q=80',
        }}
        style={styles.hero}
        resizeMode="cover"
      >
        <View style={styles.heroOverlay}>
          <View style={styles.heroTextWrapper}>
            <Text style={styles.saveTheDate}>Save the Date</Text>
            <Text style={styles.coupleNames}>Amelia & Farhan</Text>
            <Text style={styles.eventDate}>Sabtu, 20 Desember 2025</Text>
            <Text style={styles.eventLocation}>Villa Bunga Asri, Bandung</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.countdownContainer}>
        <Text style={styles.countdownTitle}>Menuju Hari Bahagia</Text>
        <View style={styles.countdownGrid}>
          {([
            { label: 'Hari', value: timeLeft.days },
            { label: 'Jam', value: timeLeft.hours },
            { label: 'Menit', value: timeLeft.minutes },
            { label: 'Detik', value: timeLeft.seconds },
          ] as const).map((item) => (
            <View key={item.label} style={styles.countdownCard}>
              <Text style={styles.countdownValue}>{item.value}</Text>
              <Text style={styles.countdownLabel}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>

      <Section
        title="Dengan Hormat"
        subtitle="Kami dengan penuh sukacita mengundang Bapak/Ibu/Saudara/i untuk hadir pada acara pernikahan kami."
      >
        <Text style={styles.paragraph}>
          Kehadiran dan doa restu Anda merupakan kebahagiaan serta kehormatan bagi kami dan keluarga besar.
          Mari bersama-sama merayakan hari istimewa ini dalam kebersamaan dan rasa syukur.
        </Text>
      </Section>

      <Section title="Rangkaian Acara" subtitle="Sabtu, 20 Desember 2025">
        <View style={styles.timeline}>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTime}>09.00 WIB</Text>
              <Text style={styles.timelineTitle}>Akad Nikah</Text>
              <Text style={styles.timelineDescription}>Masjid Al-Mahabbah, Villa Bunga Asri</Text>
            </View>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTime}>11.00 WIB</Text>
              <Text style={styles.timelineTitle}>Resepsi Siang</Text>
              <Text style={styles.timelineDescription}>Aula Utama, Villa Bunga Asri</Text>
            </View>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineTime}>19.00 WIB</Text>
              <Text style={styles.timelineTitle}>Dinner Intim</Text>
              <Text style={styles.timelineDescription}>
                Jamuan makan malam bersama keluarga dan sahabat terdekat
              </Text>
            </View>
          </View>
        </View>
      </Section>

      <Section title="Cerita Kami" subtitle="Perjalanan cinta yang penuh makna">
        <View style={styles.storyGrid}>
          <StoryCard
            image="https://images.unsplash.com/photo-1543248939-ff40856f65d4?auto=format&fit=crop&w=800&q=80"
            title="Pertemuan"
            description="Kami pertama kali bertemu di kampus pada kelas fotografi. Sejak saat itu, obrolan kecil berkembang menjadi persahabatan yang penuh canda."
          />
          <StoryCard
            image="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80"
            title="Perjalanan"
            description="Lima tahun perjalanan penuh suka dan duka telah menguatkan komitmen kami untuk saling mendukung dalam setiap langkah."
          />
          <StoryCard
            image="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80"
            title="Lamaran"
            description="Pada musim semi di Kyoto, Farhan melamar Amelia dengan sebuah surat puisi yang ditulis tangan. Jawabannya tentu 'iya'."
          />
        </View>
      </Section>

      <Section title="Lokasi Acara" subtitle="Villa Bunga Asri - Bandung, Jawa Barat">
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=800&q=80',
          }}
          style={styles.mapPreview}
        />
        <TouchableOpacity
          style={styles.mapButton}
          onPress={() => Linking.openURL('https://maps.app.goo.gl/p9Eh8k4kRRdqEw4D9')}
        >
          <Text style={styles.mapButtonText}>Buka Google Maps</Text>
        </TouchableOpacity>
        <Text style={styles.paragraphCentered}>
          Villa Bunga Asri, Jl. Dago Pakar Permai No. 25, Bandung, Jawa Barat, Indonesia
        </Text>
      </Section>

      <Section title="RSVP" subtitle="Mohon konfirmasi kehadiran Anda sebelum 1 Desember 2025">
        <View style={styles.rsvpCard}>
          <Text style={styles.rsvpText}>RSVP via WhatsApp</Text>
          <Text style={styles.rsvpPhone}>Amelia: 0812-3456-7890</Text>
          <Text style={styles.rsvpPhone}>Farhan: 0896-5432-1098</Text>
          <TouchableOpacity
            style={styles.rsvpButton}
            onPress={() => Linking.openURL('https://wa.me/6281234567890?text=Halo%20Amelia%20%26%20Farhan,%20saya%20ingin%20konfirmasi%20kehadiran.')}
          >
            <Text style={styles.rsvpButtonText}>Kirim Pesan</Text>
          </TouchableOpacity>
        </View>
      </Section>

      <Section title="Ucapan Doa" subtitle="Silakan tinggalkan doa dan pesan terbaik untuk kami">
        <View style={styles.wishesCard}>
          <Text style={styles.wishesPlaceholder}>
            "Semoga menjadi keluarga yang sakinah, mawaddah, dan penuh keberkahan." - Keluarga Besar
          </Text>
          <TouchableOpacity
            style={styles.wishesButton}
            onPress={() => Linking.openURL('https://forms.gle/abcdefg123456789')}
          >
            <Text style={styles.wishesButtonText}>Tulis Pesan</Text>
          </TouchableOpacity>
        </View>
      </Section>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Dengan penuh cinta,</Text>
        <Text style={styles.footerNames}>Amelia & Farhan</Text>
        <Text style={styles.footerGratitude}>Terima kasih atas doa dan restu Anda.</Text>
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f6f1',
  },
  scrollContent: {
    paddingBottom: 48,
  },
  hero: {
    width: '100%',
    height: width > 768 ? 460 : 380,
    justifyContent: 'center',
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  heroTextWrapper: {
    alignItems: 'center',
  },
  saveTheDate: {
    color: '#f7e8d5',
    fontSize: 18,
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginBottom: 16,
  },
  coupleNames: {
    color: '#ffffff',
    fontSize: width > 768 ? 56 : 42,
    fontFamily: 'serif',
    textAlign: 'center',
  },
  eventDate: {
    color: '#f7e8d5',
    fontSize: 18,
    marginTop: 12,
  },
  eventLocation: {
    color: '#f7e8d5',
    fontSize: 16,
    marginTop: 4,
  },
  countdownContainer: {
    marginTop: -56,
    marginHorizontal: 24,
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
  },
  countdownTitle: {
    fontSize: 18,
    color: '#5c4636',
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  countdownGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  countdownCard: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 6,
    borderRadius: 12,
    backgroundColor: '#f4e7d6',
    alignItems: 'center',
  },
  countdownValue: {
    fontSize: 28,
    color: '#5c4636',
    fontWeight: '700',
  },
  countdownLabel: {
    fontSize: 14,
    color: '#7d654d',
    marginTop: 4,
  },
  sectionContainer: {
    marginTop: 32,
    marginHorizontal: 24,
    padding: 24,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 6,
  },
  sectionTitle: {
    fontSize: 22,
    color: '#5c4636',
    textAlign: 'center',
    fontWeight: '700',
  },
  sectionSubtitle: {
    marginTop: 8,
    fontSize: 14,
    color: '#7d654d',
    textAlign: 'center',
    lineHeight: 20,
  },
  sectionContent: {
    marginTop: 20,
  },
  paragraph: {
    fontSize: 15,
    color: '#5c4636',
    lineHeight: 24,
    textAlign: 'center',
  },
  paragraphCentered: {
    fontSize: 14,
    color: '#5c4636',
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 12,
  },
  timeline: {
    borderLeftWidth: 2,
    borderLeftColor: '#e0c8a5',
    paddingLeft: 20,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  timelineDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#c99867',
    position: 'absolute',
    left: -28,
    top: 4,
  },
  timelineContent: {
    marginLeft: 4,
  },
  timelineTime: {
    fontSize: 14,
    color: '#c99867',
    fontWeight: '600',
  },
  timelineTitle: {
    fontSize: 18,
    color: '#5c4636',
    fontWeight: '600',
    marginVertical: 4,
  },
  timelineDescription: {
    fontSize: 14,
    color: '#7d654d',
    lineHeight: 20,
  },
  storyGrid: {
    flexDirection: 'column',
  },
  storyCard: {
    backgroundColor: '#fdf8f3',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  storyImage: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    marginBottom: 12,
  },
  storyTitle: {
    fontSize: 18,
    color: '#5c4636',
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  storyDescription: {
    fontSize: 14,
    color: '#7d654d',
    textAlign: 'center',
    lineHeight: 20,
  },
  mapPreview: {
    width: '100%',
    height: 220,
    borderRadius: 16,
    marginBottom: 16,
    backgroundColor: '#d8c7ad',
  },
  mapButton: {
    backgroundColor: '#c99867',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  mapButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  rsvpCard: {
    backgroundColor: '#fdf2e4',
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  rsvpText: {
    fontSize: 16,
    color: '#5c4636',
    fontWeight: '600',
  },
  rsvpPhone: {
    fontSize: 14,
    color: '#7d654d',
    marginTop: 8,
  },
  rsvpButton: {
    marginTop: 16,
    backgroundColor: '#c99867',
    borderRadius: 30,
    paddingHorizontal: 28,
    paddingVertical: 12,
  },
  rsvpButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  wishesCard: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ead7c0',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  wishesPlaceholder: {
    fontSize: 14,
    color: '#5c4636',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 20,
  },
  wishesButton: {
    marginTop: 16,
    backgroundColor: '#5c4636',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderRadius: 30,
  },
  wishesButtonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  footer: {
    marginTop: 36,
    marginBottom: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#7d654d',
  },
  footerNames: {
    fontSize: 22,
    color: '#5c4636',
    fontWeight: '700',
    marginTop: 8,
    fontFamily: 'serif',
  },
  footerGratitude: {
    fontSize: 14,
    color: '#7d654d',
    marginTop: 4,
    textAlign: 'center',
  },
});

export default WeddingInvitation;
