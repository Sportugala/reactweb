import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

const Navbar = () => {
  const { changeLanguage } = useLanguage();
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleLanguageMenu = () => {
    setIsLangOpen(!isLangOpen);
  };

  const _changeLanguage = (lang) => {
    changeLanguage(lang);
    setIsLangOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const LanguageSelector = () => (
    <div className="flex-none relative" ref={langRef}>
      <button
        onClick={toggleLanguageMenu}
        className="p-2 rounded-lg text-white flex items-center gap-2 transition-all duration-300 group"
        aria-label="Select language"
      >
        <div className="flex items-center gap-2">
          <img
            src={`https://www.salaspectrum.com/wp-content/plugins/gtranslate/flags/svg/${i18n.language}.svg`}
            alt={`${i18n.language} flag`}
            className="w-5 h-5"
          />
          <span className="text-sm uppercase">{i18n.language}</span>
          <ChevronDown
            size={16}
            className={`transform transition-all duration-300 ease-in-out rotate-180 ${
              isLangOpen ? "rotate-0" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`absolute right-0 mt-2 overflow-hidden transition-all duration-300 ease-in-out transform ${
          isLangOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
      >
        <button
          onClick={() => _changeLanguage(i18n.language === "es" ? "en" : "es")}
          className="flex items-center justify-center gap-2 p-2 bg-black/90 backdrop-blur-sm hover:bg-[#ffd700] hover:text-black text-white transition-colors duration-200 min-w-[80px]"
        >
          <img
            src={`https://www.salaspectrum.com/wp-content/plugins/gtranslate/flags/svg/${
              i18n.language === "es" ? "en" : "es"
            }.svg`}
            alt={`${i18n.language === "es" ? "English" : "Español"} flag`}
            className="w-5 h-5"
          />
          <span className="text-xs">
            {i18n.language === "es" ? "English" : "Spanish"}
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <nav
      className={`bg-black h-[100px] sticky top-0 z-[999] transition-all duration-300 ${
        hasScrolled
          ? "shadow-[0_4px_15px_0_rgba(255,215,0,0.2)] bg-black/80 backdrop-blur-sm"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="lg:hidden flex-none">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-500 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="flex-none lg:flex-none absolute left-1/2 transform -translate-x-1/2 lg:relative lg:left-0 lg:transform-none">
            <NavLink to="/" className="flex items-center">
              <img
                src="https://www.salaspectrum.com/wp-content/uploads/2023/08/LOGO-SPECTRUM-BLANCO.svg"
                alt="Spectrum Logo"
                className="h-full w-[180px]"
              />
            </NavLink>
          </div>

          <div className="hidden lg:flex-1 lg:flex lg:items-center lg:justify-center lg:space-x-8">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-white ${
                  isActive ? "text-yellow-500" : "hover:text-[#999999FA]"
                } font-metal text-xl`
              }
            >
              {t("nav.home")}
            </NavLink>
            <span className="text-white">|</span>
            <NavLink
              to="/conciertos"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `text-white ${
                  isActive ? "text-yellow-500" : "hover:text-[#999999FA]"
                } font-metal text-xl`
              }
            >
              {t("nav.concerts")}
            </NavLink>
            <span className="text-white">|</span>
            <NavLink
              to="/discordia"
              className={({ isActive }) =>
                `text-white ${
                  isActive ? "text-yellow-500" : "hover:text-[#999999FA]"
                } font-metal text-xl`
              }
            >
              {t("nav.discord")}
            </NavLink>
            <span className="text-white">|</span>
            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                `text-white ${
                  isActive ? "text-yellow-500" : "hover:text-[#999999FA]"
                } font-metal text-xl`
              }
            >
              {t("nav.contact")}
            </NavLink>
          </div>

          <LanguageSelector />
        </div>

        <div
          className={`lg:hidden absolute top-20 left-0 right-0 bg-white backdrop-blur-sm transition-all duration-300 ${
            isMenuOpen
              ? "max-h-[400px] border-opacity-100 opacity-100"
              : "max-h-0 border-opacity-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col">
            <NavLink
              to="/"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-white bg-[#3f444b]" : "text-[#3f444b]"
                } font-josefin font-medium text-lg transition-colors duration-200 px-4 py-2 text-left  hover:bg-[#3f444b] hover:text-white`
              }
            >
              {t("nav.home")}
            </NavLink>
            <NavLink
              to="/conciertos"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={({ isActive }) =>
                ` ${
                  isActive ? "text-white bg-[#3f444b]" : "text-[#3f444b]"
                } font-josefin font-medium text-lg transition-colors duration-200 px-4 py-2 text-left text-[#3f444b] hover:bg-[#3f444b] hover:text-white`
              }
            >
              {t("nav.concerts")}
            </NavLink>
            <NavLink
              to="/discordia"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={({ isActive }) =>
                `${
                  isActive ? "text-white bg-[#3f444b]" : "text-[#3f444b]"
                } font-josefin font-medium text-lg transition-colors duration-200 px-4 py-2 text-left  hover:bg-[#3f444b] hover:text-white`
              }
            >
              {t("nav.discord")}
            </NavLink>
            <NavLink
              to="/contacto"
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={({ isActive }) =>
                `${
                  isActive ? "text-white bg-[#3f444b]" : "text-[#3f444b]"
                } font-josefin font-medium text-lg transition-colors duration-200 px-4 py-2 text-left  hover:bg-[#3f444b] hover:text-white`
              }
            >
              {t("nav.contact")}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
