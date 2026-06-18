import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import { gitaChapters, keyVerses, getFamousVerses } from '../constants/data/gita';
import useAppStore from '../store/useAppStore';

const TABS = ['Chapters', 'Key Verses', 'Bookmarked'];

const ChapterCard = ({ chapter, onPress }) => (
  <TouchableOpacity onPress={() => onPress(chapter)} style={styles.chapterCard} activeOpacity={0.8}>
    <View style={[styles.chapterNumber, { backgroundColor: chapter.color + '33' }]}>
      <Text style={[styles.chapterNum, { color: chapter.color }]}>{chapter.id}</Text>
    </View>
    <View style={styles.chapterInfo}>
      <Text style={styles.chapterName}>{chapter.name}</Text>
      <Text style={styles.chapterSubtitle}>{chapter.subtitle}</Text>
      <Text style={styles.chapterTheme}>{chapter.theme}</Text>
    </View>
    <View style={styles.chapterMeta}>
      <Text style={styles.chapterEmoji}>{chapter.emoji}</Text>
      <Text style={styles.verseCount}>{chapter.verses}v</Text>
    </View>
  </TouchableOpacity>
);

const VerseCard = ({ verse, language, onBookmark, isBookmarked }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setExpanded(!expanded)}
      style={styles.verseCard}
      activeOpacity={0.8}
    >
      <View style={styles.verseHeader}>
        <View style={styles.verseBadge}>
          <Text style={styles.verseRef}>{`BG ${verse.chapter}.${verse.verse}`}</Text>
        </View>
        <TouchableOpacity onPress={() => onBookmark(verse.id)} style={styles.bookmarkBtn}>
          <Text style={styles.bookmarkIcon}>{isBookmarked ? '🔖' : '📑'}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.verseShloka}>{verse.shloka}</Text>
      {expanded && (
        <>
          <Text style={styles.verseTranslit}>{verse.transliteration}</Text>
          <View style={styles.verseDivider} />
          <Text style={styles.verseTranslation}>
            {verse.translations[language] || verse.translations.en}
          </Text>
          <View style={styles.significanceBadge}>
            <Text style={styles.significanceText}>💡 {verse.significance}</Text>
          </View>
        </>
      )}
      <Text style={styles.tapHint}>{expanded ? 'Tap to collapse' : 'Tap for translation'}</Text>
    </TouchableOpacity>
  );
};

