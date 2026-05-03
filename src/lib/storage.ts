import type { UserProgress } from '../types';

const STORAGE_KEY = 'regulus_english_playbook_progress';

export function getDefaultProgress(): UserProgress {
  return {
    learnedWords: [],
    weakWords: [],
    favoriteWords: [],
    quizStats: { correct: 0, total: 0 },
    dailyProgress: { date: '', completedWordIds: [] },
    streak: { lastStudyDate: '', count: 0 },
    achievements: [],
    touchdowns: 0,
    yardage: 0,
    darkMode: false,
    lang: 'en',
  };
}

export function loadProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return getDefaultProgress();
    const parsed = JSON.parse(raw);
    return { ...getDefaultProgress(), ...parsed };
  } catch {
    return getDefaultProgress();
  }
}

export function saveProgress(p: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch (e) {
    console.error('Failed to save progress to localStorage', e);
  }
}

export function updateProgress(partial: Partial<UserProgress>): UserProgress {
  const current = loadProgress();
  const merged = { ...current, ...partial };
  saveProgress(merged);
  return merged;
}

export function resetProgress(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(getDefaultProgress()));
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}
