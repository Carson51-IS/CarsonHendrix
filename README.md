# Portfolio Website

A static portfolio site built with HTML, CSS, and JavaScript, designed for hosting on GitHub Pages.

## Setup

1. Add your profile photo as `assets/profile.jpg`
2. Add your resume as `assets/resume.pdf`
3. Update LinkedIn and GitHub links in `index.html` (search for `your-profile` and `your-username`)

## Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g., `Resume-Website` or `username.github.io`)

2. Push this project to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. In GitHub: **Settings → Pages → Source**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
   - Click **Save**

4. Your site will be live at:
   - Project repo: `https://YOUR_USERNAME.github.io/YOUR_REPO/`
   - User site: `https://YOUR_USERNAME.github.io/` (if repo is `username.github.io`)

## Adding Projects Later

Edit `index.html` and replace the placeholder project cards with:

- Project images in `assets/projects/` (e.g., `project1.png`)
- Real titles, descriptions, live demo links, and GitHub repo links

## Local Preview

Open `index.html` in a browser, or use a simple HTTP server:

```bash
npx serve .
```

Then visit `http://localhost:3000`.
