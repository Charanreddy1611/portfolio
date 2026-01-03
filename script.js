// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const themeToggleLabel = document.querySelector('.theme-toggle-label');
const html = document.documentElement;

// Function to update label text
function updateThemeLabel(isDark) {
    if (themeToggleLabel) {
        themeToggleLabel.textContent = isDark ? 'Switch to Lightmode' : 'Switch to Darkmode';
    }
}

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
    html.setAttribute('data-theme', 'dark');
    darkModeToggle.checked = true;
    updateThemeLabel(true);
} else {
    updateThemeLabel(false);
}

// Toggle dark mode
darkModeToggle.addEventListener('change', function() {
    if (this.checked) {
        html.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateThemeLabel(true);
    } else {
        html.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateThemeLabel(false);
    }
});

// Mobile Menu Toggle with improved UX
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

function toggleMobileMenu() {
    const isActive = navMenu.classList.contains('active');
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (!isActive) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}

hamburger.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        body.style.overflow = '';
    });
});

// Close mobile menu when clicking on backdrop
navMenu.addEventListener('click', (e) => {
    if (e.target === navMenu) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        body.style.overflow = '';
    }
});

// Close mobile menu on window resize (if resized to desktop)
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        body.style.overflow = '';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.project-card, .skill-category, .stat-item, .contact-item');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            progressBar.style.width = '0';
            setTimeout(() => {
                progressBar.style.width = width;
            }, 100);
            skillObserver.unobserve(progressBar);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Form submission handler - sends email directly to your inbox
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('from_name').value;
        const email = document.getElementById('from_email').value;
        const message = document.getElementById('message').value;
        
        // Create mailto link with pre-filled email
        const subject = encodeURIComponent(`Portfolio Contact: Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        const mailtoLink = `mailto:charanreddy671@gmail.com?subject=${subject}&body=${body}`;
        
        // Show message
        formMessage.textContent = 'Opening your email client...';
        formMessage.className = 'form-message info';
        formMessage.style.display = 'block';
        
        // Open email client
        window.location.href = mailtoLink;
        
        // Reset form after a delay
        setTimeout(() => {
            contactForm.reset();
            formMessage.textContent = 'Email client opened! If it didn\'t open, please email me directly at charanreddy671@gmail.com';
        }, 500);
        
        // Optional: If EmailJS is configured, uncomment below and comment out the mailto method above
        /*
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        formMessage.textContent = '';
        formMessage.className = 'form-message';
        
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', contactForm, 'YOUR_PUBLIC_KEY')
            .then(() => {
                formMessage.textContent = 'Thank you! Your message has been sent. I\'ll get back to you soon.';
                formMessage.className = 'form-message success';
                contactForm.reset();
            })
            .catch((error) => {
                formMessage.textContent = 'Error sending message. Please email me directly at charanreddy671@gmail.com';
                formMessage.className = 'form-message error';
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            });
        */
    });
}

// Active navigation link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Hero Parallax Blobs - Mouse Movement Effect
const hero = document.querySelector('.hero');
const blob1 = document.querySelector('.hero-parallax-blob-1');
const blob2 = document.querySelector('.hero-parallax-blob-2');
const blob3 = document.querySelector('.hero-parallax-blob-3');

if (hero && blob1 && blob2 && blob3) {
    hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        
        // Blob 1: top left, moves with mouse
        blob1.style.transform = `translate(${mouseX * 30}px, ${mouseY * 30}px)`;
        
        // Blob 2: bottom right, moves opposite
        blob2.style.transform = `translate(${mouseX * -40}px, ${mouseY * -40}px)`;
        
        // Blob 3: center, subtle movement
        blob3.style.transform = `translate(calc(-50% + ${mouseX * 20}px), calc(-50% + ${mouseY * 20}px))`;
    });
    
    hero.addEventListener('mouseleave', () => {
        blob1.style.transform = '';
        blob2.style.transform = '';
        blob3.style.transform = '';
    });
}

// Parallax effect for hero section (optional)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add active state to navigation links
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color);
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Three.js 3D Scene
function initThreeJS() {
    const canvas = document.getElementById('threejs-canvas');
    if (!canvas) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Camera position
    camera.position.z = 5;

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Particle material
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Add geometric shapes
    const shapes = [];
    const geometryTypes = [
        () => new THREE.TetrahedronGeometry(0.3, 0),
        () => new THREE.OctahedronGeometry(0.3, 0),
        () => new THREE.IcosahedronGeometry(0.3, 0)
    ];

    for (let i = 0; i < 15; i++) {
        const geometry = geometryTypes[Math.floor(Math.random() * geometryTypes.length)]();
        const material = new THREE.MeshStandardMaterial({
            color: new THREE.Color().setHSL(Math.random(), 0.7, 0.6),
            metalness: 0.5,
            roughness: 0.5,
            transparent: true,
            opacity: 0.6
        });
        const mesh = new THREE.Mesh(geometry, material);
        
        mesh.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        );
        mesh.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );
        
        shapes.push({
            mesh: mesh,
            speed: {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                z: (Math.random() - 0.5) * 0.01
            },
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02
            }
        });
        scene.add(mesh);
    }

    // Add ambient and point lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xf97316, 1, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x0ea5e9, 1, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
            mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        });
    }

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Rotate particles
        particlesMesh.rotation.y += 0.001;
        particlesMesh.rotation.x += 0.0005;

        // Animate shapes
        shapes.forEach(shape => {
            shape.mesh.rotation.x += shape.rotationSpeed.x;
            shape.mesh.rotation.y += shape.rotationSpeed.y;
            shape.mesh.rotation.z += shape.rotationSpeed.z;
            
            shape.mesh.position.x += shape.speed.x;
            shape.mesh.position.y += shape.speed.y;
            shape.mesh.position.z += shape.speed.z;

            // Bounce back if out of bounds
            if (Math.abs(shape.mesh.position.x) > 5) shape.speed.x *= -1;
            if (Math.abs(shape.mesh.position.y) > 5) shape.speed.y *= -1;
            if (Math.abs(shape.mesh.position.z) > 5) shape.speed.z *= -1;
        });

        // Camera follows mouse
        camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
        camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
        camera.lookAt(scene.position);

        // Rotate lights
        pointLight1.position.x = Math.sin(Date.now() * 0.001) * 5;
        pointLight1.position.y = Math.cos(Date.now() * 0.001) * 5;
        pointLight2.position.x = Math.cos(Date.now() * 0.001) * -5;
        pointLight2.position.y = Math.sin(Date.now() * 0.001) * -5;

        renderer.render(scene, camera);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
}

// Initialize Three.js when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThreeJS);
} else {
    initThreeJS();
}

