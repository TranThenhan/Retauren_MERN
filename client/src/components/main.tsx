import { useNavigate } from "react-router-dom";

import Header from "./header";

import "../styles/main.css";

const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header></Header>
      <div className="main">
        <button className="start-order" onClick={() => navigate("/order")}>Start your order</button>
      </div>
    </>
  );
};

export default Main;
