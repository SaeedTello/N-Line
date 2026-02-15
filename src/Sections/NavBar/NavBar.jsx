import React, { useState, useEffect } from "react";
import "./NavBar.css";
import LogoNav from "../../assets/img/Logo/white.webp";

// استيراد جميع صور الخلفيات
import homeBg from "../../assets/img/Home/PG/PG_NavBar.webp";
import clientsBg from "../../assets/img/Lebanon_Clients/1.webp";
import servicesBg from "../../assets/img/Services/1.webp";
import contactsBg from "../../assets/img/Contact_Us/1.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getCountriesList } from "../../data/clientsData";

// خريطة الصفحات والصور والألوان
const backgroundImages = {
  "/": homeBg,
  home: homeBg,
  "/about": "#BA8F68",
  about: "#BA8F68",
  "/clients": clientsBg,
  clients: clientsBg,
  "/services": servicesBg,
  services: servicesBg,
  "/events": "#BA8F68",
  events: "#BA8F68",
  "/news": "#BA8F68",
  news: "#BA8F68",
  "/contacts": contactsBg,
  contacts: contactsBg,
};

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState(homeBg);
  const [clientsDropdownOpen, setClientsDropdownOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // تحميل قائمة الدول
  useEffect(() => {
    const countriesList = getCountriesList();
    setCountries(countriesList);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // تحديث الصورة بناءً على المسار الحالي
  useEffect(() => {
    const pathname = location.pathname;

    // استخراج المسار الرئيسي (مثل "news" من "/news/1")
    const pathSegments = pathname.split("/").filter(Boolean);
    const mainRoute = pathSegments[0];

    // البحث عن الصورة المناسبة
    let selectedImage = homeBg;

    if (pathname === "/") {
      selectedImage = backgroundImages["/"];
    } else if (backgroundImages["/" + mainRoute]) {
      selectedImage = backgroundImages["/" + mainRoute];
    } else if (backgroundImages[mainRoute]) {
      selectedImage = backgroundImages[mainRoute];
    }

    setBackgroundImage(selectedImage);
  }, [location.pathname]);

  const links = [
    ["/", "HOME"],
    ["about", "ABOUT"],
    ["clients", "CLIENTS"],
    ["services", "SERVICES"],
    ["events", "EVENTS"],
    ["news", "NEWS"],
    ["contacts", "CONTACTS"],
  ];

  const getActiveClass = (path) => {
    if (path === "/" && location.pathname === "/") return "active";
    if (path !== "/" && location.pathname === "/" + path) return "active";
    return "";
  };

  const handleClientSelect = (countryKey) => {
    navigate(`/clients?country=${countryKey}`);
    setClientsDropdownOpen(false);
    setOpen(false);
  };

  return (
    <nav className="site-navbar">
      <div className="nav-container">
        <div>
          <img className="LogoNavbar" src={LogoNav} alt="" />
        </div>
        <div className="navBar-button">
          <ul className={`nav-links ${open ? "open" : ""}`}>
            {links.map(([path, label]) => {
              if (label === "CLIENTS") {
                return (
                  <li key={label} className="dropdown-container">
                    <button
                      className={`dropdown-toggle ${
                        location.pathname === "/clients" ? "active" : ""
                      }`}
                      onClick={() =>
                        setClientsDropdownOpen(!clientsDropdownOpen)
                      }
                    >
                      {label}
                      <span className="dropdown-arrow">▼</span>
                    </button>
                    {clientsDropdownOpen && (
                      <div className="dropdown-menu">
                        {countries.map((country) => (
                          <button
                            key={country.key}
                            className="dropdown-item"
                            onClick={() => handleClientSelect(country.key)}
                          >
                            {country.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={label}>
                  <Link
                    to={path}
                    className={getActiveClass(path)}
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="nav-actions">
          <form className="nav-search" onSubmit={(e) => e.preventDefault()}>
            <input type="search" placeholder="Search..." aria-label="Search" />
            <button type="submit" aria-label="Search button">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((s) => !s)}
        >
          <i className="fa-solid fa-bars text-white"></i>
        </button>
      </div>
      <div className="navbar-image-wrapper">
        {typeof backgroundImage === "string" &&
        backgroundImage.startsWith("#") ? (
          <div
            className="navbar-bg-color"
            style={{ backgroundColor: backgroundImage }}
          />
        ) : (
          <img
            src={backgroundImage}
            className="pgNavbar w-100"
            alt="PG Navbar Background"
          />
        )}
      </div>
    </nav>
  );
}
