const navbarLeft = document.querySelector('.sider-navbar')
const btnExpanded = document.querySelector('.sider-navbar-exanded')
const widthBodyStart = document.body.clientWidth

// Active Main 
let acticeMain = () => {
   let menuList = document.querySelectorAll('.sider_menu-item-acitve')
   let itemMian = document.querySelectorAll('.main-page-item')

   menuList.forEach((e, index) => {
      e.addEventListener('click', () => {
         for (let i = 0; i < menuList.length; i++) {

            menuList[i].classList.remove('sider_active')
            itemMian[i].classList.remove('active')
         }

         e.classList.add('sider_active')
         itemMian[index].classList.add('active')
      })
   })
}
acticeMain()

// Add class vào navbar left
let addClassNavbarLeft = () => {
   if (widthBodyStart < 1226) {
      navbarLeft.classList.add('navbar-left-actice')
   } else {
      navbarLeft.classList.remove('navbar-left-actice')
   }
   window.addEventListener('resize', () => {
      let widthBody = document.body.clientWidth
      if (widthBody < 1226) {
         navbarLeft.classList.add('navbar-left-actice')
      } else {
         navbarLeft.classList.remove('navbar-left-actice')
      }
   })
}
addClassNavbarLeft()

// Click Popup thanh left
let changePopupLeft = () => {
   btnExpanded.addEventListener('click', () => {
      navbarLeft.classList.toggle('navbar-left-actice')
      navbarLeft.classList.toggle('navbar-exanded-active')
   })
}
changePopupLeft()

// Click Popup thanh right
let changePopupRight = () => {
   const navbarRight = document.querySelector('.player_queue')
   const btnExpandedRight = document.querySelector('.playing_playlist')

   btnExpandedRight.addEventListener('click', e => {
      navbarRight.classList.toggle('player_queue-is_active')
      btnExpandedRight.classList.toggle('btn_active')
   })
}
changePopupRight()

