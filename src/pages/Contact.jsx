import React from "react";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import Container from "../components/Container";
import { useTranslation } from "react-i18next";
import Reviews from "../components/Reviews";
import CallToAction from "../components/CallToAction";

const Contact = () => {
  const { t } = useTranslation();

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/salaspectrum", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:salaspectrum@gmail.com";
  };

  return (
    <>
      <div
        className="relative min-h-screen bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/fondo_fuego.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 w-full">
          <Container>
            <div className="bg-[#42424266] space-y-8">
              <div className=" p-8 rounded-lg">
                <h1 className="text-[60px] font-metal text-white">
                  {t("contact.title")}
                </h1>
                <p className="text-xl text-white mb-8">
                  {t("contact.subtitle")}
                  <br />
                  {t("contact.welcome")}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>{t("contact.phone")}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Instagram className="w-5 h-5 mr-3" />
                    <span
                      onClick={handleInstagramClick}
                      className="cursor-pointer hover:text-white border-b border-gray-300 hover:border-white transition-colors"
                    >
                      {t("contact.instagram")}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-3" />
                    <span
                      onClick={handleEmailClick}
                      className="cursor-pointer hover:text-white border-b border-gray-300 hover:border-white transition-colors"
                    >
                      {t("contact.email")}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span>{t("contact.address")}</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.476196216139!2d-1.1319823!3d37.989138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU5JzIwLjkiTiAxwrAwNyc0Ny4yIlc!5e0!3m2!1ses!2ses!4v1709901234567!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Reviews />
      <CallToAction />
    </>
  );
};

export default Contact;
