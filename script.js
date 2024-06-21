
let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav li a ')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {

            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav li a [href*=' + id + ']').classList.add('active');
            });
        };

    });

};
let menulist = document.getElementById("menulist")
menulist.style.maxHeight = "0px";

function toggleMenu() {
    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "100vh";

    }
    else {
        menulist.style.maxHeight = "0px";

    }
}
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});
