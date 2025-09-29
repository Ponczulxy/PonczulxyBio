document.addEventListener('DOMContentLoaded', () => {
    if (typeof CONFIG === 'undefined') {
        console.error('Błąd: Plik config.js nie został wczytany!');
        return;
    }

    // --- A. ANIMACJA TŁA (Cząsteczki / Dynamiczny Background) ---
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    function resizeCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = {
                x: (Math.random() - 0.5) * 0.5,
                y: (Math.random() - 0.5) * 0.5
            };
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }

        update() {
            if (this.x + this.radius > width || this.x - this.radius < 0) {
                this.velocity.x = -this.velocity.x;
            }
            if (this.y + this.radius > height || this.y - this.radius < 0) {
                this.velocity.y = -this.velocity.y;
            }

            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.draw();
        }
    }

    function initParticles() {
        particles = [];
        const particleCount = 70;
        const color = 'rgba(0, 0, 0, 0.5)'; // Ciemny, subtelny kolor
        for (let i = 0; i < particleCount; i++) {
            const radius = Math.random() * 1.5 + 0.5;
            const x = Math.random() * width;
            const y = Math.random() * height;
            particles.push(new Particle(x, y, radius, color));
        }
    }

    function animateBackground() {
        requestAnimationFrame(animateBackground);
        ctx.clearRect(0, 0, width, height);

        particles.forEach(particle => {
            particle.update();
        });
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
    
    // Uruchomienie tła
    resizeCanvas();
    initParticles();
    animateBackground();
    

    // --- B. WSTRZYKIWANIE TREŚCI I TYPING EFFECT (Zachowane) ---
    const typingElement = document.getElementById('heroHeading');
    typingElement.textContent = '';
    const textToType = CONFIG.HERO.HEADING;
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            typingElement.innerHTML += textToType.charAt(i);
            i++;
            setTimeout(typeWriter, 70);
        } else {
            typingElement.style.borderRight = 'none';
        }
    }
    
    document.getElementById('pageTitle').textContent = `• ${CONFIG.NAME} | Chaos Pro •`;
    document.getElementById('heroSubtitle').innerHTML = CONFIG.HERO.SUBTITLE.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Wstrzykiwanie tekstu O MNIE
    const aboutContentDiv = document.getElementById('aboutTextContent');
    aboutContentDiv.innerHTML = CONFIG.ABOUT_ME.map(p => `<p class="reveal">${p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`).join('');

    // Wstrzykiwanie tekstu GAMING
    const gamingContentDiv = document.getElementById('gamingTextContent');
    gamingContentDiv.innerHTML = CONFIG.GAMING_CONTENT.map(p => `<p class="reveal">${p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>`).join('');


    // ... (pozostałe wstrzykiwanie linków i footer'a) ...
    document.getElementById('discordLink').href = CONFIG.DISCORD.INVITE_URL;
    document.getElementById('youtubeLink').href = CONFIG.YOUTUBE_LINK;
    document.getElementById('footerDiscordLink').href = CONFIG.DISCORD.INVITE_URL;
    document.getElementById('footerYoutubeLink').href = CONFIG.YOUTUBE_LINK;

    // Wstrzykiwanie SKILLS (zachowane)
    const skillsContainer = document.getElementById('skillsContainer');
    skillsContainer.innerHTML = CONFIG.SKILLS.map(skill => `
        <div class="skill-tile reveal" data-desc="${skill.description}">
            <i class="${skill.icon} ${skill.color}"></i>
            <h3>${skill.name}</h3>
        </div>
    `).join('');


    // Uruchomienie efektu piszącej maszyny
    typeWriter();

    // --- C. LOGIKA SCROLL REVEAL I ANIMACJA KODU (Zachowane) ---
    // ... (kod observera i animateCode) ...

    const sectionsToReveal = document.querySelectorAll('.reveal');
    const codeSection = document.getElementById('projects');
    const codeBlock = document.getElementById('codeSnippet');
    let codeAnimated = false; 

    const observerOptions = { root: null, threshold: 0.1, rootMargin: "0px" };
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target.id === 'projects' && !codeAnimated) {
                    animateCode(CONFIG.CODE_SNIPPET, codeBlock);
                    codeAnimated = true;
                }
                
                if (entry.target.id !== 'projects') {
                    observer.unobserve(entry.target); 
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionsToReveal.forEach(section => observer.observe(section));
    document.querySelectorAll('.text-split-in').forEach(section => observer.observe(section));

    function animateCode(codeText, element) {
        let codeIndex = 0;
        element.innerHTML = '';
        
        function typeCode() {
            if (codeIndex < codeText.length) {
                element.innerHTML += codeText.charAt(codeIndex);
                codeIndex++;
                setTimeout(typeCode, 10);
            } else {
                element.innerHTML += '<span class="cursor"></span>';
            }
        }
        typeCode();
    }


    // --- D. LOGIKA IKON I RIPPLE (Zachowane) ---
    // ... (kod dla dymków opisu po kliknięciu i ripple effect) ...
    
    const skillTiles = document.querySelectorAll('.skill-tile');
    
    skillTiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const description = tile.getAttribute('data-desc');
            
            let currentDesc = tile.querySelector('.temp-description');
            
            if (currentDesc) {
                currentDesc.remove(); 
            } else {
                currentDesc = document.createElement('div');
                currentDesc.classList.add('temp-description');
                currentDesc.style.cssText = `
                    position: absolute; bottom: 100%; left: 50%; transform: translateX(-50%) translateY(-10px);
                    background-color: var(--primary-text); color: var(--background-light); padding: 10px 15px; 
                    border-radius: 5px; width: 200px; font-size: 0.8em; z-index: 10;
                    opacity: 0; transition: opacity 0.3s, transform 0.3s;
                `;
                currentDesc.innerHTML = description;
                tile.appendChild(currentDesc);
                
                setTimeout(() => {
                    currentDesc.style.opacity = 1;
                    currentDesc.style.transform = 'translateX(-50%) translateY(-20px)';
                }, 10);
                
                setTimeout(() => {
                    if (tile.contains(currentDesc)) {
                       currentDesc.style.opacity = 0;
                       currentDesc.style.transform = 'translateX(-50%) translateY(-10px)';
                       setTimeout(() => currentDesc.remove(), 300);
                    }
                }, 4000);
            }
        });
    });

    document.querySelectorAll('.ripple-effect').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            this.appendChild(ripple);

            ripple.addEventListener('animationend', function() {
                ripple.remove();
            });
        });
    });
});