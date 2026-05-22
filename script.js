// Бургер-меню
const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
const mobileGithubBtn = document.querySelector('.mobile-github-btn');
const mobileThemeBtn = document.querySelector('.mobile-theme-btn');

function openMenu() {
    burgerMenu.classList.add('active');
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenuFunc() {
    burgerMenu.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
}

burgerMenu.addEventListener('click', openMenu);
closeMenu.addEventListener('click', closeMenuFunc);
mobileMenuOverlay.addEventListener('click', closeMenuFunc);

// Закрытие меню при клике на ссылки
mobileLinks.forEach(link => {
    link.addEventListener('click', closeMenuFunc);
});

if (mobileGithubBtn) {
    mobileGithubBtn.addEventListener('click', closeMenuFunc);
}

// Закрытие меню по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenuFunc();
    }
});

// Theme switcher
const html = document.documentElement;
const logoImg = document.querySelector('.logo-img');
const desktopThemeBtn = document.querySelector('.desktop-theme-btn');

function updateThemeIcons(theme) {
    const iconClass = theme === 'dark' ? 'fa-sun' : 'fa-moon';
    
    // Обновляем иконку в десктопной кнопке
    if (desktopThemeBtn) {
        desktopThemeBtn.innerHTML = `<i class="fas ${iconClass}"></i>`;
    }
    
    // Обновляем иконку в мобильной кнопке
    if (mobileThemeBtn) {
        const icon = mobileThemeBtn.querySelector('i');
        if (icon) {
            icon.className = `fas ${iconClass}`;
        }
    }
}

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Switch logo
    if (logoImg) {
        if (theme === 'dark') {
            logoImg.src = 'logoDarktheme.png';
        } else {
            logoImg.src = 'logoLighttheme.png';
        }
    }
    
    updateThemeIcons(theme);
}

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

