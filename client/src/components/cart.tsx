import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import Header from "./header";

import "../styles/cart.css";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Cart = () => {
  var t = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "{}").reduce((prev: any, curr: any) => prev + curr["num"] * Number(curr["prix"]), 0) : 0;
  //const cartData = localStorage.getItem("cart");
  const [parsedCartData, setParsedCartData] = useState<any[]>([]);
  const [cartData, setCartData] = useState(localStorage.getItem("cart"));

  useEffect(() => {
    setTotal(totalCal());
  }, [])

  useEffect(() => {
    setParsedCartData(JSON.parse(cartData || "{}"));
  }, [cartData]);

  const minusProduct = (reference: any): void => {
    let temp = parsedCartData.find((x: any) => x.reference === reference);
    temp!["num"] > 0 && temp!["num"]--;
    console.log(parsedCartData);
    localStorage.setItem("cart", JSON.stringify(parsedCartData));
    setCartData(localStorage.getItem("cart"));
    setTotal(totalCal())
  };

  const addProduct = (reference: any): void => {
    let temp = parsedCartData.find((x: any) => x.reference === reference);
    temp!["num"] < temp!["quantity"] && temp!["num"]++;
    localStorage.setItem("cart", JSON.stringify(parsedCartData));
    setCartData(localStorage.getItem("cart"));
    setTotal(totalCal);
  };

  const deleteProduct = (reference: any): void => {
    setParsedCartData(
      parsedCartData.filter((x: any) => x.reference != reference)
    );
    localStorage.setItem(
      "cart",
      JSON.stringify(
        parsedCartData.filter((x: any) => x.reference !== reference)
      )
    );
    window.location.reload();
  };

  //handle modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //get client data inside modal
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [code, setCode] = useState("");

  var clientData = { lastName, firstName, email, phone, street, city, code };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setOpen(false);
  };

  //click order now button
  const orderNow = (): void => {
    const data = { parsedCartData, clientData };
    console.log(data);
  };

  //total money
  const [total, setTotal] = useState(localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || "{}").reduce((prev: any, curr: any) => prev + curr["num"] * Number(curr["prix"]), 0) : 0);
  const totalCal = (): number => {
    console.log(JSON.parse(localStorage.getItem("cart") || "{}").reduce((prev: any, curr: any) => prev + curr["num"] * Number(curr["prix"]), 0));
    if (parsedCartData.length > 0) {
      return parsedCartData.reduce((prev: any, curr: any) => prev + curr["num"] * Number(curr["prix"]), 0);
    }
    return 0;
  };

  return (
    <>
      <Header />
      <div className="product-cart">
        <div className="product-list">
          {cartData &&
            parsedCartData.map((product: any) => (
              // <Produit
              //   key={product["key"]}
              //   img={product["image"]}
              //   reference={product["reference"]}
              //   title={product["title"]}
              //   description={product["description"]}
              //   prix={product["prix"]}
              //   quantity={product["quantity"]}
              // />
              <div className="product-item">
                <img src={product["img"]} alt="#" />
                <div className="product-detail">
                  <p>{product["title"]}</p>
                  <p>{product["prix"]}$</p>
                  <div className="button-num">
                    <Button
                      variant="contained"
                      startIcon={<RemoveIcon />}
                      onClick={() => minusProduct(product["reference"])}
                    ></Button>
                    <span>{product["num"]}</span>
                    <Button
                      variant="contained"
                      startIcon={<AddIcon />}
                      onClick={() => addProduct(product["reference"])}
                    ></Button>
                  </div>
                  <div className="product-total">
                    <span>Total: {product["prix"] * product["num"]}$</span>
                    <Button
                      variant="contained"
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteProduct(product["reference"])}
                    ></Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="product-info">
          <div className="info">
            <Button onClick={handleOpen}>Edit info</Button>
            <Modal open={open} onClose={handleClose}>
              <Box sx={style}>
                <form onSubmit={handleSubmit}>
                  <label>
                    <span>First name:</span>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </label>
                  <label>
                    <span>Last name:</span>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                  <label>
                    <span>Email:</span>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                  <label>
                    <span>Telephone:</span>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </label>
                  <label>
                    <span>Street:</span>
                    <input
                      type="text"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                    />
                  </label>
                  <label>
                    <span>City:</span>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </label>
                  <label>
                    <span>Postal code:</span>
                    <input
                      type="text"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </label>
                  <br />
                  <input type="submit" />
                </form>
              </Box>
            </Modal>
          </div>
          <div className="product-purchase">
            <div>
              <span>Total before discount:</span>
              <span>{total === 0 ? t : total}$</span>
            </div>
            <div>
              <span>Discount:</span>
              <span>0$</span>
            </div>
            <div>
              <span>Shipping fee:</span>
              <span>5$</span>
            </div>
            <div>
              <span>Total:</span>
              <span>{total === 0 ? t : total + 5}$</span>
            </div>
            <button onClick={() => orderNow}>Order now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
