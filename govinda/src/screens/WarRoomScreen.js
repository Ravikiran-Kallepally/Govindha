import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../constants/colors';

const warDays = [
  {
    day: 1,
    commander: 'Bhishma',
    commanderEmoji: '🏔️',
    commanderSide: 'Kaurava',
    formation: 'Krauncha Vyuha (Heron)',
    pandavaCommander: 'Dhrishtadyumna',
    deaths: ['Many unnamed soldiers'],
    highlight: 'The war begins. Bhishma\'s conch Panchajanya sounds. Arjuna\'s crisis and Krishna\'s Gita.',
    color: '#263238',
    result: 'Kaurava',
  },
  {
    day: 2,
    commander: 'Bhishma',
    commanderEmoji: '🏔️',
    commanderSide: 'Kaurava',
    formation: 'Garuda Vyuha (Eagle)',
    pandavaCommander: 'Arjuna',
    deaths: ['Virata\'s sons'],
    highlight: 'Bhishma\'s devastating attack on the Pandava army. Arjuna counters with the Gandiva.',
    color: '#263238',
    result: 'Kaurava',
  },
  {
    day: 3,
    commander: 'Bhishma',
    commanderEmoji: '🏔️',
    commanderSide: 'Kaurava',
    formation: 'Garuda Vyuha',
    pandavaCommander: 'Bhima',
    deaths: ['Thousands on both sides'],
    highlight: 'Bhima kills 8 of Dhritarashtra\'s sons. The Pandavas rally.',
    color: '#263238',
    result: 'Pandava',
  },
  {
    day: 4,
    commander: 'Bhishma',
    commanderEmoji: '🏔️',
    commanderSide: 'Kaurava',
    formation: 'Makar Vyuha (Crocodile)',
    pandavaCommander: 'Arjuna',
    deaths: ['Iravan (Arjuna\'s son)'],
    highlight: 'Iravan, Arjuna\'s son by Ulupi, is killed by Alambusha. Ghatotkacha enters the war.',
    color: '#B71C1C',
    result: 'Kaurava',
  },
  {
    day: 5,
    commander: 'Bhishma',
    commanderEmoji: '🏔️',
    commanderSide: 'Kaurava',
    formation: 'Makar Vyuha',
    pandavaCommander: 'Bhima',
    deaths: ['Thousands'],
    highlight: 'Satyaki saves Bhima. Bhishma overwhelms the Pandava forces.',
    color: '#263238',
    result: 'Kaurava',
  },
  {
    day: 6,
    commander: 'Bhishma',
    commanderEmoji: '🏔️',
    commanderSide: 'Kaurava',
    formation: 'Chakra Vyuha',
    pandavaCommander: 'Dhrishtadyumna',
    deaths: ['Many Pandava soldiers'],
    highlight: 'Krishna reminds Arjuna of his purpose. Arjuna fights with renewed determination.',
    color: '#263238',
    result: 'Kaurava',
  },
  {
    day: 7,
    commander: 'Bhishma',
    commanderEmoji: '🏔️',
    commanderSide: 'Kaurava',
    formation: 'Mandala Vyuha',
    pandavaCommander: 'Yudhishthira',
    deaths: ['Thousands'],
    highlight: 'Bhishma nearly kills Yudhishthira. Drona\'s section is overwhelmed by Arjuna.',
    color: '#263238',
    result: 'Kaurava',
  },
  {
    day: 8,
    commander: 'Bhishma',
    commanderEmoji: '🏔️',
    commanderSide: 'Kaurava',
    formation: 'Oormi Vyuha',
    pandavaCommander: 'Arjuna',
    deaths: ['Iravan\'s ally Babruvahana wounded', 'Abhimanyu fights heroically'],
    highlight: 'Ghatotkacha wreaks havoc on the Kaurava forces at night. Duryodhana is terrified.',
    color: '#1565C0',
    result: 'Pandava',
  },
  {
    day: 9,
    commander: 'Bhishma',
    commanderEmoji: '🏔️',
    commanderSide: 'Kaurava',
    formation: 'Sarvatomukha',
    pandavaCommander: 'Arjuna',
    deaths: ['Massive casualties'],
    highlight: 'Bhishma\'s assault is so devastating that Krishna breaks his own vow, picking up a chariot wheel to attack Bhishma.',
    color: '#B71C1C',
    result: 'Kaurava',
  },
  {
    day: 10,
    commander: 'Bhishma',
    commanderEmoji: '🏔️',
    commanderSide: 'Kaurava',
    formation: 'Sarvatomukha',
    pandavaCommander: 'Arjuna (with Shikhandi)',
    deaths: ['Bhishma (falls)'],
    highlight: '🏆 TURNING POINT: Arjuna uses Shikhandi as cover. Bhishma falls on a bed of 1,000 arrows. He will wait on this bed for 58 more days to choose his own death.',
    color: '#FF8F00',
    result: 'Pandava',
    isKeyDay: true,
  },
  {
    day: 11,
    commander: 'Drona',
    commanderEmoji: '📖',
    commanderSide: 'Kaurava',
    formation: 'Garuda Vyuha',
    pandavaCommander: 'Dhrishtadyumna',
    deaths: ['Many warriors'],
    highlight: 'Drona takes command. His goal: capture Yudhishthira alive. Arjuna thwarts him at every turn.',
    color: '#4A148C',
    result: 'Draw',
  },
  {
    day: 12,
    commander: 'Drona',
    commanderEmoji: '📖',
    commanderSide: 'Kaurava',
    formation: 'Garuda Vyuha',
    pandavaCommander: 'Arjuna',
    deaths: ['Thousands'],
    highlight: 'Drona creates the Chakravyuha. Abhimanyu, only 16, volunteers to break it.',
    color: '#4A148C',
    result: 'Kaurava',
  },
  {
    day: 13,
    commander: 'Drona',
    commanderEmoji: '📖',
    commanderSide: 'Kaurava',
    formation: 'Chakravyuha (Disc)',
    pandavaCommander: 'Abhimanyu',
    deaths: ['Abhimanyu 💔'],
    highlight: '💔 DARKEST DAY: Abhimanyu breaks into the Chakravyuha alone — but cannot exit. Six maharathis attack him simultaneously, violating the rules of war. The 16-year-old warrior falls.',
    color: '#B71C1C',
    result: 'Kaurava',
    isKeyDay: true,
  },
  {
    day: 14,
    commander: 'Drona',
    commanderEmoji: '📖',
    commanderSide: 'Kaurava',
    formation: 'Padma Vyuha',
    pandavaCommander: 'Arjuna (avenging Abhimanyu)',
    deaths: ['Jayadratha'],
    highlight: '⚡ VENGEANCE: Arjuna vows to kill Jayadratha (who blocked help for Abhimanyu) by sunset or kill himself. Krishna creates an artificial eclipse. At the last moment, the sun reappears. Jayadratha dies.',
    color: '#E65100',
    result: 'Pandava',
    isKeyDay: true,
  },
  {
    day: 15,
    commander: 'Drona',
    commanderEmoji: '📖',
    commanderSide: 'Kaurava',
    formation: 'Soochi Vyuha',
    pandavaCommander: 'Dhrishtadyumna',
    deaths: ['Drona 📖'],
    highlight: 'Drona falls. Yudhishthira, compelled by Krishna, says "Ashwatthama is dead" (referring to an elephant). Drona, believing his son dead, lays down his weapons. Dhrishtadyumna beheads him.',
    color: '#4A148C',
    result: 'Pandava',
    isKeyDay: true,
  },
  {
    day: 16,
    commander: 'Karna',
    commanderEmoji: '☀️',
    commanderSide: 'Kaurava',
    formation: 'Makara Vyuha',
    pandavaCommander: 'Arjuna',
    deaths: ['Massive losses on both sides'],
    highlight: 'Karna in command. His greatest day — he defeats every Pandava except Arjuna. He could have killed Yudhishthira but kept his promise to Kunti.',
    color: '#E65100',
    result: 'Kaurava',
  },
  {
    day: 17,
    commander: 'Karna',
    commanderEmoji: '☀️',
    commanderSide: 'Kaurava',
    formation: 'Vyuha abandoned',
    pandavaCommander: 'Arjuna',
    deaths: ['Karna ☀️'],
    highlight: '⚔️ THE DUEL: The greatest single combat — Karna vs Arjuna. Karna\'s chariot wheel sinks into the ground. He dismounts to free it. Arjuna, on Krishna\'s command, shoots him. Karna falls.',
    color: '#E65100',
    result: 'Pandava',
    isKeyDay: true,
  },
  {
    day: 18,
    commander: 'Shalya → Duryodhana',
    commanderEmoji: '💀',
    commanderSide: 'Kaurava',
    formation: 'No formation',
    pandavaCommander: 'All Pandavas',
    deaths: ['Shalya', 'Shakuni', 'Duryodhana 👑'],
    highlight: '🏆 THE END: Yudhishthira kills Shalya. Bhima kills Shakuni. Duryodhana escapes to a lake but is challenged by Bhima to mace combat. Bhima strikes Duryodhana\'s thigh (illegally). Duryodhana falls. The war ends.',
    color: '#37474F',
    result: 'Pandava',
    isKeyDay: true,
  },
];

