/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}   

/*===== MENU HIDE =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}  

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class.
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    //When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is higher than 350 viewport height, add the show scroll class to the a tag with the scrollup\
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
              }else{
                sectionsClass.classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//we validate if the user previously chose a topic
if (selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    //add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the use choose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true 
})

sr.reveal('.home__img, .newsletter__container')
sr.reveal('.home__data', {origin: 'bottom'})
sr.reveal('.about__data, .recently__data', {origin: 'left'})
sr.reveal('.about__img, .recently__img', {origin: 'right'})
sr.reveal('.popular__card', {interval: 100})
sr.reveal('.footer__container, .footer__info, .footer__copy', {origin: 'bottom', })


/*=============== CHOOSE FAQ ===============*/
const faqItems = document.querySelectorAll('.choose__faq-item')

faqItems.forEach((item) =>{
    const faqHeader = item.querySelector('.choose__faq-header')

    faqHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.faq-open')
        toggleItem(item)
        if(openItem && openItem != item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const faqContent = item.querySelector('.choose__faq-content')

    if(item.classList.contains('faq-open')){
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')
    }else{
        faqContent.style.height = faqContent.scrollHeight + 'px'
        item.classList.add('faq-open')
    }
}
