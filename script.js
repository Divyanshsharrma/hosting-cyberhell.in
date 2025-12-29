// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.8)';
    }
});

// Add animation to skill tags
const skillTags = document.querySelectorAll('.skill-tags span');
skillTags.forEach((tag, index) => {
    tag.style.animationDelay = `${index * 0.1}s`;
    tag.classList.add('animate-in');
});

// Add animation to project cards
const projectCards = document.querySelectorAll('.project-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, {
    threshold: 0.1
});

projectCards.forEach(card => {
    observer.observe(card);
});

// Add typing effect to hero section
const heroTitle = document.querySelector('.hero h1');
const heroSubtitle = document.querySelector('.hero h2');
const heroText = document.querySelector('.hero p');

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Start typing animation when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        typeWriter(heroTitle, 'Divyansh Sharma');
    }, 500);
    
    setTimeout(() => {
        typeWriter(heroSubtitle,  "Entry-Level SOC Analyst | Security Operations",
  "SIEM Monitoring | Log Analysis | Incident Response");
    }, 2000);
    
    setTimeout(() => {
        typeWriter(heroText, 'Passionate about ethical hacking, automation, and digital security');
    }, 3500);

}); 
