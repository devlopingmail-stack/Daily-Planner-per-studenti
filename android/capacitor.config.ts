import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.simonefrancescocompany.dailyplanner',
  appName: 'Daily-Planner',
  webDir: 'app/src/main/assets/public',
  server: {
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: true,
    captureInput: true,
    webContentsDebuggingEnabled: true
  },
  plugins: {
    CapacitorStorage: {
      group: 'DailyPlanner'
    }
  }
};

export default config;