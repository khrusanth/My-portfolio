# Khrusanth S - Professional Portfolio

A stunning, cinematic portfolio website built with React, Framer Motion, and modern web technologies. Featuring smooth animations, dark theme, and fully responsive design.

## 🎨 Features

- **Cinematic Hero Section** - Eye-catching landing page with animated gradient spheres
- **Smooth Animations** - Powered by Framer Motion with scroll-triggered transitions
- **Dark Theme** - Modern, subtle dark theme with cyan and pink accents
- **Interactive Components** - Smooth hover effects and micro-interactions
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Performance Optimized** - Fast load times with minified production build
- **Accessible** - Semantic HTML and ARIA compliant

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with mobile menu
│   ├── Hero.jsx            # Hero section with animations
│   ├── About.jsx           # About section with stats
│   ├── Skills.jsx          # Interactive skills showcase
│   ├── Projects.jsx        # Featured projects grid
│   ├── Timeline.jsx        # Education & experience timeline
│   ├── Achievements.jsx    # Awards & certifications
│   ├── Contact.jsx         # Contact form & social links
│   └── Footer.jsx          # Footer with scroll to top
├── styles/
│   └── [Component CSS files]
├── App.jsx                 # Main app component
├── index.css               # Global styles
└── main.jsx                # Entry point

```

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens `http://localhost:3000` in your browser.

### Build for Production

```bash
npm run build
```

Creates optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Dependencies

- **React 19** - UI library
- **Framer Motion** - Smooth animations
- **React Scroll** - Smooth scroll navigation
- **React Icons** - Beautiful icon library
- **React Intersection Observer** - Scroll-triggered animations
- **GSAP** - Advanced animations
- **Axios** - HTTP client

## 🌐 Deployment to GitHub Pages

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Initialize Git Repository**
   ```bash
   cd khrusanth-portfolio
   git init
   git add .
   git commit -m "Initial commit: portfolio setup"
   ```

2. **Create GitHub Repository**
   - Go to [GitHub](https://github.com/new)
   - Create a new repository: `khrusanth.github.io`
   - Copy the repository URL

3. **Add Remote and Push**
   ```bash
   git remote add origin https://github.com/khrusanth/khrusanth.github.io.git
   git branch -M main
   git push -u origin main
   ```

4. **Build and Deploy**
   ```bash
   npm run build
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder
   - Save

6. **Your portfolio will be live at:** `https://khrusanth.github.io`

### Option 2: Deploy to Custom Domain

If you have a custom domain:

1. Update `package.json` with your custom domain:
   ```json
   "homepage": "https://yourdomain.com"
   ```

2. Add a `CNAME` file in public folder with your domain name

3. Configure DNS settings with your domain provider

### Option 3: Deploy to Netlify/Vercel (Alternative)

**Netlify:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir dist
```

**Vercel:**
```bash
npm install -g vercel
vercel
```

## 🎯 Customization

### Update Personal Information

Edit `/src/components/` for your details:
- **Hero.jsx** - Update name, title, and description
- **About.jsx** - Your about text and stats
- **Skills.jsx** - Add/remove your skills
- **Projects.jsx** - Update project information
- **Timeline.jsx** - Add education & experience
- **Achievements.jsx** - Your awards & certifications
- **Contact.jsx** - Your contact information

### Change Colors

Update CSS variables in `src/App.css`:
```css
:root {
  --primary-color: #00d4ff;      /* Cyan */
  --secondary-color: #0a8ba8;
  --accent-pink: #ec4899;
  --accent-purple: #7c3aed;
  /* ... more variables */
}
```

### Update Profile Image

Replace placeholder image in `Hero.jsx`:
```jsx
<img
  src="YOUR_IMAGE_URL"
  alt="Your Name"
  className="profile-image"
/>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📞 Connect

- Email: khrusanthsj@gmail.com
- LinkedIn: linkedin.com/in/khrusanth-s
- GitHub: github.com/khrusanth

---

**Built with ❤️ using React & Framer Motion**

