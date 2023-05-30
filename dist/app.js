const faqContainer = document.querySelector('.faq-container')
const faqTitle = document.querySelector('.faq-title')
const faqContent = document.querySelector('.faq-content')
const faqIcon = document.querySelector('.faq-icon')

const burger = document.querySelector('.burger')
const dropdownMenu = document.querySelector('.dropdown')
const nav = document.querySelector('nav')

burger.addEventListener('click', () => {
    if (dropdownMenu.classList.contains('h-0')){
        dropdownMenu.classList.remove('h-0')
        dropdownMenu.style.height = '248px'
        nav.style.backgroundColor = 'white'
    } else {
        dropdownMenu.classList.add('h-0')
        dropdownMenu.style.height = '0px'
        nav.style.backgroundColor = '#FFBB00' 
    }
})

// faqTitle.onclick = () => {
//     faqContent.classList.toggle('show')
//     faqIcon.classList.toggle('show')
// }

faqContainer.addEventListener('click', (event) => {
    const clickedArticle = event.target.closest('article')
    const clickedFaqContent = clickedArticle.querySelector('.faq-content');
    const clickedFaqIcon = clickedArticle.querySelector('.faq-icon')
    clickedFaqContent.classList.toggle('show')
    clickedFaqIcon.classList.toggle('showRotate')
})