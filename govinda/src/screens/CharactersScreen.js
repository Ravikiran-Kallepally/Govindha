import React, { useState, useMemo } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
  TextInput, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import { characters } from '../constants/data/characters';

const FILTERS = ['All', 'Pandava', 'Kaurava', 'Neutral'];

const StatBar = ({ label, value, color }) => (
  <View style={styles.statBarRow}>
    <Text style={styles.statBarLabel}>{label}</Text>
    <View style={styles.statBarTrack}>
      <View style={[styles.statBarFill, { width: `${value}%`, backgroundColor: color }]} />
    </View>
    <Text style={styles.statBarValue}>{value}</Text>
  </View>
);

const CharacterCard = ({ character, onPress }) => (
  <TouchableOpacity onPress={() => onPress(character)} style={styles.card} activeOpacity={0.8}>
    <View style={[styles.cardEmoji, { backgroundColor: character.color + '22' }]}>
      <Text style={styles.emoji}>{character.emoji}</Text>
    </View>
    <View style={styles.cardContent}>
      <View style={styles.cardHeader}>
        <Text style={styles.name}>{character.name}</Text>
        <View style={[styles.factionBadge, { backgroundColor: getFactionColor(character.faction) + '33' }]}>
          <Text style={[styles.factionText, { color: getFactionColor(character.faction) }]}>
            {character.faction.toUpperCase()}
          </Text>
        </View>
      </View>
      <Text style={styles.role}>{character.role}</Text>
      <Text style={styles.bio} numberOfLines={2}>{character.shortBio}</Text>
      <View style={styles.epithets}>
        {character.epithets.slice(0, 3).map((e) => (
          <View key={e} style={styles.epithetChip}>
            <Text style={styles.epithetText}>{e}</Text>
          </View>
        ))}
      </View>
    </View>
    <Text style={styles.arrow}>›</Text>
  </TouchableOpacity>
);

const getFactionColor = (faction) => {
  if (faction === 'pandava') return colors.pandava;
  if (faction === 'kaurava') return colors.kaurava;
  return colors.neutral;
};

const CharacterDetail = ({ character, onClose }) => (
  <View style={styles.detailOverlay}>
    <ScrollView style={styles.detailScroll} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
        <Text style={styles.closeBtnText}>✕ Close</Text>
      </TouchableOpacity>

      <View style={styles.detailHero}>
        <View style={[styles.detailEmoji, { backgroundColor: character.color + '33' }]}>
          <Text style={styles.detailEmojiText}>{character.emoji}</Text>
        </View>
        <Text style={styles.detailName}>{character.name}</Text>
        <Text style={styles.detailRole}>{character.role}</Text>
        <View style={[styles.factionBadgeLg, { backgroundColor: getFactionColor(character.faction) + '33' }]}>
          <Text style={[styles.factionTextLg, { color: getFactionColor(character.faction) }]}>
            {character.faction.toUpperCase()}
          </Text>
        </View>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.detailSectionTitle}>Known As</Text>
        <View style={styles.epithetsWrap}>
          {character.epithets.map((e) => (
            <View key={e} style={styles.epithetChipLg}>
              <Text style={styles.epithetTextLg}>{e}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.detailSectionTitle}>Story</Text>
        <Text style={styles.detailBio}>{character.fullBio}</Text>
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.detailSectionTitle}>Attributes</Text>
        <StatBar label="Wisdom" value={character.stats.wisdom} color={colors.gold} />
        <StatBar label="Strength" value={character.stats.strength} color={colors.saffron} />
        <StatBar label="Courage" value={character.stats.courage} color={colors.krishnaBlueLight} />
        <StatBar label="Dharma" value={character.stats.dharma} color="#4CAF50" />
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.detailSectionTitle}>Key Relationships</Text>
        {character.relations.map((rel) => (
          <View key={rel.id} style={styles.relationRow}>
            <Text style={styles.relationName}>{rel.id.charAt(0).toUpperCase() + rel.id.slice(1)}</Text>
            <Text style={styles.relationType}>{rel.type}</Text>
          </View>
        ))}
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  </View>
);

