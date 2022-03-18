import React, { useState } from "react";

import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import "../styles/produit.css";

function Produit(props: any) {
  const [num, setNum] = useState(0);

  const IncrementItem = () => {
    setNum(num + 1);
  };
  const DecreaseItem = () => {
    setNum(num - 1);
  };

  return (
    console.log(num),
    <div className="produit">
      <img src={props.img} alt="avata" />
      <h1>
        {props.reference}. {props.title}
      </h1>
      <div className="action">
        <strong><p>{props.prix}</p></strong>
        <div>
          <button onClick={DecreaseItem}>-</button>
          <span> {num} </span>
          <button onClick={IncrementItem}>+</button>
        </div>
        <Button  variant="outlined" startIcon={<AddShoppingCartIcon />}>
          Add
        </Button>
      </div>
    </div>
  );
}

export default Produit;
