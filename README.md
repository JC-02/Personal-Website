# Jordan Cowan - Portfolio

A modern, responsive portfolio website showcasing my journey as a Software Engineer and AI Enthusiast.

## About

Recent Software Engineering graduate from the University of Victoria with specializations in:
- **Data Mining and Analysis, AI, and ML**
- **Visual Computing and Graphics**

Passionate about leveraging AI in cloud computing to improve existing systems and create innovative solutions.

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite
- **Deployment**: Netlify + DigitalOcean ready

## Features

- ✨ Interactive particle background animation
- 🎯 Smooth scroll animations and parallax effects
- 📱 Fully responsive design
- 🚀 Optimized performance with Vite
- 💼 Project showcase with GitHub integration
- 📧 Contact form ready for integration

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
