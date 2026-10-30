# 🚀 Modern Developer Portfolio Website

A modern, high-performance, and fully responsive **Personal Portfolio Website** designed for a **2nd-Year B.Tech Information Technology Student & Aspiring Full Stack Developer**.

Built with pure **HTML5**, **CSS3**, and **Vanilla JavaScript** (zero heavy external libraries or framework bloat), featuring a sleek dark theme with black, navy, and purple/blue/cyan gradient accents, glassmorphism, micro-animations, dynamic typewriter effects, and interactive modals.

---

## 🌟 Key Highlights & Features

- 🎨 **Modern Dark Neon Aesthetics**: Curated color palette (`#07090e`, `#0a0d14`, `#6366f1`, `#8b5cf6`, `#06b6d4`), smooth glassmorphic blur cards, glowing borders, and floating ambient background spots.
- ⚡ **Dynamic Typewriter Subtitle**: Animated text in the hero section cycling through roles ("B.Tech IT Student (2nd Year)", "Aspiring Full Stack Developer", "Creative Problem Solver", "Open Source & Tech Enthusiast").
- 📱 **100% Fully Responsive**: Mobile-first architecture with an animated slide-over glass hamburger menu, fluid typography, and tablet/desktop optimized layouts.
- 🛠️ **Categorized Skills Grid**:
  - Frontend: HTML5, CSS3, JavaScript (ES6+), Bootstrap 5, Responsive Design
  - Programming & Core: Python, C Programming
  - Tools & Data: SQL / DBMS, Git & GitHub
  - Animated proficiency progress bars that trigger smoothly upon scrolling into view.
- 💼 **Interactive Projects Showcase**:
  - Filter tabs for *All*, *Web Applications*, *Utilities & Tools*, and *Concepts & AI*.
  - 4 Featured Projects with rich preview graphics, tech tags, live demo, and code links:
    1. **Responsive Image Gallery** (Filters, lightbox, search)
    2. **Modern Interactive Calculator** (Dark glass UI, calculation history tape)
    3. **AI Personal Phone Optimizer** (System telemetry, CPU/RAM boost concept)
    4. **Personal Portfolio Website** (The current high-performance portfolio)
  - **Project Quick View Modal**: Clicking any project opens an interactive popup with detailed architecture notes, key features, screenshots, and action buttons.
- 📄 **Resume Section with One-Click Download**:
  - Beautiful curriculum vitae sheet preview.
  - Functional "Download PDF" button that downloads the bundled sample `Alex_Morgan_Resume.pdf` (easily swappable with your own PDF).
  - "View Full File" link to open in a new tab.
- 📬 **Interactive Glassmorphic Contact Section**:
  - Full Name, Email, Subject, and Message inputs.
  - Client-side validation with instant inline error feedback.
  - Animated sending simulation and floating toast notification on submission.
  - Social media channel links (GitHub, LinkedIn, Instagram, Email) with glowing hover effects.
- 🔝 **Smart Back-To-Top Button**: Circular SVG scroll progress indicator that dynamically fills as you scroll down the page.
- 🔍 **SEO & Accessibility Optimized**: Semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`), complete OpenGraph and Twitter card meta tags, custom SVG favicon, and descriptive alt attributes.

---

## 📂 Project Directory Structure

```plaintext
Build Your Own Portfolio Site/
├── index.html                   # Main semantic webpage with all sections
├── favicon.svg                  # Custom glowing code-bracket SVG favicon
├── README.md                    # Detailed guide, customization & deployment steps
└── assets/
    ├── css/
    │   └── style.css            # Complete design system, variables, animations & responsive styles
    ├── js/
    │   └── main.js              # Typewriter, modal, filters, form validation & scroll events
    ├── docs/
    │   └── resume.pdf           # Sample downloadable PDF resume
    └── images/
        ├── favicon.svg          # Favicon asset copy
        ├── profile-avatar.jpg   # High-resolution developer portrait
        ├── project-gallery.jpg  # Project preview image: Image Gallery
        ├── project-calculator.jpg # Project preview image: Interactive Calculator
        ├── project-phone-optimizer.jpg # Project preview image: AI Phone Optimizer
        └── project-portfolio.jpg # Project preview image: Portfolio Website
