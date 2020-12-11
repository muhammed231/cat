const shops = [];
const UIShopList = document.getElementById('shopList')

let isExit = true;

while (isExit) {
    let inputItem = prompt('Add items?')
    if (inputItem !== 'exit') {
        shops.push(inputItem)
    } else {
        isExit = false
    }
}

shops.forEach(function (item) {
    UIShopList.innerHTML += `<li>${item}</li>`
})

// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// let cart = document.querySelector('.btn blue');
// let input = document.querySelector('#addTask');

// window.addEventListener('DOMContentLoaded', displayList);

// //Add to Cart Press Enter
// window.addEventListener('keypress', key => {
//     if (key.keyCode == 13) {
//         if (input.value) {
//             addToCart(input.value);
//             saveToStorage(input.value);
//             input.value = '';
//         } else {
//             console.log('Please input Value');
//         }
//     }
// });

// function addToCart(list) {
//     const div = document.createElement('div');
//     div.classList.add('div-bg');
//     div.innerHTML = input.value;

//     const btn = document.createElement('button');
//     btn.classList.add('btn');
//     btn.innerHTML = 'Delete';

//     div.appendChild(btn);
//     cart.appendChild(div)

//     btn.addEventListener('click', () => {
//         div.remove();
//     });
// }

// function saveToStorage() {
//     let listItem;
//     if (localStorage.getItem('listItem') === null) {
//         listItem = [];
//     } else {
//         listItem = JSON.parse(localStorage.getItem('listItem'));
//     }

//     listItem.push(list);
//     localStorage.setItem('list Item', JSON.stringify(listItem));
// }

// function displayList() {
//     let listItem;
//     if (localStorage.getItem('listItem') === null) {
//         listItem = [];
//     } else {
//         listItem = JSON.parse(localStorage.getItem('listItem'));
//     }

//     listItem.forEach(function (list) {
//         const div = document.createElement('div');
//         div.classList.add('div-bg');
//         div.innerHTML = list;

//         const btn = document.createElement('button');
//         btn.classList.add('btn');
//         btn.innerHTML = 'Delete';

//         div.appendChild(btn);
//         cart.appendChild(div)

//         btn.addEventListener('click', () => {
//             deleteList(list);
//             div.remove();
//         });
//     });
// }