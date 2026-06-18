import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar, TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../constants/colors';
import useAppStore from '../store/useAppStore';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
  { code: 'te', label: 'తెలుగు', flag: '🫶' },
];

const StatCard = ({ emoji, value, label }) => (
  <View style={styles.statCard}>
    <Text style={styles.statEmoji}>{emoji}</Text>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

export default function ProfileScreen() {
  const { userName, setUserName, streak, bookmarkedVerses, bookmarkedCharacters, chatMessages, language, setLanguage } = useAppStore();
  const [editingName, setEditingName] = useState(false);
  const [nameInput, setNameInput] = useState(userName);

  const saveName = () => {
    setUserName(nameInput.trim() || 'Devotee');
    setEditingName(false);
  };

  const titles = [
    { min: 0, title: 'Seeker', emoji: '🌱' },
    { min: 7, title: 'Disciple', emoji: '📚' },
    { min: 21, title: 'Scholar', emoji: '🎓' },
    { min: 50, title: 'Warrior of Dharma', emoji: '⚔️' },
    { min: 100, title: 'Arjuna\'s Equal', emoji: '🏹' },
    { min: 365, title: 'Vyasa\'s Disciple', emoji: '📜' },
  ];
  const currentTitle = titles.filter(t => streak >= t.min).pop();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

        {/* Hero section */}
        <LinearGradient colors={['#1A1408', '#0D0B1A']} style={styles.hero}>
          <View style={styles.avatar}>
            <Text style={styles.avatarEmoji}>{currentTitle.emoji}</Text>
          </View>
          {editingName ? (
            <View style={styles.nameEdit}>
              <TextInput
                style={styles.nameInput}
                value={nameInput}
                onChangeText={setNameInput}
                autoFocus
                maxLength={30}
                returnKeyType="done"
                onSubmitEditing={saveName}
              />
              <TouchableOpacity onPress={saveName} style={styles.saveBtn}>
                <Text style={styles.saveBtnText}>Save</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity onPress={() => setEditingName(true)}>
              <Text style={styles.userName}>{userName || 'Devotee'} ✏️</Text>
            </TouchableOpacity>
          )}
          <View style={styles.titleBadge}>
            <Text style={styles.titleText}>{currentTitle.title}</Text>
          </View>
          <View style={styles.streakRow}>
            <Text style={styles.streakFire}>🔥</Text>
            <Text style={styles.streakCount}>{streak}</Text>
            <Text style={styles.streakLabel}> day streak</Text>
          </View>
        </LinearGradient>

        {/* Stats */}
        <View style={styles.statsRow}>
          <StatCard emoji="🔖" value={bookmarkedVerses.length} label="Saved Verses" />
          <StatCard emoji="👥" value={bookmarkedCharacters.length} label="Saved Chars" />
          <StatCard emoji="💬" value={Math.floor(chatMessages.length / 2)} label="Questions Asked" />
        </View>

        {/* Language selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Language Preference</Text>
          {LANGUAGES.map((lang) => (
            <TouchableOpacity
              key={lang.code}
              onPress={() => setLanguage(lang.code)}
              style={[styles.langRow, language === lang.code && styles.langRowActive]}
            >
              <Text style={styles.langFlag}>{lang.flag}</Text>
              <Text style={[styles.langLabel, language === lang.code && styles.langLabelActive]}>
                {lang.label}
              </Text>
              {language === lang.code && <Text style={styles.langCheck}>✓</Text>}
            </TouchableOpacity>
          ))}
        </View>

        {/* Progress path */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Path</Text>
          {titles.map((t, i) => {
            const unlocked = streak >= t.min;
            return (
              <View key={i} style={[styles.pathRow, !unlocked && styles.pathRowLocked]}>
                <Text style={styles.pathEmoji}>{t.emoji}</Text>
                <View style={styles.pathInfo}>
                  <Text style={[styles.pathTitle, !unlocked && styles.pathTitleLocked]}>{t.title}</Text>
                  <Text style={styles.pathReq}>{t.min === 0 ? 'Starting rank' : `${t.min} day streak`}</Text>
                </View>
                {unlocked ? (
                  <View style={styles.unlockedBadge}>
                    <Text style={styles.unlockedText}>Unlocked</Text>
                  </View>
                ) : (
                  <Text style={styles.lockedIcon}>🔒</Text>
                )}
              </View>
            );
          })}
        </View>

        {/* About */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About</Text>
          <View style={styles.aboutCard}>
            <Text style={styles.aboutTitle}>Govinda 🪈</Text>
            <Text style={styles.aboutText}>
              The Living Mahabharata — your companion through the greatest story ever told. 100,000 shlokas. 200+ characters. 18 days of war. One eternal truth.
            </Text>
            <Text style={styles.aboutVersion}>Version 1.0.0 · Built with ❤️ in India</Text>
          </View>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  scrollContent: { paddingHorizontal: 16 },

  hero: {
    borderRadius: 20, alignItems: 'center', paddingVertical: 32,
    marginTop: 16, marginBottom: 16, borderWidth: 1, borderColor: colors.goldDark + '44',
  },
  avatar: {
    width: 80, height: 80, borderRadius: 40, backgroundColor: colors.bgSurface,
    alignItems: 'center', justifyContent: 'center', marginBottom: 12,
    borderWidth: 2, borderColor: colors.gold,
  },
  avatarEmoji: { fontSize: 40 },
  userName: { fontSize: 22, fontWeight: '700', color: colors.textPrimary, marginBottom: 8 },
  nameEdit: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 },
  nameInput: {
    backgroundColor: colors.bgCard, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 8,
    color: colors.textPrimary, fontSize: 16, borderWidth: 1, borderColor: colors.gold, minWidth: 160,
  },
  saveBtn: { backgroundColor: colors.gold, paddingHorizontal: 14, paddingVertical: 8, borderRadius: 10 },
  saveBtnText: { color: colors.bg, fontWeight: '700' },
  titleBadge: {
    backgroundColor: colors.gold + '22', paddingHorizontal: 16, paddingVertical: 6,
    borderRadius: 20, marginBottom: 12, borderWidth: 1, borderColor: colors.gold + '44',
  },
  titleText: { fontSize: 14, fontWeight: '600', color: colors.gold },
  streakRow: { flexDirection: 'row', alignItems: 'center' },
  streakFire: { fontSize: 20 },
  streakCount: { fontSize: 24, fontWeight: '800', color: colors.saffron },
  streakLabel: { fontSize: 14, color: colors.textMuted },

  statsRow: {
    flexDirection: 'row', gap: 10, marginBottom: 20,
  },
  statCard: {
    flex: 1, backgroundColor: colors.bgCard, borderRadius: 14, padding: 14,
    alignItems: 'center', borderWidth: 1, borderColor: colors.border,
  },
  statEmoji: { fontSize: 22, marginBottom: 6 },
  statValue: { fontSize: 22, fontWeight: '800', color: colors.gold },
  statLabel: { fontSize: 10, color: colors.textMuted, textAlign: 'center', marginTop: 2 },

  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 12, fontWeight: '800', color: colors.gold, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 },

  langRow: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: colors.bgCard,
    borderRadius: 12, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: colors.border,
  },
  langRowActive: { borderColor: colors.gold, backgroundColor: colors.gold + '11' },
  langFlag: { fontSize: 22, marginRight: 12 },
  langLabel: { flex: 1, fontSize: 15, color: colors.textSecondary, fontWeight: '500' },
  langLabelActive: { color: colors.gold, fontWeight: '700' },
  langCheck: { fontSize: 16, color: colors.gold, fontWeight: '700' },

  pathRow: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: colors.bgCard,
    borderRadius: 12, padding: 14, marginBottom: 8, borderWidth: 1, borderColor: colors.border,
  },
  pathRowLocked: { opacity: 0.5 },
  pathEmoji: { fontSize: 24, marginRight: 12 },
  pathInfo: { flex: 1 },
  pathTitle: { fontSize: 14, fontWeight: '600', color: colors.textPrimary },
  pathTitleLocked: { color: colors.textMuted },
  pathReq: { fontSize: 12, color: colors.textMuted, marginTop: 2 },
  unlockedBadge: { backgroundColor: '#4CAF50' + '33', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  unlockedText: { fontSize: 11, color: '#4CAF50', fontWeight: '700' },
  lockedIcon: { fontSize: 18 },

  aboutCard: { backgroundColor: colors.bgCard, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: colors.border },
  aboutTitle: { fontSize: 18, fontWeight: '700', color: colors.gold, marginBottom: 8 },
  aboutText: { fontSize: 13, color: colors.textSecondary, lineHeight: 22, marginBottom: 10 },
  aboutVersion: { fontSize: 11, color: colors.textMuted },
});
