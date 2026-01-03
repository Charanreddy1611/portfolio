# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a beautiful design with smooth animations, interactive elements, and a mobile-friendly layout.

## Features

- 🎨 **Modern Design** - Clean, professional design with gradient accents
- 📱 **Fully Responsive** - Works perfectly on all devices (desktop, tablet, mobile)
- ✨ **Smooth Animations** - Engaging scroll animations and transitions
- 🚀 **Fast Performance** - Lightweight and optimized for speed
- 🎯 **Easy to Customize** - Well-organized code structure

## Sections

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About** - Personal information and statistics
3. **Projects** - Showcase of featured projects with tags and links
4. **Skills** - Technical skills with animated progress bars
5. **Contact** - Contact form and social media links

## Getting Started

### Prerequisites

No prerequisites needed! Just a modern web browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Local Development

For a better development experience, you can use a local server:

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Using Node.js (with http-server):**
```bash
npx http-server
```

**Using VS Code:**
- Install the "Live Server" extension
- Right-click on `index.html` and select "Open with Live Server"

Then open `http://localhost:8000` (or the port shown) in your browser.

## Customization

### Personal Information

1. **Name and Title**: Update in `index.html`:
   - Line 11: Change `<title>Your Name - Portfolio</title>`
   - Line 20: Change `<div class="nav-brand">Your Name</div>`
   - Line 30: Change the name in the hero section
   - Line 31: Update your subtitle/role

2. **About Section**: Modify the text in the about section (around line 75)

3. **Projects**: Update the project cards with your own projects:
   - Project titles and descriptions
   - Technology tags
   - Links to live demos and GitHub repos

4. **Skills**: Adjust the skills and progress percentages in the skills section

5. **Contact**: Update contact information:
   - Email address
   - LinkedIn profile
   - GitHub username
   - Social media links

### Colors

Edit the CSS variables in `styles.css` (lines 8-18) to change the color scheme:

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Secondary accent */
    --text-primary: #1f2937;       /* Main text color */
    /* ... etc */
}
```

### Images

Replace the placeholder SVG in the hero section with your own profile image:

1. Add your image file to the project folder
2. Update the hero image section in `index.html`:
   ```html
   <div class="hero-image">
       <img src="your-image.jpg" alt="Your Name" />
   </div>
   ```
3. Add CSS styling for the image in `styles.css` if needed

## File Structure

```
portfolio/
│
├── index.html      # Main HTML file
├── styles.css      # All styling and animations
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your main branch
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to [Netlify](https://www.netlify.com/)
2. Your site will be live instantly!

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts


## License

Feel free to use this template for your own portfolio! Customise6 it however you like.

## Credits

- Font: [Inter](https://fonts.google.com/specimen/Inter) by Google Fonts
- Design inspiration from modern portfolio websites

---

**Happy coding! 🚀**

