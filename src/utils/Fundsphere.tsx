import '../index.css'
import '../global.css'

function Fundsphere() {
    return (
        <>
            
            {/* Fundsphere Subheading Navbar Menus */}
            <header>
                <nav>
                    <div className="container-a">
                        <div className="wrapper">
                            <div className="block">
                                <img src="./utils/Logo.svg" alt="logo" />
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
            {/* Enders of sub heading */}

            {/* Section of Developments */}
            <section className="hero" id="home">
                <div className="container">
                    <div className="hero-home-container">
                        <div className="hero-home">
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <div className="image-wrapper-v2">
                                <img src="" alt="" />
                                <img src="" alt="" />
                            </div>
                        </div>
                        <div className="hero-home-content">
                            <div className="hero-heading">
                                <div className="label-badge">
                                    FEATURES
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
            {/* Section Developments ending */}

            {/* section overview */}
            <section>
                <div className="container-b">
                    <div className="overview-content">
                        <div className="company-logo">
                            <img src="#" alt="uber-logo" />
                            <img src="#" alt="amazon-logo" />
                            <img src="#" alt="ebay-logo" />
                            <img src="#" alt="walmart-logo" />
                        </div>
                    </div>
                </div>
            </section>
            {/* section overview end*/}

            {/* section features */}

        </>
    )
}

export default Fundsphere;
