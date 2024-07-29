import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const AdBanner = () => {
  const ads = [
    {
      id: 1,
      title: "Ad 1",
      description: "This is the first ad",
      image: "https://via.placeholder.com/800x400",
    },
    {
      id: 2,
      title: "Ad 2",
      description: "This is the second ad",
      image: "https://via.placeholder.com/800x400",
    },
    {
      id: 3,
      title: "Ad 3",
      description: "This is the third ad",
      image: "https://via.placeholder.com/800x400", // URL de imagen válida
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
      <div className="flex flex-col md:gap-12 gap-6 md:justify-center  md:flex-row-reverse items-center md:mb-8">

        <div className="flex gap-2 justify-center bg-transparent w-full md:w-auto ">
        <div className="ad-banner z-0 md:w-80 md:pt-12 m-0 w-full h-full bg-transparent ">
            <Slider {...settings} className="rounded-lg w-full relative">
              {ads.map((ad) => (
                <div key={ad.id} className="relative bg-red">
                  <img
                    src="https://staticg.sportskeeda.com/editor/2022/10/72d24-16655552144135-1920.jpg"  alt={ad.title}
                    className="ad-image md:w-full md:h-96 object-cover h-80 w-full md:rounded-lg "
                  />

                  <div className="carousel-caption absolute bottom-0 bg-black bg-opacity-50 w-full md:rounded-b-lg md:rounded-l-lg text-white p-2">
                    <h3 className="text-lg font-bold">{ad.title}</h3>
                    <p className="text-sm">{ad.description}</p>
                  </div>

                </div>
              ))}
            </Slider>
          </div>


           <div className="ad-banner z-0 md:w-80 md:pt-12 m-0 w-full h-full bg-transparent hidden md:block mt-16 ">
            <Slider {...settings} className="rounded-lg w-full relative">
              {ads.map((ad) => (
                <div key={ad.id} className="relative bg-red">
                  <img
                    src="https://staticg.sportskeeda.com/editor/2022/10/72d24-16655552144135-1920.jpg"  alt={ad.title}
                    className="ad-image md:w-full md:h-96 object-cover h-80 w-full md:rounded-lg "
                  />

                  <div className="carousel-caption absolute bottom-0 bg-black bg-opacity-50 w-full md:rounded-b-lg md:rounded-l-lg text-white p-2">
                    <h3 className="text-lg font-bold">{ad.title}</h3>
                    <p className="text-sm">{ad.description}</p>
                  </div>

                </div>
              ))}
            </Slider>
          </div>


       
        </div>

        <div className=" p-4 w-full md:h-full md:w-4/12">
          <div>
            <h1 className="text-gray-600 font-bold text-3xl md:text-5xl">
              Bienvenido a Bisutería Jacky
            </h1>
            <p className=" mb-2 mt-2 ">
              Ofrecemos una variedad de piezas elegantes y modernas, perfectas
              para cualquier ocasión, desde eventos formales hasta el día a día.
            </p>
          </div>

          <div className="w-full mt-5 flex gap-2">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => (window.location.href = "/productos")}
            >
              Productos
            </button>
            <button
              className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              onClick={() => (window.location.href = "/novedades")}
            >
              Recibe Novedades
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdBanner;

{
  /*     <div className="">
<ul className="flex flex-wrap gap-4 text-sm py-2 " >
  <li className="bg-slate-400 p-1.5 rounded-xl">
    <a href="#" className="text-black font-semibold">🎉 Nuevos productos</a>
  </li>
  <li className="bg-slate-400 p-1.5 rounded-xl">
    <a href="#" className="text-black font-semibold">🔥 Promociones actuales</a>
  </li>
  <li className="bg-slate-400 p-1.5 rounded-xl">
    <a href="#" className="text-black font-semibold">💌 Suscríbete a nuestro boletín</a>
  </li>
  <li className="bg-slate-400 p-1.5 rounded-xl">
    <a href="#" className="text-black font-semibold">📅 Próximos eventos</a>
  </li>
  <li className="bg-slate-400 p-1.5 rounded-xl">
    <a href="#" className="text-black font-semibold">⭐ Opiniones de clientes</a>
  </li>
</ul>
</div> */
}
