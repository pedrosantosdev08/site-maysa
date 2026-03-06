window.addEventListener('DOMContentLoaded', () => {
    
    const divVideo = document.querySelector('.background');
    if (divVideo) {
        const video = document.createElement('video');
        video.src = 'assets/backgrounds/background-angelo-animado.mp4';
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        divVideo.appendChild(video);
    }

    
    const observerOptions = {
        threshold: 0.6 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

  
    const elementsToReveal = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
    elementsToReveal.forEach(el => observer.observe(el));
});