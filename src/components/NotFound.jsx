import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-start relative overflow-hidden"
      style={{
        backgroundImage: `url('https://www.salaspectrum.com/wp-content/uploads/2023/08/pexels-vishnu-r-nair-1105666-1-e1697207191998.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 text-center px-4">
        <h1
          className="font-bold font-josefin mb-4"
          style={{
            fontSize: "25vw",
            color: "#FFD70042"
          }}
        >
          404
        </h1>

        <p className="text-white text-center text-lg md:text-xl max-w-xl mx-auto mb-6 -mt-48 leading-relaxed font-josefin font-light">
          La página que estás buscando no se encuentra en nuestro sitio web. No
          te preocupes, puedes explorar otras secciones y encontrar lo que
          necesitas.
        </p>

        <Link
          to="/"
          className="border-[1px] border-[#ffd700] text-[#ffd700] font-medium py-3 px-4 transition duration-300 font-josefin text-sm hover:bg-[#ffd700] hover:text-black"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
