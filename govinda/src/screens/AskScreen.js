import React, { useState, useRef } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, ScrollView,
  StyleSheet, StatusBar, KeyboardAvoidingView, Platform, ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../constants/colors';
import { askGovinda } from '../services/api';
import useAppStore from '../store/useAppStore';

const SUGGESTIONS = [
  'Why did Krishna not fight in the Kurukshetra war?',
  'What is the meaning of Nishkama Karma?',
  'Was Karna right to fight against the Pandavas?',
  'What is the significance of Draupadi\'s vastraharan?',
  'Who was the wisest character in Mahabharata?',
  'Explain the Chakravyuha and Abhimanyu\'s death',
];

const MessageBubble = ({ message }) => {
  const isUser = message.role === 'user';
  return (
    <View style={[styles.bubbleRow, isUser ? styles.userRow : styles.assistantRow]}>
      {!isUser && (
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarEmoji}>🪈</Text>
        </View>
      )}
      <View style={[styles.bubble, isUser ? styles.userBubble : styles.assistantBubble]}>
        <Text style={[styles.bubbleText, isUser ? styles.userText : styles.assistantText]}>
          {message.content}
        </Text>
      </View>
    </View>
  );
};

export default function AskScreen() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);
  const { chatMessages, addChatMessage, clearChat } = useAppStore();

  const sendMessage = async (text) => {
    const userText = (text || input).trim();
    if (!userText || loading) return;

    setInput('');
    addChatMessage({ role: 'user', content: userText });

    setLoading(true);
    try {
      const history = [...chatMessages, { role: 'user', content: userText }];
      const reply = await askGovinda(history);
      addChatMessage({ role: 'assistant', content: reply });
    } catch (err) {
      addChatMessage({
        role: 'assistant',
        content: 'I am unable to respond right now, dear devotee. Please ensure the server is running and try again. 🙏',
      });
    } finally {
      setLoading(false);
      setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 100);
    }
  };

  const showWelcome = chatMessages.length === 0;

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <StatusBar barStyle="light-content" />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.govindaAvatar}>
            <Text style={styles.govindaEmoji}>🪈</Text>
          </View>
          <View>
            <Text style={styles.title}>Ask Govinda</Text>
            <View style={styles.onlineRow}>
              <View style={styles.onlineDot} />
              <Text style={styles.onlineText}>Powered by Llama 3 · Groq</Text>
            </View>
          </View>
        </View>
        {chatMessages.length > 0 && (
          <TouchableOpacity onPress={clearChat} style={styles.clearBtn}>
            <Text style={styles.clearText}>Clear</Text>
          </TouchableOpacity>
        )}
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}
      >
        <ScrollView
          ref={scrollRef}
          style={styles.messages}
          contentContainerStyle={styles.messagesContent}
          showsVerticalScrollIndicator={false}
        >
          {showWelcome ? (
            <View style={styles.welcome}>
              <View style={styles.welcomeAvatar}>
                <Text style={styles.welcomeEmoji}>🪈</Text>
              </View>
              <Text style={styles.welcomeTitle}>Jai Govinda 🙏</Text>
              <Text style={styles.welcomeText}>
                I am Govinda — your guide through the greatest epic ever told. Ask me anything about the Mahabharata, the Bhagavad Gita, its characters, wisdom, or philosophy.
              </Text>
              <Text style={styles.suggestionsTitle}>Try asking:</Text>
              <View style={styles.suggestionsGrid}>
                {SUGGESTIONS.map((s, i) => (
                  <TouchableOpacity
                    key={i}
                    style={styles.suggestionChip}
                    onPress={() => sendMessage(s)}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.suggestionText}>{s}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ) : (
            chatMessages.map((msg, i) => (
              <MessageBubble key={i} message={msg} />
            ))
          )}

          {loading && (
            <View style={styles.bubbleRow}>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarEmoji}>🪈</Text>
              </View>
              <View style={[styles.bubble, styles.assistantBubble, styles.typingBubble]}>
                <ActivityIndicator size="small" color={colors.gold} />
                <Text style={styles.typingText}>Contemplating...</Text>
              </View>
            </View>
          )}

          <View style={{ height: 16 }} />
        </ScrollView>

        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={setInput}
            placeholder="Ask about Mahabharata..."
            placeholderTextColor={colors.textMuted}
            multiline
            maxLength={500}
            onSubmitEditing={() => sendMessage()}
          />
          <TouchableOpacity
            onPress={() => sendMessage()}
            style={[styles.sendBtn, (!input.trim() || loading) && styles.sendBtnDisabled]}
            disabled={!input.trim() || loading}
          >
            <Text style={styles.sendIcon}>↑</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.bg },
  flex: { flex: 1 },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
    paddingHorizontal: 16, paddingTop: 12, paddingBottom: 12,
    borderBottomWidth: 1, borderBottomColor: colors.border,
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  govindaAvatar: {
    width: 44, height: 44, borderRadius: 22, backgroundColor: colors.krishnaBlue,
    alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: colors.gold,
  },
  govindaEmoji: { fontSize: 22 },
  title: { fontSize: 18, fontWeight: '700', color: colors.textPrimary },
  onlineRow: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 },
  onlineDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#4CAF50' },
  onlineText: { fontSize: 11, color: colors.textMuted },
  clearBtn: { backgroundColor: colors.bgCard, paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16, borderWidth: 1, borderColor: colors.border },
  clearText: { fontSize: 12, color: colors.textSecondary },

  messages: { flex: 1 },
  messagesContent: { padding: 16 },

  welcome: { alignItems: 'center', paddingVertical: 16 },
  welcomeAvatar: {
    width: 80, height: 80, borderRadius: 40, backgroundColor: colors.krishnaBlue,
    alignItems: 'center', justifyContent: 'center', marginBottom: 16,
    borderWidth: 3, borderColor: colors.gold,
  },
  welcomeEmoji: { fontSize: 38 },
  welcomeTitle: { fontSize: 22, fontWeight: '700', color: colors.gold, marginBottom: 10 },
  welcomeText: { fontSize: 14, color: colors.textSecondary, textAlign: 'center', lineHeight: 22, marginBottom: 24 },
  suggestionsTitle: { fontSize: 12, fontWeight: '700', color: colors.textMuted, letterSpacing: 1, marginBottom: 12, textTransform: 'uppercase', alignSelf: 'flex-start' },
  suggestionsGrid: { gap: 8, width: '100%' },
  suggestionChip: {
    backgroundColor: colors.bgCard, borderRadius: 12, padding: 12,
    borderWidth: 1, borderColor: colors.border,
  },
  suggestionText: { fontSize: 13, color: colors.textSecondary, lineHeight: 18 },

  bubbleRow: { flexDirection: 'row', marginBottom: 16, alignItems: 'flex-end' },
  userRow: { justifyContent: 'flex-end' },
  assistantRow: { justifyContent: 'flex-start' },
  avatarCircle: {
    width: 34, height: 34, borderRadius: 17, backgroundColor: colors.krishnaBlue,
    alignItems: 'center', justifyContent: 'center', marginRight: 8, marginBottom: 2,
    borderWidth: 1, borderColor: colors.gold,
  },
  avatarEmoji: { fontSize: 16 },
  bubble: { maxWidth: '78%', borderRadius: 16, padding: 14 },
  userBubble: { backgroundColor: colors.gold, borderBottomRightRadius: 4 },
  assistantBubble: { backgroundColor: colors.bgCard, borderBottomLeftRadius: 4, borderWidth: 1, borderColor: colors.border },
  bubbleText: { fontSize: 14, lineHeight: 22 },
  userText: { color: colors.bg },
  assistantText: { color: colors.textPrimary },
  typingBubble: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 14 },
  typingText: { fontSize: 13, color: colors.textMuted, fontStyle: 'italic' },

  inputArea: {
    flexDirection: 'row', alignItems: 'flex-end',
    paddingHorizontal: 16, paddingVertical: 12,
    borderTopWidth: 1, borderTopColor: colors.border, gap: 10,
  },
  input: {
    flex: 1, backgroundColor: colors.bgCard, borderRadius: 20,
    paddingHorizontal: 16, paddingVertical: 12, color: colors.textPrimary,
    fontSize: 14, maxHeight: 120, borderWidth: 1, borderColor: colors.border,
  },
  sendBtn: {
    width: 44, height: 44, borderRadius: 22, backgroundColor: colors.gold,
    alignItems: 'center', justifyContent: 'center',
  },
  sendBtnDisabled: { backgroundColor: colors.bgSurface },
  sendIcon: { fontSize: 20, fontWeight: '700', color: colors.bg },
});
