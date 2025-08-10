# BrandPeek

A simple mobile app that shows a list of brands and their details. Built with React Native and Expo.

## Quick Start

Follow these steps to run the app:

### Step 1: Download the project
```bash
git clone https://github.com/your-username/BrandPeek.git
cd BrandPeek
```

### Step 2: Install dependencies
```bash
npm install --legacy-peer-deps
```

### Step 3: Start the app
```bash
npx expo start
```

### Step 4: Open on your device
- Download "Expo Go" app on your phone
- Scan the QR code that appears in your terminal
- The app will open on your phone

**OR** use a computer simulator:
- Press `a` for Android emulator
- Press `i` for iOS simulator (Mac only)

## What you need installed first

- Node.js (version 18 or higher)
- Expo Go app on your phone (from App Store/Play Store)

## If something goes wrong

Try these commands in order:

```bash
rm -rf node_modules
npm cache clean --force
npm install --legacy-peer-deps
npx expo start --clear
```

## What the app does

Shows a list of brands from an API. Tap any brand to see more details about it.

## Project files

- `App.tsx` - Main app file
- `screens/` - HomeScreen and BrandDetailScreen  
- `components/` - Reusable UI parts
- `services/api.ts` - API calls
- `navigation/` - Screen navigation setup

## Technologies used

React Native, Expo SDK 53, TypeScript, React Navigation