const DayCard = ({ warDay, isExpanded, onPress }) => (
  <TouchableOpacity onPress={() => onPress(warDay.day)} style={styles.dayCard} activeOpacity={0.8}>
    <LinearGradient
      colors={[warDay.color + '33', colors.bgCard]}
      style={styles.dayCardInner}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.dayHeader}>
        <View style={[styles.dayBadge, { backgroundColor: warDay.color }]}>
          <Text style={styles.dayNum}>Day {warDay.day}</Text>
        </View>
        <View style={styles.dayMeta}>
          <Text style={styles.dayCommander}>{warDay.commanderEmoji} {warDay.commander}</Text>
          <View style={[styles.resultBadge, { backgroundColor: warDay.result === 'Pandava' ? colors.pandava + '33' : warDay.result === 'Kaurava' ? colors.kaurava + '33' : colors.bgSurface }]}>
            <Text style={[styles.resultText, { color: warDay.result === 'Pandava' ? colors.pandava : warDay.result === 'Kaurava' ? colors.kaurava : colors.textMuted }]}>
              {warDay.result}
            </Text>
          </View>
        </View>
        {warDay.isKeyDay && <Text style={styles.keyBadge}>KEY</Text>}
      </View>
      <Text style={styles.dayFormation}>Formation: {warDay.formation}</Text>
      <Text style={styles.dayHighlight} numberOfLines={isExpanded ? undefined : 2}>
        {warDay.highlight}
      </Text>
      {isExpanded && warDay.deaths.length > 0 && (
        <View style={styles.deathsSection}>
          <Text style={styles.deathsLabel}>Notable Deaths:</Text>
          {warDay.deaths.map((d, i) => (
            <Text key={i} style={styles.deathItem}>• {d}</Text>
          ))}
        </View>
      )}
      <Text style={styles.expandHint}>{isExpanded ? '▲ Less' : '▼ More'}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export default function WarRoomScreen() {
  const [expandedDay, setExpandedDay] = useState(null);

  const pandavaWins = warDays.filter(d => d.result === 'Pandava').length;
  const kauravaWins = warDays.filter(d => d.result === 'Kaurava').length;

  const toggleDay = (day) => setExpandedDay(expandedDay === day ? null : day);

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>War Room</Text>
          <Text style={styles.subtitle}>The 18 Days of Kurukshetra</Text>
        </View>

        <LinearGradient colors={['#1A0A0A', '#2A1010']} style={styles.scoreboard}>
          <View style={styles.scoreTeam}>
            <Text style={styles.scoreEmoji}>🔵</Text>
            <Text style={[styles.scoreTeamName, { color: colors.pandava }]}>Pandavas</Text>
            <Text style={[styles.scoreNum, { color: colors.pandava }]}>{pandavaWins}</Text>
            <Text style={styles.scoreLabel}>day wins</Text>
          </View>
          <View style={styles.scoreCenter}>
            <Text style={styles.scoreVs}>VS</Text>
            <Text style={styles.scoreDays}>18 Days</Text>
          </View>
          <View style={styles.scoreTeam}>
            <Text style={styles.scoreEmoji}>🔴</Text>
            <Text style={[styles.scoreTeamName, { color: colors.kaurava }]}>Kauravas</Text>
            <Text style={[styles.scoreNum, { color: colors.kaurava }]}>{kauravaWins}</Text>
            <Text style={styles.scoreLabel}>day wins</Text>
          </View>
        </LinearGradient>

        <View style={styles.legendRow}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: colors.pandava }]} />
            <Text style={styles.legendText}>Pandava win</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: colors.kaurava }]} />
            <Text style={styles.legendText}>Kaurava win</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: colors.gold }]} />
            <Text style={styles.legendText}>KEY event</Text>
          </View>
        </View>

        {warDays.map((day) => (
          <DayCard
            key={day.day}
            warDay={day}
            isExpanded={expandedDay === day.day}
            onPress={toggleDay}
          />
        ))}

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  scrollContent: { paddingHorizontal: 16 },

  header: { paddingTop: 16, paddingBottom: 12 },
  title: { fontSize: 28, fontWeight: '700', color: colors.gold },
  subtitle: { fontSize: 12, color: colors.textMuted, marginTop: 2 },

  scoreboard: {
    flexDirection: 'row', borderRadius: 16, padding: 20, marginBottom: 16,
    borderWidth: 1, borderColor: colors.border,
  },
  scoreTeam: { flex: 1, alignItems: 'center' },
  scoreEmoji: { fontSize: 24, marginBottom: 4 },
  scoreTeamName: { fontSize: 14, fontWeight: '700', marginBottom: 4 },
  scoreNum: { fontSize: 36, fontWeight: '800' },
  scoreLabel: { fontSize: 11, color: colors.textMuted },
  scoreCenter: { alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16 },
  scoreVs: { fontSize: 16, fontWeight: '800', color: colors.gold, marginBottom: 4 },
  scoreDays: { fontSize: 11, color: colors.textMuted },

  legendRow: { flexDirection: 'row', gap: 16, marginBottom: 16 },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendDot: { width: 8, height: 8, borderRadius: 4 },
  legendText: { fontSize: 11, color: colors.textMuted },

  dayCard: { borderRadius: 14, overflow: 'hidden', marginBottom: 10, borderWidth: 1, borderColor: colors.border },
  dayCardInner: { padding: 14 },
  dayHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  dayBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 },
  dayNum: { fontSize: 12, fontWeight: '700', color: '#fff' },
  dayMeta: { flex: 1 },
  dayCommander: { fontSize: 13, fontWeight: '600', color: colors.textPrimary },
  resultBadge: { paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, alignSelf: 'flex-start', marginTop: 2 },
  resultText: { fontSize: 10, fontWeight: '700' },
  keyBadge: { backgroundColor: colors.gold, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 10, fontSize: 10, fontWeight: '800', color: colors.bg },
  dayFormation: { fontSize: 11, color: colors.textMuted, marginBottom: 6, fontStyle: 'italic' },
  dayHighlight: { fontSize: 13, color: colors.textSecondary, lineHeight: 20 },
  deathsSection: { marginTop: 10, backgroundColor: colors.bgSurface, borderRadius: 8, padding: 10 },
  deathsLabel: { fontSize: 11, fontWeight: '700', color: colors.gold, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 },
  deathItem: { fontSize: 12, color: colors.textMuted, marginBottom: 2 },
  expandHint: { fontSize: 10, color: colors.textMuted, textAlign: 'right', marginTop: 8 },
});
