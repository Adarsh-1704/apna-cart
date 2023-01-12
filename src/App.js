import "./App.css";
import Navbar from "./components/Navbar.js";
import ProductList from "./components/ProductList.js";
import Footer from "./components/Footer.js";
import React, { useState } from "react";
import AddItem from "./components/AddItem";

function App() {
  const productList = [
    // {
    //   price: 99999,
    //   name: "Iphone 13 pro",
    //   quantity: 0,
    // },
    // {
    //   price: 9999,
    //   name: "Iphone 11 pro",
    //   quantity: 0,
    // },
  ];

  let [p, setProductList] = useState(productList);
  let [tot, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...p];
    newProductList[index].quantity++;
    let newTotAmount = tot;
    newTotAmount += newProductList[index].price;
    setTotalAmount(newTotAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...p];
    let newTotAmount = tot;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotAmount);
    setProductList(newProductList);
  };

  const resetData = () => {
    let newProductList = [...p];
    for (let i = 0; i < newProductList.length; i++) {
      newProductList[i].quantity = 0;
    }
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...p];
    let newTotAmount = tot;
    newTotAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...p];
    newProductList.push({ name: name, price: price, quantity: 0 });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
        <ProductList
          productList={p}
          removeItem={removeItem}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </main>
      <Footer totalAmount={tot} resetData={resetData} />
    </>
  );
}

export default App;
