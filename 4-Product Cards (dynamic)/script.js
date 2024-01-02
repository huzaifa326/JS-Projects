
let cards = [
    {
        img: 'images/1.avif',
        name: "Ice-cream",
        price: "$3",
        desc: "Get lost in our creamy ice creams. A taste that cools your senses."
    },
    {
        img: 'images/2.avif',
        name: "Headphone",
        price: "$200",
        desc: "Dive into crystal-clear sound with our  comfortable headphones."
    },
    {
        img: 'images/3.avif',
        name: "Shoes",
        price: "$400",
        desc: "Stylish and comfortable shoes for every occasion.  A wardrobe essential."
    },
    {
        img: 'images/4.avif',
        name: "Car",
        price: "$5000",
        desc: "Enjoy the thrill of the road with our high-performance car. Remarkable. "
    }
]

let card = document.getElementById("main-card")

cards.forEach((res) => {
    card.innerHTML += ` <div class="product-box">
        <div class="img-box"><img src="${res.img}" alt=""></div>
        <div class="product-details">
            <h2>${res.name}</h2>
            <p>${res.desc}</p>
            <button>${res.price}</button>
        </div>
        <div class="product-options left">
            <i class="fa-solid fa-magnifying-glass fa-xl" style="color: #5dbea3 ;"></i>
            <i class="fa-solid fa-bolt fa-xl" style="color: #5dbea3;"></i>
            <i class="fa-solid fa-bookmark fa-xl" style="color: #5dbea3;"></i>
        </div>
    </div>`

})
