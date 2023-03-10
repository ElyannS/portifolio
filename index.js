const main = document.querySelector('main')
const root = document.querySelector(':root')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    if (main.dataset.theme === 'light') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--background', '#202325')
        root.style.setProperty('--primary-color', '#ff0043')
        root.style.setProperty('--secund-color', '#4dff91')
        root.style.setProperty('--hover-color', '#ce043a')
        main.dataset.theme = 'dark'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--background', '#EBEBEB')
        root.style.setProperty('--primary-color', '#4dff91')
        root.style.setProperty('--secund-color', '#ff0043')
        root.style.setProperty('--hover-color', '#3ee77f')
        main.dataset.theme = 'light'
    }
    document.querySelector('.theme i').classList.toggle('fa-sun')
    document.querySelector('.theme i').classList.toggle('fa-moon')
})

    
    