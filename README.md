# KingBull Insight Hub

KingBull Việt Nam - Thức ăn Thủy sản Chất lượng Cao | Đột phá tăng trưởng, dẫn đầu lợi nhuận

## Quick Deploy to GitHub Pages

### For Lovable Users (One-Click)
1. **Connect** → Connect your GitHub repo
2. **Publish** → Deploy to GitHub Pages instantly

### Manual Deploy Steps

```bash
npm install
npm run build
```

Push to GitHub, then:
- Go to **Settings** → **Pages** 
- Source: **Deploy from a branch**
- Branch: **main** / **docs**
- URL: `https://rubyhuynhdotcom.github.io/kingbull-insight-hub/`

### Scripts

```bash
npm run dev          # Development server
npm run build        # Build for production (includes SPA setup)
npm run build:dev    # Build for development
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Custom Domain Setup

If using custom domain:
1. Add `docs/CNAME` file with your domain
2. Change `base: "/"` in `vite.config.ts`

### Technology Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library with modern hooks
- **TypeScript** - Type safety and enhanced DX
- **Tailwind CSS** - Utility-first CSS with custom design system
- **shadcn/ui** - Accessible React components

### Project Structure

```
src/
├── components/         # UI components
│   ├── ui/            # shadcn/ui components
│   ├── Navbar.tsx     # Navigation
│   ├── HeroSection.tsx # Hero banner
│   └── CaseStudiesSection.tsx # Case studies
├── pages/             # Page components
├── assets/            # Images and media
└── index.css          # Global styles
```

### Build Output

After `npm run build`:
- ✅ `docs/` folder created
- ✅ `docs/404.html` for SPA routing
- ✅ `docs/.nojekyll` to disable Jekyll
- ✅ All assets use correct base path `/kingbull-insight-hub/`

## Live Site

🚀 **Deployed at:** [https://rubyhuynhdotcom.github.io/kingbull-insight-hub/](https://rubyhuynhdotcom.github.io/kingbull-insight-hub/)

---

## Development Notes

**Note:** This project requires manual update of package.json scripts:
```json
{
  "scripts": {
    "build": "vite build && node scripts/postbuild-spa-404.cjs"
  }
}
```
