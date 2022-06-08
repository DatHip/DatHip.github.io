import React from "react"

const Footer = ({ items, deleteALlHandler }) => {
   const itemsPrice = items.reduce((a, c) => a + c.price * c.qty, 0)
   const taxesPrice = itemsPrice * 0.16
   const shippingPrice = itemsPrice > 150 ? 0 : 20
   const totalPrice = itemsPrice + taxesPrice + shippingPrice

   if (items.length === 0) {
      return ""
   } else {
      return (
         <footer className="_grid cart-totals">
            <div className="_column subtotal" id="subtotalCtr">
               <div className="cart-totals-key"> Amount</div>
               <div className="cart-totals-value">{items.length}</div>
            </div>
            <div className="_column subtotal" id="subtotalCtr">
               <div className="cart-totals-key">Subtotal</div>
               <div className="cart-totals-value">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="_column shipping" id="shippingCtr">
               <div className="cart-totals-key">Shipping</div>
               <div className="cart-totals-value">${shippingPrice.toFixed(2)}</div>
            </div>
            <div className="_column taxes" id="taxesCtr">
               <div className="cart-totals-key">Taxes (6%)</div>
               <div className="cart-totals-value">${taxesPrice.toFixed(2)}</div>
            </div>
            <div className="_column total" id="totalCtr">
               <div className="cart-totals-key">Total</div>
               <div className="cart-totals-value">${totalPrice.toFixed(2)}</div>
            </div>
            <div className="_column checkout">
               <button onClick={deleteALlHandler} className="_btn checkout-btn entypo-forward">
                  Clear
               </button>
            </div>
         </footer>
      )
   }
}

export default Footer
