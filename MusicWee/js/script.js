const renderAndLenh = () => {
   const navbarLeft = document.querySelector('.sider-navbar')
   const btnExpanded = document.querySelector('.sider-navbar-exanded')
   const widthBodyStart = document.body.clientWidth


   let renderHomePage1 = () => {
      const api = 'https://music-player-pink.vercel.app/api/home?page=1'
      fetch(api)
         .then(res => res.json())
         .then(res => {
            const items = res.data.items

            // Render bander Top
            let renderBanner = () => {
               let itemImg = items[0].items
               const list = document.querySelector('.slider_list-main .slider_list')
               itemImg.forEach(e => {
                  return list.innerHTML += `  <div class="slider_list-item">
                           <img encodeId="${e.encodeId}" src="${e.banner}" alt="" />
                        </div>`
               })
            }
            renderBanner()


            let renderMuonNghe = () => {
               let item = items[3].items
               let list = document.querySelector('.container_want .want_list')
               for (let i = 0; i < 4; i++) {
                  list.innerHTML += `
                        <div class="want_list-item col l-2-4 m-3 c-5" title="${item[i].sortDescription}">
                           <a class="want_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="want_list-item-link main-page_list-item_img" >
                                 <img src="${item[i].thumbnailM}" alt="${item[i].title}" />
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon encodeId="${item[i].encodeId}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </a>
                           <div class="want_list-item-title">
                              <a class="main_title-text" title="${item[i].sortDescription}" href="#">${item[i].title}</a>
                              <div class="main_subtitle">
                                 <a href="#">${item[i].artists[0].name}</a>, <a href="#">${item[i].artists[1].name}r</a>, <a href="#">${item[i].artists[2].name}</a>...
                              </div>
                           </div>
                        </div>`
               }
               list.innerHTML += `
                        <div class="want_list-item col l-2-4 m-0 c-5" title="${item[4].sortDescription}">
                           <a class="want_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="want_list-item-link main-page_list-item_img" >
                                 <img src="${item[4].thumbnailM}" alt="${item[4].title}" />
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon encodeId="${item[4].encodeId}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </a>
                           <div class="want_list-item-title">
                              <a class="main_title-text" title="${item[4].sortDescription}" href="#"> ${item[4].title}</a>
                              <div class="main_subtitle">
                                 <a href="#">${item[4].artists[0].name}</a>, <a href="#">${item[4].artists[1].name}r</a>, <a href="#">${item[4].artists[2].name}</a>...
                              </div>
                           </div>
                        </div>`

            }
            renderMuonNghe()

            let renderLuaChonToday = () => {
               let item = items[4].items
               let list = document.querySelector('.container_todaychoice .todaychoice_list')
               for (let i = 0; i < 4; i++) {

                  let e = item[i]

                  list.innerHTML += `  
                        <div div class = "todaychoice_list-item col l-2-4 m-3 c-5"
                        title = "${e.title}" >
                           <a class="todaychoice_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="todaychoice_list-item-link main-page_list-item_img" >
                                 <img src="${e.thumbnailM}" alt="${e.title}" />
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon encodeId="${e.encodeId}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
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
                                 <p>${e.sortDescription}</p>
                              </div>
                           </div>
                        </div>`
               }

               list.innerHTML += `  
                        <div div class = "todaychoice_list-item col l-2-4 m-0 c-5"
                        title = "${item[4].title}" >
                           <a class="todaychoice_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="todaychoice_list-item-link main-page_list-item_img" >
                                 <img src="${item[4].thumbnailM}" alt="${item[4].title}" />
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon encodeId="${item[4].encodeId}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
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
                              <a class="main_title-text" title="${item[4].title}" href="#">${item[4].title}</a>
                              <div class="main_subtitle">
                                 <p>${item[4].sortDescription}</p>
                              </div>
                           </div>
                        </div>`
            }
            renderLuaChonToday()

            let renderXones = () => {
               let item = items[5].items
               let list = document.querySelector('.container_xones .xones_list')

               for (let i = 0; i < 4; i++) {
                  let e = item[i]
                  list.innerHTML += ` 
                      <div class="xones_list-item col l-2-4 m-3 c-5" title="${e.title}">
                           <a class="xones_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="xones_list-item-link main-page_list-item_img">
                                 <img src="${e.thumbnailM}" alt="${e.title}" />
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon encodeId="${e.encodeId}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </a>
                           <div class="xones_list-item-title">
                              <a class="main_title-text" title="${e.title}" href="#">${e.title}</a>
                              <div class="main_subtitle">
                                 <p>${e.sortDescription}</p>
                              </div>
                           </div>
                        </div>`
               }

               list.innerHTML += ` 
                      <div div class = "xones_list-item col l-2-4 m-0 c-5"
                      title = "${item[4].title}" >
                           <a class="xones_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="xones_list-item-link main-page_list-item_img">
                                 <img src="${item[4].thumbnailM}" alt="${item[4].title}" />
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon encodeId="${item[4].encodeId}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </a>
                           <div class="xones_list-item-title">
                              <a class="main_title-text" title="${item[4].title}" href="#">${item[4].title}</a>
                              <div class="main_subtitle">
                                 <p>${item[4].sortDescription}</p>
                              </div>
                           </div>
                        </div>`
            }
            renderXones()

         })

         .then(() => {
            function slickBaner() {
               $('.slider_list').slick({
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  autoplay: true,
                  autoplaySpeed: 3500,
                  draggable: false,
                  prevArrow: `<button type='button' class='slider_list-btn-left slick-prev slick-arrow'><span span class= "material-icons-outlined" >
         arrow_back_ios
     </span ></button>`,
                  nextArrow: `
   <button type='button' class='slider_list-btn-right slick-next slick-arrow'>
     <span class="material-icons-outlined">arrow_forward_ios</span>
   </button>`,
                  responsive: [{
                        breakpoint: 1040,
                        settings: {
                           slidesToShow: 2,
                           autoplaySpeed: 3000,
                           draggable: true
                        }
                     },
                     {
                        breakpoint: 600,
                        settings: {
                           slidesToShow: 1,
                           arrows: false,
                           infinite: true,
                           autoplaySpeed: 3000,
                           dots: true,
                           adaptiveHeight: true,
                           draggable: true
                        }
                     }
                  ]
               })
            }
            slickBaner()
         })
   }
   renderHomePage1()


   let renderHomePage2 = () => {
      const api = 'https://music-player-pink.vercel.app/api/home?page=2'
      fetch(api)
         .then(res => res.json())
         .then(res => {
            let items = res.data.items

            let renderRaidoNoiBat = () => {
               const item = items[0].items
               const list = document.querySelector('.container_radio .xones_list')

               list.innerHTML = ""
               for (let i = 0; i < 5; i++) {
                  let e = item[i]
                  list.innerHTML += `
                      <div class="col l-1-4 m-2 c-5 m2-6 m2-5" >
                           <a class="xones_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="xones_list-item-link-img main-page_list-item_img" >
                                 <img src="${e.program.thumbnail}" alt="" />
                              </div>
                              <div class="xones_list-item-link-logo">
                                 <img src="${e.thumbnail}" alt="" />
                              </div>
                              <div class="xones_list-item-link-logo-live">
                                 <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/icons/live-tag.svg" alt="taylor" />
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon  class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                              </div>
                           </a>
                           <div class="xones_list-item-title">
                              <a class="main_title-text" title="${e.host.name}" href="#">${e.host.name}</a>
                              <div class="main_subtitle">
                                 <p> ${e.activeUsers} đang nghe</p>
                              </div>
                           </div>
                        </div>`
               }

               list.innerHTML += `
                      <div div class = "col l-1-4 m-2 c-5 m2-6 m2-none" >
                           <a class="xones_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="xones_list-item-link-img main-page_list-item_img" >
                                 <img src="${item[5].program.thumbnail}" alt="" />
                              </div>
                              <div class="xones_list-item-link-logo">
                                 <img src="${item[5].thumbnail}" alt="" />
                              </div>
                              <div class="xones_list-item-link-logo-live">
                                 <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/icons/live-tag.svg" alt="taylor" />
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon  class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                              </div>
                           </a>
                           <div class="xones_list-item-title">
                              <a class="main_title-text" title="${item[5].host.name}" href="#">${item[5].host.name}</a>
                              <div class="main_subtitle">
                                 <p> ${item[5].activeUsers} đang nghe</p>
                              </div>
                           </div>
                        </div>`
               list.innerHTML += `
                      <div div div class = "col l-1-4 m-none c-5" >
                           <a class="xones_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="xones_list-item-link-img main-page_list-item_img" >
                                 <img src="${item[6].program.thumbnail}" alt="${item[6].program.description}" />
                              </div>
                              <div class="xones_list-item-link-logo">
                                 <img src="${item[6].thumbnail}" alt="${item[6].program.description}" />
                              </div>
                              <div class="xones_list-item-link-logo-live">
                                 <img src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/icons/live-tag.svg" alt="taylor" />
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon  class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                              </div>
                           </a>
                           <div class="xones_list-item-title">
                              <a class="main_title-text" title="${item[6].host.name}" href="#">${item[6].host.name}</a>
                              <div class="main_subtitle">
                                 <p> ${item[6].activeUsers} đang nghe</p>
                              </div>
                           </div>
                        </div>`

            }
            renderRaidoNoiBat()

            let renderNewMusicToday = () => {
               const item = items[1].items
               const list = document.querySelector('.container_everyday .everyday_list')

               list.innerHTML = ""

               for (let i = 0; i < 4; i++) {
                  let e = item[i]
                  list.innerHTML += `
                        <div class="everyday_list-item col l-2-4 m-3 c-5" title="${e.title}">
                           <a class="everyday_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="everyday_list-item-link main-page_list-item_img" >
                                 <img src="${e.thumbnailM}" alt="${e.vsortDescription}" />
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon encodeId="${e.encodeId}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </a>
                           <div class="everyday_list-item-title">
                              <a class="main_title-text" title="${e.title}" href="#">${e.title}</a>
                              <div class="main_subtitle">
                                 <a href="#">${e.artists[0].name}</a>, <a href="#">${e.artists[1].name}</a>, <a href="#">${e.artists[2].name}</a>...
                              </div>
                           </div>
                        </div>`
               }

               list.innerHTML += `
                        <div class="everyday_list-item col l-2-4 m-0 c-5" title="${item[4].title}">
                           <a class="everyday_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="everyday_list-item-link main-page_list-item_img" >
                                 <img src="${item[4].thumbnailM}" alt="${item[4].vsortDescription}" />
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon encodeId="${item[4].encodeId}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </a>
                           <div class="everyday_list-item-title">
                              <a class="main_title-text" title="${item[4].title}" href="#">${item[4].title}</a>
                              <div class="main_subtitle">
                                 <a href="#">${item[4].artists[0].name}</a>, <a href="#">${item[4].artists[1].name}</a>, <a href="#">${item[4].artists[2].name}</a>...
                              </div>
                           </div>
                        </div>`
            }
            renderNewMusicToday()
         })
   }

   renderHomePage2()

   let renderHomePage3 = () => {
      const api = 'https://music-player-pink.vercel.app/api/home?page=3'
      fetch(api)
         .then(res => res.json())
         .then(res => {
            let items = res.data.items

            let renderNgheSiNoiBat = () => {
               const item = items[3].items
               const list = document.querySelector('#maintop100 .container_top100-list')

               list.innerHTML = ""
               for (let i = 0; i < 4; i++) {
                  let e = item[i]
                  list.innerHTML += `
                        <div div class ="container_top100-list-item col l-2-4 m-3 c-5"   title ="${e.title}" >
                           <a class="todaychoice_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="todaychoice_list-item-link main-page_list-item_img" >
                                 <img src="${e.thumbnailM}" alt="${e.title}" />
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon encodeId="${e.encodeId}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
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
                                 <a href="#">${e.artists[0].name}</a>, <a href="#">${e.artists[1].name}</a>, <a href="#">${e.artists[2].name}</a>...
                              </div>
                           </div>
                        </div>`
               }

               list.innerHTML += ` <div div class ="container_top100-list-item col l-2-4 m-0 c-5"   title ="${item[4].title}" >
                           <a class="todaychoice_list-item-link main-page_list-item main_page-hover" href="#">
                              <div class="todaychoice_list-item-link main-page_list-item_img" >
                                 <img src="${item[4].thumbnailM}" alt="${item[4].title}" />
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon encodeId="${item[4].encodeId}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
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
                              <a class="main_title-text" title="${item[4].title}" href="#">${item[4].title}</a>
                              <div class="main_subtitle">
                                 <a href="#">${item[4].artists[0].name}</a>, <a href="#">${item[4].artists[1].name}</a>, <a href="#">${item[4].artists[2].name}</a>...
                              </div>
                           </div>
                        </div>`


               $('#clickTop100').click(function () {
                  $('#mainTop100Li').click()
               })
            }
            renderNgheSiNoiBat()
         })
   }
   renderHomePage3()


   let renderHomePage4 = () => {
      const api = 'https://music-player-pink.vercel.app/api/home?page=4'
      fetch(api)
         .then(res => res.json())
         .then(res => {
            let items = res.data.items


            let renderMoiPhatHanh = () => {
               const item = items[0].items
               const list = document.querySelector('.container_release .release_list')
               list.innerHTML = ""

               item.forEach((e, index) => {
                  list.innerHTML += `  
                        <a href="#" class="release_list-item">
                           <div class="release_list-item-left main-page_list-item_img main_page-hover">
                              <div class="release_list-item-img">
                                 <img src="${e.thumbnailM}" alt="${e.title}" />
                              </div>
                              <div class="recently_list-item_hover">
                                 <div class="recently_btn-hover recently_btn-hover-play">
                                    <span>
                                       <ion-icon index="${index}" encodeid="ZDB6EB9C"  encodeidplay="${e.encodeId}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                    </span>
                                    <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                 </div>
                              </div>
                           </div>
                           <div class="release_list-item-right">
                              <div class="release_list-item-right-top">
                                 <div class="main_title-text">Nhạt Nhòa Mùa Phai</div>
                                 <div class="main_subtitle">
                                    <span>${e.artistsNames}</span>
                                 </div>
                              </div>
                              <div class="release_list-item-right-bottom">
                                 <div class="release_list-item-chart">#${index + 1}</div>
                                 <div class="release_list-item-date"></div>
                              </div>
                           </div>
                        </a>`
               })

               list.innerHTML += `  <a href="#" class="release_list-item release_list-item-last">
                           <span>Xem Tất Cả</span>
                        </a>`
            }
            renderMoiPhatHanh()
         })

         .then(function () {

            $('.release_list').slick({
               slidesToShow: 3,
               slidesToScroll: 3,
               draggable: false,
               infinite: true,
               prevArrow: `<button type='button' class='release-btn-left slick-prev slick-arrow'><span span class= "material-icons-outlined" >
               arrow_back_ios
           </span ></button>`,
               nextArrow: `
       <button type='button' class='release-btn-right slick-next slick-arrow'>
           <span class="material-icons-outlined">arrow_forward_ios</span>
       </button>`,
               responsive: [{
                     breakpoint: 1220,
                     settings: {
                        slidesToShow: 2,
                        infinite: true,
                        slidesToScroll: 2
                     }
                  },
                  {
                     breakpoint: 720,
                     settings: {
                        autoplay: true,
                        autoplaySpeed: 3000,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        infinite: true,
                        draggable: true,
                        arrows: false
                     }
                  }
               ]
            })

            $('#ClickOpenNewRelese').click(() => {
               $('#MainMusicNew').click()
            })
            $('.release_list-item.release_list-item-last').click(() => {
               $('#MainMusicNew').click()
            })

         })

   }
   renderHomePage4()

   let renderHomePage5 = () => {
      const api = 'https://music-player-pink.vercel.app/api/home?page=5'
      fetch(api)
         .then(res => res.json())
         .then(res => {
            let item = res.data.items[1].items

            let list = document.querySelector('.container_favorite-artist .favorite_list')

            list.innerHTML = ``
            for (let i = 0; i < 2; i++) {
               let e = item[i]
               list.innerHTML += ` 
                        <div class="col l-4 m-6 c-5">
                           <div class="favorite_list-item">
                              <a class="main-page_list-item main_page-hover" href="#">
                                 <div class="main-page_list-item_img">
                                    <img src="${e.thumbnailM}" alt="${e.title}" />
                                 </div>
                                 <div class="recently_list-item_hover">
                                    <div class="recently_btn-hover recently_btn-hover-play">
                                       <span>
                                          <ion-icon encodeId="${e.encodeId}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                       </span>
                                       <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                    </div>
                                 </div>
                                 <div class="favorite_content">
                                    <p class="favorite_content-title">CÓ THỂ BẠN THÍCH</p>
                                    <p class="favorite_content-name">${e.artistsNames}</p>
                                    <div class="favorite_content-list row">
                                       <div class="col l-3 m-3 c-3">
                                          <div class="favorite_content-img">
                                             <img src="${e.song.items[0].thumbnailM}" alt="" />
                                          </div>
                                       </div>
                                       <div class="col l-3 m-3 c-3">
                                          <div class="favorite_content-img">
                                             <img src="${e.song.items[1].thumbnailM}" alt="" />
                                          </div>
                                       </div>
                                       <div class="col l-3 m-3 c-3">
                                          <div class="favorite_content-img">
                                             <img src="${e.song.items[2].thumbnailM}" alt="" />
                                          </div>
                                       </div>
                                       <div class="col l-3 m-3 c-3">
                                          <div class="favorite_content-img">
                                             <img src="${e.song.items[3].thumbnailM}" alt="" />
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="main_blur-bg"></div>
                              </a>
                           </div>
                        </div>`
            }

            list.innerHTML += ` 
                        <div class="col l-4 m-0 c-5">
                           <div class="favorite_list-item">
                              <a class="main-page_list-item main_page-hover" href="#">
                                 <div class="main-page_list-item_img">
                                    <img src="${item[2].thumbnailM}" alt="${item[2].title}" />
                                 </div>
                                 <div class="recently_list-item_hover">
                                    <div class="recently_btn-hover recently_btn-hover-play">
                                       <span>
                                          <ion-icon encodeId="${item[2].encodeId}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                       </span>
                                       <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                    </div>
                                 </div>
                                 <div class="favorite_content">
                                    <p class="favorite_content-title">CÓ THỂ BẠN THÍCH</p>
                                    <p class="favorite_content-name">${item[2].artistsNames}</p>
                                    <div class="favorite_content-list row">
                                       <div class="col l-3 m-3 c-3">
                                          <div class="favorite_content-img">
                                             <img src="${item[2].song.items[0].thumbnailM}" alt="" />
                                          </div>
                                       </div>
                                       <div class="col l-3 m-3 c-3">
                                          <div class="favorite_content-img">
                                             <img src="${item[2].song.items[1].thumbnailM}" alt="" />
                                          </div>
                                       </div>
                                       <div class="col l-3 m-3 c-3">
                                          <div class="favorite_content-img">
                                             <img src="${item[2].song.items[2].thumbnailM}" alt="" />
                                          </div>
                                       </div>
                                       <div class="col l-3 m-3 c-3">
                                          <div class="favorite_content-img">
                                             <img src="${item[2].song.items[3].thumbnailM}" alt="" />
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="main_blur-bg"></div>
                              </a>
                           </div>
                        </div>`
         })
   }
   renderHomePage5()

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
            document.querySelector('.main-page').scrollTo({
               top: 0,
               behavior: 'smooth'
            })
            e.classList.add('sider_active')
            itemMian[index].classList.add('active')
         })

         $('#btnNhacMoiC').click(e => {
            menuList[3].click()
         })
         $('#btnTop100C').click(e => {
            menuList[4].click()
         })
         $('#btnMvC').click(e => {
            menuList[5].click()
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
                                                         <ion-icon index="${i}" encodeid="ZO68OC68"  encodeidplay="${e.id}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
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
               let length = itemChart2.length
               for (let i = 10; i < length; i++) {
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
                                                         <ion-icon index="${i} encodeid="ZO68OC68" encodeidplay="${e.id}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
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
               // test

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
                                                         <ion-icon index="${i}" encodeid="6BWFIAE8" encodeidplay="${e.id}"  class="icon_play-btn" name="play-circle-outline"></ion-icon>
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
                                                         <ion-icon index="${i}" encodeid="6BWCBFDF" encodeidplay="${e.id}"  class="icon_play-btn" name="play-circle-outline"></ion-icon>
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
                                                         <ion-icon index="${i}" encodeid="6BWF7Z70" encodeidplay="${e.id}"  class="icon_play-btn" name="play-circle-outline"></ion-icon>
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
                                                         <ion-icon encodeId="ZDB6EB9C" encodeidplay="${e.encodeId}" index="${i}" class="icon_play-btn" name="play-circle-outline"></ion-icon>
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
                                          <ion-icon encodeId="${e.encodeId}" class="icon_play-btn md hydrated" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
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
                                          <ion-icon encodeId="${itemLast.encodeId}" class="icon_play-btn md hydrated" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
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
                                          <ion-icon encodeId="${e.encodeId}" class="icon_play-btn md hydrated" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
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
                                          <ion-icon encodeId="${e.encodeId}" class="icon_play-btn md hydrated" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
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
                                          <ion-icon encodeId="${itemLast.encodeId}" class="icon_play-btn md hydrated" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
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
                                          <ion-icon encodeId="${e.encodeId}" class="icon_play-btn md hydrated" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
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
                                          <ion-icon encodeId="${e.encodeId}" class="icon_play-btn md hydrated" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
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

         document.querySelector('#mainMv').addEventListener('click', e => {
            setTimeout(function () {
               line.style.left = tabActive.offsetLeft + 'px'
               line.style.width = tabActive.offsetWidth + 'px'
            }, 250)
         })

         const setLine = e => {
            line.style.left = e.offsetLeft + 'px'
            line.style.width = e.offsetWidth + 'px'
         }
         setLine(tabActive)

         mainNavItem.forEach((tab, index) => {
            const content = mainContentItem[index]

            tab.onclick = function () {
               document
                  .querySelector('.main_mv-header-item.active')
                  .classList.remove('active')
               document
                  .querySelector('.main_mv-container_item.active')
                  .classList.remove('active')

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
         const apiVnMainId = 'IWZ9Z08I'
         const apiUsMainId = 'IWZ9Z08O'
         const apiKPopMainId = 'IWZ9Z08W'
         const apiHoaTauMainId = 'IWZ9Z086'

         const vn = 'vn'
         const us = 'usuk'
         const kpop = 'kpop'
         const hoatau = 'hoatau'

         // Render Main
         const renderMainItem2 = (apiId, itemMv) => {
            // APi Main
            const api = `https://music-player-pink.vercel.app/api/listMV?id=${apiId}&page=1&count=64`
            const nameItemMv = document.querySelector(
               `.main_mv-container_${itemMv} .container_top100-list.row`
            )

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

                  function fixReadingThumbnail(a) {
                     if (a !== undefined) {
                        return a
                     } else {
                        return (a = a.thumbnailM)
                     }
                  }
                  items.forEach(e => {
                     nameItemMv.innerHTML += `  
                              <div class="col l-4 m-4 c-6">
                                 <a class="todaychoice_list-item-link main-page_list-item main_page-hover" href="#">
                                    <div class="todaychoice_list-item-link main-page_list-item_img" href="#">
                                       <img src="${e.thumbnailM}" alt="${
                 e.title
               }" />
                                    </div>
                                    <div class="recently_list-item_hover">
                                       <div class="recently_btn-hover recently_btn-hover-play">
                                          <span>
                                             <ion-icon class="icon_play-btn" name="play-circle-outline" data-codeid="${
                                               e.encodeId
                                             }"></ion-icon>
                                          </span>
                                       </div>
                                    </div>
                                    <div class="main_mv-item-time">
                                       ${fancyTimeFormat(e.duration)}
                                    </div>
   
                                 </a>
                                 <div class="todaychoice_list-item-title">
                                    <div class="main_mv-avatr">
                                       <img src="${fixReadingThumbnail(
                                         e.artist.thumbnail
                                       )}" alt="${e.title}">
                                    </div>
                                    <div class="main_mv-info-title">
                                       <a class="main_title-text" title="${
                                         e.title
                                       }" href="#">${e.title}</a>
                                       <div class="main_subtitle">
                                         ${e.artistsNames}
                                       </div>
                                    </div>
                                 </div>
                              </div>`
                  })
               })
         }
         renderMainItem2(apiVnMainId, vn)
         renderMainItem2(apiUsMainId, us)
         renderMainItem2(apiKPopMainId, kpop)
         renderMainItem2(apiHoaTauMainId, hoatau)

         // render option
         let renderCategory = (apiId, itemMv) => {
            // API Category
            const ListDropDown = document.querySelector(
               `.main_mv-container_${itemMv} .main_mv-dropdown-list`
            )
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

         renderCategory(apiVnMainId, vn)
         renderCategory(apiUsMainId, us)
         renderCategory(apiKPopMainId, kpop)
         renderCategory(apiHoaTauMainId, hoatau)

         // CLICK DROP
         let clickDropDown2 = (btnId, list) => {
            let btnDown = document.querySelector(
               `.main_mv-search-dropdown-btn.${btnId}`
            )
            let DownList = document.querySelector(`.main_mv-dropdown-list.${btnId}`)
            let DownListP = document.querySelector(
               `.main_mv-search-dropdown-btn.${btnId} p`
            )

            btnDown.addEventListener('click', e => {
               btnDown.classList.toggle('active')
               DownList.classList.toggle('active')

               // Khi Click ra Ngoài thì ẩn
               document.addEventListener('click', e => {
                  if (
                     e.target.id !== `${list}` &&
                     e.target.classList.value !== 'main_mv-dropdown-item' &&
                     e.target.classList.value !== btnDown.classList.value
                  ) {
                     DownList.classList.remove('active')
                     btnDown.classList.remove('active')
                  }
               })
            })

            DownList.addEventListener('click', e => {
               if (e.target.classList.contains('main_mv-dropdown-item')) {
                  let dataId = e.target.getAttribute('data-id-drop')
                  const classNamewMainMv =
                     e.target.parentNode.parentNode.parentNode.parentNode.classList.value
                  e.target.parentNode.parentNode.nextElementSibling.innerHTML = ''

                  let indexOfMaiMv = () => {
                     if (classNamewMainMv.indexOf('main_mv-container_vn') >= 0) {
                        return renderMainItem2(dataId, vn)
                     } else if (
                        classNamewMainMv.indexOf('main_mv-container_usuk') >= 0
                     ) {
                        return renderMainItem2(dataId, us)
                     } else if (
                        classNamewMainMv.indexOf('main_mv-container_kpop') >= 0
                     ) {
                        return renderMainItem2(dataId, kpop)
                     } else if (
                        classNamewMainMv.indexOf('main_mv-container_hoatau') >= 0
                     ) {
                        return renderMainItem2(dataId, hoatau)
                     }
                  }

                  DownListP.innerHTML = e.target.innerHTML
                  btnDown.classList.remove('active')
                  DownList.classList.remove('active')
                  indexOfMaiMv()
               }
            })
         }

         clickDropDown2('vn', 'mainMvList')
         clickDropDown2('usuk', 'mainMvList1')
         clickDropDown2('kpop', 'mainMvList2')
         clickDropDown2('hoatau', 'mainMvList3')
      }
      renderItemMv()
   }
   renderMv()

   // render Background Img NowPLaying
   renderNowPlayingBg = () => {
      let imgBg = [
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/0/5/3c05c10ae36f6361f9af0874bb7c4851.jpg',

         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/1/f/3/a1f34293d1dc92735be8c3f9082c4acf.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/e/9/5/6e95b598e1e14a187ee779bcd888e75c.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/c/8/1/1c81e957a6270eba91571d822a47e7c5.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/0/d/000d9d0679bbbb564a191a6801d7f19d.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/6/4/f/e64f4fd6f53caebabc1c26d592093cfa.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/e/3/1/de315c40b537d40b7409a6702f446631.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/4/6/2/1462efc7378bed3f98ace411e11eab45.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/b/f/a/5bfa05533ed7975035e69a4508c82fd6.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/2/b/1/f2b1b91fa64e0c354150c86fd96c249c.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/1/f/b/51fbcd4ae32096ffe2dd89cd36bb6ed9.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/2/3/9/62392463eab1eb1aaa2d1f3bd0f758bb.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/2/f/0/12f01e12d6e13e263ef76f3fdb65d66e.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/8/2/4/8824ef8e3e3aa3e302f03879a1f9d7d3.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/3/4/9/43491e9d95a9942015548bd2a061250d.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/8/7/5/987517940ce71a96bab9c0c88d5b6b95.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/e/2/4/8e24305fde744814083af980a593e8c2.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/1/2/7/f1270dd1bed79b527228e3351d2b67ae.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/a/3/0/0a301934881ee4e2de30dc8f41bc55f9.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/c/9/f/cc9fce8719364ba9d8a846984c590a0e.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/5/d/e/e5de86acd7567465f54a6b9307076947.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/4/b/b/64bb19c5f971b4e4f16f3bfdff64a396.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/3/2/0/03206606d461843e22451747a9b60769.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/d/4/4/bd4485d6dfef80764869a4d88d9b0475.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/6/8/e86817d147315d9d644835f60d17ae41.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/4/7/bb477f2f56f162b13426f70c9858c732.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/5/3/6/c536ff6ab992e36be24ca0adf8e86ae0.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/f/c/6cfc1e6e3b94c62cded257659602f00b.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/5/d/6/25d6adaa11b4e932d61309ed635d57fa.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/2/a/e/d2ae42243ccd4fec321fc60692a5a2dc.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/8/0/e/b80e5777c7eec332c882bf79bd692056.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/7/b/a/e7ba1207018f1d2fa7048598c7d627df.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/f/4/0/3f40bd0d6d8cbcf833c72ab050f19e6a.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/d/a/d/adad060e15f8409ec2e7670cf943c202.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/d/1/7/ed17742d63b635725e6071a9bee362c5.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/a/e/8/3ae816de233a9eae0116b4b5a21af43e.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/7/f/1/d7f15e3996e7923ffc2a64d1f8e43448.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/7/e/007e6b48696aab4a61ca46a10d980f63.jpg',
         'https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/9/f/5/d9f592437d80e358a76e32798ce2d294.jpg'
      ]

      let renderBgImg = e => {
         e.forEach(a => {
            document.querySelector(
               '.image-effect'
            ).innerHTML += `<li class="image-effect-item">
                           <img src="${a}" alt="bgc">
                        </li>`
         })
      }
      renderBgImg(imgBg)

      $('.image-effect').slick({
         infinite: true,
         speed: 1000,
         fade: true,
         cssEase: 'linear',
         autoplaySpeed: 8000,
         autoplay: true,
         arrows: false
      })
   }
   renderNowPlayingBg()

   // Now Playing
   let nowPlaying = () => {
      const tabMenu = document.querySelectorAll('.nowplaying-header_tab-item')
      const tabMain = document.querySelectorAll('.nowplaying-body_item')

      let changePage = () => {
         tabMenu.forEach((e, index) => {
            e.addEventListener('click', a => {
               document
                  .querySelector('.nowplaying-header_tab-item.active')
                  .classList.remove('active')
               document
                  .querySelector('.nowplaying-body_item.active')
                  .classList.remove('active')

               tabMenu[index].classList.add('active')
               tabMain[index].classList.add('active')

               let widthBodyStart2 = document.body.clientWidth

               if (
                  tabMenu[2].classList.contains('active') &&
                  widthBodyStart2 < 720 &&
                  widthBodyStart < 720
               ) {
                  document.querySelector(
                     '.playing-bar.active .player_controls-main .player_controls-center'
                  ).style.marginBottom = '3rem'
               } else {
                  document.querySelector(
                     '.playing-bar.active .player_controls-main .player_controls-center'
                  ).style.marginBottom = '4.6rem'
               }
            })


            window.addEventListener('resize', () => {
               let widthBody = document.body.clientWidth
               let div = document.querySelector('.playing-bar.active .player_controls-main .player_controls-center')

               if (!div) {
                  return
               }

               if (widthBody < 720) {
                  document.querySelector('.playing-bar.active .player_controls-main .player_controls-center').style.marginBottom = '3rem'
               } else {
                  document.querySelector(
                     '.playing-bar.active .player_controls-main .player_controls-center'
                  ).style.marginBottom = '4.6rem'
               }
            })
         })
      }
      changePage()

      // Click playlist
      let clickPlayList = () => {
         const item = document.querySelector('.playing-bar .player_controls-main .player_controls-right .playing_playlist')

         item.addEventListener('click', e => {
            if (document.querySelector('.playing-bar').classList.contains('active')) {
               if (item.classList.contains('btn_active')) {
                  setTimeout(function () {
                     document.querySelector('.player_controls-center').style.display =
                        'none'
                     document.querySelector('.nowplaying-header_tab').style.opacity = '0'
                  }, 300)
               } else {
                  document.querySelector('.nowplaying-header_tab').style.opacity = '1'
                  document.querySelector('.player_controls-center').style.display = 'flex'
               }
            } else {
               return
            }
         })
      }
      clickPlayList()

      let clickFullScreen = () => {

         let btn = document.querySelector('.nowplaying-header_setting-btn.full')


         btn.addEventListener('click', toggleFullScreen)

         function toggleFullScreen() {
            if (
               (document.fullScreenElement && document.fullScreenElement !== null) ||
               (!document.mozFullScreen && !document.webkitIsFullScreen)
            ) {
               btn.classList.add('active')

               if (document.documentElement.requestFullScreen) {
                  document.documentElement.requestFullScreen()
               } else if (document.documentElement.mozRequestFullScreen) {
                  document.documentElement.mozRequestFullScreen()
               } else if (document.documentElement.webkitRequestFullScreen) {
                  document.documentElement.webkitRequestFullScreen(
                     Element.ALLOW_KEYBOARD_INPUT
                  )
               }
            } else {
               btn.classList.remove('active')
               if (document.cancelFullScreen) {
                  document.cancelFullScreen()
               } else if (document.mozCancelFullScreen) {
                  document.mozCancelFullScreen()
               } else if (document.webkitCancelFullScreen) {
                  document.webkitCancelFullScreen()
               }
            }
         }
      }
      clickFullScreen()

      let checkBoxBgc = () => {
         const input = document.querySelector('#nowPlayingTheme')
         input.addEventListener('change', e => {

            if (!e.target.checked) {
               document.querySelector('.image-effect .slick-list').style.display = "none"
            } else {
               document.querySelector('.image-effect .slick-list').style.display = "block"
            }
         })
      }
      checkBoxBgc()

      let clickFontSize = () => {
         const btn = document.querySelectorAll('.nowplaying-header_setting-item-font-text')
         btn.forEach(e => {
            e.addEventListener('click', () => {
               btn.forEach(a => {
                  a.classList.remove('active')
               })

               e.classList.add('active')

               let sizeWidth = document.body.clientWidth
               if (sizeWidth < 720) {
                  if (e.classList.contains('s')) {
                     document.querySelector('.scroll-content').style.fontSize = '16px'
                     document.querySelector('.nowplaying-body_karaoke h2').style.fontSize = '16px'
                  } else if (e.classList.contains('m')) {
                     document.querySelector('.scroll-content').style.fontSize = '20px'
                     document.querySelector('.nowplaying-body_karaoke h2').style.fontSize = '20px'
                  } else if (e.classList.contains('l')) {
                     document.querySelector('.scroll-content').style.fontSize = '26px'
                     document.querySelector('.nowplaying-body_karaoke h2').style.fontSize = '26px'
                  }
               } else {
                  if (e.classList.contains('s')) {
                     document.querySelector('.nowplaying-body_karaoke h2').style.fontSize = '30px'
                     document.querySelector('.scroll-content').style.fontSize = '30px'
                  } else if (e.classList.contains('m')) {
                     document.querySelector('.nowplaying-body_karaoke h2').style.fontSize = '40px'
                     document.querySelector('.scroll-content').style.fontSize = '40px'
                  } else if (e.classList.contains('l')) {
                     document.querySelector('.nowplaying-body_karaoke h2').style.fontSize = '46px'
                     document.querySelector('.scroll-content').style.fontSize = '46px'
                  }
               }


            })
         })

         window.addEventListener('resize', () => {
            let sizeWidth = document.body.clientWidth

            let e = document.querySelector('.nowplaying-header_setting-item-font-text.active')

            if (sizeWidth < 720) {
               if (e.classList.contains('s')) {
                  document.querySelector('.scroll-content').style.fontSize = '16px'
                  document.querySelector('.nowplaying-body_karaoke h2').style.fontSize = '16px'
               } else if (e.classList.contains('m')) {
                  document.querySelector('.scroll-content').style.fontSize = '20px'
                  document.querySelector('.nowplaying-body_karaoke h2').style.fontSize = '20px'
               } else if (e.classList.contains('l')) {
                  document.querySelector('.scroll-content').style.fontSize = '26px'
                  document.querySelector('.nowplaying-body_karaoke h2').style.fontSize = '26px'
               }
            } else {
               if (e.classList.contains('s')) {
                  document.querySelector('.nowplaying-body_karaoke h2').style.fontSize = '30px'
                  document.querySelector('.scroll-content').style.fontSize = '30px'
               } else if (e.classList.contains('m')) {
                  document.querySelector('.nowplaying-body_karaoke h2').style.fontSize = '40px'
                  document.querySelector('.scroll-content').style.fontSize = '40px'
               } else if (e.classList.contains('l')) {
                  document.querySelector('.nowplaying-body_karaoke h2').style.fontSize = '46px'
                  document.querySelector('.scroll-content').style.fontSize = '46px'
               }
            }
         })

      }
      clickFontSize()

      let clickPopup = () => {
         const item = document.querySelector('.nowplaying-header_setting-item.item-setting')
         const btn = document.querySelector('.nowplaying-header_setting-btn.setting')

         btn.addEventListener('click', () => {

            if (!btn.classList.contains('active')) {
               item.classList.add('active')
               btn.classList.add('active')
            } else if (btn.classList.contains('active')) {
               item.classList.remove('active')
               btn.classList.remove('active')
            }

            document.addEventListener('click', e => {
               if (e.target.classList.value !== 'nowplaying-header_setting-btn setting active') {
                  if (e.target.offsetParent && e.target.offsetParent.classList.value !== 'nowplaying-header_setting-item-list') {
                     item.classList.remove('active')
                     btn.classList.remove('active')

                  }
               }
            })
         })





      }
      clickPopup()

   }
   nowPlaying()

   let clickOpenNowPlay = () => {
      document.addEventListener('click', e => {
         console.log(e.target)
      })
      const btnKaraoke = document.querySelector('.player_btn.playing_karaoke')
      const itemAvat = document.querySelector('.media_avatar-hover.openNowPlaying')
      const playingBar = document.querySelector('.playing-bar')
      const btnDown = document.querySelector('.nowplaying-header_setting-btn.down')
      const playingCenter = document.querySelector('.player_controls-center')
      const playingSetting = document.querySelector('.nowplaying-header_setting')
      itemAvat.addEventListener('click', () => {
         playingBar.classList.add('active')
         playingCenter.style.marginBottom = "4rem"
         playingSetting.style.display = "flex"
      })

      btnKaraoke.addEventListener('click', () => {
         itemAvat.click()
         setTimeout(() => {
            document.querySelector('.nowplaying-header_tab-item:nth-child(3)').click()

         }, 300)
      })

      btnDown.addEventListener('click', () => {
         playingBar.classList.remove('active')
         playingCenter.style.marginBottom = "0"
         playingSetting.style.display = "none"
      })
   }

   clickOpenNowPlay()

   $('#logo-sider').click(() => {
      window.location.reload()
   })
}
renderAndLenh()

// Click render danh sách nhạc
let clickRenderPlayList = () => {
   document.cookie = 'SameSite=None; Secure'

   setTimeout(function () {
      // Slick sider
      function slickNowPlay() {
         $('.nowplaying-content .want_list').slick({
            // centerMode: true,
            centerPadding: '60px',
            slidesToShow: 5,
            swipe: true,
            swipeToSlide: true,
            infinite: false,
            focusOnSelect: false,

            prevArrow: `<button type='button' class='slider_list-btn-left slick-prev slick-arrow'><span span class= "material-icons-outlined" >
               arrow_back_ios
           </span ></button>`,
            nextArrow: `
       <button type='button' class='slider_list-btn-right slick-next slick-arrow'>
           <span class="material-icons-outlined">arrow_forward_ios</span>
       </button>`,
            responsive: [{
                  breakpoint: 1060,
                  settings: {
                     // centerMode: true,
                     centerPadding: '40px',
                     slidesToShow: 3
                  }
               },
               {
                  breakpoint: 720,
                  settings: {
                     // centerMode: true,
                     centerPadding: '40px',
                     slidesToShow: 1,
                     arrows: false,
                     draggable: true,

                  }
               }
            ]
         });

      }

      // Selector
      const btnPausePLay = document.querySelector('#play-pause')
      const audio = document.querySelector('#main-audio')
      const PlayingTimeCurrent = document.querySelector('.playing_time-left')
      const PlayingTimeDuartion = document.querySelector('.playing_time-right')
      const progressArea = document.querySelector('.progress-area')
      const progressBar = document.querySelector('.progress-bar')
      const inputVolume = document.querySelector('#inputVolume')
      const nextMusicBtn = document.querySelector('#nextMusic')
      const prevMusicBtn = document.querySelector('#prevMusic')
      const loopMusicBtn = document.querySelector('#loopMusic')
      const randomMusic = document.querySelector('#randomMusic')
      const volumeUp = document.querySelector('#volumeup')
      const main = document.querySelector('.main')
      const playingBar = document.querySelector('.playing-bar')
      const scrollContent = document.querySelector('.scroll-content')

      let isRandom = false
      let isLoopMusic = false
      let musicIndex = 0

      // Function

      function activeErr() {
         const mainToast = document.querySelector('.main_toast.msg')
         const closse = mainToast.querySelector('.toast-close span')
         mainToast.classList.add('active')
         closse.addEventListener('click', () => {
            mainToast.classList.remove('active')
         })
         setTimeout(() => {
            mainToast.classList.remove('active')
         }, 8000)
      }

      // Tab NowPlaying
      function acitveTabNow() {
         let item = document.querySelectorAll('.player_queue-listmusic .player_queue-item [encodeidplay]')
         let itemNow = document.querySelectorAll('.nowplaying-body [encodeidplay]')
         let itemLi = document.querySelectorAll('.nowplaying-body .want_list-item')

         itemNow.forEach((e, index) => {
            let li = e.parentElement.parentElement.parentElement.parentElement.parentElement
            if (e.getAttribute('name') == 'pause-circle-outline') {
               e.setAttribute('name', 'play-circle-outline')
            }
            e.addEventListener('click', () => {
               for (let i = 0; i < itemNow.length; i++) {
                  itemNow[i].setAttribute('name', 'play-circle-outline')
                  itemLi[i].classList.remove('slick-oke')
               }
               item[index].click()
               e.setAttribute('name', 'pause-circle-outline')
               li.classList.add('slick-oke')
               setTimeout(() => {
                  scrollToActive(li)
               }, 100)
               setTimeout(() => {
                  scrollToActive(item[index])
               }, 600)
            })
         })

      }

      // Function đồng bộ click thanh right vs now pl
      function clickLiChangeNowPlay(e) {
         let li = e.parentElement.parentElement.parentElement.parentElement.parentElement
         let itemLi = document.querySelectorAll('.nowplaying-body .want_list-item')
         let itemNow = document.querySelectorAll('.nowplaying-body [encodeidplay]')
         const itemActiveRight = document.querySelector('.player_queue-item.player_queue-active')
         itemNow.forEach(item => {
            // change icon
            if (item.getAttribute('name') == 'pause-circle-outline') {
               item.setAttribute('name', 'play-circle-outline')
            }
         })
         // remove Class oke
         itemLi.forEach(e => {
            e.classList.remove('slick-oke')
         })

         li.classList.add('slick-oke')
         e.setAttribute('name', 'pause-circle-outline')
         scrollToActive(li)
         scrollToActive(itemActiveRight)

      }

      // 
      function showBottom() {
         main.classList.remove('hide-bottom')
      }

      function scrollToActive(e) {
         setTimeout(function () {
            e.scrollIntoView({
               behavior: "smooth",
               block: "center",
               inline: "center"
            })
         }, 200)
      }

      // function phụ
      function clickOpenSong(e) {
         let id = e.getAttribute('encodeidplay')
         const apiMusic = `https://music-player-pink.vercel.app/api/song?id=${id}`
         const apiLyric = `https://music-player-pink.vercel.app/api/lyric?id=${id}`

         fetch(apiMusic)
            .then(res => res.json())
            .then(res => {
               pauseMusic()
               if (res.err != 0) {
                  // Cho Nhạc Nc ngoài 
                  const apiMusic128 = `http://api.mp3.zing.vn/api/streaming/audio/${id}/128`
                  const apiMusic320 = `http://api.mp3.zing.vn/api/streaming/audio/${id}/320`
                  audio.src = apiMusic320

               } else {
                  let dataSong = res.data[128]
                  audio.src = dataSong
               }
            })

            .then(() => {
               playMusic()
            })

            .catch()

         fetch(apiLyric)
            .then(res => res.json())
            .then(res => {

               function formatTime(seconds) {
                  minutes = Math.floor(seconds / 60);
                  minutes = minutes >= 10 ? minutes : "0" + minutes;
                  seconds = Math.floor(seconds % 60);
                  seconds = seconds >= 10 ? seconds : "0" + seconds;
                  return minutes + ":" + seconds
               }

               const words = res.data.sentences
               scrollContent.innerHTML = ``

               if (!words) {
                  scrollContent.innerHTML += `<li class='item'>Lời bài hát đang được cập nhật</li>`
                  return
               }

               words.forEach(e => {
                  let word = e.words
                  let liItem = document.createElement('li')
                  liItem.classList.add('item')

                  for (let i = 0; i < word.length; i++) {
                     const text = word[i].data;
                     liItem.innerHTML += text + ' '
                  }

                  scrollContent.insertAdjacentElement('beforeend', liItem)
               });

               setTimeout(() => {
                  let allItem = scrollContent.querySelectorAll('.item')
                  audio.addEventListener('loadedmetadata', () => {
                     words.forEach((ele, index) => {
                        let e = ele.words
                        let startTime = formatTime(e[0].startTime / 1000)
                        let endTime = formatTime(e[e.length - 1].endTime / 1000)

                        audio.addEventListener('timeupdate', () => {
                           let time = formatTime(audio.currentTime)
                           if (time >= startTime && time < endTime) {
                              allItem[index].classList.add('is-active')
                              setTimeout(() => {
                                 allItem[index].scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                 })
                              }, 200)
                           }
                           if (time >= endTime) {
                              allItem[index].classList.remove('is-active')
                              setTimeout(() => {
                                 allItem[index].classList.add('is-over')
                              }, 200);
                           }
                        })

                     })
                  })
               }, )
            })
            .catch()
      }

      function mouseMoveHide2() {
         var timeout;
         document.addEventListener('mousemove', () => {
            clearTimeout(timeout);
            let oke = document.querySelector('.want_list-item.slick-oke')
            timeout = setTimeout(function () {
               scrollToActive(oke)
               setTimeout(() => {
                  playingBar.classList.add('play_hidden')
               }, 1200);
            }, 7000);
            playingBar.classList.remove('play_hidden')
         })
      }

      // Chơi nhạc 
      function playMusic() {
         btnPausePLay.classList.add("paused")
         btnPausePLay.setAttribute('name', '')
         btnPausePLay.setAttribute('name', 'pause-circle-outline')
         let isPLay = audio.play()
         isPLay
            .then(() => {
               audio.play()
            })
            .catch(() => {
               activeErr()
               pauseMusic()
            })

      }

      // Function Pause music
      function pauseMusic() {
         btnPausePLay.classList.remove("paused")
         btnPausePLay.setAttribute('name', '')
         btnPausePLay.setAttribute('name', 'play-circle-outline')
         audio.pause()
      }

      // next
      function nextMusic() {
         pauseMusic()
         let item = document.querySelectorAll('.player_queue-listmusic .player_queue-item [encodeidplay]')

         if (isRandom) {
            let randIndex = Math.floor((Math.random() * item.length));
            do {
               randIndex = Math.floor((Math.random() * item.length));
            } while (musicIndex == randIndex)
            musicIndex = randIndex

         } else {
            musicIndex++
         }

         if (musicIndex > item.length) {
            musicIndex = 0
         }

         let itemIndex = item[`${musicIndex}`]
         let li = itemIndex.parentElement.parentElement.parentElement.parentElement
         let itemNow = document.querySelectorAll('.nowplaying-body [encodeidplay]')

         clickOpenSong(itemIndex)
         RenderData(li)
         addClassActive(li)
         changeIcon()
         playMusic()
         itemIndex.innerHTML = `pause`
         scrollToActive(li)

         setTimeout(() => {
            clickLiChangeNowPlay(itemNow[musicIndex])
         }, 600)
      }

      // prev
      function prevMusic() {
         let item = document.querySelectorAll('.player_queue-listmusic .player_queue-item [encodeidplay]')
         let itemNow = document.querySelectorAll('.nowplaying-body [encodeidplay]')

         musicIndex--
         if (musicIndex < 0) {
            musicIndex = item.length
         }
         let itemIndex = item[`${musicIndex}`]
         let li = itemIndex.parentElement.parentElement.parentElement.parentElement

         clickOpenSong(itemIndex)
         RenderData(li)
         addClassActive(li)
         changeIcon()
         playMusic()
         scrollToActive(li)
         itemIndex.innerHTML = `pause`

         setTimeout(() => {
            clickLiChangeNowPlay(itemNow[musicIndex])
         }, 500)
      }


      // add class active 
      function addClassActive(e) {
         let allLi = document.querySelectorAll('.player_queue-listmusic .player_queue-item')
         allLi.forEach(item => {
            if (item.classList.contains('player_queue-active')) {
               item.classList.remove('player_queue-active')
            }
         })
         e.classList.add('player_queue-active')
      }


      // click chơi nhạc function Chính
      function ClickActiveLI() {
         let item = document.querySelectorAll('.player_queue-listmusic .player_queue-item [encodeidplay]')
         let itemNow = document.querySelectorAll('.nowplaying-body [encodeidplay]')


         item.forEach((e, index) => {
            e.addEventListener('click', function () {
               let li = e.parentElement.parentElement.parentElement.parentElement
               let i = e.getAttribute('index')
               let itemNowPlay = itemNow[index]

               // Xử lý next bài 
               musicIndex = i
               // Lấy api nhạc & play
               clickOpenSong(e)
               // add class active
               addClassActive(li)
               // render ra thanh bottm
               RenderData(li)
               // thay đổi icon trong thanh right
               changeIcon()

               clickLiChangeNowPlay(itemNowPlay)

               e.innerHTML = `pause`
            })
         })
      }

      // Sự kiện thanh audio
      function EventAudio() {
         audio.addEventListener('ended', () => {
            pauseMusic()
            if (isLoopMusic) {
               audio.currentTime = 0
               playMusic()
            } else {
               nextMusic()
            }
         })

         audio.addEventListener('timeupdate', () => {
            // Update thanh time
            const currentTime = audio.currentTime // tgian hiện tại
            const duration = audio.duration // Tổng thời gian
            let progressWidth = (currentTime / duration) * 100
            progressBar.style.width = progressWidth + '%'
            // update song total duration
            audio.addEventListener('loadeddata', () => {
               let audioDuration = audio.duration
               let totalMin = Math.floor(audioDuration / 60)
               let totalSec = Math.floor(audioDuration % 60)
               if (totalSec < 10) { //add thêm 0 trước nến giây nhỏ hơn 10
                  totalSec = `0${totalSec}`
               }
               PlayingTimeDuartion.innerHTML = totalMin + ":" + totalSec
            })

            // update song Current Time
            let currentMin = Math.floor(currentTime / 60)
            let currentSec = Math.floor(currentTime % 60)
            if (currentSec < 10) {
               currentSec = `0${currentSec}`
            }
            PlayingTimeCurrent.innerHTML = currentMin + ':' + currentSec
         })

         function setTimeSong1(e) {
            let progressWidhtVal = progressArea.clientWidth // Lấy chiều x
            let clickedOffSetX = e.offsetX // lấy value chiều x khi click
            let songDuration = audio.duration
            audio.currentTime = (clickedOffSetX / progressWidhtVal) * songDuration
         }
         progressArea.addEventListener('click', e => {
            setTimeSong1(e)
            playMusic()
         })

         let isReadyMove = false
         progressArea.addEventListener('mousedown', e => {
            isReadyMove = true
            setTimeSong1(e)
            playMusic()
         })
         progressArea.addEventListener('mouseup', e => {
            isReadyMove = false
            setTimeSong1(e)
            playMusic()
         })
         // progressArea.addEventListener('mousemove', e => {
         //    if (isReadyMove) {
         //       let progressWidhtVal = progressArea.clientWidth // Lấy chiều x
         //       let clickedOffSetX = e.offsetX // lấy value chiều x khi click
         //       let songDuration = audio.duration
         //       let current = (clickedOffSetX / progressWidhtVal) * songDuration

         //       let progressWidth = (current / songDuration) * 100
         //       progressArea.style.width = progressArea + '%'
         //    } else {
         //       return
         //    }
         // })

      }

      // play bản nhạc đầu tiên 
      function PlayingMusicFist() {
         musicIndex = 0

         let itemNow = document.querySelectorAll('.nowplaying-body [encodeidplay]')
         let itemFist = document.querySelector('.player_queue-listmusic .player_queue-item')
         let btnPlayFirst = itemFist.querySelector('[encodeidplay]')
         let id = btnPlayFirst.getAttribute('encodeidplay')
         const apiMusic = `https://music-player-pink.vercel.app/api/song?id=${id}`
         const apiLyric = `https://music-player-pink.vercel.app/api/lyric?id=${id}`
         RenderData(itemFist)
         addClassActive(itemFist)

         function formatTime(seconds) {
            minutes = Math.floor(seconds / 60);
            minutes = minutes >= 10 ? minutes : "0" + minutes;
            seconds = Math.floor(seconds % 60);
            seconds = seconds >= 10 ? seconds : "0" + seconds;
            return minutes + ":" + seconds
         }

         fetch(apiMusic)
            .then(res => res.json())
            .then(res => {
               if (res.err != 0) {
                  // Cho Nhạc Nc ngoài 
                  const apiMusic2 = `http://api.mp3.zing.vn/api/streaming/audio/${id}/320/`
                  audio.src = apiMusic2
               } else {
                  let dataSong = res.data[128]
                  audio.src = dataSong
               }

               clickLiChangeNowPlay(itemNow[0])
               playMusic()
               btnPlayFirst.innerHTML = `pause`
            })
            .catch()

         fetch(apiLyric)
            .then(res => res.json())
            .then(res => {
               scrollContent.innerHTML = ``
               const words = res.data.sentences

               if (!words) {
                  scrollContent.innerHTML += `<li class='item'>Lời bài hát đang được cập nhật</li>`
                  return
               }

               words.forEach(e => {
                  let word = e.words
                  let liItem = document.createElement('li')
                  liItem.classList.add('item')

                  for (let i = 0; i < word.length; i++) {
                     const text = word[i].data;
                     liItem.innerHTML += text + ' '
                  }

                  scrollContent.insertAdjacentElement('beforeend', liItem)
               });

               setTimeout(() => {
                  let allItem = scrollContent.querySelectorAll('.item')
                  audio.addEventListener('loadedmetadata', () => {
                     words.forEach((ele, index) => {
                        let e = ele.words
                        let startTime = formatTime(e[0].startTime / 1000)
                        let endTime = formatTime(e[e.length - 1].endTime / 1000)

                        audio.addEventListener('timeupdate', () => {
                           let time = formatTime(audio.currentTime)
                           if (time >= startTime && time < endTime) {
                              allItem[index].classList.add('is-active')
                              setTimeout(() => {
                                 allItem[index].scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                 })
                              }, 200)
                           }
                           if (time >= endTime) {
                              allItem[index].classList.remove('is-active')
                              setTimeout(() => {
                                 allItem[index].classList.add('is-over')
                              }, 200);
                           }
                        })

                     })
                  })
               }, )
            })
            .catch()

      }

      function PlayingMusicIndex(e) {

         musicIndex = e

         let itemNow = document.querySelectorAll('.nowplaying-body [encodeidplay]')
         let itemFist = document.querySelectorAll('.player_queue-listmusic .player_queue-item')[e]
         let btnPlayFirst = itemFist.querySelector('[encodeidplay]')
         let id = btnPlayFirst.getAttribute('encodeidplay')

         const apiMusic = `https://music-player-pink.vercel.app/api/song?id=${id}`
         const apiLyric = `https://music-player-pink.vercel.app/api/lyric?id=${id}`

         RenderData(itemFist)
         addClassActive(itemFist)

         function formatTime(seconds) {
            minutes = Math.floor(seconds / 60);
            minutes = minutes >= 10 ? minutes : "0" + minutes;
            seconds = Math.floor(seconds % 60);
            seconds = seconds >= 10 ? seconds : "0" + seconds;
            return minutes + ":" + seconds
         }

         fetch(apiMusic)
            .then(res => res.json())
            .then(res => {
               if (res.err != 0) {
                  // Cho Nhạc Nc ngoài 
                  const apiMusic2 = `http://api.mp3.zing.vn/api/streaming/audio/${id}/320/`
                  audio.src = apiMusic2
               } else {
                  let dataSong = res.data[128]
                  audio.src = dataSong
               }

               clickLiChangeNowPlay(itemNow[e])
               playMusic()
               btnPlayFirst.innerHTML = `pause`
            })
            .catch()

         fetch(apiLyric)
            .then(res => res.json())
            .then(res => {
               scrollContent.innerHTML = ``
               const words = res.data.sentences

               if (!words) {
                  scrollContent.innerHTML += `<li class='item'>Lời bài hát đang được cập nhật</li>`
                  return
               }

               words.forEach(e => {
                  let word = e.words
                  let liItem = document.createElement('li')
                  liItem.classList.add('item')

                  for (let i = 0; i < word.length; i++) {
                     const text = word[i].data;
                     liItem.innerHTML += text + ' '
                  }

                  scrollContent.insertAdjacentElement('beforeend', liItem)
               });

               setTimeout(() => {
                  let allItem = scrollContent.querySelectorAll('.item')
                  audio.addEventListener('loadedmetadata', () => {
                     words.forEach((ele, index) => {
                        let e = ele.words
                        let startTime = formatTime(e[0].startTime / 1000)
                        let endTime = formatTime(e[e.length - 1].endTime / 1000)

                        audio.addEventListener('timeupdate', () => {
                           let time = formatTime(audio.currentTime)
                           if (time >= startTime && time < endTime) {
                              allItem[index].classList.add('is-active')
                              setTimeout(() => {
                                 allItem[index].scrollIntoView({
                                    behavior: "smooth",
                                    block: "center",
                                 })
                              }, 200)
                           }
                           if (time >= endTime) {
                              allItem[index].classList.remove('is-active')
                              setTimeout(() => {
                                 allItem[index].classList.add('is-over')
                              }, 200);
                           }
                        })

                     })
                  })
               }, )
            })
            .catch()

      }

      // render data Thanh bottm 
      function RenderData(e) {
         let itemActive = e

         let SongName = itemActive.querySelector('.player_queue-music').innerHTML
         let SongArit = itemActive.querySelector('.player_queue-name').innerHTML
         let SongImg = itemActive.querySelector('.player_queue-img').getAttribute('srcm')

         let mediaAvatar = document.querySelector('.media-avatar')
         let mediaMusic = document.querySelector('.media_center .media_music')
         let mediaName = document.querySelector('.media_center .media_name')
         let avatarLyric = document.querySelector('.nowplaying-body_lyrics-item-img img')

         mediaAvatar.src = SongImg
         mediaMusic.innerHTML = SongName
         mediaName.innerHTML = SongArit
         avatarLyric.src = SongImg

      }

      // thay đổi icon
      function changeIcon(e) {
         let items = document.querySelectorAll('.player_queue-listmusic .player_queue-item:not(.player_queue-item.player_queue-active) [encodeidplay]')
         items.forEach(item => {
            if (item.innerHTML = 'pause') {
               item.innerHTML = 'play_arrow'
            }
         })
      }

      function changeIconMain() {
         let btnPlay = document.querySelectorAll('.icon_play-btn[encodeid]')
         btnPlay.forEach(item => {
            if (item.getAttribute('name') == 'pause-circle-outline') {
               item.setAttribute('name', 'play-circle-outline')
            }
         })
      }

      // Evnet add
      // Xử lý click  loop Music
      loopMusicBtn.addEventListener('click', () => {
         isLoopMusic = !isLoopMusic
         loopMusicBtn.classList.toggle('active', isLoopMusic)
         if (isLoopMusic) {
            loopMusicBtn.querySelector('.playing_title-hover').innerHTML = `Tắt phát lại `
         } else {
            loopMusicBtn.querySelector('.playing_title-hover').innerHTML = `Bật phát Lại`
         }
      })

      randomMusic.addEventListener('click', () => {
         isRandom = !isRandom
         randomMusic.classList.toggle('active', isRandom)
         if (isRandom) {
            randomMusic.querySelector('.playing_title-hover').innerHTML = `Tắt phát ngẫu nhiên`
         } else {
            randomMusic.querySelector('.playing_title-hover').innerHTML = `Bật phát ngẫu nhiên`
         }
      })

      btnPausePLay.addEventListener('click', () => {
         const isMusicPaused = btnPausePLay.classList.contains('paused')
         isMusicPaused ? pauseMusic() : playMusic()
      })

      nextMusicBtn.addEventListener('click', () => {
         nextMusic()
      })

      // Xử lý input volume
      let valueVolume = inputVolume.value / 100
      audio.volume = valueVolume
      inputVolume.onchange = function () {
         valueVolume = inputVolume.value / 100
         audio.volume = valueVolume
         if (valueVolume < 0.01) {
            volumeUp.innerHTML = `volume_off`
         } else {
            volumeUp.innerHTML = `volume_up`
         }
      }
      volumeUp.addEventListener('click', () => {
         volumeUpClick()
      })

      // Click btn volume up 
      function volumeUpClick() {

         if (volumeUp.innerHTML !== `volume_up`) {
            inputVolume.value = 80
            volumeUp.innerHTML = `volume_up`
            audio.volume = inputVolume.value / 100
         } else {
            volumeUp.innerHTML = `volume_off`
            inputVolume.value = 0
            audio.volume = inputVolume.value / 100
         }
      }

      document.querySelector('.playing_volume').addEventListener('click', () => {
         let x = inputVolume.value
         let color = `linear-gradient(90deg, var(--progressbar-active-bg) ${x}%, var(--progressbar-player-bg) ${x}%)`
         inputVolume.style.background = color
      })

      inputVolume.addEventListener('mousemove', () => {
         let x = inputVolume.value
         let color = `linear-gradient(90deg, var(--progressbar-active-bg) ${x}%, var(--progressbar-player-bg) ${x}%)`
         inputVolume.style.background = color
      })

      //  Xử lý next bà
      prevMusicBtn.addEventListener('click', () => {
         prevMusic()
      })

      // Enver keyboard
      document.addEventListener('keydown', e => {
         let data = e.keyCode
         switch (data) {
            case 32:
               btnPausePLay.click();
               e.preventDefault();
               break;
            case 39:
               nextMusicBtn.click();
               break;
            case 37:
               prevMusicBtn.click();
               break;
            case 74:
               randomMusic.click();
               break;
            case 76:
               loopMusicBtn.click();
               break;
            case 38:
               inputVolume.value += 10;
               break;
            case 40:
               inputVolume.value -= 10;
               break;
         }
      })

      var ClickPlayingAll = () => {
         // Click PlayList danh sach nhac
         const btnPlay = document.querySelectorAll('[encodeid]')
         btnPlay.forEach((playlist, index) => {
            playlist.addEventListener("click", () => {
               let id = playlist.getAttribute('encodeid')
               let idPlay = playlist.getAttribute('encodeidplay')
               let indexItemSong = playlist.getAttribute('index')

               function playListActive() {
                  const apiList = `https://music-player-pink.vercel.app/api/playlist?id=${id}`
                  changeIconMain()
                  playlist.setAttribute('name', 'pause-circle-outline')
                  pauseMusic()
                  document.querySelector('.player_queue-listmusic').innerHTML = ``
                  fetch(apiList)
                     .then(res => res.json())
                     .then(res => {
                        const ListMusicLeft = document.querySelector('.player_queue-listmusic')
                        const ListMusicNowPlay = document.querySelector('.nowplaying-body .want_list ')
                        const titleList = document.querySelector('#titleList')
                        let items = res.data.song.items

                        if (!res.msg == "Success") {
                           return
                        }

                        titleList.innerHTML = res.data.title

                        showBottom()
                        ListMusicLeft.innerHTML = ``

                        // Thanh Now PLay
                        ListMusicNowPlay.innerHTML = ``
                        ListMusicNowPlay.classList.remove('slick-initialized')
                        ListMusicNowPlay.classList.remove('slick-slider')

                        // inset thanh Right
                        items.forEach((item, index) => {
                           ListMusicLeft.innerHTML += `  
                           <li class="player_queue-item">
                              <div class="player_queue-item-left">
                                 <div class="player_queue-left">
                                    <img class="player_queue-img" src="${item.thumbnail}" alt="" srcm="${item.thumbnailM}" />
                                    <div class="player_queue-img-hover">
                                      <span index="${index}" encodeidplay="${item.encodeId}" class="material-icons encodeidplay"> play_arrow </span>
                                       <!-- <span class="material-icons"> pause </span> -->
                                    </div>
                                 </div>
                                 <div class="player_queue-music-info">
                                    <div class="player_queue-music">${item.title}</div>
                                    <div class="player_queue-name">${item.artistsNames}</div>
                                 </div>
                              </div>
                              <div class="player_queue-item-right">
                                 <div class="player_queue-btn player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="player_queue-btn player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </li>`
                        })

                        // inset thanh now
                        items.forEach((item, index) => {
                           ListMusicNowPlay.innerHTML += `
                            <div class="want_list-item">
                              <a class="want_list-item-link main-page_list-item main_page-hover" href="#">
                                 <div class="want_list-item-link main-page_list-item_img">
                                    <img src="${item.thumbnailM}" alt="${item.title}">
                                 </div>
                                 <div class="recently_list-item_hover">
                                    <div class="recently_btn-hover player_btn">
                                       <span class="material-icons-outlined"> favorite_border </span>
                                       <span class="playing_title-hover">Thêm vào thư viện </span>
                                    </div>
                                    <div class="recently_btn-hover recently_btn-hover-play">
                                       <span>
                                          <ion-icon  index="${index}"  encodeidplay="${item.encodeId}" class="icon_play-btn md hydrated encodeidplay" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
                                       </span>
                                       <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                    </div>
                                    <div class="recently_btn-hover player_btn">
                                       <span class="material-icons-outlined"> more_horiz </span>
                                       <span class="playing_title-hover">Xem thêm</span>
                                    </div>
                                 </div>
                              </a>
                              <div class="want_list-item-title">
                                 <a class="main_title-text" title="${item.title}" href="#">${item.title}</a>
                                 <div class="main_subtitle">
                                    <a href="#">${item.artistsNames}</a>
                                 </div>
                              </div>
                           </div>`
                        })

                     })

                     .then(() => {
                        $(document).ready(function () {
                           slickNowPlay()
                        })
                        PlayingMusicFist()
                        ClickActiveLI()
                        acitveTabNow()
                        EventAudio()
                        setTimeout(() => {
                           mouseMoveHide2()
                        }, 5000)
                     })
               }

               if (idPlay) {
                  const apiList = `https://music-player-pink.vercel.app/api/playlist?id=${id}`
                  changeIconMain()
                  playlist.setAttribute('name', 'pause-circle-outline')
                  pauseMusic()
                  document.querySelector('.player_queue-listmusic').innerHTML = ``
                  fetch(apiList)
                     .then(res => res.json())
                     .then(res => {
                        const ListMusicLeft = document.querySelector('.player_queue-listmusic')
                        const ListMusicNowPlay = document.querySelector('.nowplaying-body .want_list ')
                        const titleList = document.querySelector('#titleList')
                        let items = res.data.song.items

                        if (!res.msg == "Success") {
                           return
                        }

                        titleList.innerHTML = res.data.title

                        showBottom()
                        ListMusicLeft.innerHTML = ``

                        // Thanh Now PLay
                        ListMusicNowPlay.innerHTML = ``
                        ListMusicNowPlay.classList.remove('slick-initialized')
                        ListMusicNowPlay.classList.remove('slick-slider')

                        // inset thanh Right
                        items.forEach((item, index) => {
                           ListMusicLeft.innerHTML += `  
                           <li class="player_queue-item">
                              <div class="player_queue-item-left">
                                 <div class="player_queue-left">
                                    <img class="player_queue-img" src="${item.thumbnail}" alt="" srcm="${item.thumbnailM}" />
                                    <div class="player_queue-img-hover">
                                      <span index="${index}" encodeidplay="${item.encodeId}" class="material-icons encodeidplay"> play_arrow </span>
                                       <!-- <span class="material-icons"> pause </span> -->
                                    </div>
                                 </div>
                                 <div class="player_queue-music-info">
                                    <div class="player_queue-music">${item.title}</div>
                                    <div class="player_queue-name">${item.artistsNames}</div>
                                 </div>
                              </div>
                              <div class="player_queue-item-right">
                                 <div class="player_queue-btn player_btn">
                                    <span class="material-icons-outlined"> favorite_border </span>
                                    <span class="playing_title-hover">Thêm vào thư viện </span>
                                 </div>
                                 <div class="player_queue-btn player_btn">
                                    <span class="material-icons-outlined"> more_horiz </span>
                                    <span class="playing_title-hover">Xem thêm</span>
                                 </div>
                              </div>
                           </li>`
                        })

                        // inset thanh now
                        items.forEach((item, index) => {
                           ListMusicNowPlay.innerHTML += `
                            <div class="want_list-item">
                              <a class="want_list-item-link main-page_list-item main_page-hover" href="#">
                                 <div class="want_list-item-link main-page_list-item_img">
                                    <img src="${item.thumbnailM}" alt="${item.title}">
                                 </div>
                                 <div class="recently_list-item_hover">
                                    <div class="recently_btn-hover player_btn">
                                       <span class="material-icons-outlined"> favorite_border </span>
                                       <span class="playing_title-hover">Thêm vào thư viện </span>
                                    </div>
                                    <div class="recently_btn-hover recently_btn-hover-play">
                                       <span>
                                          <ion-icon  index="${index}"  encodeidplay="${item.encodeId}" class="icon_play-btn md hydrated encodeidplay" name="play-circle-outline" role="img" aria-label="play circle outline"></ion-icon>
                                       </span>
                                       <!-- <span> <ion-icon class="icon_pause-btn" name="pause-circle-outline"></ion-icon> </span> -->
                                    </div>
                                    <div class="recently_btn-hover player_btn">
                                       <span class="material-icons-outlined"> more_horiz </span>
                                       <span class="playing_title-hover">Xem thêm</span>
                                    </div>
                                 </div>
                              </a>
                              <div class="want_list-item-title">
                                 <a class="main_title-text" title="${item.title}" href="#">${item.title}</a>
                                 <div class="main_subtitle">
                                    <a href="#">${item.artistsNames}</a>
                                 </div>
                              </div>
                           </div>`
                        })

                     })

                     .then(() => {
                        $(document).ready(function () {
                           slickNowPlay()
                        })
                        PlayingMusicIndex(indexItemSong)
                        ClickActiveLI()
                        acitveTabNow()
                        EventAudio()
                        setTimeout(() => {
                           mouseMoveHide2()
                        }, 5000)
                     })



               } else {
                  playListActive()
               }

            })
         })
      }
      ClickPlayingAll()
   }, 14000)
}
clickRenderPlayList()