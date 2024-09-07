const btnCardShare = document.getElementById('btn_card_share')
const cardShare = document.getElementById('card_share')


btnCardShare.addEventListener('click', () => {
   
    cardShare.classList.toggle('fade_in')
})

cardShare.addEventListener('mouseleave', () => {
    cardShare.classList.remove('fade_in')
})
