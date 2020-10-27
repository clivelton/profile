import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import Picture from '../images/pic.png';
import ReactIcon from '../images/reactIcon.svg';
import NodeIcon from '../images/g12.png';
import HtmlIcon from '../images/htmlIcon.png';
import CssIcon from '../images/cssIcon.png';
import JsIcon from '../images/jsIcon.png';


function Landing() {
    return (
        <div className="content-wrapper">
            <Header />
            <div className="banner">
                <div id="display">
                    <h1>Ton Moraes</h1>
                    <h3>Web Developer</h3>
                </div>
                <div id="picture">
                    <img src={Picture} alt="Ton Moraes" />
                </div>                    
            </div>
            <main>
                <article>
                    <div id="article-header">
                        <h1>Dev Skils</h1>
                    </div>
                    <div id="article-body">
                        <span>
                            <div className="thumb">
                                <img src={ReactIcon} alt="React and React Native"/>
                            </div>
                            <p>React and React Native</p>
                        </span>

                        <span>
                            <div className="thumb">
                                <img src={NodeIcon} alt="NodeJS"/>
                            </div>
                            <p>NodeJS</p>
                        </span>

                        <span>
                            <div className="thumb">
                            <img src={HtmlIcon} alt="HTML5"/>
                            </div>
                            <p>HTML5</p>
                        </span>

                        <span>
                            <div className="thumb">
                            <img src={CssIcon} alt="CSS3"/>
                            </div>
                            <p>CSS3</p>
                        </span>

                        <span>
                            <div className="thumb">
                            <img src={JsIcon} alt="JavaScript"/>
                            </div>
                            <p>JavaScript</p>
                        </span>
                        <span>
                            <p>Others skills: PHP, MySQL</p>
                            <p>Very interested in: MongoDB, VueJS and Angular</p>
                        </span>
                    </div>
                    <div id="article-footer">All images belong to their respective owners</div>
                </article>

                <article>
                <div id="article-header">
                        <h1>Degrees and Certificates</h1>
                </div>
                <div id="article-body">
                    <span>
                        <p>Web Programer - Rio Grande Do Sul Federal Institute (Algorithm, HTML, CSS, PHP and SQL). </p>    
                    </span>
                    <span>
                    <p>Web and Mobile Developer - RocketSeat (TypeScript, React and React Native, NodeJS, ExpressJS). <i>"in Progress"</i></p>
                    </span>
                </div>
                <div id="article-footer">
                    See More on About
                </div>                    
                </article>
            </main>
            <Footer />
        </div>
    );
}

export default Landing;