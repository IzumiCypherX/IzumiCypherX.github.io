// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');



// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

var isDark = false;
    
function makeDark() {
    isDark = true;

    // change the entry in the navbar
    document.querySelector('#darktoggle > a').textContent = "Light Mode";

    // change the body property
    document.querySelector('body').classList.add('other-page-dark');

    // change the navbar assets to dark mode
    document.querySelector('.navbar').classList.replace("color-change", "navbar-dark");
    document.querySelector('.navbar-brand').classList.add("navbar-brand-dark");
    document.querySelector('.navbar-toggler-icon').classList.add("navbar-toggler-icon-dark");
    var navlinks = document.querySelectorAll('.nav-link')
    navlinks.forEach((l) => {
        l.classList.add("nav-link-dark");
    })

    // I hate Dark Mode
    // It inhibits the human's colorful creativity
    // Did you know? I love Cats. But the bigger question is, why are you reading this??

    // Background Color of the First Page, changing from a gradient animation, to black :(
    document.querySelector('.bgprop').classList.remove('color-change');

    // Link Hover
    document.querySelector('.internal-links').classList.replace('internal-links', 'internal-links-dark');

    // Change the text color throughout the page
    document.querySelector('#thisis').classList.add('thisis-dark');
    var mainname = document.querySelectorAll('.mainname')
    mainname.forEach((l) => {
        l.classList.add('myname');
    })

    var textcenter = document.querySelectorAll('.text-center')
    textcenter.forEach((l) => {
        l.classList.add('text-center-dark');
    })

    var normaltext = document.querySelectorAll('.normaltext')
    normaltext.forEach((l) => {
        l.classList.add('normaltext-dark');
    })

    // Card Contents
    var card = document.querySelectorAll('.card')
    card.forEach((l) => {
        l.classList.add('card-dark');
    })

    var cardtext = document.querySelectorAll('.card-text')
    cardtext.forEach((l) => {
        l.classList.add('card-text-dark');
    })

    // Form Color and placeholders
    var formcontrol = document.querySelectorAll('.form-control')
    formcontrol.forEach((l) => {
        l.classList.add('form-control-dark');
    })
}

function makeLight() {
    isDark = false;

    // change the entry in the navbar
    document.querySelector('#darktoggle > a').textContent = "Dark Mode";  
    
    // change the body property
    document.querySelector('body').classList.remove('other-page-dark');

    // change the navbar assets to dark mode
    document.querySelector('.navbar').classList.replace("navbar-dark", "color-change");
    document.querySelector('.navbar-brand').classList.remove("navbar-brand-dark");
    document.querySelector('.navbar-toggler-icon').classList.remove("navbar-toggler-icon-dark");
    var navlinks = document.querySelectorAll('.nav-link')
    navlinks.forEach((l) => {
        l.classList.remove("nav-link-dark");
    })

    // Background Color of the First Page
    document.querySelector('.bgprop').classList.add('color-change');

    // Link Hover
    document.querySelector('.internal-links-dark').classList.replace('internal-links-dark', 'internal-links');

    // Change the text color throughout the page
    document.querySelector('#thisis').classList.remove('thisis-dark');
    var mainname = document.querySelectorAll('.mainname')
    mainname.forEach((l) => {
        l.classList.remove('myname');
    })

    var textcenter = document.querySelectorAll('.text-center')
    textcenter.forEach((l) => {
        l.classList.remove('text-center-dark');
    })

    var normaltext = document.querySelectorAll('.normaltext')
    normaltext.forEach((l) => {
        l.classList.remove('normaltext-dark');
    })

    // Card Contents
    var card = document.querySelectorAll('.card')
    card.forEach((l) => {
        l.classList.remove('card-dark');
    })

    var cardtext = document.querySelectorAll('.card-text')
    cardtext.forEach((l) => {
        l.classList.remove('card-text-dark');
    })

    // Form Color and placeholders
    var formcontrol = document.querySelectorAll('.form-control')
    formcontrol.forEach((l) => {
        l.classList.remove('form-control-dark');
    })
}

function darkSide() {
    if(isDark) {
        document.querySelector('#light-mode-promo').innerHTML = ""
        makeLight();
    }
    else {
        // I am a simple man, I make stuff, I ask for promo 
        document.querySelector('#light-mode-promo').innerHTML = "I wasted alot of time making animations in Light Mode, which are all removed in dark mode. Do check them out too <br>:sweat-smile:";
        makeDark();
    }
    
}