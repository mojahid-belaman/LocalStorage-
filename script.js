let myList = document.querySelectorAll("ul li");
let myDiv = document.querySelector('.box');

if (window.localStorage.getItem('color')) {
    myDiv.style.backgroundColor = window.localStorage.getItem('color');
    myList.forEach((li) => li.classList.remove('active'))
    document.querySelector(`[data-color=${window.localStorage.getItem('color')}]`).classList.add('active')
}

//NOTE - Loop From Each li And Attach Event Click
myList.forEach((list) => {
    list.addEventListener('click', (e) => {
        //NOTE - Remove Class active From All li
        myList.forEach((li) => li.classList.remove('active'))
        //NOTE - Add class active in Current Element
        e.currentTarget.classList.add('active');
        //NOTE - Add Color To Local Storage
        window.localStorage.setItem('color', e.currentTarget.dataset.color)
        myDiv.style.backgroundColor = e.currentTarget.dataset.color
    })
})