import React from "react"

const Item = (props) => {
   return (
      <li className="_grid shopping-cart--list-item">
         <div
            className="_column product-image"
            style={{
               backgroundImage: `url("${props.img}")`,
            }}
         ></div>
         <div className="_column product-info">
            <h4 className="product-name">{props.name}</h4>
            <p className="product-desc">{props.desc}</p>
            <div className="price product-single-price">{props.price}</div>
         </div>
         <div className="_column product-modifiers">
            <div className="_grid">
               <button className="_btn _column product-subtract">−</button>
               <div className="_column product-qty">1</div>
               <button onClick={addProductHandle} className="_btn _column product-plus">
                  +
               </button>
            </div>
            <button className="_btn entypo-trash product-remove">Remove</button>
            <div className="price product-total-price">$0.00</div>
         </div>
      </li>
   )
}

export default Item
