// prompt("Hello World?", 42)
// confirm("fgregdfg")

// let ame = 5792348
// var ame2 = "dfwdqw"
// const mae3 = {}

// function name() {
//     let name1 = "pupa"
//     var name2 = "lupa"
// }
// name()


// let v1 = 5 //5.5 Infinity
// let v2 = "ogfljlfdkg"
// let v3 = true
// let v4 = {
//     name: "dwqdqw",
//     age:213,
//     adress: {
//         city:"dwdw"
//     }
// }
// let v5 = 1234567890123456789012345678901234567890n
// let v6 = null
// let v7 = undefined
// let v8 = Symbol()


// let v9

// console.log(typeof 3443);
// console.log(typeof "dfgdfg");
// console.log(typeof true);
// console.log(typeof {});
// console.log(typeof 55555555555555555555555555555555555555555555555555555n);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof Symbol());

// console.log("2"+2); //22
// console.log("2"-2); //4
// console.log("2f"-2); //4
// console.log(5/0); //4
// console.log("tgefgdfgdf"/45); //4
// console.log("tgefgdfgdf"*34); //4


// // and &&  or ||   not !   >= <=  == > < !=  ===
// // 0x432FAB   0x123ABCD

// let Petya = {
//     age: 12,
//     lastname: "ivanov",
//     city: "kirov"
// }

// let a = Petya

// a.age = 100500
// // let a = {...Petya}

// console.log(Petya, a);


// if (a === Petya) {
//     console.log("true");
    
// }
// else {
//     console.log("false");
    
// }

// let b = document.querySelector(".header__info")

// console.log(b);
// b.style.backgroundColor = "pink"
// b.style.border = "4px solid yellow"

// let c = document.querySelector("h1")

// let d = document.querySelector(".ticker__in")
// d.style.fontSize = "25px"


// let e = document.querySelector(".slide img")

// console.log(
//     document.querySelectorAll("#burger")

// );


// console.log(document.getElementById("burger"));

// console.log(document.getElementsByClassName("slide"));

// console.log(document.getElementsByTagName("a"));

// console.log(document.getElementsByName("burger-check"));


let btnOpenModal = document.querySelector("#open_modal_contact")    //button contact
let modalContact = document.querySelector("dialog")                 //dialog
// console.dir(btnOpenModal);

btnOpenModal.onclick = function(){                                  
    modalContact.showModal()                                        //открывает форму при клике
}

let btnCloseModal = document.querySelector(".close")                //close button

btnCloseModal.addEventListener("click", ()=>{
    modalContact.close()                                            //закрывает форму при клике
})

let formContact = document.querySelector("form")

let errorCount = 0

formContact.addEventListener("submit", (event)=>{       
    event.preventDefault()
                //событие "кнопка Отправить нажата"
    // console.dir(formContact)
    for (const element of formContact) {
       if (element.tagName === "BUTTON") continue
       console.log(element);
       
        if (!element.value || (element.type == "checkbox" && !element.checked)) {
            element.classList.add("--error")
            setTimeout(()=>{
                element.classList.remove("--error")
            }, 2000)
            errorCount++
            
        }
        
    }
    let fio = formContact[1]
    let email = formContact[2]
    // let fio = document.getElementsByName("FIO")[0]
    // let email = document.getElementsByName("email")[0]
        // console.log(fio.value);
        // console.log(email.value);
        // console.log(formContact);

    let message = document.createElement('div')
    if (errorCount > 0) {
        formContact.appendChild(message);
        message.classList.add("message-error")
        message.textContent = "Заполните все поля"
        setTimeout(()=>{
            message.remove();
        }, 2000)
        errorCount = 0
    }
    else {
        formContact.appendChild(message);
        message.classList.add("message")
        message.textContent = "Ваша форма отправлена"
        setTimeout(()=>{
            message.remove();
        }, 2000)
    }
})