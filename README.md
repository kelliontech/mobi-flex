# CreativeHub - Professional Services Website

A modern, responsive website for a creative services company offering graphics design, advertisement, and web development services.

## Features

### 🎨 Design Features
- **Responsive Design**: Fully responsive layout that works on all devices (desktop, tablet, mobile)
- **Modern UI**: Clean and professional design with gradients and smooth animations
- **Fast Performance**: Optimized for speed and performance
- **Accessibility**: Semantic HTML and WCAG compliance

### 📱 Website Sections

1. **Navigation Bar**
   - Sticky navigation with smooth scrolling
   - Mobile-responsive hamburger menu
   - Active link highlighting

2. **Hero Section**
   - Eye-catching gradient background
   - Call-to-action button
   - Animated text elements

3. **Services Section**
   - Three main service categories:
     - Graphics Design
     - Advertisement
     - Web Development
   - Feature lists for each service
   - Hover animations

4. **Portfolio Section**
   - Project showcase with filtering
   - Filter by: All, Design, Web, Ads
   - Portfolio item cards with hover effects

5. **About Section**
   - Company overview
   - Statistics (Projects, Clients, Team, Experience)
   - Animated counter animations

6. **CTA Section**
   - Call-to-action for project inquiries

7. **Contact Section**
   - Contact form with validation
   - Contact information (address, phone, email, hours)
   - Form submission handling

8. **Footer**
   - Multiple footer sections
   - Social media links
   - Quick navigation links

### ⚡ Interactive Features

- **Smooth Scrolling**: Smooth page navigation
- **Form Validation**: Client-side form validation
- **Portfolio Filtering**: Filter portfolio items by category
- **Animations**: Smooth fade-in and slide animations
- **Mobile Menu**: Toggle mobile navigation
- **Counter Animation**: Animated statistics counters

## File Structure

```
mobi flex/
├── index.html      # Main HTML file
├── style.css       # Styling (CSS)
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required (uses CDN for icons)

### Installation

1. Navigate to the project folder
2. Open `index.html` in your web browser
3. Or use a local server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js with http-server
   npx http-server
   ```
4. Visit `http://localhost:8000` in your browser

## Customization

### Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f5576c;
    /* ... more variables ... */
}
```

### Company Information
Update the following in `index.html`:

**Company Name & Logo:**
- Change "CreativeHub" in the navigation and footer

**Contact Information:**
- Address: Update in the Contact section
- Phone: Update phone number
- Email: Update email address
- Hours: Update business hours

**Services:**
- Edit service descriptions and features in the Services section

**Portfolio Items:**
- Update portfolio project titles and descriptions
- Replace placeholder colors with real images

**Social Media Links:**
- Update social media links in the footer

## Features Explained

### Navigation
- Sticky navigation bar stays visible while scrolling
- Hamburger menu for mobile devices
- Active link highlighting

### Portfolio Filtering
Click filter buttons to show/hide portfolio items by category. The filtering is done entirely with JavaScript.

### Contact Form
- Validates all required fields
- Checks email format
- Shows success/error messages
- Currently simulates submission (ready for backend integration)

### Responsive Design
The website uses CSS media queries to adapt to different screen sizes:
- Desktop (1200px+)
- Tablet (769px - 1199px)
- Mobile (480px - 768px)
- Small Mobile (< 480px)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Minimal external dependencies
- Optimized CSS and JavaScript
- Font Awesome icons from CDN
- Smooth animations using CSS transforms
- Intersection Observer for lazy loading

## Future Enhancements

Potential improvements:
- Backend integration for form submission
- Real images instead of placeholders
- Blog/Articles section
- Team member profiles
- Testimonials/Reviews
- SEO meta tags optimization
- Analytics integration
- Newsletter signup
- Multi-language support

## Integration Guide

### Backend Integration
To enable actual form submissions, update the contact form handler in `script.js`:

```javascript
// Replace the simulated submission with:
fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, subject, message })
})
.then(response => response.json())
.then(data => {
    // Handle response
})
```

### Database Setup
Configure your backend to:
1. Receive form data
2. Validate and sanitize input
3. Store in database
4. Send confirmation email to user
5. Send notification to admin

## License

This website template is free to use and modify for commercial and personal projects.

## Support

For issues, questions, or suggestions, contact: hello@creativehub.com

## Version

Version 1.0 - December 2025

---

**Made with ❤️ by CreativeHub Team**
