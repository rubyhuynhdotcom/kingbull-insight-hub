# KingBull Insight Hub

KingBull Việt Nam - Thức ăn Thủy sản Chất lượng Cao | Đột phá tăng trưởng, dẫn đầu lợi nhuận

## Quick Setup & Deploy

### For Lovable Users
1. **Connect** → Connect your GitHub account
2. **Run** → Click run to preview locally  
3. **Publish** → Deploy to GitHub Pages with one click

### For GitHub Pages Deployment

The project is pre-configured for GitHub Pages deployment:

- **Auto Base Detection**: Automatically sets the correct base path for production
- **SPA Routing**: Includes 404.html and .nojekyll for client-side routing
- **Zero Config**: No manual setup required

#### Manual Deploy Steps:
```bash
npm install
npm run build
# Push to GitHub - Pages will deploy from docs/ folder
```

#### Scripts Available:
```bash
npm run dev          # Start development server
npm run build        # Build for production (with postbuild script)
npm run build:dev    # Build for development 
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

**Note**: You need to update package.json scripts to:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build && node scripts/postbuild-spa-404.cjs",
    "preview": "vite preview",
    "build:dev": "vite build --mode development",
    "lint": "eslint ."
  }
}
```

#### Custom Domain Setup:
If using a custom domain, add `docs/CNAME` file with your domain and set base to `"/"` in vite.config.ts.

### Technologies Used

- **Vite** - Fast build tool and dev server
- **React 18** - UI library with hooks and modern patterns  
- **TypeScript** - Type safety and enhanced developer experience
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **shadcn/ui** - High-quality, accessible React components

### Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── Navbar.tsx     # Navigation component
│   ├── HeroSection.tsx # Hero banner
│   └── CaseStudiesSection.tsx # Case studies
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── assets/            # Images and media
└── index.css          # Global styles and design tokens
```

### Design System

The project uses a semantic design system with HSL color tokens:

- **Primary Blue**: `hsl(var(--primary))` - #0EA4E8
- **Growth Green**: `hsl(var(--growth))` - #2BCB53  
- **Profit Gold**: `hsl(var(--profit))` - #FFBE00

All components use semantic tokens for consistent theming and easy customization.

## Live Site

Visit the deployed site: [https://rubyhuynhdotcom.github.io/kingbull-insight-hub/](https://rubyhuynhdotcom.github.io/kingbull-insight-hub/)

---

## Original Lovable Project Info

**Lovable URL**: https://lovable.dev/projects/83544f38-c39d-4e0f-a1d2-198c21874f6e
