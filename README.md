# 📖 StreakBook

**StreakBook** is a modular, atomic design system built with **React Native + Storybook** to visually develop and test UI components for a habit tracking app.
It includes reusable components like `HabitCard`, `HabitList`, `WeeklyOverview`, and more — all styled for dark/light themes and ready for real-world use.

---

## 🎯 Features

* ⚛️ **Atomic Design** — Organized into atoms, molecules, and organisms
* 📅 **Weekly Habit Overview** — Track 7-day habit completion visually
* 🔁 **Progress Components** — Animated, dynamic habit progress display
* 🌗 **Dark Mode Support** — Every component fully themed
* 🧩 **Reusable Dashboard** — Full data-driven habit dashboard layout
* 🧼 **Empty States** — Friendly fallbacks for no-habit scenarios
* 💡 **Fully Isolated UI** — Test and develop without launching a full app

---

## 🛠️ Stack

| Tool               | Purpose                          |
| ------------------ | -------------------------------- |
| React Native       | Component framework              |
| Expo SDK 53        | Dev environment + bundler        |
| Storybook v5.3+    | Component workshop               |
| TypeScript         | Safer, typed development         |
| @expo/vector-icons | Icons for UI badges and controls |

---

## 📁 Project Structure

```
components/
  Dashboard.tsx
  Dashboard.stories.tsx
  EmptyState.tsx
  EmptyState.stories.tsx
  HabitBadge.tsx
  HabitBadge.stories.tsx
  HabitCard.tsx
  HabitCard.stories.tsx
  HabitList.tsx
  HabitList.stories.tsx
  HabitProgressBar.tsx
  HabitProgressBar.stories.tsx
  HabitScreen.tsx
  HabitScreen.stories.tsx
  InboxScreen.tsx
  InboxScreen.stories.tsx
  ReminderToggle.tsx
  ReminderToggle.stories.tsx
  WeeklyOverview.tsx
  WeeklyOverview.stories.tsx
  styles.ts
```

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-username/streakbook.git
cd streakbook
npm install
```

### 2. Run Storybook

For **web preview**:

```bash
npm run storybook:web
```

Or for **mobile (Expo Go or emulator)**:

```bash
npm run storybook:android
npm run storybook:ios
```
---

## 💡 Inspiration

This project follows the official [Intro to Storybook React Native tutorial](https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/introduction/) and expands it into a fully functional, real-world habit tracking design system.

---

## 📄 License

MIT License — free to use, share, and improve.
