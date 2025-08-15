# KINGBULL Insight Hub - Static Export

Static HTML/CSS/JS build for GitHub Pages deployment.

## 📁 Structure

```
/
├── index.html          # Main page
├── 404.html           # SPA redirect
├── .nojekyll          # Disable Jekyll
├── css/
│   └── styles.css     # Compiled styles
├── js/
│   └── app.js         # Vanilla JavaScript
└── assets/
    ├── favicon.svg    # Site icon
    └── hero-aquafarm.jpg # Hero image
```

## 🚀 Deploy to GitHub Pages

### Method 1: Direct Upload
1. Upload all files to your repo root
2. Go to Settings → Pages
3. Source: Deploy from a branch
4. Branch: main / folder: / (root)

### Method 2: Git Commands
```bash
git add .
git commit -m "Deploy static build for GH Pages"
git push origin main
```

## ✅ Compatibility

- ✅ Pure HTML/CSS/JS (no bundler runtime)
- ✅ Relative paths only
- ✅ Works with `file://` protocol
- ✅ Mobile responsive
- ✅ SPA routing with 404.html redirect
- ✅ GitHub Pages optimized

## 🎯 Features

- Interactive case studies with detailed breakdowns
- Technical library section
- Factory video showcase
- Dealer portal information
- Supply map visualization
- 24/7 support contact forms
- Smooth scroll navigation
- Mobile-first responsive design

## 📱 Browser Support

- Chrome/Safari/Firefox/Edge (modern browsers)
- Mobile Safari/Chrome
- Internet Explorer 11+ (with polyfills)

## 🔧 Customization

Edit files directly:
- `index.html` - Content structure
- `css/styles.css` - Styling and design system
- `js/app.js` - Interactive functionality
- `assets/` - Images and media

## 📈 Performance

- Optimized CSS (single file)
- Vanilla JS (no frameworks)
- Compressed images
- Minimal HTTP requests
- Fast loading on all devices

---

**Live URL:** `https://[username].github.io/[repo-name]/`

Built for KingBull Việt Nam - Premium Aquaculture Feed Solutions
