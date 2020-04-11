import React from 'react';

import Router from "./router";

import Header from "./components/header";

import Footer from "./components/footer";

import "./style.css";

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
