import React, { useEffect, useState } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Produit from "./produit";
import Header from "./header";

// import produit from "../produit";

import "../styles/order.css";
import axios from "axios";

interface CategoryFilter {
  id: number;
  name: string;
  check: boolean;
}

function Order() {

  const [products, setProducts] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios.get('/api/products')
      setProducts(result.data)
    }
    fetchData()
  }, [])

  const categories: CategoryFilter[] = [
    {
      id: 0,
      name: "Sushi",
      check: false,
    },
    {
      id: 1,
      name: "Sashimi",
      check: false,
    },
    {
      id: 2,
      name: "Yasuo",
      check: false,
    },
  ];
  
  return (
    <>
      <Header></Header>
      <div className="order">
        <div className="filter">
          <p>Category</p>
          <FormGroup>
            {categories.map((category) => (
              <FormControlLabel control={<Checkbox />} label={category.name} />
            ))}
          </FormGroup>
        </div>
        <div>
          {products.map((product) => (

            <Produit
              key={product['key']}
              img={product['image']}
              reference={product['reference']}
              title={product['title']}
              description={product['description']}
              prix={product['prix']}
              quantity={product['quantity']}
              />

          ))}
        </div>
      </div>
    </>
  );
}

export default Order;
