import React from 'react';
import './App.css';
import {Provider} from "react-redux"
import store from "./store"


import MenuSlider from "./components/containers/menuSlider.container"
import MainContainer from "./components/containers/main.container"
import ShoppingSlider from "./components/containers/shoppingSlider.container"

function App() {
  return (
    <Provider store={store}>
      <MenuSlider />
      <ShoppingSlider />
      <MainContainer />
    </Provider>
  );
}

export default App;
