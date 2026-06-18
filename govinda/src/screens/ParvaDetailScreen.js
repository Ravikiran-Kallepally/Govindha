import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../constants/colors';

export default function ParvaDetailScreen({ route, navigation }) {
  const { parva } = route.params;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient colors={[parva.color + '44', colors.bg]} style={styles.hero}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>‹ Back</Text>
          </TouchableOpacity>
          <View style={styles.heroEmoji}>
            <Text style={styles.heroEmojiText}>{parva.emoji}</Text>
          </View>
          <Text style={styles.parvaNum}>Parva {parva.id} of 18</Text>
          <Text style={styles.parvaName}>{parva.name}</Text>
          <Text style={styles.parvaSubtitle}>{parva.subtitle}</Text>
          <View style={styles.chaptersBadge}>
            <Text style={styles.chaptersText}>{parva.chapters} chapters</Text>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.summaryText}>{parva.summary}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Key Events</Text>
            {parva.keyEvents.map((event, i) => (
              <View key={i} style={styles.eventRow}>
                <View style={[styles.eventDot, { backgroundColor: parva.color }]} />
                <Text style={styles.eventText}>{event}</Text>
              </View>
            ))}
          </View>

          {parva.hasGita && (
            <TouchableOpacity
              style={styles.gitaCallout}
              onPress={() => navigation.navigate('Gita')}
              activeOpacity={0.8}
            >
              <Text style={styles.gitaCalloutEmoji}>📿</Text>
              <View style={styles.gitaCalloutText}>
                <Text style={styles.gitaCalloutTitle}>Bhagavad Gita delivered here</Text>
                <Text style={styles.gitaCalloutSub}>Read all 18 chapters →</Text>
              </View>
            </TouchableOpacity>
          )}

          <View style={styles.navButtons}>
            {parva.id > 1 && (
              <TouchableOpacity style={styles.navBtn} onPress={() => navigation.goBack()}>
                <Text style={styles.navBtnText}>← Prev Parva</Text>
              </TouchableOpacity>
            )}
            {parva.id < 18 && (
              <TouchableOpacity style={[styles.navBtn, styles.navBtnRight]} onPress={() => navigation.goBack()}>
                <Text style={styles.navBtnText}>Next Parva →</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  hero: { paddingHorizontal: 16, paddingBottom: 32 },
  backBtn: { paddingTop: 16, paddingBottom: 8 },
  backText: { fontSize: 16, color: colors.gold },
  heroEmoji: {
    width: 80, height: 80, borderRadius: 22, backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center', justifyContent: 'center', marginBottom: 16,
  },
  heroEmojiText: { fontSize: 42 },
  parvaNum: { fontSize: 12, color: colors.textMuted, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 2 },
  parvaName: { fontSize: 30, fontWeight: '800', color: colors.textPrimary, marginBottom: 4 },
  parvaSubtitle: { fontSize: 16, color: colors.textSecondary, marginBottom: 16 },
  chaptersBadge: { backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20, alignSelf: 'flex-start' },
  chaptersText: { fontSize: 13, color: colors.textSecondary },

  content: { padding: 16 },
  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 12, fontWeight: '800', color: colors.gold, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 },
  summaryText: { fontSize: 15, color: colors.textSecondary, lineHeight: 26 },

  eventRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10 },
  eventDot: { width: 8, height: 8, borderRadius: 4, marginTop: 6, marginRight: 12 },
  eventText: { flex: 1, fontSize: 14, color: colors.textSecondary, lineHeight: 22 },

  gitaCallout: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: colors.bgCard,
    borderRadius: 14, padding: 16, marginBottom: 24, borderWidth: 1, borderColor: colors.gold + '44',
    gap: 12,
  },
  gitaCalloutEmoji: { fontSize: 32 },
  gitaCalloutText: { flex: 1 },
  gitaCalloutTitle: { fontSize: 15, fontWeight: '700', color: colors.gold, marginBottom: 4 },
  gitaCalloutSub: { fontSize: 13, color: colors.textMuted },

  navButtons: { flexDirection: 'row', gap: 12 },
  navBtn: { flex: 1, backgroundColor: colors.bgCard, borderRadius: 12, padding: 14, alignItems: 'center', borderWidth: 1, borderColor: colors.border },
  navBtnRight: { backgroundColor: colors.bgSurface },
  navBtnText: { fontSize: 14, fontWeight: '600', color: colors.textSecondary },
});
