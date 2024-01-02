let header = document.querySelectorAll('.accordion-header');
let content = document.querySelectorAll('.accordion-content')
let icons = document.querySelectorAll('.fa-solid');

header.forEach((heading) => {
    heading.addEventListener('click', () => {
        for (let i of icons) {
            i.classList.remove("icon")
        }




        content.forEach((con) => {

            con.style.height = 0;

            let id = heading.parentNode.id;
            let box = document.getElementById(id).querySelector('.accordion-content');

            // Code for rotating the icon
            let ii = heading.parentNode.id;
            let oneIcon = document.getElementById(ii).querySelector('.fa-solid');
            if (box.clientHeight == 0)
                oneIcon.classList.add('icon')
            //------------------------

            if (box.clientHeight) {
                box.style.height = 0;

            } else {
                box.style.height = box.scrollHeight + "px"
            }
        })

    })
})


