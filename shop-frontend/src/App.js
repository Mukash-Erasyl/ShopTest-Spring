import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './content/contentDetail/ContentDetailComponent';

import Header from './header/HeaderComponent';
import ContentComponent from './content/ContentComponent';


function App() {
    return (

        <Router>
            <div className="app_wallaper">

                <div className="header">
                    <Header />

                </div>
               
                <div className="content">
                    <Routes>
                        <Route path="/"  element={<ContentComponent  />} />
                        <Route path="/products/:id" element={<ProductDetail />} />

                    </Routes>

                </div>


            </div>
        </Router>
    );
}

export default App;
