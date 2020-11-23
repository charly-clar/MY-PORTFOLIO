import jump from 'jump.js';

const navLink = document.querySelector('.scroll-down');

navLink.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
        e.preventDefault();
        let target = navLink.getAttribute('href');
        jump(target);
    })
})