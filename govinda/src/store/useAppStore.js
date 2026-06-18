import { create } from 'zustand';

const useAppStore = create((set, get) => ({
  // Language preference
  language: 'en',
  setLanguage: (lang) => set({ language: lang }),

  // Bookmarks
  bookmarkedVerses: [],
  bookmarkedCharacters: [],
  toggleVerseBookmark: (verseId) => {
    const current = get().bookmarkedVerses;
    const exists = current.includes(verseId);
    set({ bookmarkedVerses: exists ? current.filter(id => id !== verseId) : [...current, verseId] });
  },
  toggleCharacterBookmark: (charId) => {
    const current = get().bookmarkedCharacters;
    const exists = current.includes(charId);
    set({ bookmarkedCharacters: exists ? current.filter(id => id !== charId) : [...current, charId] });
  },

  // Reading progress
  currentParva: null,
  setCurrentParva: (parva) => set({ currentParva: parva }),

  // Chat history for Ask Govinda
  chatMessages: [],
  addChatMessage: (message) => set((state) => ({
    chatMessages: [...state.chatMessages, message],
  })),
  clearChat: () => set({ chatMessages: [] }),

  // User profile
  userName: '',
  setUserName: (name) => set({ userName: name }),
  streak: 0,
  incrementStreak: () => set((state) => ({ streak: state.streak + 1 })),

  // Quiz state
  quizScore: 0,
  totalQuizzes: 0,
  updateQuizScore: (score) => set((state) => ({
    quizScore: state.quizScore + score,
    totalQuizzes: state.totalQuizzes + 1,
  })),
}));

export default useAppStore;
