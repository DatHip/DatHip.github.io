const navbarLeft = document.querySelector('.sider-navbar')
const btnExpanded = document.querySelector('.sider-navbar-exanded')

let widthBodyStart = document.body.clientWidth


// Add class vào navbar left 
if (widthBodyStart < 1226) {
  navbarLeft.classList.add('navbar-left-actice')
} else {
  navbarLeft.classList.remove('navbar-left-actice')
}
window.addEventListener("resize", () => {
  let widthBody = document.body.clientWidth
  if (widthBody < 1226) {
    navbarLeft.classList.add('navbar-left-actice')
  } else {
    navbarLeft.classList.remove('navbar-left-actice')
  }
})


// Click Popup thanh left
let changePopupLeft = () => {


  btnExpanded.addEventListener("click", () => {
    navbarLeft.classList.toggle('navbar-left-actice')
    navbarLeft.classList.toggle('navbar-exanded-active')
  })
}
changePopupLeft()

// Click Popup thanh right
let changePopupRight = () => {
  const navbarRight = document.querySelector('.player_queue')
  const btnExpandedRight = document.querySelector('.playing_playlist')
  const btnExpandedRightIcon = document.querySelector('.playing_playlist-btn')


  btnExpandedRight.addEventListener('click', e => {
    navbarRight.classList.toggle('player_queue-is_active')
    btnExpandedRight.classList.toggle('btn_active')
  })
}

changePopupRight()