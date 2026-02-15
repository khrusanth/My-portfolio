# Deployment Guide - Khrusanth's Portfolio

## Quick Deployment Steps

### 1. Initialize Git Repository

```bash
cd khrusanth-portfolio
git init
git config user.name "Your Name"
git config user.email "your.email@gmail.com"
git add .
git commit -m "Initial commit: Khrusanth portfolio website"
```

### 2. Create GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named: **`khrusanth.github.io`**
3. Do NOT initialize with README, .gitignore, or license
4. Click "Create repository"
5. Copy the repository URL

### 3. Push to GitHub

```bash
git remote add origin https://github.com/khrusanth/khrusanth.github.io.git
git branch -M main
git push -u origin main
```

### 4. Build for Production

```bash
npm run build
```

This creates a `dist/` folder with your optimized portfolio.

### 5. Deploy to GitHub Pages

Option A: **Using Git Subtree (Simple)**
```bash
npm run build
git add dist -f
git commit -m "Deploy portfolio"
git subtree push --prefix dist origin main
```

Option B: **Using GitHub Actions (Recommended)**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then just push all future changes, and GitHub Actions will auto-deploy!

### 6. Enable GitHub Pages (if using Git Subtree)

1. Go to repository Settings
2. Navigate to "Pages" section
3. Select Source: `Deploy from a branch`
4. Branch: `main`, Folder: `/ (root)`
5. Save

Your portfolio will be live at: **https://khrusanth.github.io**

## Customizing Your Portfolio

### Update Profile Information

**Hero Section** (`src/components/Hero.jsx`):
- Change name and title
- Update description
- Add your profile image URL

**About Section** (`src/components/About.jsx`):
- Update about text
- Change stats (CGPA, projects, awards)

**Skills** (`src/components/Skills.jsx`):
- Add/remove programming languages
- Update skill categories
- Change proficiency levels

**Projects** (`src/components/Projects.jsx`):
- Add your project details
- Update project descriptions
- Add project links (GitHub, Live Demo)
- Replace placeholder images

**Timeline** (`src/components/Timeline.jsx`):
- Add education details
- Add internship/work experience
- Include workshops and training

**Achievements** (`src/components/Achievements.jsx`):
- Update awards and recognition
- Add certifications
- Update dates

**Contact** (`src/components/Contact.jsx`):
- Update email, phone, LinkedIn
- Verify social media links

### Change Theme Colors

Edit `src/App.css`:

```css
:root {
  --primary-color: #00d4ff;      /* Main cyan color */
  --secondary-color: #0a8ba8;    /* Darker cyan */
  --accent-pink: #ec4899;        /* Pink accent */
  --accent-purple: #7c3aed;      /* Purple accent */
  --background-dark: #0f0f1e;    /* Background */
  --surface-dark: #1a1a2e;       /* Surface */
}
```

### Add Your Profile Image

1. Upload image to a hosting service (Imgur, Cloudinary, etc.)
2. Update `Hero.jsx`:
```jsx
<img
  src="https://your-image-url.com/profile.jpg"
  alt="Your Name"
  className="profile-image"
/>
```

### Enable Contact Form

Update `src/components/Contact.jsx` to use EmailJS:

```bash
npm install @emailjs/browser
```

Then update the form handler to send emails.

## Troubleshooting

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Push Fails
```bash
git pull origin main
git push -u origin main
```

### Site Not Showing
1. Wait 1-2 minutes for GitHub Pages to build
2. Check repository Settings → Pages for status
3. Verify repository is public
4. Clear browser cache (Ctrl+Shift+Delete)

### Custom Domain
1. Buy domain from registrar (Namecheap, GoDaddy, etc.)
2. Add CNAME record pointing to `khrusanth.github.io`
3. Create `CNAME` file in `public/` folder:
   ```
   yourdomain.com
   ```
4. Update `package.json` homepage

## Environment Variables (if needed)

Create `.env` file for API keys:
```
VITE_API_KEY=your_key_here
VITE_API_URL=https://api.example.com
```

Access in components:
```js
const apiKey = import.meta.env.VITE_API_KEY
```

## Performance Optimization

The portfolio is already optimized with:
- Code splitting
- Image optimization
- CSS minification
- JavaScript minification
- Lazy loading animations

Build size: ~369KB (minified), ~112KB (gzipped)

## Next Steps

1. **Share your portfolio:**
   - Add link to GitHub profile bio
   - Include in resume
   - Share on LinkedIn
   - Update portfolio on job applications

2. **Gather feedback:**
   - Ask friends for suggestions
   - Monitor visitor analytics
   - Make improvements iteratively

3. **Keep it updated:**
   - Add new projects regularly
   - Update skills as you learn
   - Refresh with new achievements

## Support

If you need help:
1. Check README.md for documentation
2. Review component files for structure
3. Refer to Framer Motion docs: https://framer.com/motion
4. Check React docs: https://react.dev

---

**Your portfolio is now ready to impress!** 🚀
