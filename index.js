const btnCardShare = document.getElementById('btn_card_share')
const cardShare = document.getElementById('card_share')

// Escuchamos evento click en botón compartir
btnCardShare.addEventListener('click', () => {
    // Conmutamos la clase que muestra el componente compartir
    cardShare.classList.toggle('fade_in')
})

// Escuchamos el evento del mouse cuando deja la zona compartir
cardShare.addEventListener('mouseleave', () => {
    // Removemos la clase para que se oculte el componente compartir
    cardShare.classList.remove('fade_in')
})