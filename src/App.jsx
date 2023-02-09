import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

const App = () => {
  const [modalDisplay, setModalDisplay] = useState(false);

  const showModal = () => {
    setModalDisplay(prevState => !prevState)
  }

  return (
    <>
      {modalDisplay && <Cart showModal={showModal} />}
      <Header showModal={showModal} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
