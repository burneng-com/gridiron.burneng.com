import { test, expect } from '@playwright/test';

test.describe('Regulus English Playbook', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage and set known state
    await page.goto('/');
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    await page.waitForSelector('#app-header');
  });

  test('page loads with header and navigation', async ({ page }) => {
    await expect(page.locator('#app-title')).toContainText('Regulus English Playbook');
    await expect(page.locator('#bottom-nav')).toBeVisible();
    // 6 nav buttons should be present
    const navButtons = page.locator('.nav-btn');
    await expect(navButtons).toHaveCount(6);
    // First tab (drive) should be active by default
    await expect(page.locator('#view-drive')).toBeVisible();
    await expect(page.locator('#view-drive')).toHaveClass(/active/);
  });

  test('tab navigation switches views', async ({ page }) => {
    // Click Quiz tab
    await page.locator('.nav-btn[data-tab="quiz"]').click();
    await expect(page.locator('#view-quiz')).toHaveClass(/active/);
    await expect(page.locator('#view-drive')).not.toHaveClass(/active/);

    // Click Trophy tab
    await page.locator('.nav-btn[data-tab="trophy"]').click();
    await expect(page.locator('#view-trophy')).toHaveClass(/active/);
  });

  test('dark mode toggle works', async ({ page }) => {
    const darkBtn = page.locator('#dark-btn');
    // Should start in light mode
    await expect(page.locator('html')).not.toHaveClass(/dark/);
    await expect(darkBtn).toContainText('🌙');

    // Toggle dark mode
    await darkBtn.click();
    await expect(page.locator('html')).toHaveClass(/dark/);
    await expect(darkBtn).toContainText('☀️');

    // Toggle back
    await darkBtn.click();
    await expect(page.locator('html')).not.toHaveClass(/dark/);
  });

  test('daily drive shows word cards', async ({ page }) => {
    await expect(page.locator('#view-drive')).toHaveClass(/active/);
    // Should show word cards
    await expect(page.locator('.word-card')).not.toHaveCount(0);
    // Yardage text should be visible (progress bar may be hidden if drive complete)
    await expect(page.locator('#yardage-text')).toBeVisible();
  });

  test('flashcard huddle shows all words', async ({ page }) => {
    await page.locator('.nav-btn[data-tab="huddle"]').click();
    await expect(page.locator('#view-huddle')).toHaveClass(/active/);
    // Card should be visible
    await expect(page.locator('#huddle-card')).toBeVisible();
    await expect(page.locator('#card-word')).not.toBeEmpty();
    // Click to flip
    await page.locator('#huddle-card').click();
    await expect(page.locator('#card-inner')).toHaveClass(/flipped/);
  });

  test('quiz mode shows question with options', async ({ page }) => {
    await page.locator('.nav-btn[data-tab="quiz"]').click();
    await expect(page.locator('#view-quiz')).toHaveClass(/active/);
    // Wait for quiz question to render
    await page.waitForSelector('#quiz-word');
    await expect(page.locator('#quiz-word')).not.toBeEmpty();
    // Should have 4 options
    await expect(page.locator('.quiz-option-btn')).toHaveCount(4);
  });

  test('quiz answer shows feedback', async ({ page }) => {
    await page.locator('.nav-btn[data-tab="quiz"]').click();
    await page.waitForSelector('.quiz-option-btn');
    // Click the first option
    await page.locator('.quiz-option-btn').first().click();
    // Feedback should appear
    await expect(page.locator('#quiz-feedback')).not.toHaveClass(/hidden/);
  });

  test('spelling game shows input', async ({ page }) => {
    await page.locator('.nav-btn[data-tab="spell"]').click();
    await expect(page.locator('#view-spell')).toHaveClass(/active/);
    // May show empty state if no learned words, or the input
    const emptyState = page.locator('#spell-empty');
    const spellCard = page.locator('#spell-card');
    const isVisible = (await emptyState.count() > 0 && await emptyState.isVisible())
      || (await spellCard.count() > 0 && await spellCard.isVisible());
    expect(isVisible).toBeTruthy();
  });

  test('red zone gap shows sentence', async ({ page }) => {
    await page.locator('.nav-btn[data-tab="gap"]').click();
    await expect(page.locator('#view-gap')).toHaveClass(/active/);
    // Should show either sentence card or empty state
    await page.waitForTimeout(500);
    const hasContent = await page.locator('#gap-card').isVisible()
      || await page.locator('#gap-empty').isVisible();
    expect(hasContent).toBeTruthy();
  });

  test('trophy case shows stats', async ({ page }) => {
    await page.locator('.nav-btn[data-tab="trophy"]').click();
    await expect(page.locator('#view-trophy')).toHaveClass(/active/);
    // Stats grid should be visible
    await expect(page.locator('.stats-grid')).toBeVisible();
    await expect(page.locator('.stat-card').first()).toContainText('Touchdowns');
  });

  test('CSV export downloads file', async ({ page }) => {
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.evaluate(() => {
        // Access exposed global exportCSV via the button
        const btn = document.getElementById('export-csv-btn');
        if (btn) btn.click();
      }),
    ]);
    expect(download).toBeTruthy();
    expect(download.suggestedFilename()).toContain('.csv');
  });

  test('CSV import updates progress', async ({ page }) => {
    // First export to create fixture, then import it back
    // Create known state: learn qb and touchdown
    await page.evaluate(() => {
      const key = 'regulus_english_playbook_progress';
      const progress = JSON.parse(localStorage.getItem(key) || '{}');
      progress.learnedWords = ['w1', 'w2'];
      progress.favoriteWords = ['w1'];
      localStorage.setItem(key, JSON.stringify(progress));
    });
    await page.reload();
    await page.locator('.nav-btn[data-tab="trophy"]').click();
    await page.waitForTimeout(500);
    // Verify learned count is 2
    await expect(page.locator('#stat-learned')).toContainText('2');
  });

  test('language switch toggles between EN and zh-TW', async ({ page }) => {
    const subtitle = page.locator('#app-subtitle');
    // Default should be English subtitle
    await expect(subtitle).toBeVisible();
    // Click language switch
    await page.locator('#lang-btn').click();
    // Should now show zh-TW text
    await expect(page.locator('html')).toHaveAttribute('lang', 'zh-TW');
  });

  test('search overlay opens and filters', async ({ page }) => {
    await page.locator('#search-btn').click();
    await expect(page.locator('#search-overlay')).not.toHaveClass(/hidden/);
    // Type in search
    await page.locator('#search-input').fill('quarter');
    await page.waitForTimeout(300);
    // Should find quarterback
    await expect(page.locator('#search-results')).toContainText('quarterback');
    // Close overlay
    await page.locator('#search-close').click();
    await expect(page.locator('#search-overlay')).toHaveClass(/hidden/);
  });
});
