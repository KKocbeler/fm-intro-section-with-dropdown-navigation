import { useState } from "react";
import "./App.scss";

const featuresDropdown = [
    {label: "Todo List", icon: "/images/icon-todo.svg", path: "#todo"},
    {label: "Calendar", icon: "/images/icon-calendar.svg", path: "#todo"},
    {label: "Reminders", icon: "/images/icon-reminders.svg", path: "#todo"},
    {label: "Planning", icon: "/images/icon-planning.svg", path: "#todo"},
]

const companyDropdown = ["History", "Our Team", "Blog"];

const brandLogos = [
  { src: "/images/client-databiz.svg", label: "Databiz" },
  { src: "/images/client-audiophile.svg", label: "Audiophile" },
  { src: "/images/client-meet.svg", label: "Meet" },
  { src: "/images/client-maker.svg", label: "Maker" },
];

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [isFeatureSOpen, setIsFeaturesOpen] = useState(false);
    const [isCompanySOpen, setIsCompanyOpen] = useState(false);
    console.log(isOpen)
  return (
    <>
        <header>
            <nav className="container">
                <img src="/images/logo.svg" alt="Brand logo" loading="lazy" />
                <section className={`nav-menu ${isOpen ? "" : "hide"}`}>
                    <div className={`nav-menu__container ${isOpen ? "" : "hide"}`}>
                        <div className="close-menu-icon" onClick={() => setIsOpen(false)}>
                            <img src="/images/icon-close-menu.svg" alt="Close menu icon" />
                        </div>
                        <ul className="nav-menu__list">
                            <li className="nav-menu__list-item">
                                <a href="#features"  onClick={() => setIsFeaturesOpen(!isFeatureSOpen)}>
                                    Features
                                    <img src="/images/icon-arrow-down.svg" alt="" />
                                </a>
                                <ul className={`dropdown-list ${isFeatureSOpen ? "show" : ""}`}>
                                    {
                                        featuresDropdown.map(feature => (
                                            <li className="dropdown-list__item" key={feature.label} onClick={() => setIsOpen(false)}>
                                                <a className="dropdown-list__link" href={feature.path}>
                                                    <img src={feature.icon} alt={feature.label} loading="lazy"/>
                                                    <span>{feature.label}</span>
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                            <li className="nav-menu__list-item">
                                <a href="#company" onClick={() => setIsCompanyOpen(!isCompanySOpen)}>
                                    Company
                                    <img src="/images/icon-arrow-down.svg" alt="" />
                                </a>
                                <ul className={`dropdown-list ${isCompanySOpen ? "show" : ""}`}>
                                    {
                                        companyDropdown.map(item => (
                                            <li className="dropdown-list__item" key={item} onClick={() => setIsOpen(false)}>
                                                <a className="dropdown-list__link" href={item.toLocaleLowerCase().replaceAll(" ", "-")}>
                                                    {item}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                            <li className="nav-menu__list-item">
                                <a href="#careers">Careers</a>
                            </li>
                            <li className="nav-menu__list-item">
                                <a href="#about">About</a>
                            </li>
                        </ul>
                        <div className="nav-menu__author">
                            <a href={"#login"}>Login</a>
                            <a className="register" href={"#register"}>Register</a>
                        </div>
                    </div>
                </section>
                <button className="mobil-menu-icon" onClick={() => setIsOpen(true)}>
                    <img src="/images/icon-menu.svg" alt="Hamburger menu icon" loading="lazy" />
                </button>
            </nav>
        </header>
        <main>
            <section className="hero container">
                <picture className="hero__image">
                    <source media="(min-width: 991px)" srcSet="/images/image-hero-desktop.png" />
                    <img src="/images/image-hero-mobile.png" alt="Hero section image" loading="lazy"/>
                </picture>
                <article className="hero__content">
                    <h1>Make remote work</h1>
                    <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                    <a href="#learnmore">Learn more</a>
                    <section className="brand-container">
                        <ul className="brand-container__list">
                            {
                                brandLogos.map(logo => (
                                    <li>
                                        <a href="#"><img src={logo.src} alt={logo.label} loading="lazy" title={logo.label}/></a>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                </article>
            </section>
        </main>
    </>
  )
}

export default App