// Sử lí tab menu Trang cá nhân
let changeTabmenu = () => {
   const navMenuItem = document.querySelectorAll(
      '.personal_menu-item:not(.personal_menu-item:last-child)'
   )
   const containerItem = document.querySelectorAll('.personal_container-main')

   const navMenuActive = document.querySelector('.personal_menu-item.active')
   const containerActive = document.querySelector(
      '.personal_container-main.active'
   )

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
   const postApi =
      'https://mp3.zing.vn/xhr/chart-realtime?songId=0&videoId=0&albumId=0&chart=song&time=-1'

   fetch(postApi)
      .then(res => res.json())

      .then(res => {
         // Đổi giây sang phút + giây
         function fancyTimeFormat(duration) {
            // Hours, minutes and seconds
            var hrs = ~~(duration / 3600)
            var mins = ~~((duration % 3600) / 60)
            var secs = ~~duration % 60

            var ret = ''

            if (hrs > 0) {
               ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
            }

            ret += '' + mins + ':' + (secs < 10 ? '0' : '')
            ret += '' + secs
            return ret
         }
         let getRankStatus = startus => {
            if (startus == 'stand' || startus == 'new') {
               return `<span class="material-icons-outlined line">minimize</span>`
            } else if (startus == 'up') {
               return `<span class="material-icons-outlined up">arrow_drop_up</span>`
            } else if (startus == 'down') {
               return `<span class="material-icons-outlined down"> arrow_drop_down </span> `
            }
         }

         const itemChart2 = res.data.song
         // Lấy value rank  startus
         const chartList = document.querySelector(
            '.main_topchart .zing-chart_list'
         )

         for (let i = 0; i < 10; i++) {
            let e = itemChart2[i]
            chartList.innerHTML += ` <div class="zing-chart_item main_page-hover">
                                 <div class="zing-chart_item-left">
                                     <div class="zing-chart_item-oder">
                                       <span class="zing-chart-top">${
                                         e.position
                                       }</span>
                                       <div class="zing-chart-rank">
                                          <div class="zing-chart-rank-status">
                                            ${getRankStatus(e.rank_status)}
                                          </div>
                                          <div class="zing-chart-rank-num">
                                             ${e.rank_num}
                                          </div>
                                       </div>
                                    </div>

                                    <div class="zing-chart_item-info">
                                       <div class="zing-chart_item-img">
                                          <div class="main-page_list-item_img">
                                             <div class="release_list-item-img">
                                                <img src="${
                                                  e.thumbnail
                                                }" alt="${e.title}" />
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
                                          <div class="zing-chart_item-name">${
                                            e.name
                                          }</div>
                                          <div class="zing-chart_item-artist"><a href="#">${
                                            e.artists_names
                                          }</a></div>
                                       </div>
                                    </div>
                                 </div>

                                 <div class="zing-chart_item-center">
                                    <p class="thesong_name">${e.title}</p>
                                 </div>
                                 <div class="zing-chart_item-right">
                                    <p class="thesong_time">${fancyTimeFormat(
                                      e.duration
                                    )}</p>
                                 </div>
                              </div>`
         }

         // btn render 100
         const btnChartMore = document.querySelector('#btn_chart-more100')

         btnChartMore.addEventListener('click', () => {
            // render more100
            for (let i = 10; i < itemChart2.length; i++) {
               let e = itemChart2[i]
               chartList.innerHTML += ` <div class="zing-chart_item main_page-hover">
                                 <div class="zing-chart_item-left">
                                     <div class="zing-chart_item-oder">
                                       <span class="zing-chart-top">${
                                         e.position
                                       }</span>
                                       <div class="zing-chart-rank">
                                          <div class="zing-chart-rank-status">
                                            ${getRankStatus(e.rank_status)}
                                          </div>
                                          <div class="zing-chart-rank-num">
                                             ${e.rank_num}
                                          </div>
                                       </div>
                                    </div>

                                    <div class="zing-chart_item-info">
                                       <div class="zing-chart_item-img">
                                          <div class="main-page_list-item_img">
                                             <div class="release_list-item-img">
                                                <img src="${
                                                  e.thumbnail
                                                }" alt="${e.title}" />
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
                                          <div class="zing-chart_item-name">${
                                            e.name
                                          }</div>
                                          <div class="zing-chart_item-artist"><a href="#">${
                                            e.artists_names
                                          }</a></div>
                                       </div>
                                    </div>
                                 </div>

                                 <div class="zing-chart_item-center">
                                    <p class="thesong_name">${e.title}</p>
                                 </div>
                                 <div class="zing-chart_item-right">
                                    <p class="thesong_time">${fancyTimeFormat(
                                      e.duration
                                    )}</p>
                                 </div>
                              </div>`
            }
            btnChartMore.remove()
         })
      })
}
callApiChart()

