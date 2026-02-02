// Site Configuration File
// Update this file to customize the website content

const siteConfig = {
    // Company Information
    company: {
        name: "CreativeHub",
        tagline: "Your partner in creative excellence and digital innovation",
        email: "hello@creativehub.com",
        phone: "+1 (555) 123-4567",
        address: "123 Creative Street, Design City, DC 12345",
        hours: {
            weekdays: "Mon - Fri: 9:00 AM - 6:00 PM",
            weekend: "Sat: 10:00 AM - 4:00 PM"
        }
    },

    // Social Media Links
    social: {
        facebook: "https://facebook.com/creativehub",
        twitter: "https://twitter.com/creativehub",
        linkedin: "https://linkedin.com/company/creativehub",
        instagram: "https://instagram.com/creativehub"
    },

    // Services
    services: [
        {
            id: "design",
            name: "Graphics Design",
            icon: "fa-pencil-ruler",
            description: "Create stunning visual designs that captivate your audience and elevate your brand identity with our expert graphic designers.",
            features: [
                "Logo Design",
                "Branding & Identity",
                "Print Materials",
                "Packaging Design"
            ]
        },
        {
            id: "ads",
            name: "Advertisement",
            icon: "fa-bullhorn",
            description: "Strategic advertising campaigns that reach your target audience and drive meaningful results for your business growth.",
            features: [
                "Digital Marketing",
                "Social Media Ads",
                "Campaign Strategy",
                "Content Creation"
            ]
        },
        {
            id: "web",
            name: "Web Development",
            icon: "fa-code",
            description: "Build powerful, responsive websites and applications that deliver exceptional user experiences and achieve your goals.",
            features: [
                "Custom Websites",
                "E-Commerce Solutions",
                "Web Applications",
                "SEO Optimization"
            ]
        }
    ],

    // Portfolio Projects
    portfolio: [
        {
            id: 1,
            title: "Brand Identity Package",
            description: "Complete branding solution for a tech startup",
            category: "design",
            image: "placeholder"
        },
        {
            id: 2,
            title: "E-Commerce Platform",
            description: "Responsive online store with payment integration",
            category: "web",
            image: "placeholder"
        },
        {
            id: 3,
            title: "Social Media Campaign",
            description: "Multi-platform advertising campaign for lifestyle brand",
            category: "ads",
            image: "placeholder"
        },
        {
            id: 4,
            title: "Packaging Design",
            description: "Product packaging design for premium cosmetics",
            category: "design",
            image: "placeholder"
        },
        {
            id: 5,
            title: "Corporate Website",
            description: "Professional website with CMS for management company",
            category: "web",
            image: "placeholder"
        },
        {
            id: 6,
            title: "Video Marketing",
            description: "Promotional video and animation for retail business",
            category: "ads",
            image: "placeholder"
        }
    ],

    // Statistics
    stats: {
        projects: 500,
        clients: 200,
        team: 50,
        experience: 10
    },

    // Navigation Links
    navigation: [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" }
    ],

    // Footer Links
    footerLinks: {
        services: [
            { name: "Graphics Design", href: "#services" },
            { name: "Advertisement", href: "#services" },
            { name: "Web Development", href: "#services" }
        ],
        company: [
            { name: "About Us", href: "#about" },
            { name: "Portfolio", href: "#portfolio" },
            { name: "Contact", href: "#contact" }
        ],
        legal: [
            { name: "Privacy Policy", href: "#" },
            { name: "Terms of Service", href: "#" },
            { name: "Cookies Policy", href: "#" }
        ]
    },

    // Color Scheme
    colors: {
        primary: "#667eea",
        secondary: "#764ba2",
        accent: "#f5576c",
        text: "#333",
        textLight: "#666",
        bgLight: "#f8f9fa",
        white: "#fff",
        border: "#e0e0e0"
    },

    // Meta Information
    meta: {
        title: "Design & Web Solutions - Creative Services Agency",
        description: "CreativeHub provides professional graphics design, advertisement, and web development services.",
        keywords: "graphics design, advertisement, web development, creative agency, web design",
        author: "CreativeHub Team",
        language: "en"
    },

    // Contact form settings (set endpoint to your Formspree or compatible service)
    contactForm: {
        endpoint: "" // e.g. "https://formspree.io/f/yourFormId"
    }
};

// Make config available to browser scripts
if (typeof window !== 'undefined') {
    window.siteConfig = siteConfig;
}

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = siteConfig;
} 
