const root = ReactDOM.createRoot(document.getElementById("root"))

function ToggleSvg(props) {
   const Light = () => (
      <path
         d="M22.5 3H25.5V10.5H22.5V3ZM32.532 13.35L37.791 8.091L39.912 10.212L34.653 15.471L32.532 13.35ZM37.5 22.5H45V25.5H37.5V22.5ZM32.532 34.65L34.653 32.5305L39.912 37.7895L37.791 39.9105L32.532 34.65ZM22.5 37.5H25.5V45H22.5V37.5ZM8.091 37.788L13.35 32.529L15.471 34.65L10.2135 39.909L8.091 37.788ZM3 22.5H10.5V25.5H3V22.5ZM8.0925 10.212L10.2135 8.091L15.4725 13.35L13.35 15.471L8.0925 10.212ZM24 15C22.22 15 20.4799 15.5278 18.9999 16.5168C17.5198 17.5057 16.3663 18.9113 15.6851 20.5558C15.0039 22.2004 14.8257 24.01 15.1729 25.7558C15.5202 27.5016 16.3774 29.1053 17.636 30.364C18.8947 31.6226 20.4984 32.4798 22.2442 32.8271C23.99 33.1743 25.7996 32.9961 27.4442 32.3149C29.0887 31.6337 30.4943 30.4802 31.4832 29.0001C32.4722 27.5201 33 25.78 33 24C33 21.6131 32.0518 19.3239 30.364 17.636C28.6761 15.9482 26.3869 15 24 15Z"
         fill="#FF9A62"
      ></path>
   )

   const Dark = () => (
      <path
         d="M19.8332 17.764C21.0666 16.9399 22.5166 16.5 24 16.5C25.9891 16.5 27.8968 17.2902 29.3033 18.6967C30.7098 20.1032 31.5 22.0109 31.5 24C31.5 25.4834 31.0601 26.9334 30.236 28.1668C29.4119 29.4001 28.2406 30.3614 26.8701 30.9291C25.4997 31.4968 23.9917 31.6453 22.5368 31.3559C21.082 31.0665 19.7456 30.3522 18.6967 29.3033C17.6478 28.2544 16.9335 26.918 16.6441 25.4632C16.3547 24.0083 16.5033 22.5003 17.0709 21.1299C17.6386 19.7594 18.5999 18.5881 19.8332 17.764Z"
         stroke="white"
         strokeWidth="3"
      ></path>
   )

   return (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
         {props.on ? <Light></Light> : <Dark></Dark>}
      </svg>
   )
}

function ToggleInput(props) {
   console.log(props.onClick)
   return (
      <div className={`toggle ${props.on ? "active" : ""}`} onClick={props.onClick}>
         <div className={`spinner ${props.on ? "active" : ""}`}></div>
      </div>
   )
}

function App() {
   const [on, setOn] = React.useState(true)

   const handleToggle = () => {
      setOn((on) => !on)
   }

   if (on) {
      document.body.style.backgroundColor = "white"
   } else {
      document.body.style.backgroundColor = "black"
   }

   return (
      <div className="container">
         <ToggleSvg on={on}></ToggleSvg>
         <ToggleInput onClick={handleToggle} on={on}></ToggleInput>
      </div>
   )
}

root.render(<App></App>)