// call api chart week
let renderChartWeek = () => {
   const api = 'https://music-player-pink.vercel.app/api/chart-home'
   fetch(api)
      .then(res => res.json())
      .then(res => {
         // Đổi giây sang phút + giây
         function fancyTimeFormat(duration) {
            // Hours, minutes and seconds
            var hrs = ~~(duration / 3600)
            var mins = ~~((duration % 3600) / 60)
            var secs = ~~duration % 60

            var ret = ''

            if (hrs > 0) {
               ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
            }

            ret += '' + mins + ':' + (secs < 10 ? '0' : '')
            ret += '' + secs
            return ret
         }
         let getRankStatus = startus => {
            if (startus == 0) {
               return `<span class="material-icons-outlined line">minimize</span>`
            } else if (startus > 0) {
               return `<span class="material-icons-outlined up">arrow_drop_up</span>`
            } else if (startus < 0) {
               return `<span class="material-icons-outlined down"> arrow_drop_down </span> `
            }
         }
         const data = res.data.weekChart
         const dataVn = data.vn.items
         const dataUs = data.us.items
         const dataKorea = data.korea.items
         const topChartWeekVn = document.querySelector(
            '.week-chart-box.vn .zing-chart_list.week'
         )
         const topChartWeekUs = document.querySelector(
            '.week-chart-box.usuk .zing-chart_list.week'
         )
         const topChartWeekKp = document.querySelector(
            '.week-chart-box.kpop .zing-chart_list.week'
         )

         let getRankNum = e => {
            if (e == 0) {
               return ''
            } else {
               return Math.abs(e)
            }
         }

         // render chart week vn
         for (let i = 0; i < 5; i++) {
            let e = dataVn[i]

            topChartWeekVn.innerHTML += ` <div class="zing-chart_item main_page-hover">
                                 <div class="zing-chart_item-left">
                                     <div class="zing-chart_item-oder">
                                       <span class="zing-chart-top">${[
                                         i + 1
                                       ]}</span>
                                       <div class="zing-chart-rank">
                                          <div class="zing-chart-rank-status">
                                            ${getRankStatus(e.rakingStatus)}
                                          </div>
                                          <div class="zing-chart-rank-num">
                                           ${getRankNum(e.rakingStatus)}
                                          </div>
                                       </div>
                                    </div>

                                    <div class="zing-chart_item-info">
                                       <div class="zing-chart_item-img">
                                          <div class="main-page_list-item_img">
                                             <div class="release_list-item-img">
                                                <img src="${
                                                  e.thumbnail
                                                }" alt="${e.title}" />
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
                                          <div class="zing-chart_item-name">${
                                            e.title
                                          }</div>
                                          <div class="zing-chart_item-artist"><a href="#">${
                                            e.artistsNames
                                          }</a></div>
                                       </div>
                                    </div>
                                 </div>

                               
                                 <div class="zing-chart_item-right">
                                    <p class="thesong_time">${fancyTimeFormat(
                                      e.duration
                                    )}</p>
                                 </div>
                              </div>`
         }

         // render chart usuk
         for (let i = 0; i < 5; i++) {
            let e = dataUs[i]
            topChartWeekUs.innerHTML += ` <div class="zing-chart_item main_page-hover">
                                 <div class="zing-chart_item-left">
                                     <div class="zing-chart_item-oder">
                                       <span class="zing-chart-top">${[
                                         i + 1
                                       ]}</span>
                                       <div class="zing-chart-rank">
                                          <div class="zing-chart-rank-status">
                                            ${getRankStatus(e.rakingStatus)}
                                          </div>
                                          <div class="zing-chart-rank-num">
                                            ${getRankNum(e.rakingStatus)}
                                          </div>
                                       </div>
                                    </div>

                                    <div class="zing-chart_item-info">
                                       <div class="zing-chart_item-img">
                                          <div class="main-page_list-item_img">
                                             <div class="release_list-item-img">
                                                <img src="${
                                                  e.thumbnail
                                                }" alt="${e.title}" />
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
                                          <div class="zing-chart_item-name">${
                                            e.title
                                          }</div>
                                          <div class="zing-chart_item-artist"><a href="#">${
                                            e.artistsNames
                                          }</a></div>
                                       </div>
                                    </div>
                                 </div>

                               
                                 <div class="zing-chart_item-right">
                                    <p class="thesong_time">${fancyTimeFormat(
                                      e.duration
                                    )}</p>
                                 </div>
                              </div>`
         }
         // render chart korea
         for (let i = 0; i < 5; i++) {
            let e = dataKorea[i]
            topChartWeekKp.innerHTML += ` <div class="zing-chart_item main_page-hover">
                                 <div class="zing-chart_item-left">
                                     <div class="zing-chart_item-oder">
                                       <span class="zing-chart-top">${[
                                         i + 1
                                       ]}</span>
                                       <div class="zing-chart-rank">
                                          <div class="zing-chart-rank-status">
                                            ${getRankStatus(e.rakingStatus)}
                                          </div>
                                          <div class="zing-chart-rank-num">
                                          ${getRankNum(e.rakingStatus)}
                                           
                                          </div>
                                       </div>
                                    </div>

                                    <div class="zing-chart_item-info">
                                       <div class="zing-chart_item-img">
                                          <div class="main-page_list-item_img">
                                             <div class="release_list-item-img">
                                                <img src="${
                                                  e.thumbnail
                                                }" alt="${e.title}" />
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
                                          <div class="zing-chart_item-name">${
                                            e.title
                                          }</div>
                                          <div class="zing-chart_item-artist"><a href="#">${
                                            e.artistsNames
                                          }</a></div>
                                       </div>
                                    </div>
                                 </div>

                               
                                 <div class="zing-chart_item-right">
                                    <p class="thesong_time">${fancyTimeFormat(
                                      e.duration
                                    )}</p>
                                 </div>
                              </div>`
         }
      })
}
renderChartWeek()

