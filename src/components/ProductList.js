import React from "react";
import Product from "./Product.js";

export default function ProductList(prod) {
  return (
    prod.productList.length > 0 ?
    prod.productList.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        removeItem={prod.removeItem}
        incrementQuantity={prod.incrementQuantity}
        decrementQuantity={prod.decrementQuantity}
        index={i}
      />
    )
  })
  : <h1>No Product exists in the CART. Please add some !!!</h1>
  )
}