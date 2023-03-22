const tabParent = document.querySelector('.tabheader__items')
const tabs = document.querySelectorAll('.tabheader__item')
const tabsContant = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabsContant.forEach((item) => {
        item.style.display = 'none'
    })
    tabs.forEach((item) => {
        item.classList.remove('tabheader__item_active')
    })
}

const showTabContent = (i = 0) => {
    tabsContant [i].style.display = "block"
    tabs[i].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

tabParent.addEventListener("click", (e) => {
  const target = e.target

    if (target.classList.contains('tabheader__item')){
        tabs.forEach((item, i) => {
            if (target === item){
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})




let tabcounter = 0
const autoSlider = ()=> {
    if (tabcounter === 4) tabcounter = 0
    hideTabContent()
    showTabContent(tabcounter)
    tabcounter++
}
let slider =setInterval(autoSlider, 1000 )

tabParent.addEventListener('click', (e) => {
    clearInterval(slider)
    setTimeout(() => {
        slider = setInterval(autoSlider, 1000)
    }, 5000)
    if (e.target.classList.contains('tabheader__item')){
        const target = e.target
        tabs.forEach((item, i) => {
            if (target === item){
                hideTabContent()
                showTabContent(i)
                tabcounter = i
            }
        })
    }
})



const modal = document.querySelector(".modal")
const openModalBtn = document.querySelector(".btn_white")
const openModalDark = document.querySelector(".btn_dark")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"
}
openModalBtn.addEventListener("click", openModal)
openModalDark.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}
closeModalBtn.addEventListener("click", closeModal)


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight
    const scrollHeight = document.body.scrollHeight
    if (scrollPosition >= scrollHeight) {
        openModal()
    }
})

closeModalBtn.onclick = () => closeModal()

modal.onclick = (event) => (event.target === modal ? closeModal() : false)
