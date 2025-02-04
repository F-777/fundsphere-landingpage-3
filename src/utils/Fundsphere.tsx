import React from 'react';
import '../index.css'
import '../utils/fundsphere.png';

function Fundsphere() {
    return(
        <>
        <link rel="icon" href="" />
           {/* Fundsphere Subheading Navbar Menus*/}
           <header>
               <img src="../utils/fundsphere.png" alt="logo" />
               <a href="#" className="logo">Fundsphere</a>

               <div id="menu" className="fas fa-bars"></div>
               <nav className="navbar">
                  <ul>
                    <li className="dropdown">
                        <a href="#" className="dropbtn">Features ▼</a>
                        <ul className="dropdown-content">
                            <li><a href="#">Landing Page V1</a></li>
                            <li><a href="#">Landing Page V2</a></li>
                            <li><a href="#">Landing Page V3</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Sign in</a></li>
                    <button><a href="#">Free Trial</a></button>
                  </ul>
               </nav>
           </header>
           {/* Enders of sub heading */}

           {/* Section of Developments */}
            <section className="home" id="home">
                <div className="container-primary">

                    <div className="content"></div>

                    <div className="subheading">
                        <div className="heading-upper-content">BEST CHOICE</div>
                        <div className="primary-header">
                            <h1>Feature strategic finance for <text>Enterpreneurs</text></h1>
                        </div>
                        <div className="description">
                            <p>
                                Scale with checking and savings accounts,
                                custom tools, and access to our investor network. 
                            </p>
                        </div>
                    </div>

                    <div className='container-feed'>
                        <input type="email" placeholder='Your work email'/>
                        <button type='button'>Get Started</button>
                    </div>
                </div>
            </section>
           {/* Section Developments ending */}
        </>
    )
}

export default Fundsphere;