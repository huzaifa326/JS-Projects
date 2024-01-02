let listItem = document.querySelectorAll('.item')
let input = document.getElementById('searchitem')


listItem.forEach(elm =>{
    elm.addEventListener('click', function(event){
        event.preventDefault()
        listItem.forEach(ee=>{
            ee.classList.remove('active')

        })
        this.classList.add("active")
    })

})

// ==============================

input.addEventListener('input', function(event){
    let val = input.value.trim().toLowerCase()

    listItem.forEach(ele=>{
        let valt = ele.textContent.toLowerCase()

        if(valt.includes(val)){
            ele.style.display = ''
        }
        else{
            ele.style.display = 'none';
        }
    })

})