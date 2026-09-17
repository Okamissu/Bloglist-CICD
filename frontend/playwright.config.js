// @ts-check
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',

  timeout: 15000,

  fullyParallel: false,
  workers: 1,

  reporter: 'html',

  use: {
    baseURL: 'http://localhost:3001',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],

  webServer: {
    command: 'npm run start:test',
    cwd: '..',
    url: 'http://localhost:3001/health',
    env: {
      ...process.env,
      PORT: process.env.PORT || '3001',
    },
    timeout: 120000,
    stdout: 'pipe',
    stderr: 'pipe',
  },
})
