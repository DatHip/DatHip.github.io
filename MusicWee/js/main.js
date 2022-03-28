
$(document).ready(function () {
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
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 3000,
          draggable: true,

        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: true,
          autoplaySpeed: 2800,
          dots: true,
          adaptiveHeight: true,
          draggable: true,
        },
      },
    ],
  });
});





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
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          draggable: true,
          arrows: false

        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          dots: true,
          slidesToScroll: 3,
          draggable: true,
          arrows: false

        },
      },

    ],
  });
});



// Mới Phát Hành
$(document).ready(function () {
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
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 2,
        },
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
          arrows: false,

        },
      },

    ],
  });
});

// Nghệ sĩ yêu thích 


// Line Chart 
let lineY = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00', '04:00', '08:00'];

let config = {
  type: 'line',
  data: {
    labels: lineY,
    datasets: [
      {
        label: "Nhạt Nhòa Mưa Phai",
        backgroundColor: '#fff',
        borderColor: '#4A90E2',
        data: [44, 40, 36, 38, 40, 32, 30, 28, 19, 16, 36],
        fill: false,
        tension: .4,
        borderWidth: 2,
        pointBorderWidth: 3,
        pointRadius: 4.5,
        pointHoverBackgroundColor: "#4A90E2",
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 3,
        pointHoverRadius: 8,
        oder: 1,

      }, {
        label: "Thương Em Thiệt Không ",
        fill: false,
        backgroundColor: '#fff',
        borderColor: '#27BD9C',
        data: [38, 34, 24, 29, 34, 26, 20, 19, 14, 12, 30],
        tension: .4,
        borderWidth: 2,
        pointBorderWidth: 3,
        pointRadius: 4.5,
        pointHoverBackgroundColor: "#27BD9C",
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 3,
        pointHoverRadius: 8,
        oder: 2,
      }, {
        label: "Lung Lay",
        fill: false,
        backgroundColor: '#fff',
        borderColor: '#A64250',
        data: [29, 30, 20, 24, 28, 22, 17, 12, 10, 9, 22],
        tension: .4,
        borderWidth: 2,
        pointBorderWidth: 3,
        pointRadius: 4.5,
        pointHoverBackgroundColor: "#A64250",
        pointHoverBorderColor: '#fff',
        pointHoverBorderWidth: 3,
        pointHoverRadius: 8,
        oder: 3,
      }
    ]
  },
  options: {
    plugins: {
      legend: {

        display: false,
        align: "center",
        color: '#96979B',
        fullSize: false,
        maxWidth: "100%",
        labels: {
          font: {
            size: 12
          }
        }
      }
    },
    // responsive: false,
    responsive: true,
    title: {
      display: true,
      text: 'Chart.js Line Chart'
    },
    tooltips: {
      mode: 'label',
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 5,
        max: 50,
        color: "#fff",
        display: false,

      },
      x: {
        beginAtZero: true,

        ticks: {
          padding: 3,
          textStrokeColor: "#fff",
          color: '#96979B'
        },
        alignToPixels: true
      }

    }
  }
};
let ctx = document.getElementById("myChart").getContext("2d");
window.myLine = new Chart(ctx, config);

// Loading page
window.addEventListener("load", () => {
  document.querySelector('.loading').remove()
})