// Render Api Tab Mới Phát Hành
let renderSongNew = () => {
   const api = 'https://music-player-pink.vercel.app/api/chart-home'
   const newSongList = document.querySelector('.main_songnew .zing-chart_list')

   fetch(api)
      .then(res => res.json())
      .then(res => {
         // Đổi giây sang phút + giây
         function fancyTimeFormat(duration) {
            // Hours, minutes and seconds
            var hrs = ~~(duration / 3600)
            var mins = ~~((duration % 3600) / 60)
            var secs = ~~duration % 60

            var ret = ''

            if (hrs > 0) {
               ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
            }

            ret += '' + mins + ':' + (secs < 10 ? '0' : '')
            ret += '' + secs
            return ret
         }

         let item = res.data.newRelease

         for (let i = 0; i < item.length; i++) {
            let e = item[i]
            newSongList.innerHTML += ` 
                              <div class="zing-chart_item main_page-hover">
                                 <div class="zing-chart_item-left">
                                     <div class="zing-chart_item-oder">
                                       <span class="zing-chart-top">${i +
                                         1}</span>
                                        <div class="zing-chart-rank">
                                          <div class="zing-chart-rank-status">
                                          <span class="material-icons-outlined line">minimize</span>
                                          </div>
                                         
                                       </div>
                                    </div>

                                    <div class="zing-chart_item-info">
                                       <div class="zing-chart_item-img">
                                          <div class="main-page_list-item_img">
                                             <div class="release_list-item-img">
                                                <img src="${
                                                  e.thumbnail
                                                }" alt="${e.title}" />
                                             </div>
                                             <div class="recently_list-item_hover">
                                                <div class="recently_btn-hover recently_btn-hover-play">
                                                   <span>
                                                      <ion-icon class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                                   </span>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="zing-chart_item-text">
                                          <div class="zing-chart_item-name">${
                                            e.title
                                          }</div>
                                          <div class="zing-chart_item-artist"><a href="#">${
                                            e.artistsNames
                                          }</a></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="zing-chart_item-right">
                                    <p class="thesong_time">${fancyTimeFormat(
                                      e.duration
                                    )}</p>
                                 </div>
                              </div>`
         }
      })
}

renderSongNew()

