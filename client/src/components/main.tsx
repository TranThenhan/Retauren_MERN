import Header from "./header";

import "../styles/main.css";

const Main = () => {
  return (
    <>
      <Header></Header>
      <div className="main">
        <button className="start-order">Start your order</button>
      </div>
    </>
  );
};

export default Main;
