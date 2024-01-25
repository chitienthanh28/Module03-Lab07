// import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Shopping.css";
import { addToCart } from "./ShoppingSlice";
import { useAppSelector } from "./hook";
import { increment } from "./CounterSlice";

export function Shopping() {
  const count = useAppSelector((state) =>state.counter.value);
  const dispatch = useDispatch();
  const products = [
    {
      id: "d02a",
      name: "Điện Thoại Samsung Galaxy S20",
      price: 7090000,
      imgSrc:
        "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/95/2f/8d/c15e65f7ae1fe42ecaf1141a147bc653.png.webp",
    },
    {
      id: "d02b",
      name: "Điện Thoại Nokia C30 2GB/32GB",
      price: 1450000,
      imgSrc:
        "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/83/ac/8c/63a5adef59b800f2152df4f6bb3ff44b.png.webp",
    },
    {
      id: "d02c",
      name: "Điện Thoại Samsung Galaxy S23",
      price: 15190000,
      imgSrc:
        "https://salt.tikicdn.com/cache/280x280/media/catalog/producttmp/25/11/89/b6b8a8f3924cd99484ca0c16ad4b9b7d.png.webp",
    },
  ];
  

  return (
    <>
      <div className="d00">
        <div className="d01">
          <Link to={"/shoppingcart"}>
            <img
              id="imgG"
              src="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png"
              alt=""
            />
          </Link>
          <span>
            <sup>{count}</sup>
          </span>
        </div>

        {products.map((item) => (
          <div key={item.id}>
            <img id="img01" src={item.imgSrc} alt="" />
            <br />
            <img
              id="img02"
              src="https://salt.tikicdn.com/ts/tka/69/cf/22/1be823299ae34c7ddcd922e73abd4909.png"
              alt=""
            />
            <br />
            <span>{item.name}</span>
            <br />
            <span>{item.price}</span>
            <button
              onClick={() => {
                dispatch(increment());
                dispatch(addToCart(item));
              }}
            >
              ADD Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
