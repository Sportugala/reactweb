import React from "react";
import ImageSlider from "../components/ImageSlider";
import { useTranslation } from "react-i18next";
import Reviews from "../components/Reviews";
import CallToAction from "../components/CallToAction";

const Home = () => {
  const { t } = useTranslation();

  const venueImages = [
    {
      url: "https://www.salaspectrum.com/wp-content/uploads/2023/10/378822034_997992008216965_7582380744367387253_n.png",
      alt: "Venue 1"
    },
    {
      url: "https://www.salaspectrum.com/wp-content/uploads/2023/10/380886719_1002534824429350_5036653470660078112_n.png",
      alt: "Venue 2"
    },
    {
      url: "https://www.salaspectrum.com/wp-content/uploads/2023/10/376416604_994361628580003_7450967296438638868_n.png",
      alt: "Venue 3"
    },
    {
      url: "https://www.salaspectrum.com/wp-content/uploads/2023/10/375069094_994361611913338_6931610561117187279_n.png",
      alt: "Venue 4"
    },
    {
      url: "https://www.salaspectrum.com/wp-content/uploads/2023/10/375137615_994361668579999_7483809535866737499_n.png",
      alt: "Venue 5"
    },
    {
      url: "https://www.salaspectrum.com/wp-content/uploads/2023/10/380661076_1002534831096016_7683699503729645874_n.png",
      alt: "Venue 6"
    },
    {
      url: "https://www.salaspectrum.com/wp-content/uploads/2023/10/380873256_1002534827762683_2356579958872126785_n.png",
      alt: "Venue 7"
    },
    {
      url: "https://www.salaspectrum.com/wp-content/uploads/2023/10/380694683_1002534817762684_3547847254037080111_n.png",
      alt: "Venue 8"
    }
  ];

  return (
    <>
      <div
        className="relative bg-center"
        style={{
          backgroundImage: "url('/images/fondo_fuego.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <div className="max-w-[1140px] mx-auto px-4 space-y-16 pb-16">
            {/* Hero Section */}
            <section className="relative pt-8">
              <h1 className="text-[60px] font-metal text-white text-center mb-8">
                {t("home.upcomingEvents")}
              </h1>
              <div className="flex justify-center">
                <img
                  src="/images/main_banner.jpeg"
                  className="object-cover rounded-xl"
                />
              </div>
            </section>

            {/* Calendar Section */}
            <section className="bg-[#42424266] p-8 rounded-xl max-w-[800px] mx-auto">
              <h2 className="text-3xl font-josefin text-white text-center mb-8 uppercase">
                {t("home.noEvents")}
              </h2>
              <div className="text-center">
                <button className="bg-[#ffd700] hover:scale-90 transition-all duration-300 text-xs font-josefin text-black font-semibold py-2 px-6 rounded">
                  {t("home.viewAllEvents")}
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="bg-black">
        <div className="max-w-[1140px] mx-auto px-4 space-y-16 py-16">
          {/* Venue Section */}
          <section className="flex lg:flex-row flex-col lg:space-x-12 space-y-8 lg:space-y-0 items-center">
            <div className="lg:w-[30%] w-full">
              <h2 className="text-4xl font-metal text-white text-center mb-4">
                {t("home.venue.title")}
              </h2>
              <p className="text-white text-sm font-light text-justify font-josefin max-w-[400px] mx-auto lg:mx-0">
                {t("home.venue.description")}
              </p>
            </div>
            <ImageSlider images={venueImages} />
          </section>

          {/* Call to Action */}
          <section id="cards" className="text-center space-y-12">
            <h2 className="text-[70px] font-metal text-white leading-tight tracking-wider">
              {t("home.callToAction")}
            </h2>
            <div className="flex lg:flex-row flex-col justify-center lg:items-stretch items-center gap-12">
              <div className="p-8 rounded-xl w-80 bg-gradient-to-b from-[#FF00009E] to-black flex flex-col border border-[#FF00009E]">
                <img
                  src="https://www.salaspectrum.com/wp-content/uploads/2023/08/LOGO-SPECTRUM-BLANCO.svg"
                  alt="Spectrum"
                  className="w-full mb-6"
                />
                <p className="text-white text-lg font-metal mb-4">
                  {t("home.spectrum.subtitle")}
                </p>
                <p className="text-xs text-justify text-white font-josefin font-light flex-grow">
                  {t("home.spectrum.description")}
                </p>
              </div>
              <div className="p-8 rounded-lg w-80 bg-gradient-to-b from-[#EA00FF8C] to-black flex flex-col border border-[#EA00FF8C]">
                <img
                  src="https://www.salaspectrum.com/wp-content/uploads/2023/09/Discordia-1024x676.png"
                  alt="Discordia"
                  className="w-full mb-6"
                />
                <p className="text-white text-lg font-metal">
                  {t("home.discordia.title")}
                </p>
              </div>
            </div>
          </section>
        </div>
        {/* New Two Column Section */}
        <section className="flex lg:flex-row flex-col px-4 lg:h-[450px]">
          <div className="lg:w-1/2 flex flex-col justify-center gap-4 items-center lg:bg-[#1b1b1b] lg:px-24 py-8 lg:py-0">
            <div>
              <img
                src="https://www.salaspectrum.com/wp-content/uploads/2023/08/LOGO-SPECTRUM-BLANCO.svg"
                alt="Spectrum Logo"
                className="h-full w-[250px]"
              />
            </div>
            <p className="text-white text-center font-josefin font-light">
              {t("home.footer.culturalSpace")}
            </p>
            <p className="text-white text-center font-josefin font-light">
              {t("home.footer.collaboration")}
            </p>
            <p className="text-white text-center font-metal text-xl">
              {t("home.footer.proud")}
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/images/escenario.jpg"
              alt="Sala Spectrum"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </div>
      <Reviews />
      <CallToAction />
    </>
  );
};

export default Home;
