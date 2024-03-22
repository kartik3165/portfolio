// toggle nav bar while scrolling
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
  
 
//scroll setting
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            //working of navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // animation on active session on scroll
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });


    //sticky header setting
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
 
    //remove toggle icon and navbar when click navbar links scrolls 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation for footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

let mixerPortfolio = mixitup('.project_container', {
    selectors: {
        target: '.project_container'
    },
    animation: {
        duration: 300
    }
});

const linkWork = document.querySelectorAll('.project_item')
function activeproject() {
    linkWork.forEach(L=> l.classList.remove('active-project'))
    this.classList.add('active-project')
}
linkWork.forEach(L => l.addEventListener('click' , activeproject))
