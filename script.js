const navbar = document.querySelector('.scroll')

console.log(navbar.clientHeight)
 
window.addEventListener('scroll',() => {
   
    if(navbar.clientHeight < window.scrollY) {
        navbar.classList.remove('scroll')
        navbar.classList.add('onscrolled')
        
    } else {
        navbar.classList.add('scroll')
        navbar.classList.remove('onscrolled')
    }
})



const hiring = document.querySelector('.hiring-form')
const contact = document.querySelector('.contact-form')
const hiringBtn = document.querySelector('.hiringBtn')
const contactBtn = document.querySelector('.contactBtn')


 

    hiringBtn.addEventListener('click',() => {
        hiring.classList.remove('d-none')
        contact.classList.add('d-none')
    })

    contactBtn.addEventListener('click',() => {
        contact.classList.remove('d-none')
        hiring.classList.add('d-none')
    })



    $('.header-buttons button').click(function(){
        $('.header-buttons button').removeClass('active');
        $(this).addClass('active');
    })

 $('.game-buttons button').click(function(){
        const gamename = $(this).attr('game-name')
        const gamebg = $(this).attr('game-bg')
        $('.game-buttons button').removeClass('active')
        $(this).addClass('active')
        $('.gamesec').addClass('d-none')
        $('.gamesec[game-name='+ gamename +']').removeClass('d-none')
        $('#game-sec').css('background-image','url('+gamebg+')');
 })

 