// Render Main Top 100
let renderMainTop100 = () => {
   const api = 'https://music-player-pink.vercel.app/api/top100'
   fetch(api)
      .then(res => res.json())
      .then(res => {
         // render outstanding
         let renderOutstanding = () => {
            const outstanding = document.querySelector('#outstanding')
            const item = res.data[0].items

            outstanding.innerHTML = ''
            for (let i = 0; i < 4; i++) {
               let e = item[i]
               outstanding.innerHTML += `
                        <div class="col l-2-4 m-3 c-5">
                           <a class="todaychoice_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="todaychoice_list-item-link main-page_list-item_img" href="#">
                                 <img src="${e.thumbnailM}" alt="${e.title}">
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon class="icon_play-btn md hydrated" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </a>
                           <div class="todaychoice_list-item-title">
                              <a class="main_title-text" title="${e.title}" href="#">${e.title}</a>
                              <div class="main_subtitle">
                                 <a href="#">${e.artists[0].name}</a>,
                                 <a href="#">${e.artists[1].name}</a>,
                                 <a href="#">${e.artists[2].name}</a>...
                              </div>
                           </div>
                        </div>`
            }

            let itemLast = res.data[0].items[4]

            outstanding.innerHTML += `  <div class="col l-2-4 m-0 c-5">
                           <a class="todaychoice_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="todaychoice_list-item-link main-page_list-item_img" href="#">
                                 <img src="${itemLast.thumbnailM}" alt="${itemLast.title}">
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon class="icon_play-btn md hydrated" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </a>
                           <div class="todaychoice_list-item-title">
                              <a class="main_title-text" title="${itemLast.title}" href="#">${itemLast.title}</a>
                              <div class="main_subtitle">
                                 <a href="#">${itemLast.artists[0].name}</a>,
                                 <a href="#">${itemLast.artists[1].name}</a>,
                                 <a href="#">${itemLast.artists[2].name}</a>...
                              </div>
                           </div>
                        </div>`
         }
         renderOutstanding()

         // render musicVn
         let renderMusicVn = () => {
            const musicVn = document.querySelector('#musicVn')
            const item = res.data[1].items
            musicVn.innerHTML = ''
            for (let i = 0; i < item.length; i++) {
               let e = item[i]
               musicVn.innerHTML += `
                        <div class="col l-2-4 m-3 c-5">
                           <a class="todaychoice_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="todaychoice_list-item-link main-page_list-item_img" href="#">
                                 <img src="${e.thumbnailM}" alt="${e.title}">
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon class="icon_play-btn md hydrated" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </a>
                           <div class="todaychoice_list-item-title">
                              <a class="main_title-text" title="${e.title}" href="#">${e.title}</a>
                              <div class="main_subtitle">
                                 <a href="#">${e.artists[0].name}</a>,
                                 <a href="#">${e.artists[1].name}</a>,
                                 <a href="#">${e.artists[2].name}</a>...
                              </div>
                           </div>
                        </div>`
            }
         }
         renderMusicVn()

         // render Music Asian
         renderMusicAsian = () => {
            const musicAsian = document.querySelector('#musicAsian')
            const item = res.data[2].items
            musicAsian.innerHTML = ''
            for (let i = 0; i < 4; i++) {
               let e = item[i]
               musicAsian.innerHTML += `
                        <div class="col l-2-4 m-3 c-5">
                           <a class="todaychoice_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="todaychoice_list-item-link main-page_list-item_img" href="#">
                                 <img src="${e.thumbnailM}" alt="${e.title}">
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon class="icon_play-btn md hydrated" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </a>
                           <div class="todaychoice_list-item-title">
                              <a class="main_title-text" title="${e.title}" href="#">${e.title}</a>
                              <div class="main_subtitle">
                                 <a href="#">${e.artists[0].name}</a>,
                                 <a href="#">${e.artists[1].name}</a>,
                                 <a href="#">${e.artists[2].name}</a>...
                              </div>
                           </div>
                        </div>`
            }

            let itemLast = res.data[2].items[4]
            musicAsian.innerHTML += `  <div class="col l-2-4 m-0 c-5">
                           <a class="todaychoice_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="todaychoice_list-item-link main-page_list-item_img" href="#">
                                 <img src="${itemLast.thumbnailM}" alt="${itemLast.title}">
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon class="icon_play-btn md hydrated" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </a>
                           <div class="todaychoice_list-item-title">
                              <a class="main_title-text" title="${itemLast.title}" href="#">${itemLast.title}</a>
                              <div class="main_subtitle">
                                 <a href="#">${itemLast.artists[0].name}</a>,
                                 <a href="#">${itemLast.artists[1].name}</a>,
                                 <a href="#">${itemLast.artists[2].name}</a>...
                              </div>
                           </div>
                        </div>`
         }
         renderMusicAsian()

         // render Music Âu Mỹ
         let renderMusicUsUk = () => {
            const musicUsUk = document.querySelector('#musicUsUk')
            const item = res.data[3].items
            musicUsUk.innerHTML = ''
            for (let i = 0; i < item.length; i++) {
               let e = item[i]
               musicUsUk.innerHTML += `
                        <div class="col l-2-4 m-3 c-5">
                           <a class="todaychoice_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="todaychoice_list-item-link main-page_list-item_img" href="#">
                                 <img src="${e.thumbnailM}" alt="${e.title}">
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon class="icon_play-btn md hydrated" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </a>
                           <div class="todaychoice_list-item-title">
                              <a class="main_title-text" title="${e.title}" href="#">${e.title}</a>
                              <div class="main_subtitle">
                                 <a href="#">${e.artists[0].name}</a>,
                                 <a href="#">${e.artists[1].name}</a>,
                                 <a href="#">${e.artists[2].name}</a>...
                              </div>
                           </div>
                        </div>`
            }
         }
         renderMusicUsUk()


         // render Music Hòa Tấu
         let renderMusicConcert = () => {
            const musicConcert = document.querySelector('#musicConcert')
            const item = res.data[4].items
            musicConcert.innerHTML = ''
            for (let i = 0; i < item.length; i++) {
               let e = item[i]
               musicConcert.innerHTML += `
                        <div class="col l-2-4 m-3 c-5">
                           <a class="todaychoice_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="todaychoice_list-item-link main-page_list-item_img" href="#">
                                 <img src="${e.thumbnailM}" alt="${e.title}">
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon class="icon_play-btn md hydrated" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </a>
                           <div class="todaychoice_list-item-title">
                              <a class="main_title-text" title="${e.title}" href="#">${e.title}</a>
                              <div class="main_subtitle">
                                 <a href="#">${e.artists[0].name}</a>,
                                 <a href="#">${e.artists[1].name}</a>,
                                 <a href="#">${e.artists[2].name}</a>...
                              </div>
                           </div>
                        </div>`
            }
         }
         renderMusicConcert()
      })
}
renderMainTop100()


