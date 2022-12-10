const inputField = document.querySelector('.inputField')
const btn = document.querySelector('.btn')
const toDoContainer = document.querySelector('.toDoContainer')

inputField.addEventListener("keydown", enter);
function enter(e) {
    if (e.keyCode === 13) {
        getInfo(inputField.value.toLowerCase());
    }
}
btn.addEventListener('click', getInfo)

function getInfo() {
    const item = document.createElement('li')
    item.innerText = inputField.value
    if (inputField.value.length === 0) {
        return false
    }
    item.classList.add('toDoAdded')
    toDoContainer.appendChild(item)
    inputField.value = ''

    item.addEventListener('click', ()=> {
        item.classList.add('toDoCompleted')
    })

    item.addEventListener('dblclick', ()=> {
        toDoContainer.removeChild(item)
    })
}