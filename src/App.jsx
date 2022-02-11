import React from 'react'
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import Messages from "./Messages";
import SignUp from "./SignUp";

function App() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/messages">
            <Messages/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </>
    );
  }