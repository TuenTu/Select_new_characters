let slider = document.querySelector(".swiper-wrapper")

let p = document.querySelector(".character__left p")
let img = document.querySelector(".character__preview img")
let name = document.querySelector(".character__name")
let place = document.querySelector(".place")
let weapon = document.querySelector(".weapon")
let rate = document.querySelector(".rate")

console.dir(place.children[0].textContent = "ewfipjweqfewoifjwe");


fetch("/public/api/characters.json")
.then((response)=>{
    console.log(response);
    return response.json()
})
.then((data)=>{
    console.log(data);
    draw_cards(data)
    addListenerCards(data)
    
})
.catch((error)=>{
    console.log(error);
    
})


function draw_cards(cards){
    cards.forEach((element, i) => {
       slider.insertAdjacentHTML("beforeend", `
        <div class="swiper-slide" data-index="${i}">
        <div class="slide">
            <img
              class="carusel__img"
              src="${element.image_url !== "" ? element.image_url : "./assets/images/BACKGROUND1.webp"}"
              alt=""
            />
            <div class="slide__bottom">
              <h3>${element.name !== "" ? element.name :  "Тут пусто"}</h3>
              <p>${element.description}</p>
            </div>
        </div>
        </div>
        `)
        
    });
}


function addListenerCards(info){
    let cards = document.querySelectorAll(".slide")
    
    cards.forEach((card, i) => {
        card.addEventListener("click", ()=>{
            img.src = info[i].image_url
            place.children[0].textContent = info[i].place_h3
            place.children[1].textContent = info[i].place_p
            weapon.children[0].textContent = info[i].weapon_h3
            weapon.children[1].textContent = info[i].weapon_p
            rate.children[1].textContent = info[i].rate_p
            name.textContent = info[i].name
            p.textContent = info[i].description
        })
    })
}





// 1) отрисовать карточки
// 2) навесить на каждую карточку слушатель клика
// 










// let massive = [
//     {
//         title: "GTA",
//         price: 530,
//         is_public: true
//     },
//     {
//         title: "CYBERPUNK & GTA",
//         price: 400,
//         is_public: false
//     },
//     {
//         title: "SIMS",
//         price: 670,
//         is_public: true
//     }
// ]


// massive.push(34443)
// massive.pop()

// // создается новый (filter)
// console.log("filter ",massive.filter((element)=>{   
//     if (element.price > 50 && element.price < 10000) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }));

// // massive.filter(element => element.price > 8000)
// let filter = massive.filter(element => element.title.includes("GTA"))
// console.log(filter);

// console.log("MAP",massive.map(element =>{

//     return {...element,  price: element.price + 1000} 
// }));
// // spread-оператор ...element копирует все элементы

// //ДОМАШКА: разобрать и попробовать методы массива find, includes, every, some, reduce

// let isMore = 10 > 5

// // возвращает первый эл-т удовлетворяющий условию
// console.log(
//     "find", massive.find(element => element.price > 550)
// );

// console.log(
//     "find", massive.find(element => element.title.includes("GTA"))
// );

// // содержит ли массив значение
// console.log(
//     "includes", massive.includes({
//         title: "SIMS",
//         price: 670,
//         is_public: true
//     }),
//     // ВСЕГДА FALSE 
// );

// console.log(massive.some(element => element.title == "SIMS" ));



// // проверяет чтобы все эл-ты массива удовлетворяли условию
// console.log(
//     "every", massive.every(element => element.price > 500)
// );

// console.log(
//     "every", massive.every(element => element.price > 300)
// );

// // есть ли хотя бы 1 эл-т удовлетворяющий условию
// console.log(
//     "some", massive.some(element => element.title == "DOTA2")
// );

// console.log(
//     "some", massive.some(element => element.price == 670)
// );

// // последовательно проходит и накапливает результат
// console.log(
//     "reduce", massive.reduce((acc, element) => acc + element.price, 0)
// );


// console.log("reduce-2", massive.reduce((acc,element)=>{
//     return acc + element.price
// }, 0));

// let sum = 0
// for (let index = 0; index < massive.length; index++) {
//     sum += massive[index].price;
// }
// console.log(sum);

// function reduce(acc, element) {
//     acc += element;
//     return acc
// }

// for (let index = 0; index < massive.length; index++) {
//     reduce(sum, massive[index].price)
// }

