// ACTIVE NAV-LINKS
let navLink = document.querySelectorAll('.nav-link');
  for (let i = 0; i < navLink.length; i++) {
    let navValue = navLink[i]
    navValue.addEventListener('click', () => {
      navValue.classList.contains('active') ? navValue.classList.remove('active') : turnOffPrev(); navValue.classList.add('active');
    })
  }
  
function turnOffPrev() {
  const prevBut = document.querySelector('.active');
  if (prevBut) {
    prevBut.classList.remove('active')
  }
}


// MENU BUTTON
const navMenu = document.getElementById('nav-menu'),
          navToggle = document.getElementById('open-menu-button'),
          navClose = document.getElementById('close-menu-button')


if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
    navToggle.style.display = 'none'
    navClose.style.display = 'block'
  })
}

if(navClose){
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
    navToggle.style.display = 'block'
    navClose.style.display = 'none'
  })
}


// LASTEST ARTICLES TOGGLE 
const blogCard = document.querySelectorAll('.blog-text') 
blogCard.forEach(blogCard => {
  blogCard.addEventListener('click', function() {
    blogCard.classList.toggle('cardOpened');
  })
})


// REQUEST INVITE BUTTON
const requestBtn = document.querySelectorAll('.invite-link')
for (let j = 0; j < requestBtn.length; j++) {
  let requestValue = requestBtn[j]
  requestValue.addEventListener('click', () => {
    if (!requestValue.classList.contains('activeLink')) {
      requestValue.classList.add('activeLink')
    } else (
      requestValue.classList.remove('activeLink')
    )
  })
}


// FOOTER LINKS
  let footerLink = document.querySelectorAll('.footer-link');
  for (let i = 0; i < footerLink.length; i++) {
    let footerValue = footerLink[i]
    footerValue.addEventListener('click', () => {
      footerValue.classList.contains('activeFooter') ? footerValue.classList.remove('activeFooter') : turnPrev(); footerValue.classList.add('activeFooter');
    })
  }
  function turnPrev() {
    const prevBut = document.querySelector('.activeFooter');
    if (prevBut) {
      prevBut.classList.remove('activeFooter')
    }
  }