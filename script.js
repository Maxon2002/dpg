let textarea = document.querySelector('.form__textarea')

let howPlus = 0
let keyDownCount = 0
let arrRows = [0]
let arrLastTextareaHeight = [textarea.clientHeight]


textarea.addEventListener('keydown', (e) => {
    // console.log(e.code)



    if (arrRows.length > 1 && e.code.startsWith('Backspace')) {
        arrRows[arrRows.length - 1]--
        if (arrRows[arrRows.length - 1] === 0) {
            arrRows.pop()
            textarea.style.height = arrLastTextareaHeight.at(-2) - 4 + 'px'
            arrLastTextareaHeight.pop()
        }
    }
    if (e.code.startsWith('Key') ||
        e.code.startsWith('Digit') ||
        e.code.startsWith('NumpadMultiply') ||
        e.code.startsWith('NumpadSubtract') ||
        e.code.startsWith('NumpadAdd') ||
        e.code.startsWith('Minus') ||
        e.code.startsWith('Equal') ||
        e.code.startsWith('Space') ||
        e.code.startsWith('NumpadEnter') ||
        e.code.startsWith('Enter')) {
        arrRows[arrRows.length - 1]++
    }



})


textarea.addEventListener('input', (e) => {

    if (arrLastTextareaHeight.length === 3 && textarea.scrollHeight > arrLastTextareaHeight.at(-1)) {
        textarea.value = textarea.value.slice(0, textarea.value.length - 1)
        arrRows[arrRows.length - 1]--
        textarea.classList.add('limit')
        setTimeout(() => textarea.classList.remove('limit'), 50)
    }

    textarea.style.height = textarea.scrollHeight - 4 + 'px'
    console.log(textarea.style.height)
    console.log(textarea.scrollHeight)
    if (textarea.clientHeight > arrLastTextareaHeight.at(-1)) {
        arrLastTextareaHeight.push(textarea.clientHeight)
        arrRows[arrRows.length - 1]--
        arrRows.push(1)
        // keyDownCount = 0
    }
})


let checkbox = document.querySelector('.form__accept-checkbox')

checkbox.addEventListener('input', () => {
    if(checkbox.parentNode.classList.contains('novalid-checkbox')) {
        console.log('yes')
        checkbox.parentNode.classList.remove('novalid-checkbox')
    }
    if (checkbox.checked) {
        
        checkbox.parentNode.classList.add('active')
    } else {
        checkbox.parentNode.classList.remove('active')
    }
})


let input = document.querySelectorAll('.input')

for (let elem of input) {

    elem.addEventListener('input', () => {
        if (elem.classList.contains('novalid')) {
            elem.classList.remove('novalid')
            elem.parentNode.classList.remove('novalid')
        }
    })

    elem.addEventListener('focus', (e) => {
        if (!elem.classList.contains('novalid')) {
            elem.classList.add('focus')
            elem.parentNode.classList.add('focus')
            // elem.style.borderColor = '#FFFFFF'
            // elem.parentNode.style.color = '#FFFFFF'
        }

    })

    elem.addEventListener('blur', () => {
        if (!elem.classList.contains('novalid')) {
            elem.classList.remove('focus')
            elem.parentNode.classList.remove('focus')
            // elem.style.borderColor = '#3F4363'
            // elem.parentNode.style.color = '#3F4363'
        }
    })
}


let form = document.forms[0]

form.addEventListener('submit', (e) => {
    if (form.name.value === '') {
        form.name.classList.add('novalid')
        form.name.parentNode.classList.add('novalid')
        e.preventDefault()
    }
    if (form.company.value === '') {
        form.company.classList.add('novalid')
        form.company.parentNode.classList.add('novalid')
        e.preventDefault()
    }
    if (form.mail.value === '') {
        form.mail.classList.add('novalid')
        form.mail.parentNode.classList.add('novalid')
        e.preventDefault()
    }
    if (!form.mail.value.includes('@')) {
        form.mail.classList.add('novalid')
        form.mail.parentNode.classList.add('novalid')
        e.preventDefault()
    }
    if (form.message.value === '') {
        form.message.classList.add('novalid')
        form.message.parentNode.classList.add('novalid')
        e.preventDefault()
    }
    if (!form.checkbox.checked) {
        form.checkbox.parentNode.classList.add('novalid-checkbox')
        e.preventDefault()
    }
})