import React, { useState } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./utils/history";
import LandingPage from "./LandingPage";
import NavBar from "./components/navbar/navBar";
import Modal from "./components/Modal";
import Login from "./components/Modal/LogIn";
import Signup from "./components/Modal/Signup";
import FormLogin from "./components/Modal/LogIn/FormLogin";
import FormSignUp from "./components/Modal/Signup/FormSignup";
import ProductDetail from "./containers/ProductDetails";
import Dashboard from "./containers/Dashboard/Profile";
import Category from "./containers/Category";
import AddProduct from "./containers/Dashboard/Profile/AddProduct";
import "./App.css";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalState, setModalState] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // soclogin,socsignup,nomlogin, nomsignup

  const openModal = (state) => {
    setModalState(state);
    setModalOpen(true);
  };

  return (
    <>
      <NavBar isLoggedIn={isLoggedIn} openModal={openModal} />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/vehicle" component={Category} />
          <Route path="/item" component={ProductDetail} />
          <Route
            path="/profile"
            render={() => (isLoggedIn ? <Dashboard /> : <Redirect to="/" />)}
          />
          <Route
            path="/add_product"
            setIsLoggedIn={setIsLoggedIn}
            render={() => (isLoggedIn ? <AddProduct /> : <Redirect to="/" />)}
          />
          />
        </Switch>
      </Router>
      <Modal isVisible={modalOpen} onClose={() => setModalOpen(false)}>
        {modalState === "login" && <Login setModalState={setModalState} />}
        {modalState === "signup" && <Signup setModalState={setModalState} />}
        {modalState === "form_login" && (
          <FormLogin
            setModalState={setModalState}
            setIsLoggedIn={setIsLoggedIn}
            onClose={() => setModalOpen(false)}
          />
        )}
        {modalState === "form_signup" && (
          <FormSignUp
            setModalState={setModalState}
            setIsLoggedIn={setIsLoggedIn}
            onClose={() => setModalOpen(false)}
          />
        )}
      </Modal>
    </>
  );
};

export default App;