```

---

## ✏️ Step-by-Step Customization Guide

All personal placeholders are clearly marked with `EDITABLE:` comments in `index.html`. Follow these quick steps to personalize the website for yourself:

### 1. Update Your Name & Title
- Open `index.html` and search for `Alex Morgan`.
- Replace `Alex Morgan` with your full name:
  - Inside `<title>` tag (Line 11)
  - In the navbar brand logo (Line 50)
  - In the Hero section heading `<h1>` (Line 95)
  - In the About section card (Line 167)
  - In the Resume preview header (Line 414)
  - In the Footer copyright (Line 615)

### 2. Update College, Degree & Graduation Year
- In `index.html` under the **About Me Section** (around Line 180):
  - Change `[YOUR COLLEGE NAME]` to your actual institution name (e.g. *National Institute of Technology, Trichy*).
  - Adjust your academic year or expected graduation year (e.g. *2nd Year, 2024 &ndash; 2028*).
  - Update your current CGPA/percentage if desired.

### 3. Replace Profile Photo
- Put your preferred headshot photo in `assets/images/` (e.g., named `my-photo.jpg`).
- In `index.html` (around Line 133 and Line 164), update the image source:
  ```html
  <img src="assets/images/my-photo.jpg" alt="Your Name - Portfolio">
  ```

### 4. Add Your Actual Resume PDF
- Rename your PDF resume to `resume.pdf` and place it in `assets/docs/resume.pdf` (replacing the sample file).
- The "Download Resume" buttons in the Hero section and Resume section are already configured to download `assets/docs/resume.pdf`!

### 5. Update Contact Information & Social Profiles
- Search for `alex.morgan.tech@example.com` in `index.html` and replace it with your email.
- Update your social media links in the Contact section (Lines 500 - 550):
  - GitHub: `https://github.com/your-username`
  - LinkedIn: `https://linkedin.com/in/your-username`
  - Instagram: `https://instagram.com/your-username`

### 6. Customize or Add New Projects
- In `assets/js/main.js` (around Line 210), you will find the `projectDetails` object where project descriptions, feature lists, and live demo / GitHub URLs are defined. Simply edit or add your links there!

---

## 💻 How to Run Locally

You do not need any build step or compilation. You can run this website using any of the following methods:

### Method 1: VS Code Live Server (Recommended)
1. Open the project folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and choose **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500/`.

### Method 2: Using Node.js `npx serve`
If you have Node.js installed, open your terminal in the project directory and run:
```bash
npx serve .
```
Then visit the local URL shown in your terminal (usually `http://localhost:3000`).

### Method 3: Using Python
If you have Python installed:
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

### Method 4: Direct Browser Open
Simply double-click `index.html` in your file explorer to open it directly in Chrome, Edge, Safari, or Firefox.

---

## 🌐 How to Deploy Online (Free)

### 🚀 Option A: Deploy to GitHub Pages (Fastest)
1. Create a new public repository on [GitHub](https://github.com) named `portfolio` or `<your-username>.github.io`.
2. Open your terminal in this project folder and run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of developer portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to your repository **Settings** &rarr; **Pages**.
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. Within 1-2 minutes, your portfolio will be live at:
   `https://<your-username>.github.io/<your-repo-name>/`

---

### 🌐 Option B: Deploy to Netlify (Drag & Drop in 30 Seconds)
1. Sign up or log into [Netlify](https://www.netlify.com/).
2. Go to the **Sites** dashboard.
3. Drag and drop the entire `Build Your Own Portfolio Site` folder directly into the Netlify upload area.
4. Your website is instantly deployed with a free SSL certificate!
5. (Optional) Go to **Site Configuration** &rarr; **Change site name** to give it a custom name (e.g. `yourname-portfolio.netlify.app`).

---

## 🛠️ Built With

- **HTML5**: Semantic structure, accessibility, microdata
- **CSS3**: CSS Custom Variables, Flexbox, Grid, Glassmorphism (`backdrop-filter`), keyframe animations
- **Vanilla JavaScript (ES6+)**: `IntersectionObserver`, DOM event delegation, asynchronous simulation, custom modal logic
- **Google Fonts**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

---

## 📄 License
This project is open-source and free to use for personal portfolio websites.
Feel free to fork, customize, and make it your own! ⭐
