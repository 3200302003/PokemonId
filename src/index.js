import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout";
import { About } from "./Routes/About";
import { Home } from "./Routes/Home";
import { User } from "./Routes/User";
import { Users } from "./Routes/Users";

ReactDOM.render( <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < Layout / > } >
        <
        Route index element = { < Home / > }
        /> <
        Route path = "users"
        element = { < Users / > } >
        <
        Route index element = { < div > Seleccione un POKEMON < /div>} / >
            <
            Route path = ":userId"
            element = { < User / > }
            /> < /
            Route > <
            Route path = "about"
            element = { < About / > }
            /> <
            Route path = "*"
            element = { < Navigate replace to = "/" / > }
            /> < /
            Route > <
            /Routes> < /
            BrowserRouter > ,
            document.getElementById("root")
        );