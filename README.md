# 📖 StreakBook

**StreakBook** is a modular, atomic design system built with **React Native + Storybook** to visually develop and test UI components for a habit tracking app.  
It includes reusable components like `HabitCard`, `HabitList`, `WeeklyOverview`, and more — all styled for dark/light themes and ready for real-world use.

---

## 🎯 Features

- ⚛️ **Atomic Design** — Organized into atoms, molecules, and organisms
- 📅 **Weekly Habit Overview** — Track 7-day habit completion visually
- 🔁 **Progress Components** — Animated, dynamic habit progress display
- 🌗 **Dark Mode Support** — Every component fully themed
- 🧪 **Interaction Testing** — Powered by `play()` functions and Storybook testing library
- 🧩 **Reusable Dashboard** — Full data-driven habit dashboard layout
- 🧼 **Empty States** — Friendly fallbacks for no-habit scenarios
- 💡 **Fully Isolated UI** — Test and develop without launching a full app

---

## 🛠️ Stack

| Tool                | Purpose                          |
|---------------------|----------------------------------|
| React Native        | Component framework              |
| Expo SDK 53         | Dev environment + bundler        |
| Storybook v5.3+     | Component workshop                |
| TypeScript          | Safer, typed development          |
| @expo/vector-icons  | Icons for UI badges and controls |

---

## 📁 Project Structure

components/
atoms/ # Buttons, badges, toggles
molecules/ # Cards, lists, empty state
organisms/ # Weekly overview, dashboard
screens/ # HabitScreen (data-driven wrapper)
stories/ # All .stories.tsx files for Storybook

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
git clone https://github.com/your-username/streakbook.git
cd streakbook
npm install
2. Run Storybook
bash
Copy
Edit
npm run storybook:web
Or for mobile (with Expo Go or emulator):

bash
Copy
Edit
npm run storybook:android
npm run storybook:ios
🧪 Storybook Interactions
You’ll find interaction tests inside story files using play() functions to simulate user actions like toggles and clicks.

✅ Try it on:

ReminderToggle.stories.tsx

HabitCard.stories.tsx

💡 Inspiration
This project follows the official Intro to Storybook React Native tutorial and expands it into a fully functional, real-world habit tracking design system.
