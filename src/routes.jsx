import React from "react";
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portifolio from "./pages/Portifolio";

const Router = () =>{

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Portifolio" component={Portifolio}/>
                <Route path="/About" component={About}/>
                <Route path="/Contact" component={Contact}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;