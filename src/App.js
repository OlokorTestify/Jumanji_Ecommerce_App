import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import Landing from "./landing";
import NavBar from "./components/navbar/navBar";
import Modal from "./components/Modal";
import Login from "./components/Modal/LogIn";
import Signup from "./components/Modal/Signup";
import FormLogin from "./components/Modal/LogIn/FormLogin";
import FormSignUp from "./components/Modal/Signup/Form-Signup";
import Dasboardlanding from "././containers/Dashboard _Landing";
import LoggedIn from "./containers/LoggedIn/Messages/index";
import "./App.css";
import Secondary from "./containers/Secondary";

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
          <Route exact path="/" component={Landing} />

          <Route
            path="/vehicle"
            render={(props) => (
              <>
                <Secondary {...props} />
              </>
            )}
          />
          <Route
            path="/item"
            render={(props) => (
              <>
                <Dasboardlanding {...props} />
              </>
            )}
          />
          <Route
            path="/profile"
            render={(props) => (
              <>
                <LoggedIn {...props} />
              </>
            )}
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
