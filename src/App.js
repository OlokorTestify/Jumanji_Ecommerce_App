import React, { useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { getUser, logOut } from "./store/actions";
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
import UploadProductImage from "./containers/Dashboard/Profile/AddProduct/ProductImage";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalState, setModalState] = useState();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const bootStrap = async () => {
    try {
      await dispatch(getUser());
    } catch (error) {
      dispatch(logOut());
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      bootStrap();
    }
  }, [isLoggedIn, dispatch]);

  const openModal = (state) => {
    setModalState(state);
    setModalOpen(true);
  };

  return (
    <>
      <ToastContainer />
      <Router history={history}>
        <NavBar isLoggedIn={isLoggedIn} openModal={openModal} />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/vehicle" component={Category} />
          <Route
            path="/item/:id"
            render={() => (
              <ProductDetail isLoggedIn={isLoggedIn} openModal={openModal} />
            )}
          />
          <Route
            path="/profile"
            render={() => (isLoggedIn ? <Dashboard /> : <Redirect to="/" />)}
          />
          <Route
            path="/add_product"
            render={() => (isLoggedIn ? <AddProduct /> : <Redirect to="/" />)}
          />
          <Route
            path="/product/image_upload/:id"
            render={() =>
              isLoggedIn ? <UploadProductImage /> : <Redirect to="/" />
            }
          />
        </Switch>
        <Modal isVisible={modalOpen} onClose={() => setModalOpen(false)}>
          {modalState === "login" && (
            <Login
              onClose={() => setModalOpen(false)}
              setModalState={setModalState}
            />
          )}
          {modalState === "signup" && (
            <Signup
              onClose={() => setModalOpen(false)}
              setModalState={setModalState}
            />
          )}
          {modalState === "form_login" && (
            <FormLogin
              setModalState={setModalState}
              onClose={() => setModalOpen(false)}
            />
          )}
          {modalState === "form_signup" && (
            <FormSignUp
              setModalState={setModalState}
              onClose={() => setModalOpen(false)}
            />
          )}
        </Modal>
      </Router>
    </>
  );
};

export default App;
