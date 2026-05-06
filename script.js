document.addEventListener('DOMContentLoaded', () => {
    // Плавный скролл по стрелочкам вниз
    const scrollBtn = document.getElementById('scroll-btn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', () => {
            window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
        });
    }

    // Появление нижней кнопки скачивания при скролле
    const downloadBar = document.getElementById('download');
    const heroSection = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        // Если проскроллили больше половины первого экрана — показываем кнопку
        if (window.scrollY > heroSection.offsetHeight * 0.5) {
            downloadBar.classList.add('visible');
        } else {
            downloadBar.classList.remove('visible');
        }
    });

    // Плавный скролл для всех якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});