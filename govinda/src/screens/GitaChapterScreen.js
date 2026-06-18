import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../constants/colors';
import { keyVerses } from '../constants/data/gita';
import useAppStore from '../store/useAppStore';

export default function GitaChapterScreen({ route, navigation }) {
  const { chapter } = route.params;
  const { language, bookmarkedVerses, toggleVerseBookmark } = useAppStore();
  const [expandedVerse, setExpandedVerse] = useState(null);

  const chapterVerses = keyVerses.filter(v => v.chapter === chapter.id);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient colors={[chapter.color + '55', colors.bg]} style={styles.hero}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>‹ Back</Text>
          </TouchableOpacity>
          <Text style={styles.chapterEmoji}>{chapter.emoji}</Text>
          <Text style={styles.chapterNum}>Chapter {chapter.id}</Text>
          <Text style={styles.chapterName}>{chapter.name}</Text>
          <Text style={styles.chapterSubtitle}>{chapter.subtitle}</Text>
          <View style={styles.themeBadge}>
            <Text style={styles.themeText}>{chapter.theme}</Text>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{chapter.verses}</Text>
              <Text style={styles.statLabel}>Verses</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>{chapter.id}</Text>
              <Text style={styles.statLabel}>Chapter</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statValue}>3</Text>
              <Text style={styles.statLabel}>Languages</Text>
            </View>
          </View>

          {chapterVerses.length > 0 ? (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Key Verses</Text>
              {chapterVerses.map((verse) => {
                const isExpanded = expandedVerse === verse.id;
                const isBookmarked = bookmarkedVerses.includes(verse.id);
                return (
                  <TouchableOpacity
                    key={verse.id}
                    onPress={() => setExpandedVerse(isExpanded ? null : verse.id)}
                    style={styles.verseCard}
                    activeOpacity={0.8}
                  >
                    <View style={styles.verseHeader}>
                      <View style={styles.verseBadge}>
                        <Text style={styles.verseRef}>{`BG ${verse.chapter}.${verse.verse}`}</Text>
                      </View>
                      <TouchableOpacity
                        onPress={(e) => { e.stopPropagation(); toggleVerseBookmark(verse.id); }}
                        style={styles.bookmarkBtn}
                      >
                        <Text>{isBookmarked ? '🔖' : '📑'}</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.verseShloka}>{verse.shloka}</Text>
                    {isExpanded && (
                      <>
                        <Text style={styles.verseTranslit}>{verse.transliteration}</Text>
                        <View style={styles.divider} />
                        <Text style={styles.verseTranslation}>
                          {verse.translations[language] || verse.translations.en}
                        </Text>
                        <View style={styles.significanceBadge}>
                          <Text style={styles.significanceText}>💡 {verse.significance}</Text>
                        </View>
                      </>
                    )}
                    <Text style={styles.hint}>{isExpanded ? 'Tap to collapse ▲' : 'Tap for translation ▼'}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : (
            <View style={styles.comingSoon}>
              <Text style={styles.comingSoonEmoji}>{chapter.emoji}</Text>
              <Text style={styles.comingSoonTitle}>More verses coming soon</Text>
              <Text style={styles.comingSoonText}>
                This chapter contains {chapter.verses} verses. Key verses will be added in the next update. Use "Ask Govinda" to explore any verse now.
              </Text>
              <TouchableOpacity
                style={styles.askBtn}
                onPress={() => navigation.navigate('Ask')}
              >
                <Text style={styles.askBtnText}>🪈 Ask Govinda about Chapter {chapter.id}</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  hero: { paddingTop: 16, paddingBottom: 32, paddingHorizontal: 20, alignItems: 'center' },
  backBtn: { alignSelf: 'flex-start', marginBottom: 20 },
  backText: { fontSize: 16, color: colors.gold, fontWeight: '600' },
  chapterEmoji: { fontSize: 50, marginBottom: 10 },
  chapterNum: { fontSize: 12, color: colors.textMuted, fontWeight: '700', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 },
  chapterName: { fontSize: 22, fontWeight: '800', color: colors.textPrimary, textAlign: 'center', marginBottom: 4 },
  chapterSubtitle: { fontSize: 14, color: colors.gold, marginBottom: 10 },
  themeBadge: { backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
  themeText: { fontSize: 12, color: colors.textSecondary },

  content: { paddingHorizontal: 16, paddingTop: 8 },
  statsRow: {
    flexDirection: 'row', backgroundColor: colors.bgCard, borderRadius: 14,
    padding: 16, marginBottom: 24, alignItems: 'center',
    borderWidth: 1, borderColor: colors.border,
  },
  statItem: { flex: 1, alignItems: 'center' },
  statValue: { fontSize: 22, fontWeight: '800', color: colors.gold },
  statLabel: { fontSize: 11, color: colors.textMuted, marginTop: 2 },
  statDivider: { width: 1, height: 30, backgroundColor: colors.border },

  section: { marginBottom: 24 },
  sectionTitle: { fontSize: 12, fontWeight: '800', color: colors.gold, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 },

  verseCard: {
    backgroundColor: colors.bgCard, borderRadius: 14, padding: 16,
    marginBottom: 12, borderWidth: 1, borderColor: colors.border,
  },
  verseHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  verseBadge: { backgroundColor: colors.gold + '22', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  verseRef: { fontSize: 11, fontWeight: '700', color: colors.gold },
  bookmarkBtn: { padding: 4 },
  verseShloka: { fontSize: 14, color: colors.textPrimary, lineHeight: 24, fontStyle: 'italic' },
  verseTranslit: { fontSize: 12, color: colors.textMuted, marginTop: 10, lineHeight: 20 },
  divider: { height: 1, backgroundColor: colors.border, marginVertical: 10 },
  verseTranslation: { fontSize: 14, color: colors.textSecondary, lineHeight: 22 },
  significanceBadge: {
    backgroundColor: colors.bgSurface, borderRadius: 8, padding: 10,
    marginTop: 10, borderLeftWidth: 3, borderLeftColor: colors.gold,
  },
  significanceText: { fontSize: 12, color: colors.textMuted, lineHeight: 18 },
  hint: { fontSize: 10, color: colors.textMuted, textAlign: 'right', marginTop: 8 },

  comingSoon: { alignItems: 'center', paddingVertical: 40, paddingHorizontal: 16 },
  comingSoonEmoji: { fontSize: 48, marginBottom: 12 },
  comingSoonTitle: { fontSize: 18, fontWeight: '700', color: colors.textPrimary, marginBottom: 8 },
  comingSoonText: { fontSize: 14, color: colors.textMuted, textAlign: 'center', lineHeight: 22, marginBottom: 20 },
  askBtn: { backgroundColor: colors.gold, paddingHorizontal: 20, paddingVertical: 12, borderRadius: 24 },
  askBtnText: { fontSize: 14, fontWeight: '700', color: colors.bg },
});
