import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './../pages/home';
import About from './../pages/about';
import Contact from './../pages/contact';
import Category from './../pages/category';
import Search from './../pages/search';
function routes() {
    return(
        <Router>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route exact path="/category/:category" component={Category} />
                <Route exact path="/search/:query" component={Search} />
            </div>
        </Router>
    );
}
export default routes;