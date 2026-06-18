import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
  StatusBar, Animated, Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../constants/colors';
import { getDailyWisdom } from '../constants/data/wisdom';
import { parvas } from '../constants/data/parvas';

const { width } = Dimensions.get('window');

const QuickAccessCard = ({ emoji, title, subtitle, onPress, gradient }) => (
  <TouchableOpacity onPress={onPress} style={styles.quickCard} activeOpacity={0.8}>
    <LinearGradient colors={gradient} style={styles.quickCardInner} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
      <Text style={styles.quickEmoji}>{emoji}</Text>
      <Text style={styles.quickTitle}>{title}</Text>
      <Text style={styles.quickSubtitle}>{subtitle}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

const ParvaRow = ({ parva, onPress }) => (
  <TouchableOpacity onPress={() => onPress(parva)} style={styles.parvaRow} activeOpacity={0.7}>
    <View style={[styles.parvaEmojiBadge, { backgroundColor: parva.color + '22' }]}>
      <Text style={styles.parvaEmoji}>{parva.emoji}</Text>
    </View>
    <View style={styles.parvaInfo}>
      <Text style={styles.parvaName}>{parva.name}</Text>
      <Text style={styles.parvaSubtitle}>{parva.subtitle}</Text>
    </View>
    <View style={styles.parvaChapters}>
      <Text style={styles.parvaChapterCount}>{parva.chapters}</Text>
      <Text style={styles.parvaChapterLabel}>chapters</Text>
    </View>
    <Text style={styles.parvaArrow}>›</Text>
  </TouchableOpacity>
);

export default function HomeScreen({ navigation }) {
  const wisdom = getDailyWisdom();
  const [greeting, setGreeting] = useState('');
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('🌅 Suprabhat');
    else if (hour < 17) setGreeting('☀️ Namaste');
    else setGreeting('🌙 Shubh Sandhya');

    Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }).start();
  }, []);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="light-content" backgroundColor={colors.bg} />
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
          <View>
            <Text style={styles.greeting}>{greeting}</Text>
            <Text style={styles.appName}>Govinda</Text>
            <Text style={styles.appTagline}>गोविन्द — The Living Mahabharata</Text>
          </View>
          <TouchableOpacity
            style={styles.profileBtn}
            onPress={() => navigation.navigate('Profile')}
          >
            <Text style={styles.profileEmoji}>🙏</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* Daily Wisdom */}
        <TouchableOpacity activeOpacity={0.9} style={styles.wisdomCard}>
          <LinearGradient
            colors={['#1A1408', '#231C0A', '#1A1408']}
            style={styles.wisdomGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.wisdomHeader}>
              <View style={styles.wisdomBadge}>
                <Text style={styles.wisdomBadgeText}>📖 DAILY SHLOKA</Text>
              </View>
              <Text style={styles.wisdomSource}>{wisdom.source}</Text>
            </View>
            <Text style={styles.wisdomShloka}>{wisdom.shloka}</Text>
            <View style={styles.wisdomDivider} />
            <Text style={styles.wisdomMeaning}>{wisdom.meaning}</Text>
            <Text style={styles.wisdomSpeaker}>— {wisdom.speaker}</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Quick Access */}
        <Text style={styles.sectionTitle}>Explore</Text>
        <View style={styles.quickGrid}>
          <QuickAccessCard
            emoji="🪈"
            title="Ask Govinda"
            subtitle="AI sage"
            gradient={['#1A237E', '#283593']}
            onPress={() => navigation.navigate('Ask')}
          />
          <QuickAccessCard
            emoji="📿"
            title="Bhagavad Gita"
            subtitle="18 chapters"
            gradient={['#3E2723', '#4E342E']}
            onPress={() => navigation.navigate('Gita')}
          />
          <QuickAccessCard
            emoji="👥"
            title="Characters"
            subtitle="Epic souls"
            gradient={['#1B5E20', '#2E7D32']}
            onPress={() => navigation.navigate('Characters')}
          />
          <QuickAccessCard
            emoji="⚔️"
            title="War Room"
            subtitle="18 days"
            gradient={['#880E4F', '#AD1457']}
            onPress={() => navigation.navigate('WarRoom')}
          />
        </View>

        {/* The 18 Parvas */}
        <View style={styles.parvasSection}>
          <View style={styles.sectionRow}>
            <Text style={styles.sectionTitle}>The 18 Parvas</Text>
            <Text style={styles.sectionCount}>100,000 shlokas</Text>
          </View>
          <View style={styles.parvasList}>
            {parvas.map((parva) => (
              <ParvaRow
                key={parva.id}
                parva={parva}
                onPress={() => navigation.navigate('Parva', { parva })}
              />
            ))}
          </View>
        </View>

        {/* Bottom padding */}
        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 16 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingTop: 16,
    paddingBottom: 20,
  },
  greeting: { fontSize: 13, color: colors.textMuted, marginBottom: 2 },
  appName: { fontSize: 32, fontWeight: '700', color: colors.gold, letterSpacing: 1 },
  appTagline: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  profileBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.bgCard,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  profileEmoji: { fontSize: 20 },

  // Daily wisdom
  wisdomCard: { borderRadius: 16, overflow: 'hidden', marginBottom: 28, borderWidth: 1, borderColor: colors.goldDark + '44' },
  wisdomGradient: { padding: 20 },
  wisdomHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  wisdomBadge: { backgroundColor: colors.gold + '22', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  wisdomBadgeText: { fontSize: 10, color: colors.gold, fontWeight: '700', letterSpacing: 1 },
  wisdomSource: { fontSize: 10, color: colors.textMuted },
  wisdomShloka: { fontSize: 15, color: colors.textPrimary, lineHeight: 26, fontStyle: 'italic', marginBottom: 14 },
  wisdomDivider: { height: 1, backgroundColor: colors.goldDark + '44', marginBottom: 12 },
  wisdomMeaning: { fontSize: 14, color: colors.textSecondary, lineHeight: 22 },
  wisdomSpeaker: { fontSize: 12, color: colors.goldMuted, marginTop: 10, textAlign: 'right' },

  // Quick access grid
  sectionTitle: { fontSize: 18, fontWeight: '700', color: colors.textPrimary, marginBottom: 14 },
  sectionRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  sectionCount: { fontSize: 12, color: colors.textMuted },
  quickGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, marginBottom: 28 },
  quickCard: { width: (width - 44) / 2, borderRadius: 14, overflow: 'hidden' },
  quickCardInner: { padding: 18, minHeight: 110, justifyContent: 'space-between' },
  quickEmoji: { fontSize: 28, marginBottom: 8 },
  quickTitle: { fontSize: 15, fontWeight: '700', color: '#fff' },
  quickSubtitle: { fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 2 },

  // Parvas list
  parvasSection: { marginBottom: 8 },
  parvasList: {
    backgroundColor: colors.bgCard,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
  },
  parvaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  parvaEmojiBadge: { width: 40, height: 40, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  parvaEmoji: { fontSize: 20 },
  parvaInfo: { flex: 1 },
  parvaName: { fontSize: 14, fontWeight: '600', color: colors.textPrimary },
  parvaSubtitle: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  parvaChapters: { alignItems: 'center', marginRight: 10 },
  parvaChapterCount: { fontSize: 14, fontWeight: '700', color: colors.gold },
  parvaChapterLabel: { fontSize: 10, color: colors.textMuted },
  parvaArrow: { fontSize: 20, color: colors.textMuted },
});
