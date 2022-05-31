import { utcToZonedTime } from "date-fns-tz"
const root = ReactDOM.createRoot(document.getElementById("root"))

function TrItems(props) {
   return (
      <tr>
         <td>{props.id}</td>
         <td>{props.name}</td>
         <td>{props.price}</td>
         <td>{props.rank}</td>
         <td>{props.comment}</td>
      </tr>
   )
}
function Label() {
   return (
      <table>
         <caption>Hóa đơn ăn nhậu</caption>

         <thead>
            <tr>
               <th>STT</th>
               <th>Tên</th>
               <th>Mức đóng góp</th>
               <th>Xếp hạng</th>
               <th>Nhận xét</th>
            </tr>
         </thead>

         <tbody>
            <TrItems id={1} name="Thầy Ba" price={1000000} rank="Kim Cương" comment="Sugar Daddy" />
            <TrItems id={2} name="Nguyễn Thế Anh" price={500000} rank="Bạc" comment="Sugar Baby" />
            <TrItems
               id={3}
               name="Bùi Lan Nhi"
               price={0}
               rank="Nhôm"
               comment="Định mời Nhi ăn tối hóa ra lại thành bữa tối của Nhi"
            />
         </tbody>

         <tfoot>
            <tr>
               <td colSpan="5">Tổng bill ca 1: 2022000</td>
            </tr>
            <tr>
               <td colSpan="5">Tổng bill ca 2: 105000</td>
            </tr>
            <tr>
               <td colSpan="5">
                  Tổng đóng góp: <span className="total"></span>
               </td>
            </tr>
         </tfoot>
      </table>
   )
}

function Label2() {
   return (
      <table>
         <caption>Bảng chú thích</caption>

         <thead>
            <tr>
               <th>Mức đóng góp</th>
               <th>Xếp hạng</th>
            </tr>
         </thead>

         <tbody>
            <tr>
               <td>Trên 1000000</td>
               <td>Kim Cương</td>
            </tr>
            <tr>
               <td>800000 - 1000000</td>
               <td>Bạch kim</td>
            </tr>
            <tr>
               <td>500000 - 800000</td>
               <td>Vàng</td>
            </tr>
            <tr>
               <td>200000 - 500000</td>
               <td>Bạc</td>
            </tr>
            <tr>
               <td>Dưới 200000</td>
               <td>Đồng</td>
            </tr>
            <tr>
               <td>0</td>
               <td>Nhôm</td>
            </tr>
         </tbody>
      </table>
   )
}

// Clock
setTimeout(() => {
   const UI = {
      date: document.querySelector(".date"),
      am_pm: document.querySelector(".am-pm"),
      second: document.querySelector(".hand--second"),
      minute: document.querySelector(".hand--minute"),
      hour: document.querySelector(".hand--hour"),
   }

   function updateClock() {
      const nowPrev = new Date()
      const now = utcToZonedTime(nowPrev, "Asia/Ho_Chi_Minh")
      const date = now.getDate()
      const seconds = ((now.getSeconds() + now.getMilliseconds() / 1000) / 60) * 360
      const minute = ((now.getMinutes() + now.getSeconds() / 60) / 60) * 360
      const hours = ((now.getHours() + now.getMinutes() / 60) / 12) * 360

      // Ui update
      UI.date.innerHTML = date
      UI.second.style.transform = `rotate(${seconds}deg)`
      UI.minute.style.transform = `rotate(${minute}deg)`
      UI.hour.style.transform = `rotate(${hours}deg)`
      requestAnimationFrame(updateClock)
   }

   requestAnimationFrame(updateClock)
})

function handleSelect(e) {
   let valueCity = e.target.value
   const UI = {
      date: document.querySelector(".date"),
      am_pm: document.querySelector(".am-pm"),
      second: document.querySelector(".hand--second"),
      minute: document.querySelector(".hand--minute"),
      hour: document.querySelector(".hand--hour"),
   }

   function updateClock() {
      const nowPrev = new Date()
      const now = utcToZonedTime(nowPrev, valueCity)
      const date = now.getDate()
      const seconds = ((now.getSeconds() + now.getMilliseconds() / 1000) / 60) * 360
      const minute = ((now.getMinutes() + now.getSeconds() / 60) / 60) * 360
      const hours = ((now.getHours() + now.getMinutes() / 60) / 12) * 360

      // Ui update
      UI.date.innerHTML = date
      UI.second.style.transform = `rotate(${seconds}deg)`
      UI.minute.style.transform = `rotate(${minute}deg)`
      UI.hour.style.transform = `rotate(${hours}deg)`
      requestAnimationFrame(updateClock)
   }

   requestAnimationFrame(updateClock)
}

function ClockAll() {
   return (
      <div className="container">
         <div className="clock--wrapper">
            <h2>My Time </h2>
            <div className="clock">
               <svg className="clockface" width={300} height={300} viewBox="-150 -150 300 300">
                  <circle className="ring ring--seconds" r={145} pathLength={60} />
                  <circle className="ring ring--hours" r={145} pathLength={12} />
                  <text x={50} y={-5} className="date">
                     23
                  </text>
                  <text x={50} y={10} className="am-pm">
                     am
                  </text>
                  <line className="hand hand--minute" x1={0} y1={2} x2={0} y2={-110} />
                  <line className="hand hand--hour" x1={0} y1={2} x2={0} y2={-60} />
                  <circle className="ring ring--center" r={3} />
                  <line className="hand hand--second" x1={0} y1={12} x2={0} y2={-130} />
               </svg>
            </div>
            <select onChange={handleSelect} name="" id="">
               <RenderOption></RenderOption>
            </select>
         </div>
      </div>
   )
}
function RenderOption() {
   const value = [
      {
         city: "Asia/Ho_Chi_Minh",
         Utc: "07:00",
         name: "Ha Noi",
      },
      {
         city: "America/New_York",
         Utc: "−05:00",
         name: "New York",
      },
      {
         city: "Europe/London",
         Utc: "00:00",
         name: "London",
      },
      {
         city: "Europe/Paris",
         Utc: "+01:00",
         name: "Paris",
      },
      {
         city: "Asia/Tokyo",
         Utc: "09:00",
         name: "Tokyo",
      },
      {
         city: "Europe/Kiev",
         Utc: "+02:00",
         name: "Kiev",
      },
   ]

   let options = value.map((e, index) => {
      return (
         <option key={index} value={e.city}>
            {e.name} UTC: {e.Utc}
         </option>
      )
   })
   return options
}

// Render
function All() {
   return (
      <div>
         <div className="wrapper">
            <Label></Label>
            <Label2></Label2>
         </div>
         <ClockAll></ClockAll>
      </div>
   )
}

root.render(<All></All>)