export default function CharactersScreen() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const [selectedChar, setSelectedChar] = useState(null);

  const filtered = useMemo(() => {
    return characters.filter((c) => {
      const matchFaction = filter === 'All' || c.faction === filter.toLowerCase();
      const matchSearch =
        !search ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.epithets.some((e) => e.toLowerCase().includes(search.toLowerCase()));
      return matchFaction && matchSearch;
    });
  }, [filter, search]);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="light-content" />

      {selectedChar && (
        <CharacterDetail character={selectedChar} onClose={() => setSelectedChar(null)} />
      )}

      <View style={styles.header}>
        <Text style={styles.title}>Characters</Text>
        <Text style={styles.subtitle}>{characters.length} souls of the epic</Text>
      </View>

      <View style={styles.searchBar}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name or epithet..."
          placeholderTextColor={colors.textMuted}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.filterRow}>
        {FILTERS.map((f) => (
          <TouchableOpacity
            key={f}
            onPress={() => setFilter(f)}
            style={[styles.filterBtn, filter === f && styles.filterBtnActive]}
          >
            <Text style={[styles.filterText, filter === f && styles.filterTextActive]}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {filtered.map((character) => (
          <CharacterCard key={character.id} character={character} onPress={setSelectedChar} />
        ))}
        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  header: { paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8 },
  title: { fontSize: 28, fontWeight: '700', color: colors.gold },
  subtitle: { fontSize: 12, color: colors.textMuted, marginTop: 2 },

  searchBar: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: colors.bgCard,
    marginHorizontal: 16, borderRadius: 12, paddingHorizontal: 14, paddingVertical: 10,
    marginBottom: 12, borderWidth: 1, borderColor: colors.border,
  },
  searchIcon: { fontSize: 16, marginRight: 8 },
  searchInput: { flex: 1, color: colors.textPrimary, fontSize: 14 },

  filterRow: { flexDirection: 'row', paddingHorizontal: 16, gap: 8, marginBottom: 16 },
  filterBtn: {
    paddingHorizontal: 14, paddingVertical: 7, borderRadius: 20,
    backgroundColor: colors.bgCard, borderWidth: 1, borderColor: colors.border,
  },
  filterBtnActive: { backgroundColor: colors.gold, borderColor: colors.gold },
  filterText: { fontSize: 12, fontWeight: '600', color: colors.textMuted },
  filterTextActive: { color: colors.bg },

  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 16 },

  card: {
    flexDirection: 'row', backgroundColor: colors.bgCard, borderRadius: 14,
    padding: 14, marginBottom: 10, alignItems: 'flex-start',
    borderWidth: 1, borderColor: colors.border,
  },
  cardEmoji: { width: 52, height: 52, borderRadius: 14, alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  emoji: { fontSize: 26 },
  cardContent: { flex: 1 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 2 },
  name: { fontSize: 15, fontWeight: '700', color: colors.textPrimary },
  factionBadge: { paddingHorizontal: 7, paddingVertical: 2, borderRadius: 10 },
  factionText: { fontSize: 9, fontWeight: '800', letterSpacing: 1 },
  role: { fontSize: 12, color: colors.gold, marginBottom: 4 },
  bio: { fontSize: 12, color: colors.textMuted, lineHeight: 18 },
  epithets: { flexDirection: 'row', flexWrap: 'wrap', gap: 4, marginTop: 8 },
  epithetChip: { backgroundColor: colors.bgSurface, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20 },
  epithetText: { fontSize: 10, color: colors.textSecondary },
  arrow: { fontSize: 20, color: colors.textMuted, alignSelf: 'center', marginLeft: 4 },

  // Detail view
  detailOverlay: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: colors.bg, zIndex: 100,
  },
  detailScroll: { flex: 1 },
  closeBtn: {
    margin: 16, alignSelf: 'flex-start',
    backgroundColor: colors.bgCard, paddingHorizontal: 14, paddingVertical: 8,
    borderRadius: 20, borderWidth: 1, borderColor: colors.border,
  },
  closeBtnText: { color: colors.textSecondary, fontSize: 13 },
  detailHero: { alignItems: 'center', paddingVertical: 24, paddingHorizontal: 16 },
  detailEmoji: { width: 90, height: 90, borderRadius: 24, alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  detailEmojiText: { fontSize: 48 },
  detailName: { fontSize: 28, fontWeight: '800', color: colors.textPrimary, marginBottom: 4 },
  detailRole: { fontSize: 14, color: colors.gold, marginBottom: 10 },
  factionBadgeLg: { paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20 },
  factionTextLg: { fontSize: 12, fontWeight: '800', letterSpacing: 1 },

  detailSection: { paddingHorizontal: 16, marginBottom: 24 },
  detailSectionTitle: { fontSize: 12, fontWeight: '800', color: colors.gold, letterSpacing: 2, marginBottom: 12, textTransform: 'uppercase' },
  detailBio: { fontSize: 14, color: colors.textSecondary, lineHeight: 24 },
  epithetsWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  epithetChipLg: { backgroundColor: colors.bgCard, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, borderWidth: 1, borderColor: colors.border },
  epithetTextLg: { fontSize: 13, color: colors.textSecondary },

  statBarRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  statBarLabel: { width: 70, fontSize: 12, color: colors.textMuted },
  statBarTrack: { flex: 1, height: 6, backgroundColor: colors.bgSurface, borderRadius: 3, marginHorizontal: 10 },
  statBarFill: { height: 6, borderRadius: 3 },
  statBarValue: { width: 30, fontSize: 12, color: colors.textSecondary, textAlign: 'right' },

  relationRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    paddingVertical: 8, borderBottomWidth: 1, borderBottomColor: colors.border,
  },
  relationName: { fontSize: 14, color: colors.textPrimary, fontWeight: '600', textTransform: 'capitalize' },
  relationType: { fontSize: 13, color: colors.textMuted },
});
