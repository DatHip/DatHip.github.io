//  Nghe si slider
$(document).ready(function () {
  $('.choice_list').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    prevArrow: `<button type='button' class='choice-btn-left slick-prev slick-arrow'><span span class= "material-icons-outlined" >
            arrow_back_ios
        </span ></button>`,
    nextArrow: `
    <button type='button' class='choice-btn-right slick-next slick-arrow'>
        <span class="material-icons-outlined">arrow_forward_ios</span>
    </button>`,
    responsive: [{
        breakpoint: 1320,
        settings: {
          slidesToShow: 6
        }
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          draggable: true,
          arrows: false
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          dots: true,
          slidesToScroll: 3,
          draggable: true,
          arrows: false
        }
      }
    ]
  })
})

// Line Chart
let lineChart = () => {
  const postApi = 'https://music-player-pink.vercel.app/api/chart-home'
  fetch(postApi)
    .then(res => res.json())
    .then(res => {
      const itemSong = res.data.RTChart.items
      const item = res.data.RTChart
      const timeLineY = res.data.RTChart.chart.times

      // Lấy encodeId top
      let getEnCodeId = num => {
        let item = res.data.RTChart.items[`${num}`].encodeId
        return item
      }
      let DataChart0 = res.data.RTChart.chart.items[`${getEnCodeId(0)}`]
      let DataChart1 = res.data.RTChart.chart.items[`${getEnCodeId(1)}`]
      let DataChart2 = res.data.RTChart.chart.items[`${getEnCodeId(2)}`]

      let lineY = [
        `${timeLineY[0].hour}:00`,
        `${timeLineY[2].hour}:00`,
        `${timeLineY[4].hour}:00`,
        `${timeLineY[6].hour}:00`,
        `${timeLineY[8].hour}:00`,
        `${timeLineY[10].hour}:00`,
        `${timeLineY[12].hour}:00`,
        `${timeLineY[14].hour}:00`,
        `${timeLineY[16].hour}:00`,
        `${timeLineY[18].hour}:00`,
        `${timeLineY[20].hour}:00`,
        `${timeLineY[22].hour}:00`
      ]

      let config = {
        type: 'line',
        data: {
          labels: lineY,
          datasets: [{
              label: `${itemSong[0].title}`,
              backgroundColor: '#fff',
              borderColor: '#4A90E2',
              data: [
                DataChart0[0].counter,
                DataChart0[2].counter,
                DataChart0[4].counter,
                DataChart0[6].counter,
                DataChart0[8].counter,
                DataChart0[10].counter,
                DataChart0[12].counter,
                DataChart0[14].counter,
                DataChart0[16].counter,
                DataChart0[18].counter,
                DataChart0[20].counter,
                DataChart0[22].counter
              ],
              fill: false,
              tension: 0.25,
              borderWidth: 2,
              pointBorderWidth: 3,
              pointRadius: 4,
              pointHoverBackgroundColor: '#4A90E2',
              pointHoverBorderColor: '#fff',
              pointHoverBorderWidth: 2.5,
              pointHoverRadius: 5.5,
              oder: 1
            },
            {
              label: `${itemSong[1].title}`,
              fill: false,
              backgroundColor: '#fff',
              borderColor: '#27BD9C',
              data: [
                DataChart1[0].counter,
                DataChart1[2].counter,
                DataChart1[4].counter,
                DataChart1[6].counter,
                DataChart1[8].counter,
                DataChart1[10].counter,
                DataChart1[12].counter,
                DataChart1[14].counter,
                DataChart1[16].counter,
                DataChart1[18].counter,
                DataChart1[20].counter,
                DataChart1[22].counter
              ],
              tension: 0.25,
              borderWidth: 2,
              pointBorderWidth: 3,
              pointRadius: 4,
              pointHoverBackgroundColor: '#27BD9C',
              pointHoverBorderColor: '#fff',
              pointHoverBorderWidth: 2.5,
              pointHoverRadius: 5.5,
              oder: 2
            },
            {
              label: `${itemSong[2].title}`,
              fill: false,
              backgroundColor: '#fff',
              borderColor: '#A64250',
              data: [
                DataChart2[0].counter,
                DataChart2[2].counter,
                DataChart2[4].counter,
                DataChart2[6].counter,
                DataChart2[8].counter,
                DataChart2[10].counter,
                DataChart2[12].counter,
                DataChart2[14].counter,
                DataChart2[16].counter,
                DataChart2[18].counter,
                DataChart2[20].counter,
                DataChart2[22].counter
              ],
              tension: 0.25,
              borderWidth: 2,
              pointBorderWidth: 3,
              pointRadius: 4,
              pointHoverBackgroundColor: '#A64250',
              pointHoverBorderColor: '#fff',
              pointHoverBorderWidth: 2.5,
              pointHoverRadius: 5.5,
              oder: 3
            }
          ]
        },
        options: {
          datasetStrokeWidth: 10,
          pointDotStrokeWidth: 10,
          tooltipFillColor: "rgb(0,0,0)",
          interaction: {
            mode: 'index',
            intersect: false,

          },
          plugins: {
            legend: {
              display: false
            }
          },
          responsive: true,
          tooltips: {
            enabled: true,
            mode: 'nearest',
            intersect: false,
            padding: 2,
            caretPadding: 4,
            usePointStyle: true,

          },
          hover: {
            mode: 'dataset',
            intersect: true
          },
          scales: {
            y: {
              min: 0,
              max: `${item.chart.maxScore}`,
              display: false,

            },
            x: {
              ticks: {
                padding: 3,
                textStrokeColor: '#fff',
                color: '#96979B'
              },
              alignToPixels: true,

            }
          }
        }
      }

      let ctx = document.getElementById('myChart').getContext('2d')
      let ctx2 = document.getElementById('myChart2').getContext('2d')

      window.myLine = new Chart(ctx, config)
      window.myLine = new Chart(ctx2, config)

      // render top3 ra charthome
      let renderTop3 = () => {
        const chartTop3List = document.querySelector(
          '.container_zing-chart .zing-chart_list'
        )
        const chartNameTop = document.querySelectorAll('.zing-chart_right-top')

        let getdataMax = e => {
          return Math.max.apply(Math, config.data.datasets[`${e}`].data)
        }

        let allScore = getdataMax(0) + getdataMax(1) + getdataMax(2)

        let getdataMax1 = ((getdataMax(0) * 100) / allScore).toFixed() + '%'
        let getdataMax2 = ((getdataMax(1) * 100) / allScore).toFixed() + '%'
        let getdataMax3 = ((getdataMax(2) * 100) / allScore).toFixed() + '%'

        let getNameTop3 = e => {
          return itemSong[`${e}`].title
        }
        let getArtistTop3 = e => {
          return itemSong[`${e}`].artistsNames
        }
        let getImgTop3 = e => {
          return itemSong[`${e}`].thumbnail
        }



        // render name
        chartNameTop[0].innerHTML = ` <div class="zing-chart_right-top_item">
                                    <div class="zing-chart_right-top_box"></div>
                                    <p>${getNameTop3(0)}</p>
                                 </div>
                                 <div class="zing-chart_right-top_item">
                                    <div class="zing-chart_right-top_box"></div>
                                    <p>${getNameTop3(1)}</p>
                                 </div>
                                 <div class="zing-chart_right-top_item">
                                    <div class="zing-chart_right-top_box"></div>
                                    <p>${getNameTop3(2)}</p>
                                 </div>`
        chartNameTop[1].innerHTML = ` <div class="zing-chart_right-top_item">
                                    <div class="zing-chart_right-top_box"></div>
                                    <p>${getNameTop3(0)}</p>
                                 </div>
                                 <div class="zing-chart_right-top_item">
                                    <div class="zing-chart_right-top_box"></div>
                                    <p>${getNameTop3(1)}</p>
                                 </div>
                                 <div class="zing-chart_right-top_item">
                                    <div class="zing-chart_right-top_box"></div>
                                    <p>${getNameTop3(2)}</p>
                                 </div>`

        // top 3 chart home
        chartTop3List.innerHTML = `
                                <div class="zing-chart_item main_page-hover">
                                 <div class="zing-chart_item-left">
                                    <div class="zing-chart_item-oder"><span class="zing-chart-top">1</span></div>
                                    <div class="zing-chart_item-info">
                                       <div class="zing-chart_item-img">
                                          <div class="main-page_list-item_img">
                                             <div class="release_list-item-img">
                                                <img src="${getImgTop3(
                                                  0
                                                )}" alt="${getNameTop3(0)}" />
                                             </div>
                                             <div class="recently_list-item_hover">
                                                <div class="recently_btn-hover recently_btn-hover-play">
                                                   <span>
                                                      <ion-icon  class="icon_play-btn" name="play-circle-outline"></ion-icon>
                                                   </span>
                                                 
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="zing-chart_item-text">
                                          <div class="zing-chart_item-name">${getNameTop3(
                                            0
                                          )}</div>
                                          <div class="zing-chart_item-artist"><a href="#">${getArtistTop3(
                                            0
                                          )}</a></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="zing-chart_item-right">
                                    <p>${getdataMax1}</p>
                                 </div>
                              </div>
                              <div class="zing-chart_item main_page-hover">
                                 <div class="zing-chart_item-left">
                                    <div class="zing-chart_item-oder"><span class="zing-chart-top">2</span></div>
                                    <div class="zing-chart_item-info">
                                       <div class="zing-chart_item-img">
                                          <div class="main-page_list-item_img">
                                             <div class="release_list-item-img">
                                                <img src="${getImgTop3(
                                                  1
                                                )}" alt="${getNameTop3(1)}" />
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
                                          <div class="zing-chart_item-name">${getNameTop3(
                                            1
                                          )}</div>
                                          <div class="zing-chart_item-artist">
                                             <a href="#">Hana Cẩm Tiên</a>,<a href="#">${getArtistTop3(
                                               1
                                             )}</a>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="zing-chart_item-right">
                                    <p>${getdataMax2}</p>
                                 </div>
                              </div>
                              <div class="zing-chart_item main_page-hover">
                                 <div class="zing-chart_item-left">
                                    <div class="zing-chart_item-oder"><span class="zing-chart-top">3</span></div>
                                    <div class="zing-chart_item-info">
                                       <div class="zing-chart_item-img">
                                          <div class="main-page_list-item_img">
                                             <div class="release_list-item-img">
                                                <img src="${getImgTop3(
                                                  2
                                                )}" alt="${getNameTop3(2)}" />
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
                                          <div class="zing-chart_item-name">${getNameTop3(
                                            2
                                          )}</div>
                                          <div class="zing-chart_item-artist"><a href="#">${getArtistTop3(
                                            2
                                          )}</a></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="zing-chart_item-right">
                                    <p>${getdataMax3}</p>
                                 </div>
                              </div>
                              <div class="zing-chart_item-bottom">
                                 <a id='more' class="zing-chart_btn" href="#">Xem Thêm</a>
                              </div>`


        $("#more").click(function () {
          $("#topChartClick").click()
          console.log($("#topChartClick"))
        })
      }
      renderTop3()
    })
}
lineChart()

// Loading page
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.loading').remove()

  }, 7000)
})