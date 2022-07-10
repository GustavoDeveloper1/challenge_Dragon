import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatedDragon from './CreatedDragon/CreatedDragon';
import EditDragon from './EditDragon/EditDragon';
import Home from './home/home';
import Login from './Login/login';
import ViewDragon from './ViewDragon/ViewDragon';

function Rotas() {
    return (
        <Router>
            <Routes>
                <Route element={<Login />} exact={true} path="/" />
                <Route path="/home" element={<Home />} />
                <Route element={<CreatedDragon />} path="/createDragon" />
                <Route element={<ViewDragon />} path="/viewDragon/:id" />
                <Route element={<EditDragon />} path="/viewDragon/edit/:id" />
            </Routes>
        </Router>
    )
}

export default Rotas