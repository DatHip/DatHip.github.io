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


// Sử lí tab menu Trang cá nhân
let changeTabmenu = () => {
  const navMenuItem = document.querySelectorAll('.personal_menu-item:not(.personal_menu-item:last-child)')
  const containerItem = document.querySelectorAll('.personal_container-main')

  const navMenuActive = document.querySelector('.personal_menu-item.active')
  const containerActive = document.querySelector('.personal_container-main.active')


  navMenuItem.forEach((e, index) => {

    e.addEventListener('click', () => {

      containerItem.forEach(e => {
        e.classList.remove('active')
      })
      navMenuItem.forEach(e => {
        e.classList.remove('active')
      })

      e.classList.add('active')
      containerItem[index].classList.add('active')

    })
  })
}
changeTabmenu()

// Call api top100
let callApiChart = () => {
  const postApi = 'https://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1'

  fetch(postApi)
  .then(res => res.json())

  .then(res => {
    const chartList = document.querySelector('.main_topchart .zing-chart_list')

    // Đổi giây sang phút + giây
function fancyTimeFormat(duration)
{   
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}


    let itemChart = res.data.song.map(e => {
      console.log(e.album)

      return ` <div class="zing-chart_item main_page-hover">
                                 <div class="zing-chart_item-left">
                                    <div class="zing-chart_item-oder"><span class="zing-chart-top">${e.position}</span></div>
                                    <div class="zing-chart_item-info">
                                       <div class="zing-chart_item-img">
                                          <div class="main-page_list-item_img">
                                             <div class="release_list-item-img">
                                                <img src="${e.thumbnail}" alt="${e.title}" />
                                             </div>
                                             <div class="recently_list-item_hover">
                                                <div class="recently_btn-hover recently_btn-hover-play">
                                                   <span>
                                                      <ion-icon class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                                   </span>
                                                   <!-- <span>
                                                         <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon>
                                                      </span> -->
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="zing-chart_item-text">
                                          <div class="zing-chart_item-name">${e.name}</div>
                                          <div class="zing-chart_item-artist"><a href="#">${e.artists_names}</a></div>
                                       </div>
                                    </div>
                                 </div>

                                 <div class="zing-chart_item-center">
                                    <p class="thesong_name">${e.title}</p>
                                 </div>
                                 <div class="zing-chart_item-right">
                                    <p class="thesong_time">${fancyTimeFormat(e.duration)}</p>
                                 </div>
                              </div>`
    })
      

    let html = itemChart.join('')
    chartList.innerHTML = html
    
  })
  .catch(console.log("Co Loi"))
}

callApiChart()