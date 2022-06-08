import React, { useState } from "react"
import "./App.css"
import Footer from "./components/Footer"
import List from "./components/List"

function App() {
   const products = [
      {
         id: 1,
         name: "chocolate cake",
         price: "19.95",
         img: "https://images.unsplash.com/photo-1604298545771-6aafca512943?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
         desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         qty: 1,
      },
      {
         id: 2,
         name: "Tap Water",
         price: "0.99",
         img: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
         desc: "You decide",
         qty: 1,
      },
      {
         id: 3,
         name: "Social Shower Curtain",
         price: "40.00",
         img: "http://media-cache-ec2.pinimg.com/550x/c7/02/8f/c7028f260ae030ba66494ee75407192f.jpg",
         desc: "Always stay up-to-date with this very useless shower curtain!",
         qty: 1,
      },
      {
         id: 4,
         name: "Self stirring mug",
         img: "https://i.dailymail.co.uk/i/pix/2012/09/16/article-2204256-15053801000005DC-304_634x524.jpg",
         price: "12.35",
         desc: "Don't get tired!",
         qty: 1,
      },
   ]

   const [items, setItems] = useState(products)

   const addProductHandle = (product) => {
      const exist = items.find((x) => x.id === product.id)
      if (exist) {
         setItems(items.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)))
      }
   }
   const removeProductHandle = (product) => {
      if (product.qty < 2) {
         return confirm("Xác thực xóa sản phẩm") && setItems(() => items.filter((el) => el.id !== product.id))
      }
      const exist = items.find((x) => x.id === product.id)
      console.log(exist)
      if (exist) {
         setItems(items.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)))
      }
   }

   const deleteHandler = (e) => {
      if (confirm("Xác thực xóa sản phẩm") == true) {
         console.log("dang xoa")
         setItems(() => items.filter((el) => el.id !== e.id))
      } else {
         return
      }
   }

   const deleteALlHandler = () => {
      return confirm("Xác thực xóa sản phẩm") && setItems([])
   }

   return (
      <div className="main">
         <h1>Shopping cart</h1>
         <h2 className="sub-heading">Free shipping from $100!</h2>
         <section className="shopping-cart">
            <List
               deleteALlHandler={deleteALlHandler}
               deleteHandler={deleteHandler}
               removeProductHandle={removeProductHandle}
               addProductHandle={addProductHandle}
               items={items}
            ></List>
            <Footer deleteALlHandler={deleteALlHandler} items={items}></Footer>
         </section>
      </div>
   )
}

export default App

