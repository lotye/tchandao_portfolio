// selection des boutons 
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

//fontion exécutée au click du menu
menu.onclick = () => {
        menu.classList.toggle('fa-times');
        header.classList.toggle('active');
        document.body.classList.toggle('active');
    }
    //fonction pour scroller
window.onscroll = () => {
    if (window.innerWidth < 991) {
        menu.classList.remove('fa-times');
        header.classList.remove('active');
        document.body.classList.remove('active');
    }
    //fonction de sélection appliquée sur l'attribut section

    document.querySelectorAll('section').forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            document.querySelectorAll('.header .navbar a').forEach(links => {
                links.classList.remove('active');
                document.querySelector('.header .navbar a[href*=' + id + ']').classList.add('active')
            });
        };

    });

}