import React from 'react';

import Header from './Header';
import Footer from './Footer';


import '../styles/pages/about.css';

function About() {
    return (
        <div className="content-wrapper">
            <Header />
            <div className="banner">
                <div id="display">
                    <h1>About</h1>
                </div>
            </div>

            <main>
                <article>
                    <div id="article-header">
                        <h1>Some pieces</h1>
                    </div>
                    <div id="article-body">
                        <p>
                            My first contact with programing was a long ago, to be real, i don't remember exactly. But my first programing language i will never forget, the PHP.</p>
                        <p>
                            Im 38 years old, proudly father of Benjamin, a 2 year old boy, when i was 17 year old i worked as a computer teacher on two different computers schools, teaching MS Windows, MS Office, Corel Draw and Typing.
                            My first computer course was in 1998, in 1999 i was teaching. After that i became computer instructor and technician at Luiz Eduardo Magalhães State School in Porto Seguro, Bahia. I use to work monitoring and teaching gim students and fixing computers.
                        </p>
                        <p>
                            I've learned HTML in a giantistic book called "HTML Bible", and de IDE was a ordinary notepad and after that, the Microsoft FrontPage and DreamWeaver, nothing compared to what we have now. Learn PHP was a great step to me in that time. I become a curious webdesigner, doing that sparklings 90's things. Everybody wanted blink things in that time.
                        </p>
                        <p>
                            The technician rules over the developer on me for years, i became a tec. supervisor, but being a programmer was the real goal, the dream.
                        </p>
                        <p>
                            When the company where i used work as tec. supervisor faced a big trouble with spreadsheets, i developed a PHP solution to solve that problem, and with succes i create an application to control all the fluxes on that sector, so, that light almost extincted was blink and shines again. PHP takes me back and JavaScript put me on the road.
                        </p>

                        <p>
                            P.S. My English maybe slides, i've learned along a second language without teachers or school 
                        </p>
                        
                    </div>
                    <div id="article-footer">
                        <p>Never GiveUP!</p>
                    </div>
                </article>
            </main>
            <Footer />
        </div>
    );
}

export default About;