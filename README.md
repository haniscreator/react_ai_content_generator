# ✨ AI Content Generator (React Native + Node.js + OpenRouter)

A simple mobile app (iOS/Android) built with React Native (Expo) that allows users to generate AI-powered content using a secure Node.js backend with [OpenRouter.ai](https://openrouter.ai).

---

## 📱 Features

- 🔤 User inputs a topic or keyword (e.g., “Instagram caption for travel”)
- 💡 AI generates creative content using `gpt-4o-mini` (via OpenRouter)
- 📋 One-tap copy to clipboard
- 🔒 Backend securely hides API key (via Node.js + Express)

---

## 📦 Tech Stack

- **Frontend:** React Native (Expo), React Navigation
- **Backend:** Node.js, Express, Axios, CORS
- **AI Provider:** [OpenRouter.ai](https://openrouter.ai)
- **Clipboard:** `expo-clipboard`

---

## 🧠 Example Prompts

Try using:

- `Instagram caption about solo travel`
- `Blog title for AI in education`
- `Resume bullet point for a frontend developer`
- `Product description for eco-friendly bottle`

---

## ⚙️ Installation Guide

### ✅ 1. Clone the repo

```bash
git clone https://github.com/haniscreator/ai-content-generator.git
cd ai-content-generator
```

### ✅ 2. Install App dependencies
```
cd ai-content-generator
npm install
npx expo install expo-clipboard
```


### 🔐 Notes
API calls are routed through your Node.js server — never expose your AI key in the frontend.
You can deploy the backend to Render, Vercel, or Railway for production.


### 🤖 Credits
- Powered by OpenRouter.ai
- Built with ❤️ using React Native + Node.js

