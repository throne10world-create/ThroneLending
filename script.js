// Безопасная версия с проверками
const cursor = document.querySelector('.cursor');
const outline = document.querySelector('.cursor-outline');

if (cursor && outline) {
    window.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        outline.style.left = e.clientX + 'px';
        outline.style.top = e.clientY + 'px';
    });

    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            outline.style.transform = 'translate(-50%, -50%) scale(1.8)';
        });
        link.addEventListener('mouseleave', () => {
            outline.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

const reveals = document.querySelectorAll('.reveal');
if (reveals.length > 0) {
    function revealElements() {
        reveals.forEach((el) => {
            const top = el.getBoundingClientRect().top;
            const visible = window.innerHeight - 100;
            if (top < visible) {
                el.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', revealElements);
    revealElements();
}

// Параллакс для плавающих элементов
const floatingElements = document.querySelectorAll('.floating');
if (floatingElements.length > 0) {
    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;
        floatingElements.forEach((el, index) => {
            const speed = 0.1 + index * 0.05;
            el.style.transform = `translateY(${scroll * speed}px)`;
        });
    });
}