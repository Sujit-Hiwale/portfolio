# 🚀 Quick Start Guide

## Run the Portfolio

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser!

## Customize Your Portfolio

### 1. Update Your Information

**Hero Section** (`app/components/Hero.jsx`):
- Line 31: Change "Sujit Hiwale" to your name
- Line 41: Update your title/tagline
- Line 50: Modify your bio
- Line 90: Update tech stack array

**About Section** (`app/components/About.jsx`):
- Line 30: Update your name and intro
- Lines 33-38: Modify bio paragraphs
- Lines 51-56: Customize skills by category

**Projects** (`app/components/Projects.jsx`):
- Lines 7-42: Update project array with your projects
  - title: Project name
  - desc: Project description
  - link: GitHub repo URL
  - tags: Tech stack tags

**Contact** (`app/components/Contact.jsx`):
- Line 12: Change email address
- Lines 68, 79, 90: Update social URLs

### 2. Change Colors

Edit `tailwind.config.js` to change accent colors from cyan/purple to your preference.

### 3. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for auto-deployment.

## Troubleshooting

**Port already in use?**
```bash
# Kill the process and restart
killall node
npm run dev
```

**Build errors?**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

## Need Help?

Check the full [README.md](README.md) or [REDESIGN_SUMMARY.md](REDESIGN_SUMMARY.md) for detailed docs.

---

**Happy coding!** 🎉
