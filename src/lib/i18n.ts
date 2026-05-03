import type { Locale } from '../types';

export type TranslationKey = string;

const dict: Record<string, Record<Locale, string>> = {
  nav_drive: { en: 'Daily Drive', 'zh-TW': '每日推進' },
  nav_huddle: { en: 'Huddle', 'zh-TW': '集合複習' },
  nav_quiz: { en: 'Quiz', 'zh-TW': '問答測驗' },
  nav_scrimmage: { en: 'Scrimmage', 'zh-TW': '拼字對抗' },
  nav_gap: { en: 'Red Zone', 'zh-TW': '紅區填空' },
  nav_trophy: { en: 'Trophy Case', 'zh-TW': '獎盃陳列' },

  drive_title: { en: 'Daily Drive', 'zh-TW': '每日推進' },
  drive_subtitle: { en: 'Learn your daily words and move the chains!', 'zh-TW': '學習每日單字，推進碼數！' },
  drive_new_words: { en: 'New Words', 'zh-TW': '新單字' },
  drive_complete: { en: 'Complete', 'zh-TW': '已完成' },
  drive_touchdown: { en: 'TOUCHDOWN!', 'zh-TW': '達陣！' },
  drive_yards_gained: { en: 'Yards Gained', 'zh-TW': '推進碼數' },
  drive_yards: { en: 'yards', 'zh-TW': '碼' },
  drive_know_it: { en: 'Know It!', 'zh-TW': '我會了！' },
  drive_not_sure: { en: 'Not Sure', 'zh-TW': '不太熟' },
  drive_favorite: { en: 'Favorite', 'zh-TW': '收藏' },
  drive_today_complete: { en: "Today's drive is complete!", 'zh-TW': '今天的推進已完成！' },
  drive_streak: { en: 'Streak', 'zh-TW': '連續天數' },

  huddle_title: { en: 'Huddle', 'zh-TW': '集合複習' },
  huddle_subtitle: { en: 'Review your weak words and favorites', 'zh-TW': '複習弱點單字和收藏' },
  huddle_tap_to_flip: { en: 'Tap to flip', 'zh-TW': '點擊翻轉' },
  huddle_know: { en: 'Got It', 'zh-TW': '會了' },
  huddle_dont_know: { en: 'Still Learning', 'zh-TW': '還要練' },
  huddle_all_caught_up: { en: 'All caught up!', 'zh-TW': '全部複習完畢！' },
  huddle_no_weak_words: { en: 'No weak words to review. Great job!', 'zh-TW': '沒有需要複習的弱點單字，太棒了！' },
  huddle_weak_words_count: { en: 'Weak Words', 'zh-TW': '弱點單字' },
  huddle_from_weak_list: { en: 'From Weak List', 'zh-TW': '來自弱點清單' },
  huddle_all_words: { en: 'All Words', 'zh-TW': '全部單字' },

  quiz_title: { en: 'Quiz', 'zh-TW': '問答測驗' },
  quiz_subtitle: { en: 'Test your knowledge on the gridiron!', 'zh-TW': '在球場上測試你的實力！' },
  quiz_correct_feedback_0: { en: 'First Down!', 'zh-TW': '首攻！' },
  quiz_correct_feedback_1: { en: 'Great Catch!', 'zh-TW': '漂亮接球！' },
  quiz_correct_feedback_2: { en: 'Touchdown!', 'zh-TW': '達陣！' },
  quiz_correct_feedback_3: { en: 'Nice Play!', 'zh-TW': '好球！' },
  quiz_correct_feedback_4: { en: 'Perfect!', 'zh-TW': '完美！' },
  quiz_wrong_feedback: { en: 'Flag on the play!', 'zh-TW': '犯規！再來一次！' },
  quiz_correct_answer: { en: 'Correct!', 'zh-TW': '答對了！' },
  quiz_score: { en: 'Score', 'zh-TW': '得分' },
  quiz_touchdown_celebration: { en: "TOUCHDOWN! You're a quiz champion!", 'zh-TW': '達陣！你是問答冠軍！' },
  quiz_no_questions: { en: 'No questions available', 'zh-TW': '目前沒有可用的題目' },

  spell_title: { en: 'Scrimmage', 'zh-TW': '拼字對抗' },
  spell_subtitle: { en: 'Spell the word to complete the pass!', 'zh-TW': '拼出單字完成傳球！' },
  spell_hint_button: { en: 'Hint', 'zh-TW': '提示' },
  spell_hint_first_letter: { en: 'First letter: ', 'zh-TW': '首字母：' },
  spell_hint_length: { en: 'Length: ', 'zh-TW': '長度：' },
  spell_hint_context: { en: 'Context: ', 'zh-TW': '上下文：' },
  spell_correct_feedback_0: { en: 'Nice throw!', 'zh-TW': '傳得好！' },
  spell_correct_feedback_1: { en: 'Completed pass!', 'zh-TW': '傳球成功！' },
  spell_correct_feedback_2: { en: 'Spiral perfect!', 'zh-TW': '完美螺旋！' },
  spell_wrong_try_again: { en: 'Incomplete pass! Try again.', 'zh-TW': '傳球失敗！再試一次。' },
  spell_placeholder: { en: 'Type the word...', 'zh-TW': '輸入單字...' },
  spell_type_answer: { en: 'Type your answer', 'zh-TW': '輸入你的答案' },

  gap_title: { en: 'Red Zone', 'zh-TW': '紅區填空' },
  gap_subtitle: { en: 'Fill in the missing word to score!', 'zh-TW': '填入正確單字來得分！' },
  gap_red_zone: { en: 'Red Zone', 'zh-TW': '紅區' },
  gap_touchdown: { en: 'TOUCHDOWN!', 'zh-TW': '達陣！' },
  gap_choose_word: { en: 'Choose the correct word', 'zh-TW': '選擇正確的單字' },
  gap_complete_sentence: { en: 'Complete the sentence', 'zh-TW': '完成句子' },

  trophy_title: { en: 'Trophy Case', 'zh-TW': '獎盃陳列' },
  trophy_subtitle: { en: 'Your achievements and career stats', 'zh-TW': '你的成就與生涯數據' },
  trophy_touchdowns: { en: 'Touchdowns', 'zh-TW': '達陣次數' },
  trophy_yards: { en: 'Total Yards', 'zh-TW': '總碼數' },
  trophy_learned: { en: 'Words Learned', 'zh-TW': '已學單字' },
  trophy_quiz_rate: { en: 'Quiz Accuracy', 'zh-TW': '測驗正確率' },
  trophy_achievements: { en: 'Achievements', 'zh-TW': '成就' },
  trophy_no_achievements: { en: 'No achievements yet. Keep grinding!', 'zh-TW': '還沒有成就，繼續努力！' },
  trophy_streak: { en: 'Day Streak', 'zh-TW': '連續天數' },

  app_title: { en: 'Regulus English Playbook', 'zh-TW': 'Regulus 英語戰術手冊' },
  app_subtitle: { en: 'Master English, one play at a time', 'zh-TW': '每次進攻，掌握英語' },
  lang_switch: { en: '中文', 'zh-TW': 'English' },
  empty_favorites: { en: 'No favorites yet. Star some words!', 'zh-TW': '還沒有收藏單字，快來收藏吧！' },
  empty_weak_words: { en: "No weak words. You're crushing it!", 'zh-TW': '沒有弱點單字，你超強！' },
  empty_learned: { en: 'No words learned yet. Start your drive!', 'zh-TW': '還沒有學過的單字，開始推進吧！' },
  search_placeholder: { en: 'Search words...', 'zh-TW': '搜尋單字...' },
  filter_all: { en: 'All', 'zh-TW': '全部' },
  filter_category: { en: 'Category', 'zh-TW': '分類' },
  export_data: { en: 'Export Data', 'zh-TW': '匯出資料' },
  import_data: { en: 'Import Data', 'zh-TW': '匯入資料' },
  import_success: { en: 'Data imported successfully!', 'zh-TW': '資料匯入成功！' },
  import_error: { en: 'Import failed. Please check the file.', 'zh-TW': '匯入失敗，請檢查檔案。' },
  dark_mode: { en: 'Dark Mode', 'zh-TW': '深色模式' },
  light_mode: { en: 'Light Mode', 'zh-TW': '淺色模式' },
  back_to_menu: { en: 'Back', 'zh-TW': '返回' },
  progress: { en: 'Progress', 'zh-TW': '進度' },
  total: { en: 'Total', 'zh-TW': '總計' },
  today: { en: 'Today', 'zh-TW': '今天' },
  yesterday: { en: 'Yesterday', 'zh-TW': '昨天' },
  tomorrow: { en: 'Tomorrow', 'zh-TW': '明天' },
  completed: { en: 'Completed', 'zh-TW': '已完成' },
  not_completed: { en: 'Not Completed', 'zh-TW': '未完成' },
  yes: { en: 'Yes', 'zh-TW': '是' },
  no: { en: 'No', 'zh-TW': '否' },
  hint: { en: 'Hint', 'zh-TW': '提示' },
  close: { en: 'Close', 'zh-TW': '關閉' },
  loading: { en: 'Loading...', 'zh-TW': '載入中...' },
  error_occurred: { en: 'An error occurred', 'zh-TW': '發生錯誤' },

  cat_all: { en: 'All', 'zh-TW': '全部' },
  cat_nfl: { en: 'NFL', 'zh-TW': 'NFL' },
  cat_football: { en: 'Football', 'zh-TW': '美式足球' },
  cat_daily: { en: 'Daily Life', 'zh-TW': '日常生活' },
  cat_emotion: { en: 'Emotions', 'zh-TW': '情緒感受' },
  cat_work: { en: 'Work', 'zh-TW': '職場工作' },
  cat_travel: { en: 'Travel', 'zh-TW': '旅行' },
  cat_tech: { en: 'Tech', 'zh-TW': '科技' },
  cat_food: { en: 'Food', 'zh-TW': '飲食' },

  diff_rookie: { en: 'Rookie', 'zh-TW': '新人' },
  diff_starter: { en: 'Starter', 'zh-TW': '先發' },
  diff_pro: { en: 'Pro', 'zh-TW': '職業' },

  ach_rookie_learner_name: { en: 'Rookie Learner', 'zh-TW': '新人學員' },
  ach_rookie_learner_desc: { en: 'Complete your first Daily Drive', 'zh-TW': '完成第一次每日推進' },
  ach_first_touchdown_name: { en: 'First Touchdown', 'zh-TW': '首次達陣' },
  ach_first_touchdown_desc: { en: 'Score your first touchdown in Quiz mode', 'zh-TW': '在問答模式中達成首次達陣' },
  ach_quiz_qb_name: { en: 'Quiz Quarterback', 'zh-TW': '問答四分衛' },
  ach_quiz_qb_desc: { en: 'Answer 50 quiz questions correctly', 'zh-TW': '正確回答 50 題問答' },
  ach_red_zone_master_name: { en: 'Red Zone Master', 'zh-TW': '紅區大師' },
  ach_red_zone_master_desc: { en: 'Complete 20 Red Zone gap fills', 'zh-TW': '完成 20 題紅區填空' },
  ach_7day_starter_name: { en: '7-Day Starter', 'zh-TW': '七天先發' },
  ach_7day_starter_desc: { en: 'Maintain a 7-day study streak', 'zh-TW': '連續學習七天' },
  ach_50_words_name: { en: 'Half-Century Club', 'zh-TW': '半百俱樂部' },
  ach_50_words_desc: { en: 'Learn 50 words', 'zh-TW': '學會 50 個單字' },
  ach_100_quiz_name: { en: 'Century Club', 'zh-TW': '百題俱樂部' },
  ach_100_quiz_desc: { en: 'Answer 100 quiz questions correctly', 'zh-TW': '正確回答 100 題問答' },
};

export const quizCorrectFeedback = (locale: Locale): string[] =>
  [0, 1, 2, 3, 4].map((i) => dict[`quiz_correct_feedback_${i}`][locale]);

export const spellCorrectFeedback = (locale: Locale): string[] =>
  [0, 1, 2].map((i) => dict[`spell_correct_feedback_${i}`][locale]);

let currentLocale: Locale = 'en';

export function t(key: string, locale: Locale): string {
  const entry = dict[key];
  if (!entry) {
    return key;
  }
  return entry[locale];
}

export function setLocale(locale: Locale): void {
  currentLocale = locale;
}

export function getLocale(): Locale {
  return currentLocale;
}
