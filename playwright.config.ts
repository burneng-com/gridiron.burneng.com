import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    baseURL: 'http://localhost:4322',
    viewport: { width: 390, height: 844 },
    locale: 'en-US',
  },
  projects: [
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'bun run build && bun run preview --port 4322',
    url: 'http://localhost:4322',
    reuseExistingServer: false,
    timeout: 60000,
  },
});
