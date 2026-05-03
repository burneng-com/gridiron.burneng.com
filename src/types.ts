export interface Word {
  id: string;
  word: string;
  pronunciation: string;
  partOfSpeech: string;
  zhTW: string;
  definitionEn: string;
  exampleEn: string;
  exampleZhTW: string;
  difficulty: 'rookie' | 'starter' | 'pro';
  category: 'nfl' | 'football' | 'daily' | 'emotion' | 'work' | 'travel' | 'tech' | 'food';
  footballContext?: string;
}

export interface DailyProgress {
  date: string;
  completedWordIds: string[];
}

export interface UserProgress {
  learnedWords: string[];
  weakWords: string[];
  favoriteWords: string[];
  quizStats: { correct: number; total: number };
  dailyProgress: DailyProgress;
  streak: { lastStudyDate: string; count: number };
  achievements: string[];
  touchdowns: number;
  yardage: number;
  darkMode: boolean;
  lang: 'en' | 'zh-TW';
}

export interface Achievement {
  id: string;
  name: { en: string; 'zh-TW': string };
  description: { en: string; 'zh-TW': string };
  check: (p: UserProgress) => boolean;
}

export type TabId = 'drive' | 'huddle' | 'quiz' | 'scrimmage' | 'gap' | 'trophy';

export type Locale = 'en' | 'zh-TW';
