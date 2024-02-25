import React, { useEffect, useState } from "react";
import Cosmetic from "../Cosmetic/Cosmetic";
import { type } from "@testing-library/user-event/dist/type";
import { getTotal } from "../../utilities/Calculate";
// import { add } from "../../utilities/Calculate";
// import add from "../../utilities/Calculate";

const Cosmetics = () => {
  //   const fisrt = 55;
  //   const second = 66;
  //   const total = add(fisrt, second);

  // const cosmetics = [
  //   { id: 1, name: "Alta", price: 100 },
  //   { id: 2, name: "Palish", price: 200 },
  //   { id: 3, name: "Malish", price: 300 },
  //   { id: 4, name: "Balish", price: 400 },
  //   { id: 5, name: "Nalish", price: 500 },
  // ];

  const [cosmetics, setCosmetics] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCosmetics(data));
  }, []);

  const total = getTotal(cosmetics);

  return (
    <div>
      <h1>Welcome to my cosmetic store</h1>
      <p>Money needed: {total}</p>
      {/* <p> total: {total}</p> */}
      {cosmetics.map((cosmetic) => (
        <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>
      ))}
    </div>
  );
};

export default Cosmetics;
