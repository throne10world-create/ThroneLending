// Оставьте только этот код, без курсора

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

// Параллакс для плавающих элементов
window.addEventListener('scroll', () => {
    const scroll = window.scrollY;

    document.querySelectorAll('.floating').forEach((el, index) => {
        const speed = 0.1 + index * 0.05;
        el.style.transform = `translateY(${scroll * speed}px)`;
    });
});
