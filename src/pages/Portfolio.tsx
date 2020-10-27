import React from 'react';

import Header from './Header';
import Footer from './Footer';


function Portfolio (){
    return (        
        <div className="content-wrapper">
            <Header />
            <div className="banner">
                <div id="display">
                    <h1>Portfolio</h1>
                </div>
            </div>
            <main>
                <div className="error">
                    <h1>Oops!</h1>
                    <p>Developement in progress.</p>
                </div>
                
            </main>
            <Footer />
        </div>
        
    );
}

export default Portfolio;