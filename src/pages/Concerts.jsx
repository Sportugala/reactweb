import React from "react";
import EventCard from "../components/EventCard";
import Container from "../components/Container";
import { DownArrow } from "../assets/icons/DropdownIcon";
import { useTranslation } from "react-i18next";
import Reviews from "../components/Reviews";
import CallToAction from "../components/CallToAction";

const Concerts = () => {
  const { t } = useTranslation();

  const events = [
    {
      date: { day: 30, month: "NOV", weekDay: "SÁBADO" },
      title: "EL AÑO DEL CAIMAN + STILLBLIND + ASTTER",
      description:
        "Concierto con tres bandas que darán lo mejor de si mismas. Si te encuentras en Murcia, no te puedes perder este conciertazo. ¡La parte musical te sorprenderá! El Año del Caiman llega [...]",
      imageUrl:
        "https://www.salaspectrum.com/wp-content/uploads/2024/11/elAnoCaiman.jpg"
    },
    {
      date: { day: 29, month: "NOV", weekDay: "VIERNES" },
      title: "VELADURA + SHEKEN",
      description:
        "Una noche de Rock, Veladura hará presentación de disco. Su música sintetiza el sonido clásico del rock español con el rock progresivo. A la parte musical se suma una lírica […]",
      imageUrl:
        "https://www.salaspectrum.com/wp-content/uploads/2024/11/veladura-1024x1024.jpg"
    },
    {
      date: { day: 23, month: "NOV", weekDay: "SÁBADO" },
      title: "BOCANADA",
      description:
        "¡Sábado 23 de Noviembre de 2024 apertura a las 21:00h! PRECIOS: Anticipada: 12€ + gastos de gestión o Taquilla: 16€ ¡COMPRA TUS ENTRADAS AQUÍ!",
      imageUrl:
        "https://www.salaspectrum.com/wp-content/uploads/2024/11/Bocanada-Segundo-plato-INDIVIDUALES-cuadrado-murcia-1024x1024.jpg"
    },
    {
      date: { day: 22, month: "NOV", weekDay: "VIERNES" },
      title: "LA ESENCIA DE CHUKY",
      description:
        "Concierto Benéfico: 'La Esencia de Chuky' Con El Chuky de Cieza. ¡Viernes 22 de Noviembre de 2024 apertura a las 22:00h! Después de haber dejado huella en festivales como Viña […]",
      imageUrl:
        "https://www.salaspectrum.com/wp-content/uploads/2024/11/cartel-Chucky--724x1024.jpg"
    },
    {
      date: { day: 15, month: "NOV", weekDay: "VIERNES" },
      title: "ALAE NOCTIS + IN DREAMS + DYSFORIA",
      description:
        "Tras el concierto celebrado en mayo en Málaga, gracias al buen rollo y afinidad generada entre las bandas, los sevillanos Dysforia devuelven la visita a los murcianos InDreams. Y a […]",
      imageUrl:
        "https://www.salaspectrum.com/wp-content/uploads/2024/11/aleanoctis-576x1024.jpg"
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
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10">
          <Container>
            <div className="space-y-8 pt-12">
              <h1 className="text-[60px] font-metal text-[#c0bfa5] text-center mb-8">
                {t("concerts.upcomingEvents")}
              </h1>
              <section className="bg-[#42424266] py-12 rounded-xl">
                <h2 className="text-3xl font-josefin text-white text-center">
                  {t("concerts.noUpcomingEvents")}
                </h2>
              </section>
            </div>
          </Container>
        </div>
      </div>

      <Container>
        <div className="space-y-8">
          <div className="flex justify-center">
            <DownArrow />
          </div>
          <h2 className="text-[32px] font-josefin text-center font-bold text-white mb-4">
            {t("concerts.pastEvents")}
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

export default Concerts;
