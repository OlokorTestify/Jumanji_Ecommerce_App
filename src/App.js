import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Landing from "./landing";
import NavBar from "./components/navbar/navBar";
import Modal from "./components/Modal";
import SignIn from "./components/Modal/SignIn";
import "./App.css";
import Secondary from "./containers/Secondary";

const App = () => {
  const history = createBrowserHistory();
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <NavBar openModal={() => setModalOpen(true)} />
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <>
            <Route
              path="/vehicles"
              render={(props) => (
                <>
                  <Secondary {...props} />
                </>
              )}
            />
          </>
        </Switch>
      </Router>
      <Modal isVisible={modalOpen} onClose={() => setModalOpen(false)}>
        <SignIn />
      </Modal>
    </>
  );
};

export default App;
