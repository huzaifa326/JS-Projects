let switc = document.getElementById('toggleSwitch');
let div = document.querySelector('.switch-btn')
let slider = document.querySelector('.slider')


switc.addEventListener('click', ()=>{
    div.classList.toggle('switch-bg')
    slider.classList.toggle('bg')
})