// Theme button clicks
if (desktopThemeBtn) {
    desktopThemeBtn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

if (mobileThemeBtn) {
    mobileThemeBtn.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

// Кнопка "Наверх"
const scrollToTopBtn = document.querySelector('.scroll-to-top');

function toggleScrollToTopButton() {
    if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
}

window.addEventListener('scroll', toggleScrollToTopButton);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ПОЛНЫЕ переводы
const translations = {
    ru: {
        // Навигация
        logo: 'ТРОН X МИРОВ',
        about: 'Об Игре',
        problems: 'Особенности',
        gallery: 'Галерея',
        videos: 'Видео',
        socials: 'Соцсети',
        languageLabel: 'Язык / Language',
        themeLabel: 'Тема / Theme',
        
        // Hero секция
        heroBadge: 'Настольная стратегия нового поколения',
        heroTitle: 'ТРОН<br><span>ДЕСЯТИ МИРОВ</span>',
        heroDesc: 'Гексагональная стратегическая игра, где оба игрока делают ходы одновременно. Мир, в котором невозможно просчитать всё. Мир, где важны не только логика, но и предсказание намерений соперника.',
        exploreBtn: 'Исследовать мир',
        watchBtn: 'Смотреть видео',
        
        // About секция
        aboutLabel: 'ОПИСАНИЕ',
        aboutTitle: 'Что такое «Трон Десяти Миров»?',
        feature1Title: '127 клеток',
        feature1Desc: 'Игровое поле состоит из 127 гексагональных клеток, создающих уникальную стратегическую геометрию и огромное количество вариантов развития партии.',
        feature2Title: 'Одновременные ходы',
        feature2Desc: 'Оба игрока одновременно фиксируют действия фигур, а затем раскрывают их. Это уничтожает преимущество первого хода и делает партии непредсказуемыми.',
        feature3Title: 'Несколько путей к победе',
        feature3Desc: 'Победить можно захватом Трона Королём, постановкой Мата, Осадой Замка или лишением противника возможных ходов.',
        aboutDesc1: '«Трон Десяти Миров» — настольная стратегическая игра, в которой два игрока одновременно фиксируют ходы фигур, после чего перемещают их на гексагональном поле. В отличие от классических пошаговых стратегий, здесь отсутствует понятие «идеального» хода.',
        aboutDesc2: 'Игрокам приходится учитывать психологию соперника, просчитывать облака возможных действий и адаптироваться к постоянно меняющейся ситуации на поле.',
        
        // Problems секция
        conceptLabel: 'КОНЦЕПЦИЯ',
        conceptTitle: 'Три фундаментальные проблемы игр',
        problem1Title: 'Проблема первого хода',
        problem1Desc: 'Во многих стратегиях первый игрок получает преимущество. В «Троне» оба игрока находятся в полностью равных условиях. Одновременные действия создают честный баланс 50/50.',
        problem2Title: 'Проблема машинного счета',
        problem2Desc: 'Компьютеры уже превзошли человека в шахматах, го и шашках. Но в «Троне» невозможно просчитать все варианты, потому что игроки действуют одновременно.',
        problem3Title: 'Проблема ничьих',
        problem3Desc: 'В игре отсутствует единственный «лучший ход». Вместо этого существуют облака сильнейших решений, зависящие от поведения соперника.',
        
        // Gallery секция
        galleryLabel: 'ГАЛЕРЕЯ',
        galleryTitle: 'Мир Трона',
        
        // Videos секция
        videosLabel: 'ВИДЕО',
        videosTitle: 'Видео-контент проекта',
        youtubeRus: 'Русскоязычный канал проекта',
        youtubeEng: 'Англоязычный канал проекта',
        rutube: 'Видео и материалы проекта',
        
        // Socials секция
        socialsLabel: 'СОЦСЕТИ',
        socialsTitle: 'Следите за проектом',
        
        // Footer
        footerTitle: 'ТРОН ДЕСЯТИ МИРОВ',
        footerDesc: 'Стратегия. Предсказание. Одновременные ходы.',
        ideaAuthor: 'Создатель идеи',
        developer: 'Разработчик и дизайнер'
    },
    en: {
        // Navigation
        logo: 'THRONE X WORLDS',
        about: 'About',
        problems: 'Features',
        gallery: 'Gallery',
        videos: 'Videos',
        socials: 'Social',
        languageLabel: 'Language / Язык',
        themeLabel: 'Theme / Тема',
        
        // Hero section
        heroBadge: 'New generation board strategy',
        heroTitle: 'THRONE<br><span>TEN WORLDS</span>',
        heroDesc: 'A hexagonal strategy game where both players make moves simultaneously. A world where it\'s impossible to calculate everything. A world where not only logic matters, but also predicting your opponent\'s intentions.',
        exploreBtn: 'Explore the world',
        watchBtn: 'Watch video',
        
        // About section
        aboutLabel: 'DESCRIPTION',
        aboutTitle: 'What is "Throne of Ten Worlds"?',
        feature1Title: '127 cells',
        feature1Desc: 'The game board consists of 127 hexagonal cells, creating a unique strategic geometry and a huge number of game development options.',
        feature2Title: 'Simultaneous moves',
        feature2Desc: 'Both players simultaneously record the actions of pieces and then reveal them. This eliminates the first move advantage and makes games unpredictable.',
        feature3Title: 'Multiple paths to victory',
        feature3Desc: 'You can win by capturing the Throne with the King, checkmate, Castle Siege, or depriving the opponent of possible moves.',
        aboutDesc1: '"Throne of Ten Worlds" is a board strategy game in which two players simultaneously record the moves of pieces, then move them on a hexagonal board. Unlike classic turn-based strategies, there is no concept of a "perfect" move here.',
        aboutDesc2: 'Players have to take into account the opponent\'s psychology, calculate clouds of possible actions, and adapt to the constantly changing situation on the board.',
        
        // Problems section
        conceptLabel: 'CONCEPT',
        conceptTitle: 'Three fundamental problems of games',
        problem1Title: 'First move problem',
        problem1Desc: 'In many strategies, the first player gets an advantage. In "Throne", both players are in completely equal conditions. Simultaneous actions create a fair 50/50 balance.',
        problem2Title: 'Machine counting problem',
        problem2Desc: 'Computers have already surpassed humans in chess, Go, and checkers. But in "Throne", it\'s impossible to calculate all options because players act simultaneously.',
        problem3Title: 'Draw problem',
        problem3Desc: 'There is no single "best move" in the game. Instead, there are clouds of strongest solutions depending on the opponent\'s behavior.',
        
        // Gallery section
        galleryLabel: 'GALLERY',
        galleryTitle: 'World of Throne',
        
        // Videos section
        videosLabel: 'VIDEOS',
        videosTitle: 'Video content of the project',
        youtubeRus: 'Russian-language project channel',
        youtubeEng: 'English-language project channel',
        rutube: 'Project videos and materials',
        
        // Socials section
        socialsLabel: 'SOCIALS',
        socialsTitle: 'Follow the project',
        
        // Footer
        footerTitle: 'THRONE TEN WORLDS',
        footerDesc: 'Strategy. Prediction. Simultaneous moves.',
        ideaAuthor: 'Idea Creator',
        developer: 'Developer & Designer'
    }
};

let currentLang = localStorage.getItem('language') || 'ru';

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Обновляем все элементы с data-translate
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    // Обновляем активную кнопку языка
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // Обновляем HTML lang атрибут
    document.documentElement.lang = lang === 'ru' ? 'ru' : 'en';
    
    // Обновляем title страницы
    document.title = lang === 'ru' ? 'Трон Десяти Миров | Throne of Ten Worlds' : 'Throne of Ten Worlds | Трон Десяти Миров';
}

// Language button clicks
document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

// Initialize language
switchLanguage(currentLang);

// Reveal animations
const reveals = document.querySelectorAll('.reveal');

function revealElements(){
    reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        const visible = window.innerHeight - 100;
        if(top < visible){
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealElements);
revealElements();

// Parallax for floating elements
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

// Инициализация кнопки "наверх" при загрузке
toggleScrollToTopButton();