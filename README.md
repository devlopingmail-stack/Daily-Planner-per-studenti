Daily Planner

App per studenti per gestire compiti e scadenze. Funziona completamente offline - nessun account, nessun cloud, zero tracking.

Caratteristiche
- Post-it colorati per ogni materia (giallo, rosa, verde, blu, arancione, viola)
- 3 visualizzazioni: Da fare oggi per domani, Da fare per gli altri giorni
- Azioni rapide: Modifica, Rimanda a domani, Elimina
- Auto-pulizia: i compiti scaduti (dopo le 8:00 del giorno) vengono eliminati automaticamente
- 100% Offline - dati salvati in localStorage del telefono
- Zero cloud, zero account, zero tracking

Installazione

Android (APK)
Scarica l'ultimo APK dalla pagina Releases:

Via ADB
adb install DailyPlanner-release.apk

Oppure trasferisci il file sul telefono e installalo dal file manager

Web (PWA)
Apri index.html in browser o deploya su:
- Cloudflare Pages (gratuito, HTTPS automatico)
- Netlify, Vercel, GitHub Pages

Build Android (locale)

cd android
./gradlew assembleRelease     # APK release (app-release.apk)
./gradlew assembleDebug       # APK debug (app-debug.apk)

Requisiti:
- JDK 21
- Android SDK (API 34)
- ANDROID_HOME impostato

Architettura

- index.html          App web (HTML/CSS/JS vanilla)
- favicon.svg         Icona web
- android/            Progetto Android nativo
    app/
        src/main/
            assets/public/index.html    Copia web app
            java/.../MainActivity.java  WebView nativo
            res/
                mipmap-*/ic_launcher.xml    Icona vettoriale
                drawable/ic_launcher_foreground_custom.xml
                drawable/splash.xml
                values/colors.xml, styles.xml
        build.gradle
    build.gradle, settings.gradle, gradlew
    gradle.properties

- Web: HTML5 + CSS3 + ES6 (vanilla, zero dipendenze)
- Android: WebView nativo (androidx.webkit) + localStorage
- Storage: localStorage del WebView (persistente, offline)
- Icona: Vector Drawable adattivo (SVG - Android Vector Drawable)

Release

Versione    Data        Note
v1.0.0      2025-09-20  Release iniziale

Download
- DailyPlanner-release.apk (4.6 MB) - Versione release, firmata con debug keystore
- DailyPlanner-debug.apk (5.8 MB) - Versione debug per test

Build Info
- Min SDK: 24 (Android 7.0)
- Target SDK: 34 (Android 14)
- Architettura: WebView nativo + androidx.webkit
- Storage: localStorage (offline, persistente)
- Icona: Vector Drawable adattivo (SVG personalizzato)

Firma
Firmato con debug keystore (per test). Per Play Store genera keystore di produzione.

Checklist Pre-Release
- APK testato su Android 10+
- Icona corretta (SVG vettoriale, adaptive icon)
- Splash screen personalizzata
- localStorage funzionante offline
- Auto-pulizia compiti scaduti (8:00)
- Build release ottimizzata (minify=false, proguard disabilitato)

Link utili
- Repository: https://github.com/devlopingmail-stack/Daily-Planner-per-studenti
- Issues: https://github.com/devlopingmail-stack/Daily-Planner-per-studenti/issues
- Releases: https://github.com/devlopingmail-stack/Daily-Planner-per-studenti/releases

Licenza
MIT License - usa liberamente.