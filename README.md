# Jordan Cowan - Professional Portfolio

Modern, high-performance portfolio website built with React 18 and TypeScript, featuring advanced animations and responsive design patterns.

## Professional Profile

Software Engineering graduate from the University of Victoria with specialized expertise in:

1. **Data Mining and Analysis**
   - Machine Learning algorithms and implementation
   - Statistical analysis and data visualization
   - Predictive modeling and pattern recognition

2. **Artificial Intelligence**
   - Neural network architectures
   - Natural language processing
   - Computer vision applications

3. **Visual Computing and Graphics**
   - 3D rendering and animation
   - Computer graphics algorithms
   - Interactive visualization systems

## Technical Architecture

### Core Technologies

- **Frontend Framework**: React 18.3 with TypeScript 5.x
- **Styling Engine**: Tailwind CSS 3.x with custom utility classes
- **Build System**: Vite 5.x for optimized bundling and development
- **Code Quality**: ESLint with TypeScript-aware rules and Biome formatter

### Performance Features

- **Deployment Platforms**: Netlify with DigitalOcean integration support
- **Asset Optimization**: Automatic code splitting and lazy loading
- **SEO Optimization**: Meta tags and semantic HTML structure
- **Accessibility**: WCAG 2.1 AA compliance standards

### Interactive Components

1. **Particle Animation System**
   - WebGL-accelerated particle rendering
   - Dynamic interaction with mouse movement
   - Optimized performance with requestAnimationFrame

2. **Advanced Scroll Effects**
   - Parallax scrolling with hardware acceleration
   - Smooth interpolation algorithms
   - Viewport-aware animation triggers

3. **Responsive Design Architecture**
   - Mobile-first development approach
   - Breakpoint-specific component variants
   - Touch-optimized interaction patterns

4. **Project Portfolio Integration**
   - GitHub API integration for live project data
   - Automated deployment status tracking
   - Technology stack visualization

5. **Professional Contact System**
   - Form validation with real-time feedback
   - Email service integration ready
   - Professional inquiry routing

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
