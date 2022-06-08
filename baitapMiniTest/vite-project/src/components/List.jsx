import React from "react"

const List = ({ items, addProductHandle, removeProductHandle, deleteHandler, deleteALlHandler }) => {
   return (
      <ol className="ui-list shopping-cart--list" id="shopping-cart--list">
         {items.length == 0 && <h3>Giỏ Hàng không có gì</h3>}

         {items.map((e) => {
            return (
               <li key={e.id} className="_grid shopping-cart--list-item">
                  <div
                     className="_column product-image"
                     style={{
                        backgroundImage: `url("${e.img}")`,
                     }}
                  ></div>
                  <div className="_column product-info">
                     <h4 className="product-name">{e.name}</h4>
                     <p className="product-desc">{e.desc}</p>
                     <div className="price product-single-price">{e.price}</div>
                  </div>
                  <div className="_column product-modifiers">
                     <div className="_grid">
                        <button
                           onClick={() => {
                              removeProductHandle(e)
                           }}
                           className="_btn _column product-subtract"
                        >
                           −
                        </button>
                        <div className="_column product-qty">{e.qty}</div>
                        <button
                           onClick={() => {
                              addProductHandle(e)
                           }}
                           className="_btn _column product-plus"
                        >
                           +
                        </button>
                     </div>
                     <button
                        onClick={() => {
                           deleteHandler(e)
                        }}
                        className="_btn entypo-trash product-remove"
                     >
                        Remove
                     </button>
                  </div>
               </li>
            )
         })}
      </ol>
   )
}

export default List
