import React from 'react';
import './App.css';

import MenuSlider from "./components/containers/menuSlider.container"
import MainContainer from "./components/containers/main.container"
import ShoppingSlider from "./components/containers/shoppingSlider.container"

function App() {
  return (
    <>
      <MenuSlider />
      <ShoppingSlider />
      <MainContainer />
    </>
  );
}

export default App;
