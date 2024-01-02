let btn = document.getElementById('bars')
let nav = document.querySelector('nav')
let main = document.querySelector('.main')
let li = document.querySelector('.fl')



btn.addEventListener('click', function(){
    nav.classList.add('show')
    main.classList.add('overly')
    li.classList.add('active')
})

let cross = document.querySelector('#cross')
cross.addEventListener('click', function(){
    nav.classList.remove('show')
    main.classList.remove('overly')
    li.classList.remove('active')
})