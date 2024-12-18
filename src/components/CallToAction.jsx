import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-black text-center max-w-[1140px] mx-auto">
      <div className="max-w-[1140px] mx-auto px-4">
        <h2
          className="text-[60px] font-metal text-white mb-4"
          style={{
            letterSpacing: "2px",
            lineHeight: 1
          }}
        >
          {t("cta.title")}
        </h2>
        <p className="text-white mb-8 max-w-2xl mx-auto font-josefin font-light">
          {t("cta.description")}
        </p>
        <button
          onClick={() => navigate("/contacto")}
          className="border-[1px] border-[#ffd700] text-[#ffd700] font-medium py-3 px-4 transition duration-300 font-josefin text-sm hover:bg-[#ffd700] hover:text-black"
        >
          {t("cta.moreInfo")}
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
