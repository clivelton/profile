import React from 'react';
import {FiMail, FiSend, FiLinkedin} from 'react-icons/fi';

import Header from './Header';
import Footer from './Footer';

function Contact() {
    return (
        <div className="content-wrapper">
            <Header />
            <div className="banner">
                <div id="display">
                    <h1>Contact</h1>
                </div>
                
            </div>
            <main>
                    <article>
                        <div id="article-header">
                            <h1>
                                Im on:
                            </h1>
                        </div>
                        <div id="article-body">
                            <span>
                                <div className="thumb">
                                    <FiMail size={26} color="#FFF" />
                                </div>
                                <p>Mail</p>
                            </span>
                            <span>
                                <div className="thumb">
                                    <FiSend size={26} color="#FFF" />
                                </div>
                                <p>Telegram</p>
                            </span>
                            <span>
                                <div className="thumb">
                                    <FiLinkedin size={26} color="#FFF" />
                                </div>
                                <p>Linkedin</p>
                            </span>
                        </div>
                        <div id="article-footer"></div>
                    </article>
                </main>
            <Footer />
        </div>
    );
}

export default Contact;