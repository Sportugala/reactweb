import React from "react";
import { Instagram, MapPin } from "lucide-react";
import Container from "./Container";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#212121]">
      <Container>
        <div className="flex flex-col p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center lg:text-left">
              <img
                src="https://www.salaspectrum.com/wp-content/uploads/2023/08/LOGO-SPECTRUM-BLANCO.svg"
                alt="Spectrum"
                className="h-12 mb-4 mx-auto lg:mx-0"
              />
              <p className="text-sm text-white font-josefin font-light">
                {t("footer.description")}
              </p>
            </div>

            {/* Redes sociales - visible en móvil arriba */}
            <div className="flex justify-center lg:hidden space-x-4">
              <p className="text-lg font-metal text-white">
                {t("footer.followUs")}
              </p>
              <a
                href="https://www.instagram.com/salaspectrum/?hl=en"
                className="text-white hover:text-white"
              >
                <Instagram className="w-6 h-6 text-white hover:text-[#ffd700]" />
              </a>
              <a
                href="https://goo.gl/maps/pwhXCFShkNd4QYsv5"
                className="text-white hover:text-white"
              >
                <MapPin className="w-6 h-6 hover:text-[#ffd700]" color="red" />
              </a>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4 font-metal">
                {t("footer.contactInfo")}
              </h3>
              <div className="space-y-2 text-sm text-white font-josefin">
                <p className="font-light">
                  {t("footer.address")}
                  <br />
                  {t("footer.addressText")}
                </p>
                <p className="font-light">
                  {t("footer.phone")}{" "}
                  <a
                    href="tel:669546444"
                    className="hover:text-yellow-500 transition-colors duration-300"
                  >
                    669 546 444
                  </a>
                </p>
                <p className="font-light">
                  {t("footer.email")}{" "}
                  <a
                    href="mailto:salaspectrum@gmail.com"
                    className="cursor-pointer hover:text-yellow-500 border-b border-gray-300 hover:border-yellow-500 transition-colors duration-300 font-light"
                  >
                    salaspectrum@gmail.com
                  </a>
                </p>
                <a
                  href="https://goo.gl/maps/pwhXCFShkNd4QYsv5"
                  className="inline-block hover:text-yellow-500 transition-colors duration-300 font-light"
                >
                  {t("footer.howToGet")}
                </a>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4 font-metal">
                {t("footer.legal")}
              </h3>
              <div className="space-y-2 text-sm text-white font-josefin">
                <a
                  href="#"
                  className="block hover:text-yellow-500 transition-colors duration-300 font-light"
                >
                  {t("footer.legalLinks.terms")}
                </a>
                <a
                  href="#"
                  className="block hover:text-yellow-500 transition-colors duration-300 font-light"
                >
                  {t("footer.legalLinks.privacy")}
                </a>
                <a
                  href="#"
                  className="block hover:text-yellow-500 transition-colors duration-300 font-light"
                >
                  {t("footer.legalLinks.cookies")}
                </a>
                <a
                  href="#"
                  className="block hover:text-yellow-500 transition-colors duration-300 font-light"
                >
                  {t("footer.legalLinks.accessibility")}
                </a>
              </div>
            </div>
          </div>

          {/* Redes sociales - visible en desktop abajo */}
          <div className="hidden lg:flex justify-start space-x-4 mt-8">
            <p className="text-lg font-metal text-white">
              {t("footer.followUs")}
            </p>
            <a
              href="https://www.instagram.com/salaspectrum/?hl=en"
              className="text-white hover:text-white"
            >
              <Instagram className="w-6 h-6 text-white hover:text-[#ffd700]" />
            </a>
            <a
              href="https://goo.gl/maps/pwhXCFShkNd4QYsv5"
              className="text-white hover:text-white"
            >
              <MapPin className="w-6 h-6 hover:text-[#ffd700]" color="red" />
            </a>
          </div>
        </div>
      </Container>

      <div className="bg-white">
        <Container>
          <div className="flex justify-center">
            <img
              src="https://www.salaspectrum.com/wp-content/uploads/2023/08/Kid-digital-info.png"
              className="object-cover max-w-full h-[125px]"
              alt="Kid digital info"
            />
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
