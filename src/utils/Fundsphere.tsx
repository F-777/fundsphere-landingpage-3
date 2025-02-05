import { useEffect } from "react";
import { ReactDOM } from "react";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import '../index.css'
import '../global.css'
import Amazon from '../assets/amazon.svg';
import Ebay from '../assets/ebay.svg';
import Uber from '../assets/uber.svg';
import Walmart from'../assets/walmart.svg';
import Logo from '../utils/Logo.svg';
import MoneyCharger from '../assets/moneycharger.svg'; 
import ConstRedution from '../assets/constredution.svg';
import MaskGroup from '../assets/Mask group.svg'

gsap.registerPlugin(ScrollTrigger);

function Fundsphere() {
    useEffect(() => {
        const sections = document.querySelectorAll(".slide-in");

        sections.forEach((section) => {
            const direction = section.classList.contains("left") ? -100 : 100;

            gsap.fromTo(
                section,
                { x: direction, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%", // Mulai animasi saat 80% viewport
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);
    return (
        <>
         {/* Fundsphere Subheading Navbar Menus*/}
            <header>
                <nav>
                    <div className="container-navbar">
                        <div className="nav-wrapper">
                            <div className="block">
                                <img src={Logo} alt="logo" />
                                <div className="menu">
                                    <ul>
                                        <li>Features</li>
                                        <li>Pricing</li>
                                        <li>About Us</li>
                                        <li>Blog</li>
                                    </ul>
                                </div>
                                <div className="button-wrapper">
                                    <button className="btn-transparent">Sign In</button>
                                    <button className="btn-primary">Free Trial</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Section of Developments */}
            <section className="hero" id="home">
                <div className="container">
                    <div className="hero-home-container">
                        <div className="hero-home">
                            <img src={MoneyCharger} alt="money-charger" />
                            <img src={ConstRedution} alt="const-redution" />
                            <div className="image-wrapper-v2">
                                <img src={MaskGroup} alt="mask-group" />
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="hero-home-content">
                            <div className="hero-heading">
                                <div className="label-badge">
                                    BEST CHOICE
                                    <h1>Future strategic finance for <text>Enterprenurs</text></h1>
                                    <p>Scale with checking and savings accounts, custom tools, and access to our investor network.</p>
                                </div>
                            </div>
                            <form action="input">
                                <div className="cta-btn-wrapper">
                                    <button type="submit">Get Started</button>
                                    <input type="Your work email" />
                                </div>
                            </form>
                            <div className="overview-content">
                                <div className="overview-item">
                                    <text>10%</text>
                                    <p>Benefical Cashback</p>
                                </div>
                                <div className="overview-item">
                                    <text>7M</text>
                                    <p>Satisfied Customer</p>
                                </div>
                                <div className="overview-item">
                                    <text>40+</text>
                                    <p>Country Available</p>
                                </div>
                            </div>
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            

            {/* section overview */}
            <section>
                <div className="container-overview">
                    <div className="overview-content">
                        <div className="company-logo">
                            <img src={Uber} alt="uber-logo" />
                            <img src={Amazon} alt="amazon-logo" />
                            <img src={Ebay} alt="ebay-logo" />
                            <img src={Walmart} alt="walmart" />
                        </div>
                    </div>
                </div>
            </section>

            {/* section features */}

            <section>
                <div className="container-features">
                    <div className="subsecsection-heading">
                        <div className="label-badge">
                            <text>FEATURES</text>
                        </div>
                    </div>
                    <div className="features-content">
                        <button className="btn-primary">See More Features</button>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Fundsphere;