export default function GitaScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState('Chapters');
  const { language, bookmarkedVerses, toggleVerseBookmark } = useAppStore();

  const famousVerses = getFamousVerses();
  const bookmarkedVerseObjects = keyVerses.filter(v => bookmarkedVerses.includes(v.id));

  const renderContent = () => {
    if (activeTab === 'Chapters') {
      return gitaChapters.map((chapter) => (
        <ChapterCard
          key={chapter.id}
          chapter={chapter}
          onPress={(ch) => navigation.navigate('GitaChapter', { chapter: ch })}
        />
      ));
    }
    if (activeTab === 'Key Verses') {
      return famousVerses.map((verse) => (
        <VerseCard
          key={verse.id}
          verse={verse}
          language={language}
          isBookmarked={bookmarkedVerses.includes(verse.id)}
          onBookmark={toggleVerseBookmark}
        />
      ));
    }
    if (activeTab === 'Bookmarked') {
      if (bookmarkedVerseObjects.length === 0) {
        return (
          <View style={styles.emptyState}>
            <Text style={styles.emptyEmoji}>📑</Text>
            <Text style={styles.emptyText}>No bookmarked verses yet</Text>
            <Text style={styles.emptySubtext}>Tap 📑 on any verse to save it here</Text>
          </View>
        );
      }
      return bookmarkedVerseObjects.map((verse) => (
        <VerseCard
          key={verse.id}
          verse={verse}
          language={language}
          isBookmarked
          onBookmark={toggleVerseBookmark}
        />
      ));
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Bhagavad Gita</Text>
          <Text style={styles.subtitle}>भगवद्गीता — The Song of God</Text>
        </View>
        <TouchableOpacity
          style={styles.langBtn}
          onPress={() => {/* TODO: language picker */ }}
        >
          <Text style={styles.langText}>
            {language === 'en' ? '🇬🇧' : language === 'hi' ? '🇮🇳' : '🫶'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Stats bar */}
      <View style={styles.statsBar}>
        {[['18', 'Chapters'], ['700', 'Verses'], ['3', 'Languages']].map(([val, label]) => (
          <View key={label} style={styles.stat}>
            <Text style={styles.statVal}>{val}</Text>
            <Text style={styles.statLabel}>{label}</Text>
          </View>
        ))}
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {TABS.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.tabActive]}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {renderContent()}
        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start',
    paddingHorizontal: 16, paddingTop: 16, paddingBottom: 12,
  },
  title: { fontSize: 28, fontWeight: '700', color: colors.gold },
  subtitle: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  langBtn: {
    width: 44, height: 44, borderRadius: 22, backgroundColor: colors.bgCard,
    alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: colors.border,
  },
  langText: { fontSize: 22 },

  statsBar: {
    flexDirection: 'row', backgroundColor: colors.bgCard,
    marginHorizontal: 16, borderRadius: 12, padding: 12, marginBottom: 16,
    borderWidth: 1, borderColor: colors.border,
  },
  stat: { flex: 1, alignItems: 'center' },
  statVal: { fontSize: 20, fontWeight: '700', color: colors.gold },
  statLabel: { fontSize: 11, color: colors.textMuted, marginTop: 2 },

  tabs: { flexDirection: 'row', paddingHorizontal: 16, gap: 8, marginBottom: 16 },
  tab: {
    flex: 1, paddingVertical: 8, borderRadius: 20,
    backgroundColor: colors.bgCard, alignItems: 'center',
    borderWidth: 1, borderColor: colors.border,
  },
  tabActive: { backgroundColor: colors.gold, borderColor: colors.gold },
  tabText: { fontSize: 12, fontWeight: '600', color: colors.textMuted },
  tabTextActive: { color: colors.bg },

  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 16 },

  chapterCard: {
    flexDirection: 'row', backgroundColor: colors.bgCard, borderRadius: 14,
    padding: 14, marginBottom: 10, alignItems: 'center',
    borderWidth: 1, borderColor: colors.border,
  },
  chapterNumber: { width: 44, height: 44, borderRadius: 10, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  chapterNum: { fontSize: 18, fontWeight: '800' },
  chapterInfo: { flex: 1 },
  chapterName: { fontSize: 14, fontWeight: '600', color: colors.textPrimary },
  chapterSubtitle: { fontSize: 12, color: colors.gold, marginTop: 2 },
  chapterTheme: { fontSize: 11, color: colors.textMuted, marginTop: 2 },
  chapterMeta: { alignItems: 'center', gap: 4 },
  chapterEmoji: { fontSize: 20 },
  verseCount: { fontSize: 10, color: colors.textMuted },

  verseCard: {
    backgroundColor: colors.bgCard, borderRadius: 14, padding: 16,
    marginBottom: 12, borderWidth: 1, borderColor: colors.border,
  },
  verseHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  verseBadge: { backgroundColor: colors.gold + '22', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  verseRef: { fontSize: 11, fontWeight: '700', color: colors.gold },
  bookmarkBtn: { padding: 4 },
  bookmarkIcon: { fontSize: 18 },
  verseShloka: { fontSize: 14, color: colors.textPrimary, lineHeight: 24, fontStyle: 'italic' },
  verseTranslit: { fontSize: 12, color: colors.textMuted, marginTop: 8, lineHeight: 20 },
  verseDivider: { height: 1, backgroundColor: colors.border, marginVertical: 10 },
  verseTranslation: { fontSize: 14, color: colors.textSecondary, lineHeight: 22 },
  significanceBadge: {
    backgroundColor: colors.bgSurface, borderRadius: 8, padding: 10,
    marginTop: 10, borderLeftWidth: 3, borderLeftColor: colors.gold,
  },
  significanceText: { fontSize: 12, color: colors.textMuted, lineHeight: 18 },
  tapHint: { fontSize: 10, color: colors.textMuted, textAlign: 'right', marginTop: 8 },

  emptyState: { alignItems: 'center', paddingVertical: 60 },
  emptyEmoji: { fontSize: 48, marginBottom: 12 },
  emptyText: { fontSize: 16, fontWeight: '600', color: colors.textSecondary, marginBottom: 6 },
  emptySubtext: { fontSize: 13, color: colors.textMuted },
});
