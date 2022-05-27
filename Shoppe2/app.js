const list = document.querySelector(".home-product .gird__roww")
list.innerHTML = ``
fetch("https://fakestoreapi.com/products")
   .then((res) => res.json())
   .then((res) => {
      let filterRate = (Prevrate) => {
         console.log(Prevrate)
         let rate = Math.round(Prevrate)
         console.log(rate)
         let icon = `<i class="home-product-item__star--yelow fas fa-star"></i>`
         let word = []
         for (let i = 0; i < rate; i++) {
            word.push(icon)
         }
         return word.join("")
      }

      res.forEach((e) => {
         let dataUrl = new URLSearchParams(e)
         let dataUrlRate = new URLSearchParams(e.rating)
         list.innerHTML += `
                     <div class="gird__column-2-4">
                        <div class="home-product-item">
                           <a  href="./router/detail.html?${dataUrl.toString()}&${dataUrlRate.toString()}" target="_blank">
                              <div title="${e.description}" class="home-product-item__img" style="
                                       background-image: url(${e.image});
                                    "></div>
                              <h4 class="home-product-item__name">
                                ${e.title}
                              </h4>
                              <div class="home-product-item__price">
                                 <span class="home-product-item-old">${(e.price * 1.1).toFixed(2)}$</span>
                                 <span class="home-product-item-current">${e.price}$</span>
                              </div>

                              <div class="home-product-item__action">
                                 <span class="home-product-item__like home-product-item__like--liked">
                                    <i class="home-product-item__like-icon-empty far fa-heart"></i>
                                    <i class="home-product-item__like-icon-fill fas fa-heart"></i>
                                 </span>
                                 <div class="home-product-item__racing">
                                    ${filterRate(e.rating.rate)}
                                    <span class="home-product-item__sold"> Đã bán ${e.rating.count} </span>
                                 </div>
                              </div>

                              <div class="home-product-item__origin">
                                 <span>${e.category}</span>
                                 <span>Hà Nội</span>
                              </div>

                              <div class="home-product-item__favourite">
                                 <i class="fas fa-check"></i>
                                 Yêu thích
                              < /div>

                              <div class="home-product-item__sale-off">
                                 <span class="home-product-item__sale-off-percents">10%</span>
                                 <span class="home-product-item__sale-off-label">Giảm</span>
                              </div>
                           </a>
                        </div>
                     </div>
                     `
      })

      localStorage.setItem("res", JSON.stringify(res))
   })
