# Daily Planner - Android Build

Questa cartella contiene il progetto Android per l'app Daily Planner.
L'app usa **Capacitor** per incapsulare l'app web come app nativa Android.
**L'archiviazione è locale sul telefono (localStorage)**, non cloud.

## 📱 Caratteristiche

- **Nome app**: Daily-Planner
- **Package ID**: `com.simonefrancescocompany.dailyplanner`
- **Icona**: Il tuo SVG personalizzato (post-it giallo con gradiente)
- **Archiviazione**: `localStorage` del telefono (offline, nessun cloud)
- **Target SDK**: 34 (Android 14)
- **Min SDK**: 24 (Android 7.0)

## 🛠 Prerequisiti

- **Android Studio** (latest)
- **JDK 17+**
- **Node.js 18+** (per Capacitor CLI)

## 🚀 Build rapida

### 1. Installa dipendenze
```bash
cd android
npm install
```

### 2. Sincronizza Capacitor
```bash
npx cap sync android
```

### 3. Apri in Android Studio
```bash
npx cap open android
```

### 4. Build APK/AAB
In Android Studio:
- **Build** → **Build Bundle(s) / APK(s)** → **Build APK(s)** per test
- **Build** → **Generate Signed Bundle / APK** per Play Store

## 📂 Struttura cartelle

```
android/
├── app/
│   ├── src/main/
│   │   ├── assets/public/          # File web (index.html, favicon.svg)
│   │   ├── java/com/simonefrancescocompany/dailyplanner/
│   │   │   └── MainActivity.java   # Entry point Capacitor
│   │   ├── res/                    # Risorse (icone, colori, layout)
│   │   └── AndroidManifest.xml
│   └── build.gradle
├── capacitor.config.ts              # Config Capacitor
├── package.json
├── build.gradle
├── settings.gradle
└── gradle.properties
```

## 🔧 Configurazioni importanti

### `capacitor.config.ts`
```typescript
{
  appId: 'com.simonefrancescocompany.dailyplanner',
  appName: 'Daily-Planner',
  webDir: 'app/src/main/assets/public',
  android: {
    allowMixedContent: true,
    webContentsDebuggingEnabled: true
  }
}
```

### Archiviazione locale
L'app usa `localStorage` del WebView Android.
I dati persistono tra riavvii dell'app e del telefono.
**Nessuna connessione internet richiesta** per il funzionamento base.

### Icona app
L'icona è generata dal tuo SVG (`favicon.svg`) come `ic_launcher.xml` (vector drawable).
Supporta tutte le densità: mdpi, hdpi, xhdpi, xxhdpi, xxxhdpi.

## 🧪 Test su dispositivo

1. Collega telefono via USB (debug USB attivo)
2. In Android Studio: **Run** ▶️ (seleziona dispositivo)
3. L'app si installa e avvia automaticamente

## 📦 Rilascio su Play Store

1. **Build** → **Generate Signed Bundle / APK** → **Android App Bundle**
2. Firma con keystore (creane uno se prima volta)
3. Carica `.aab` su Play Console

## 🔒 Permessi

L'app richiede solo:
- `INTERNET` (per eventuale sync futuro, ma non usato ora)
- `ACCESS_NETWORK_STATE` (per rilevare connettività)

Nessun permesso di storage, camera, location, ecc.

## 🔄 Aggiornamenti web

Se modifichi `index.html` o `favicon.svg` nella root del progetto:
```bash
cp ../index.html app/src/main/assets/public/
cp ../favicon.svg app/src/main/assets/public/
npx cap copy android
```
Poi rebuild in Android Studio.

## 🐛 Debug

- **Chrome DevTools**: `chrome://inspect` → ispeziona WebView
- `webContentsDebuggingEnabled: true` in `capacitor.config.ts`
- Logcat: filtra per `Capacitor` o `DailyPlanner`