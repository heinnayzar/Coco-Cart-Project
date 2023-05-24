const faqContainer = document.querySelector('.faq-container')
const faqTitle = document.querySelector('.faq-title')
const faqContent = document.querySelector('.faq-content')
const faqIcon = document.querySelector('.faq-icon')

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