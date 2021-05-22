import React from 'react';

import Router from "./router";

import Header from "./components/header";

import Footer from "./components/footer";

import "./style.css";
import "./utils/styleGlobal"

function App() {
  return (
    <>
        <Header />
        <Router />
        <Footer />
    </>
  );
}

export default App;
