// Typing effect for hero section (FIXED)
const heroTitle = document.querySelector('.hero h1');
const heroSubtitle = document.querySelector('.hero h2');
const heroText = document.querySelector('.hero p');

function typeWriter(element, text, speed = 50) {
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

window.addEventListener('load', () => {
    setTimeout(() => {
        typeWriter(heroTitle, 'Divyansh Sharma', 60);
    }, 300);

    setTimeout(() => {
        typeWriter(
            heroSubtitle,
            'Entry-Level SOC Analyst | Security Operations',
            40
        );
    }, 1500);

    setTimeout(() => {
        typeWriter(
            heroText,
            'Focused on SIEM monitoring, log analysis, alert triage, and incident response',
            35
        );
    }, 3000);
});
