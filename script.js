// Проверка на мобильное устройство
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;

const cursor = document.querySelector('.cursor');
const outline = document.querySelector('.cursor-outline');

// Функция для управления курсором
function handleCursor() {
    if (window.innerWidth <= 768) {
        // Скрываем курсор на мобильных
        if (cursor) cursor.style.display = 'none';
        if (outline) outline.style.display = 'none';
        document.body.style.cursor = 'auto';
    } else {
        // Показываем курсор на десктопе
        if (cursor) cursor.style.display = 'block';
        if (outline) outline.style.display = 'block';
        document.body.style.cursor = 'none';
    }
}

// Запускаем при загрузке
handleCursor();

// Отслеживаем изменение размера окна
window.addEventListener('resize', handleCursor);

// Обработчик движения мыши (только если не мобильное устройство)
if (!isMobile && cursor && outline) {
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

// Остальной код...

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
