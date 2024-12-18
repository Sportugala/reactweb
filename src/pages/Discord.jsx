import React from "react";
import EventCard from "../components/EventCard";
import Container from "../components/Container";
import { DownArrow } from "../assets/icons/DropdownIcon";
import { useTranslation } from "react-i18next";
import Reviews from "../components/Reviews";
import CallToAction from "../components/CallToAction";

const Discord = () => {
  const { t } = useTranslation();

  const events = [
    {
      date: { day: 12, month: "OCT", weekDay: "SÁBADO" },
      title: "KONTAKT 2",
      description:
        "¡Sábado 12 de octubre de 2024 desde las 02:00! PRECIOS: Anticipada: 5€ Kontakt vuelve a Spectrum mas cargado que antes, y los encargados de haceros bailar esa noche son: @b.li.x: […]",
      imageUrl:
        "https://www.salaspectrum.com/wp-content/uploads/2024/10/kontakt.jpg"
    }
  ];

  return (
    <>
      <div
        className="relative bg-center mb-8"
        style={{
          backgroundImage: "url('/images/fondo_fuego.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10">
          <div className="space-y-8">
            <div className="relative h-64">
              <img
                src="https://www.salaspectrum.com/wp-content/uploads/2024/10/IMG_2420-scaled.jpg"
                alt="DJ Setup"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                <img src="https://www.salaspectrum.com/wp-content/uploads/2024/10/Discordia-1024x676-1.png" />
              </div>
            </div>
            <Container>
              <section className="bg-[#42424266] py-12 rounded-xl">
                <h2 className="text-3xl font-josefin text-white text-center">
                  {t("discord.noUpcomingEvents")}
                </h2>
              </section>
            </Container>
          </div>
        </div>
      </div>

      <Container>
        <div className="space-y-8">
          <div className="flex justify-center">
            <DownArrow />
          </div>
          <h2 className="text-[32px] font-josefin text-center font-bold text-white mb-4">
            {t("discord.pastEvents")}
          </h2>
          <div className="bg-[#1a1a1a] p-8 space-y-8 rounded-xl">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </Container>
      <Reviews />
      <CallToAction />
    </>
  );
};

export default Discord;
