const card1 = document.querySelector('.rating-state')
const card2 = document.querySelector('.greetings')

document.querySelector('#rating-state-form').addEventListener('submit', e => {
    e.preventDefault()
    const isChecked = document.querySelector('.btn-group input:checked')
    if (isChecked) return
    card1.classList.add('none')
    card2.classList.remove('none')
})



const stars = document.querySelector('.btn-group input')

for (let i = 0; i < stars.lenght; i++) {
    let star = i
    console.log(star)
    star.addEventListener('click', () => {
        document.querySelector('#state').textContent = star
    })
}

const checkedEl = document.querySelector('.btn-group input:checked')
document.querySelector('#state').textContent = checkedEl ? checkedEl.value : ' '