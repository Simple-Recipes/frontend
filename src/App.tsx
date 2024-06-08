import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { HomePage } from "./layout/HomePage/HomePage";
import { Footer } from "./layout/NavbarAndFooter/Footer";
import { SearchRecipes } from "./layout/SearchRecipes/SearchRecipes";
import Login from "./layout/Login/Login";
import NewRecipe from "./layout/NewRecipe/NewRecipe";
import { Carousel } from "./layout/HomePage/components/Carousel";
import Navbar from "./layout/NavbarAndFooter/Navbar";
import Register from "./layout/Login/components/Register";
import RequestPasswordReset from "./layout/Login/components/RequestPasswordReset";
import ResetPassword from "./layout/Login/components/ResetPassword";
import Profile from "./layout/Profile/Profile";



export const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/search">
            <SearchRecipes />
          </Route>
          <Route path="/new">
            <NewRecipe />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/request-password-reset">
            <RequestPasswordReset />
          </Route>
          <Route path="/reset-password">
            <ResetPassword />
          </Route>
          <Route path='/profile'>
            <Profile/>
          </Route>
        </Switch>
        
      </div>
      <Footer />
    </div>
  );
};