// Tab MV 
let renderMv = () => {
   // click tabs
   let clickTabs = () => {
      const mainNavItem = document.querySelectorAll('.main_mv-header-item')
      const mainContentItem = document.querySelectorAll('.main_mv-container_item')
      const line = document.querySelector('.main_mv-line')
      const tabActive = document.querySelector('.main_mv-header-item.active')

      const setLine = (e) => {
         line.style.left = e.offsetLeft + 'px'
         line.style.width = e.offsetWidth + 'px'
      }
      setLine(tabActive)

      mainNavItem.forEach((tab, index) => {
         const content = mainContentItem[index]

         tab.onclick = function () {
            document.querySelector('.main_mv-header-item.active').classList.remove('active')
            document.querySelector('.main_mv-container_item.active').classList.remove('active')

            // Set line
            setLine(this)
            // fix resize line
            window.addEventListener('resize', () => {
               setLine(tab)
            })

            this.classList.add('active')
            content.classList.add('active')

         }
      })
   }
   clickTabs()



   // Render  main mv item 
   let renderItemMv = () => {
      const apiVnMainId = "IWZ9Z08I"
      const apiUsMainId = "IWZ9Z08O"
      const apiKPopMainId = "IWZ9Z08W"
      const apiHoaTauMainId = "IWZ9Z086"

      const vn = 'vn'
      const us = 'usuk'
      const kpop = 'kpop'
      const hoatau = 'hoatau'

      let renderMainItem2 = (apiId, itemMv) => {
         // APi Main
         const api = `https://music-player-pink.vercel.app/api/listMV?id=${apiId}&page=1&count=100 `
         const nameItemMv = document.querySelector(`.main_mv-container_${itemMv} .container_top100-list.row`)

         fetch(api)
            .then(res => res.json())
            .then(res => {
               const items = res.data.items
               // Đổi giây sang phút + giây
               function fancyTimeFormat(duration) {
                  // Hours, minutes and seconds
                  var hrs = ~~(duration / 3600)
                  var mins = ~~((duration % 3600) / 60)
                  var secs = ~~duration % 60

                  var ret = ''

                  if (hrs > 0) {
                     ret += '' + hrs + ':' + (mins < 10 ? '0' : '')
                  }

                  ret += '' + mins + ':' + (secs < 10 ? '0' : '')
                  ret += '' + secs
                  return ret
               }
               items.forEach(e => {
                  nameItemMv.innerHTML += `  
                           <div class="col l-4 m-4 c-6">
                              <a class="todaychoice_list-item-link main-page_list-item main_page-hover" href="#">
                                 <div class="todaychoice_list-item-link main-page_list-item_img" href="#">
                                    <img src="${e.thumbnailM}" alt="${e.title}" />
                                 </div>
                                 <div class="recently_list-item_hover">
                                    <div class="recently_btn-hover recently_btn-hover-play">
                                       <span>
                                          <ion-icon class="icon_play-btn" name="play-circle-outline" data-codeid="${e.encodeId}"></ion-icon>
                                       </span>
                                    </div>
                                 </div>
                                 <div class="main_mv-item-time">
                                    ${fancyTimeFormat(e.duration)}
                                 </div>

                              </a>
                              <div class="todaychoice_list-item-title">
                                 <div class="main_mv-avatr">
                                    <img src="${e.artist.thumbnail}" alt="">
                                 </div>
                                 <div class="main_mv-info-title">
                                    <a class="main_title-text" title="${e.title}" href="#">${e.title}</a>
                                    <div class="main_subtitle">
                                      ${e.artistsNames}
                                    </div>
                                 </div>
                              </div>
                           </div>`
               })
            })

         // API Category 
         const ListDropDown = document.querySelector(`.main_mv-container_${itemMv} .main_mv-dropdown-list`)
         const apiCategory = `https://music-player-pink.vercel.app/api/category?id=${apiId}`

         fetch(apiCategory)
            .then(res => res.json())
            .then(res => {
               let item = res.data.childs
               // ListDropDown.innerHTML = ''
               item.forEach(e => {
                  ListDropDown.innerHTML += `
                  <div data-id-drop="${e.id}" class="main_mv-dropdown-item">${e.name}</div>
                  `
               })
            })

      }

      renderMainItem2(apiVnMainId, vn)
      renderMainItem2(apiUsMainId, us)
      renderMainItem2(apiKPopMainId, kpop)
      renderMainItem2(apiHoaTauMainId, hoatau)
   }
   renderItemMv()

   // CLICK DROP
   let clickDropDown = () => {

      let clickDropDown2 = (btnId, list) => {
         let btnDown = document.querySelector(`.main_mv-search-dropdown-btn.${btnId}`)
         let DownList = document.querySelector(`.main_mv-dropdown-list.${btnId}`)
         let DownListP = document.querySelector(`.main_mv-search-dropdown-btn.${btnId} p`)


         btnDown.addEventListener('click', e => {
            btnDown.classList.toggle('active')
            DownList.classList.toggle('active')
            DownList.addEventListener('click', e => {
               // if (e.target.classList) 
               if (e.target.classList.contains('main_mv-dropdown-item')) {
                  DownListP.innerHTML = e.target.innerHTML

               }
            })


            // Khi Click ra Ngoài thì ẩn
            document.addEventListener('click', e => {
               if (e.target.id !== `${list}` &&
                  e.target.classList.value !== 'main_mv-dropdown-item' &&
                  e.target.classList.value !== btnDown.classList.value) {
                  DownList.classList.remove('active')
                  btnDown.classList.remove('active')
               }
            })
         })
      }

      clickDropDown2('vn', 'mainMvList')
      clickDropDown2('usuk', 'mainMvList1')
      clickDropDown2('kpop', 'mainMvList2')
      clickDropDown2('hoatau', 'mainMvList3')

   }
   clickDropDown()

}
renderMv()