import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../assets/style/global.css";
//import Logo from ".../assets/images/Logo_B.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
  faArrowRight,
  faRing,
} from "@fortawesome/free-solid-svg-icons";
import ButtonHover from "./button";
const AdBanner = () => {
  const ads = [
    {
      id: 1,
      title: "Ad 1",
      description: "This is the first ad",
      image: "",
    },
    {
      id: 2,
      title: "Ad 2",
      description: "This is the second ad",
      image: "https://via.placeholder.com/800x400",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <div className="flex flex-col md:gap-12 gap-6 md:justify-center  md:flex-row-reverse items-center md:py-5 rounded-md">
        <div className="flex gap-2 justify-center items-center flex-wrap bg-transparent w-full md:flex-nowrap md:w-full">
          <div className="ad-banner flex-1 z-0 md:w-96 m-0 w-full h-full bg-transparent flex md:flex-nowrap ">
            <Slider {...settings} className=" md:w-1/2 w-full relative">
              {ads.map((ad) => (
                <div key={ad.id} className="relative bg-red">
                  <img
                    src={
                      "https://staticg.sportskeeda.com/editor/2022/10/72d24-16655552144135-1920.jpg"
                    }
                    alt={ad.title}
                    className="ad-image md:w-full md:h-96 object-cover h-80 w-full "
                  />

                  <div className="carousel-caption md:absolute top-8 left-2  w-4/6 md:rounded-b-lg hidden sm:block  md:rounded-l-lg text-white p-2">
                    <div>
                      <h1 className="text-blue-700 font-black text-3xl md:text-5xl">
                        ✨ Bisutería Jacky ✨
                      </h1>
                      <p className="mb-2 mt-2 text-lg md:text-2xl">
                        Estilo y elegancia. ¡Descubre nuestras novedades!
                      </p>
                    </div>
                    <div className="w-full mt-5 flex gap-2">
                      <button
                        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                        onClick={() => (window.location.href = "/productos")}
                      >
                        Ver Productos
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>

            <Slider {...settings} className=" md:w-1/2 relative md:block hidden">
              {ads.map((ad) => (
                <div key={ad.id} className="relative bg-red">
                  <img
                    src={
                      "https://staticg.sportskeeda.com/editor/2022/10/72d24-16655552144135-1920.jpg"
                    }
                    alt={ad.title}
                    className="ad-image md:w-full md:h-96 object-cover h-80 w-full "
                  />

                  
                </div>
              ))}
            </Slider>
          </div>

          <div className=" p-4 w-full md:h-full md:w-4/12 sm:hidden">
            <div>
              <h1 className="text-purple-700 font-extrabold text-4xl italic md:text-6xl">
                ✨ Descubre Bisutería Jacky ✨
              </h1>
              <p className="mb-2 mt-2 text-lg md:text-2xl">
                Piezas únicas para cada ocasión. ¡Obtén lo más nuevo ahora!
              </p>
            </div>
            <div className="w-full mt-5 gap-2">
              <ButtonHover
                text={"Ver Productos"}
                icon={<FontAwesomeIcon icon={faRing} />}
                onClick={() => (window.location.href = "/productos")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdBanner;
