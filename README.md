# Jay Likhar - Portfolio Website

A modern, responsive portfolio website built with React and enhanced with premium animations and effects.

## 🌐 Live Demo

**Live Link:** https://jay-portfolio-21c8e.web.app/

## 🚀 Features

- **Modern Design**: Clean, professional layout with premium animations
- **Responsive**: Works perfectly on all devices and screen sizes
- **Interactive**: Smooth animations and hover effects throughout
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Firebase Hosted**: Global CDN for fast worldwide access
- **Multiple Deployment Options**: Firebase, GitHub Pages, Vercel, Netlify

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Custom Animations** - Premium CSS animations and effects
- **Radix UI** - Accessible component primitives

### Backend (Optional)
- **FastAPI** - Modern Python web framework
- **Uvicorn** - ASGI server

### Deployment
- **Firebase Hosting** - Primary hosting platform
- **GitHub Pages** - Alternative hosting
- **Vercel/Netlify** - Additional deployment options

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Python 3.8+ (for backend, optional)

### Frontend Setup
```bash
# Clone the repository
git clone https://github.com/JayLikhar1/My-PortFolio.git
cd My-PortFolio

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm start
```

The frontend will be available at `http://localhost:3000`

### Backend Setup (Optional)
```bash
# Navigate to backend directory
cd backend

# Install Python dependencies
pip install -r requirements.txt

# Start the server
uvicorn server:app --reload --port 8000
```

The backend will be available at `http://localhost:8000`

**Note:** The frontend works as a standalone application. The backend is optional and provides additional API functionality if needed.

## 🎨 Customization

### Personal Information
Update your personal information in the following files:
- `frontend/src/sections/Hero.jsx` - Name, title, contact info
- `frontend/src/sections/About.jsx` - About me content
- `frontend/src/sections/Experience.jsx` - Work experience
- `frontend/src/sections/Projects.jsx` - Your projects
- `frontend/src/sections/Skills.jsx` - Your skills
- `frontend/src/sections/Education.jsx` - Education details
- `frontend/src/sections/Contact.jsx` - Contact information

### Styling
- Colors and themes can be customized in `frontend/src/index.css`
- Component-specific styles are in their respective files
- Tailwind configuration is in `frontend/tailwind.config.js`

## 📱 Sections

1. **Hero** - Landing section with name, title, and social links
2. **About** - Personal story and journey
3. **Education** - Academic background
4. **Skills** - Technical skills and expertise
5. **Projects** - Portfolio of work
6. **Experience** - Professional experience
7. **Certifications** - Certificates and achievements
8. **Achievements** - Awards and recognitions
9. **Contact** - Contact information and form

## 🚀 Deployment

This portfolio is deployed on **Firebase Hosting** for optimal performance and global accessibility.

### Live Deployment
- **Primary:** [Firebase Hosting](https://jay-portfolio-21c8e.web.app/) - Main production site
- **Backup:** [GitHub Pages](https://jaylikhar1.github.io/PortFolio-Website) - Alternative hosting

### Deployment Platforms Available

#### 1. **Firebase Hosting** ✅ (Currently Deployed)
- **URL:** https://jay-portfolio-21c8e.web.app/
- **Features:** Global CDN, Custom domains, SSL, Version history
- **Deploy Command:** `firebase deploy` (from frontend folder)

#### 2. **Vercel** (Alternative)
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repo
- Set root directory to `frontend`
- Auto-deploys on every push

#### 3. **Netlify** (Alternative)
- Go to [netlify.com](https://netlify.com)
- Connect GitHub repo
- Set build directory to `frontend`
- Build command: `npm run build`

#### 4. **GitHub Pages** ✅ (Also Deployed)
- **Deploy Command:** `npm run deploy` (from frontend folder)
- Automatically configured with gh-pages

### 🔄 To Update Live Site:
```bash
cd frontend
npm run build
firebase deploy
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

Jay Likhar - [jaylikhar9@gmail.com](mailto:jaylikhar9@gmail.com)

Project Link: [https://github.com/JayLikhar1/My-PortFolio](https://github.com/JayLikhar1/My-PortFolio)

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [FastAPI](https://fastapi.tiangolo.com/)
