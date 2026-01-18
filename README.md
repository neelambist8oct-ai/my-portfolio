# Professional Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a sleek design with smooth animations, interactive elements, and a fully responsive layout.

## 🚀 Features

- **Modern Design**: Clean, professional design with a dark theme
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll animations and hover effects
- **Interactive Elements**: Typing animation, parallax effects, and interactive project cards
- **Contact Form**: Functional contact form (ready for backend integration)
- **SEO Friendly**: Semantic HTML structure for better search engine optimization
- **Fast Loading**: Optimized for performance with minimal dependencies

## 📋 Sections

1. **Hero Section**: Eye-catching introduction with typing animation
2. **About**: Personal information and highlights
3. **Skills**: Showcase of technical skills and technologies
4. **Projects**: Portfolio of featured projects with links
5. **Contact**: Contact form and social media links

## 🛠️ Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (Vanilla JS)
- Font Awesome Icons
- Google Fonts (Poppins)

## 📦 Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

## 🎨 Customization

### Personal Information

1. **Name & Title**: Update in `index.html`
   - Line 20: Change page title
   - Line 50: Update hero name
   - Line 52-53: Modify typing text phrases in `script.js`

2. **About Section**: Edit the about text in `index.html` (lines 100-110)

3. **Skills**: Modify the skills in `index.html` (lines 130-200)

4. **Projects**: Update project information in `index.html` (lines 220-320)

5. **Contact Information**: 
   - Update email, phone, and location in `index.html` (lines 360-380)
   - Update social media links (replace `#` with your actual links)

### Colors

Edit CSS variables in `styles.css` (lines 1-12):

```css
:root {
    --primary-color: #64ffda;      /* Main accent color */
    --secondary-color: #0a192f;    /* Secondary background */
    --dark-bg: #0a192f;            /* Dark background */
    --light-bg: #112240;           /* Light background */
    --text-primary: #ccd6f6;       /* Primary text color */
    --text-secondary: #8892b0;     /* Secondary text color */
    --accent-color: #ff6b6b;       /* Accent color */
}
```

### Typing Animation

Modify the phrases array in `script.js` (line 7):

```javascript
const phrases = [
    'Full Stack Developer',
    'UI/UX Designer',
    'Your Custom Title',
    'Another Title'
];
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 968px - 1199px
- **Mobile**: Below 968px

## 🔧 Contact Form Integration

The contact form is currently set up with a basic handler. To integrate with a backend:

1. Update the form submission handler in `script.js` (around line 120)
2. Replace the alert with an API call to your backend
3. Add proper error handling and success notifications

Example backend integration:

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            body: formData
        });
        
        if (response.ok) {
            // Show success message
            contactForm.reset();
        }
    } catch (error) {
        // Show error message
    }
});
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

For questions or suggestions, feel free to reach out!

---

**Note**: Remember to replace all placeholder content (names, emails, project links, etc.) with your actual information before deploying!
