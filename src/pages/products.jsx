import { React, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
const products = [
  {
    id: 1,
    title: "satu",
    price: 100,
    images: "3.jpg",
  },
  {
    id: 2,
    title: "dua",
    price: 200,
    images: "3.jpg",
  },
  {
    id: 3,
    title: "tiga",
    price: 300,
    images: "3.jpg",
  },
  {
    id: 4,
    title: "tiga",
    price: 300,
    images: "3.jpg",
  },
  // {
  //   id: 5,
  //   title: "tiga",
  //   price: 300,
  //   images: "3.jpg",
  // },
  // {
  //   id: 6,
  //   title: "tiga",
  //   price: 300,
  //   images: "3.jpg",
  // },
  // {
  //   id: 7,
  //   title: "tiga",
  //   price: 300,
  //   images: "3.jpg",
  // },
  // {
  //   id: 8,
  //   title: "tiga",
  //   price: 300,
  //   images: "3.jpg",
  // },
  // {
  //   id: 9,
  //   title: "tiga",
  //   price: 300,
  //   images: "3.jpg",
  // },
  // {
  //   id: 10,
  //   title: "tiga",
  //   price: 300,
  //   images: "3.jpg",
  // },
  // {
  //   id: 11,
  //   title: "tiga",
  //   price: 300,
  //   images: "3.jpg",
  // },
];
const email = localStorage.getItem("email");
const ProductsPage = () => {
  const [ cart, setCart ] = useState([
    {
      id:1,
      qty: 1,
    },
  ]);
  const handleAddToCart = (id) =>{
    if (cart.find(item => item.id === id)) {
      setCart(
        cart.map(item => item.id === id ? {...item,qty : item.qty+1 } :item )
      )
    }else{
      setCart([...cart, {id,qty:1}])
    }
    // setCart([...cart,{
    //   id:productName,qty:1
    // }])
  }
  const handleLogout = () => {
    console.log("asd");

    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      {/* <!-- Title --> */}
      <button
        className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white"
        type="button"
        onClick={handleLogout}
      >
        Log out
      </button>
      <Button onClick={handleLogout}>asda</Button>
      <div className="pt-32  bg-white">
        <h1 className="text-center text-2xl font-bold text-gray-800">
          All Products
        </h1>
      </div>

      {/* <!-- Tab Menu --> */}
      <div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-10 justify-center   bg-white text-gray-800">
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Architecto</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 rounded-t-lg text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
          <span>Corrupti</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
          <span>Excepturi</span>
        </a>
        <a
          rel="noopener noreferrer"
          href="#"
          className="flex items-center flex-shrink-0 px-5 py-3 space-x-2  text-gray-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
          </svg>
          <span>{email}</span>
        </a>
      </div>
      <br />
      <br />
      <br />

      {/* <!-- Product List --> */}
      <section className="py-10 bg-gray-100 lg:flex ">
        <div className="mx-auto grid max-w-6xl  grid-cols-2 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header
                image={`/images/${product.images}`}
              ></CardProduct.Header>
              <CardProduct.Body price={product.price} id={product.id} addToCart={handleAddToCart}>
                {product.title}
              </CardProduct.Body>
            </CardProduct>
          ))}
        </div>
        <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full relative">
          <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
            <div>
              <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
                Summary
              </p>
              {/* {cart.map((item) => (

                <div className="flex items-center justify-between pt-16" key={item.id}>
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    {item.id}
                  </p>
                  <p className="text-base leading-none text-gray-800 dark:text-white">{item.qty}</p>
                </div>
              ))} */}
              {cart.map((item) =>{
                const product = products.find((product) =>product.id === item.id)

                return(
                  <div className="flex items-center justify-between pt-16" key={item.id}>
                  <p className="text-base leading-none text-gray-800 dark:text-white">
                    {product.title}
                  </p>
                  <p className="text-base leading-none text-gray-800 dark:text-white">{item.qty}</p>
                  <p className="text-base leading-none text-gray-800 dark:text-white">{item.qty * product.price}</p>
                </div>
                )
              })}

              <div className="flex items-center justify-between pt-16">
                <p className="text-base leading-none text-gray-800 dark:text-white"></p>
                <p className="text-base leading-none text-gray-800 dark:text-white"></p>
              </div>
            </div>
            <div>
              <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                <p className="text-2xl leading-normal text-gray-800 dark:text-white">
                  Total
                </p>
                <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">
                  ,240
                </p>
              </div>
              <button
                // onclick="checkoutHandler1(true)"
                className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;
